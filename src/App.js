import React from 'react'
import { connect } from 'react-redux'
import Form from './components/Form'
import { changeValue } from './actions'

class App extends React.Component {
  render() {
    const { id, elements, changeValue } = this.props
    return(
      <Form
        id={id}
        elements={elements}
        changeValue={changeValue}
      />
    )
  }
}

export default connect(
  state => (state),
  dispatch => ({ changeValue: payload => dispatch(changeValue(payload)) })
)(App)
