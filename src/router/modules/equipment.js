import Layout from '@/layout'
export default {
  path: '/equipment',
  component: Layout,
  meta: { title: '设备管理', icon: 'chongdianzhuang' },
  children: [
    {
      path: 'Equipments',
      component: () => import('@/views/equipment/Equipments'),
      meta: { title: '设备管理' },
    },
    {
      path: 'EquipmentState',
      component: () => import('@/views/equipment/EquipmentState'),
      meta: { title: '设备状态' },
    },
    {
      path: 'DeviceType',
      component: () => import('@/views/equipment/DeviceType'),
      meta: { title: '设备类型管理' },
    },
  ],
}
