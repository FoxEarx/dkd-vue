import request from '@/utils/request'

/**
 * 登录接口
 * @param {Object} data loginAccount loginpassword loginValidation
 * @returns promise
 */
export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data,
  })
}

/**
 * 验证码请求
 * @param {Number} Validation
 * @returns promise
 */
export function loginValidation(Validation) {
  return request({
    url: `/user-service/user/imageCode/${Validation}`,
    responseType: 'arraybuffer',
  })
}

/**
 *  获取用户基本信息
 * @param {Number} id
 * @returns promise
 */
export function userInfo(id) {
  return request({
    url: `/user-service/user/${id}`,
  })
}
