// ** Routes Imports
import PagesRoutes from './Pages'
import DashboardRoutes from './Dashboards'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/dashboard/ecommerce'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...PagesRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
