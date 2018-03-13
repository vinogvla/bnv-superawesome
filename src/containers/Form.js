import { connect } from 'react-redux'
import { handleChange } from '../actions'
import Form from '../components/Form'

export default connect(
  state => (state),
  dispatch => ({
     handleChange: (e) => dispatch(handleChange({name: e.target.name, value: e.target.value}))
  })
)(Form)
