import { connect } from 'react-redux'
import { formChange, formSubmit } from '../actions'
import Form1 from '../components/Form1'

export default connect(
  state => (state),
  dispatch => ({
     formChange: (e) => dispatch(formChange(e)),
     formSubmit: (e) => dispatch(formSubmit(e))
  })
)(Form1)
