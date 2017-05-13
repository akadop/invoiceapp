import { Component } from 'react'
import InvoiceFormComponent from './InvoiceFormComponent'
import createInvoiceMutation from '../../graphql/createInvoiceMutation'
import { graphql } from 'react-apollo'

class InvoiceFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { errors: [] }
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
    return (
      <InvoiceFormComponent
        onSubmit={this.handleSubmit.bind(this)}
        errors={this.state.errors}
      />
    )
  }
}

const InvoiceFormWithGraph = graphql(createInvoiceMutation, {
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
})(InvoiceFormContainer)

export default InvoiceFormWithGraph
