import { createStore, applyMiddleware, compose } from 'redux'
import { combineForms, createForms } from 'react-redux-form'
// import reducer from './reducer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose


const profileInitialState = {
  email: "",
  emailConfirm: "",
  fname: "",
  lname: "",
}


export default createStore(
  combineForms({
    profile: profileInitialState
  }),
  composeEnhancers()
)
