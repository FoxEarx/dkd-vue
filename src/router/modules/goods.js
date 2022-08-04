import Layout from '@/layout'
export default {
  path: '/goods',
  component: Layout,
  meta: { title: '商品管理', icon: 'component24' },
  children: [
    {
      path: 'CommodityType',
      component: () => import('@/views/goods/CommodityType'),
      meta: { title: '商品类型' },
    },
    {
      path: 'CommodityManagement',
      component: () => import('@/views/goods/CommodityManagement'),
      meta: { title: '商品管理' },
    },
  ],
}
