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
  },
  {
    path: '/service/:id',
    component: lazy(() => import('../../custom-views/MainCategoryProfile/MainServicePreviewView')),
    layout: 'BlankLayout'
  },
  {
    path: '/main-category/create',
    component: lazy(() => import('../../custom-views/MainCategoryCreate/MainCatCreate'))
  }
]

export default DashboardRoutes
