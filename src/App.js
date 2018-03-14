import React from 'react'
import { connect } from 'react-redux'
import Form from './components/Form'
import { changeValue } from './actions'

class App extends React.Component {
  render() {
    return(
      <Form form= {this.props.form} changeValue={this.props.changeValue} />
    )
  }
}

export default connect(
  state => (state),
  dispatch => ({ changeValue: payload => dispatch(changeValue(payload)) })
)(App)
