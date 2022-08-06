import request from '@/utils/request'

/**
 *工单搜索
 * @returns promise
 */
export function repairSearch(id) {
  return request({
    url: '/task-service/task/search',
    params: {
      pageIndex: id,
    },
  })
}
