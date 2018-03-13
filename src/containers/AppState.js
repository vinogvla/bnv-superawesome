import { connect } from 'react-redux'
import AppState from '../components/AppState'

export default connect(state => (state), null)(AppState)
