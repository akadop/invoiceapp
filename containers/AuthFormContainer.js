import AuthForm from '../components/forms/AuthForm'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { login } from '../lib/stories/auth'
import mapActions from '../lib/util/mapActions'
import { reduxForm } from 'redux-form'

export const mapStateToProps = ({ ui: { isLoading } }) => ({ isLoading })
export const mapDispatchToProps = mapActions({ login })

export const container = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'authForm' })
)

export default container(AuthForm)
