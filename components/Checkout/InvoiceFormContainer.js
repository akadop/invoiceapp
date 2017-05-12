import CreateInvoiceMutation from '../../graphql/CreateInvoiceMutation'
import InvoiceFormComponent from './InvoiceFormComponent'
import { PureComponent } from 'react'
import { graphql } from 'react-apollo'

class InvoiceFormContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { errors: [] }
  }

  handleSubmit(values) {
    this.props
      .createInvoice(values)
      .then(response => {
        console.log(values)
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

const InvoiceFormWithGraph = graphql(CreateInvoiceMutation, {
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
