import Layout from '@/layout'
export default {
  path: '/repairOrder',
  component: Layout,
  meta: { title: '工单管理', icon: 'dingdan-copy' },
  children: [
    {
      path: 'operating',
      component: () => import('@/views/repairOrder/operating'),
      meta: { title: '运营工单' },
    },
    {
      path: 'operations',
      component: () => import('@/views/repairOrder/operations'),
      meta: { title: '运维工单' },
    },
  ],
}
