<template>
  <div class="navbar">
    <img src="@/assets/login_img/logo.png" alt="" class="logo" />
    <div class="right-menu">
      <div class="avatar-container">
        <div class="avatar-wrapper">
          <img
            :src="$store.state.user.userInfo.image"
            class="user-avatar"
            v-imgError="defaultImg"
          />
          <span class="xiaotubiao"
            >欢迎您，{{ $store.state.user.userInfo.userName }}</span
          >
          <div class="logout" @click="logout">
            <span>退出</span>
            <i class="el-icon-caret-bottom" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  data() {
    return {
      defaultImg:
        'https://img2.baidu.com/it/u=1940507931,330831891&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=360',
    }
  },
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar']),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.replace(`/login?redirect=${this.$route.fullPath}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #5373e0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .logout {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logo {
    width: 88px;
    height: 36px;
    margin: 10px 0 0 10px;
  }

  .xiaotubiao {
    margin: 0 30px 0 20px;
    color: #fff;
    font-size: 16px;
  }
  span {
    color: #fff;
    font-size: 16px;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        // &:hover {
        //   // background: rgba(0, 0, 0, 0.025);
        // }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        display: flex;
        align-items: center;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          // top: 25px;
          font-size: 12px;
          color: #fff;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
