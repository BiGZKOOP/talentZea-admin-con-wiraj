// ** Redux Imports
import { applyMiddleware, compose, createStore } from "redux"
import rootReducer from './rootReducer'
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(...middlewares))
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
