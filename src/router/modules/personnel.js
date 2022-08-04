import Layout from '@/layout'
export default {
  path: '/personnel',
  component: Layout,
  meta: { title: '人员管理', icon: 'renyuanguanli' },
  children: [
    {
      path: 'PersonnelList',
      component: () => import('@/views/personnel/PersonnelList'),
      meta: { title: '人员列表' },
    },
    {
      path: 'PeopleWork',
      component: () => import('@/views/personnel/PeopleWork'),
      meta: { title: '人效统计' },
    },
    {
      path: 'WorkloadList',
      component: () => import('@/views/personnel/WorkloadList'),
      meta: { title: '工作量列表' },
    },
  ],
}
