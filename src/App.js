import React from 'react'
import { connect } from 'react-redux'
import Form from './components/Form'
import Element from './components/Element'
import { changeValue } from './actions'

const ELEMENTS = [
  { name:"email", type:"email", label:"Email", regex:"" },
  { name:"fname", type:"text", label:"First Name", regex:"" },
]



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
