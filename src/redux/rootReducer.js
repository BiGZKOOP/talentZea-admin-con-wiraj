// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import todo from '@src/views/apps/todo/store'
import chat from '@src/views/apps/chat/store'
import users from '@src/views/apps/user/store'
import email from '@src/views/apps/email/store'
import invoice from '@src/views/apps/invoice/store'
import calendar from '@src/views/apps/calendar/store'
import ecommerce from '@src/views/apps/ecommerce/store'
import dataTables from '@src/views/tables/data-tables/store'
import permissions from '@src/views/apps/roles-permissions/store'
import loginReducer from "../views/pages/authentication/redux/reducer"
import {combineReducers} from "redux"
import mainCatViewReducer from "../custom-views/MainCategoryView/reducer"
import mainCatPreviewReducer from "../custom-views/MainCategoryProfile/reducer"
import mainCatCreateReducer from "../custom-views/MainCategoryCreate/reducer"
import subCatReducer from "../custom-views/SubCategoryView/reducer"
import orderReducer from "../custom-views/OrderView/reducer"
import dashboardReducer from "../custom-views/dashboard/reducer"
import requiredPageReducer from "../custom-views/RequieredPage/reducer"

const rootReducer = combineReducers({
  auth,
  todo,
  chat,
  email,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions,
  loginReducer,
  mainCatViewReducer,
  mainCatPreviewReducer,
  mainCatCreateReducer,
  subCatReducer,
  orderReducer,
  dashboardReducer,
  requiredPageReducer
})

export default rootReducer
