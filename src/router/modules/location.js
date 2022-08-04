import Layout from '@/layout'
export default {
  path: '/location',
  component: Layout,
  meta: { title: '点位管理', icon: 'dingwei' },
  children: [
    {
      path: 'area',
      component: () => import('@/views/location/area'),
      meta: { title: '区域管理' },
    },
    {
      path: 'positioning',
      component: () => import('@/views/location/positioning'),
      meta: { title: '点位管理' },
    },
    {
      path: 'partners',
      component: () => import('@/views/location/partners'),
      meta: { title: '合作商管理' },
    },
  ],
}
