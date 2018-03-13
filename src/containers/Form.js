import { connect } from 'react-redux'
import { formChange, formSubmit } from '../actions'
import Form from '../components/Form'

export default connect(
  state => (state),
  dispatch => ({
     formChange: (e) => dispatch(formChange(e)),
     formSubmit: (e) => dispatch(formSubmit(e))
  })
)(Form)
