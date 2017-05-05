import { Component } from 'react'
import CreateCustomerForm from '../components/CreateCustomerForm'
import CreateCustomerMutation from '../mutations/CreateCustomerMutation.js'
import Router from 'next/router'
import { graphql } from 'react-apollo'

class CreateCustomerFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { errors: [] }
  }

  handleSubmit(values) {
    this.props
      .createCustomer(values)
      .then(response => {
        Router.push('/customers')
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <CreateCustomerForm
        onSubmit={this.handleSubmit.bind(this)}
        errors={this.state.errors}
      />
    )
  }
}

// Connect graphql to the mutation
const CreateCustomerWithGraph = graphql(CreateCustomerMutation, {
  props: ({ mutate }) => ({
    createCustomer: ({
      firstName,
      lastName,
      email,
      address,
      addressCity,
      addressState,
      addressZip,
    }) =>
      mutate({
        variables: {
          firstName,
          lastName,
          email,
          address,
          addressCity,
          addressState,
          addressZip,
        },
      }),
  }),
})(CreateCustomerFormContainer)

export default CreateCustomerWithGraph
