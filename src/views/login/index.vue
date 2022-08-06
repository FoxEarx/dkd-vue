<template>
  <div class="login_box">
    <div class="login_main">
      <div class="logo">
        <img src="../../assets/login_img/logo.595745bd.png" alt="" />
      </div>
      <div class="login_form">
        <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm">
          <el-form-item prop="loginAccount">
            <el-input
              v-model="loginForm.loginAccount"
              prefix-icon="el-icon-mobile-phone"
              placeholder="请输入账号"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="loginpassword">
            <el-input
              prefix-icon="el-icon-lock"
              show-password
              placeholder="请输入密码"
              v-model="loginForm.loginpassword"
            ></el-input>
          </el-form-item>
          <el-form-item prop="loginValidation">
            <el-input
              class="yzm"
              prefix-icon="iconfont icon-anquan"
              placeholder="请输入验证码"
              v-model="loginForm.loginValidation"
            >
            </el-input>
            <img :src="imgURL" alt="" class="yzmwz" @click="loginValidation" />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="login"
              :plain="true"
              :loading="loading"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginValidation } from '@/api/user.js'

export default {
  data() {
    return {
      loginForm: {
        loginAccount: 'admin',
        loginpassword: 'admin',
        loginValidation: '',
        clientToken: '',
      },
      loginFormRules: {
        loginAccount: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        loginpassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        loginValidation: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
      },
      imgURL: '',
      loading: false,
    }
  },

  created() {
    this.loginValidation()
  },

  methods: {
    async login() {
      this.loading = true
      try {
        await this.$refs.loginForm.validate()
        await this.$store.dispatch('user/getToken', this.loginForm)
        this.$router.push('/')
        this.$message.success('登录成功')
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },
    async loginValidation() {
      this.loginForm.clientToken = Math.round(Math.random() * 9000 + 1000)
      await this.$store.commit(
        'user/setclientToken',
        this.loginForm.clientToken,
      )
      const res = await loginValidation(this.loginForm.clientToken)
      let url =
        'data:image/png;base64,' +
        btoa(
          new Uint8Array(res).reduce((data, byte) => {
            return data + String.fromCharCode(byte)
          }, ''),
        )
      this.imgURL = url
    },
  },
}
</script>

<style scoped lang="scss">
.login_box {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../../assets/login_img/background.be4fae7d.png') no-repeat;
  background-size: cover;
  .login_main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 518px;
    height: 388px;
    background-color: #fff;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 76px 35px 0;
    .logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -50px;
      width: 96px;
      height: 96px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login_form {
      width: 448px;
      height: 280px;
      ::v-deep .el-input__inner {
        height: 52px;
      }
      ::v-deep .el-form-item__content {
        display: flex;
        caret-color: #999999;
      }
      .yzm {
        flex: 2;
      }
      .yzmwz {
        height: 52px;
        flex: 1;
        border: 1px solid #85a06a;
      }
      ::v-deep .el-input__prefix {
        font-size: 20px;
        margin-top: 3px;
      }
      ::v-deep .el-input__icon {
        font-size: 20px;
      }
      .el-button--primary {
        background-color: #6578ed;
        width: 100%;
        height: 52px;
        border-color: #6578ed;
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
