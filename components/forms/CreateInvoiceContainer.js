import { Component } from 'react'
import createInvoiceForm from './CreateInvoiceForm'
import createInvoiceMutation from '../../lib/mutations/createInvoiceMutation'
import { graphql } from 'react-apollo'

class CreateInvoiceContainer extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(values) {
    this.props
      .createInvoice(values)
      .then(response => {
        Router.push('/success')
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return <CreateInvoiceForm onSubmit={this.handleSubmit.bind(this)} />
  }
}

const CreateInvoiceContainerWithData = graphql(createInvoiceMutation, {
  props: ({ mutate }) => ({
    createInvoice: ({
      installer,
      scheduleDate,
      customer,
      storeName,
      items,
      payment,
    }) =>
      mutate({
        variables: {
          installer,
          scheduleDate,
          customer,
          storeName,
          items,
          payment,
        },
      }),
  }),
})(CreateInvoiceContainer)

export default CreateInvoiceContainerWithData
