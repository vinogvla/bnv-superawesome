import React from 'react'

import Form from './components/Form'
import { handleChange } from './actions'
// const App = () => (
//   <div>hello</div>
// )

import { connect } from 'react-redux'

const ConnectedForm = connect(state => (state), dispatch => ({ handleChange: (e) => dispatch(handleChange({name: e.target.name, value: e.target.value})) }))(Form)




class App extends React.Component {
  render() {
    return(
      <div>
        email:
        <hr />

        <ConnectedForm />

      </div>
    )
  }
}

export default App
