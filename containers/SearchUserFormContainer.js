import SearchUserForm from '../components/forms/SearchUserForm'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import mapActions from '../lib/util/mapActions'
import { reduxForm } from 'redux-form'
import { searchUser } from '../lib/stories/user'

export const mapDispatchToProps = mapActions({ searchUser })

export const container = compose(
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'searchUserForm' })
)

export default container(SearchUserForm)
