import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard',
    component: lazy(() => import('../../custom-views/dashboard/Dashboard'))
  },
  {
    path: '/main-category/view',
    component: lazy(() => import('../../custom-views/MainCategoryView/MainCategoryView'))
  }
]

export default DashboardRoutes
