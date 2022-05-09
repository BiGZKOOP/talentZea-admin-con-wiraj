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
  },
  {
    path: '/sub-category/view',
    component: lazy(() => import('../../custom-views/SubCategoryView/SubCategoryView'))
  },
  {
    path: '/sub-category/create',
    component: lazy(() => import('../../custom-views/subCategoryCreate/SubCategoryCreate'))
  },
  {
    path: '/sub-category/preview/:id',
    component: lazy(() => import('../../custom-views/SubCatPreview/SubCatPreview')),
    layout: 'BlankLayout'
  },
  {
    path: '/orders',
    component: lazy(() => import('../../custom-views/OrderView/OrderView'))
  },
  {
    path: '/order-details/:id',
    component: lazy(() => import('../../custom-views/OrderDetailsView/OrderDetailsView'))
  }
]

export default DashboardRoutes
