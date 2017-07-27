import { bindActionCreators } from 'redux'

export default actions => dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})
