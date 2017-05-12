import { Component } from 'react'
import CreateInvoiceMutation from '../../graphql/CreateInvoiceMutation'
import InvoiceFormComponent from './InvoiceFormComponent'
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

const InvoiceFormWithGraph = graphql(CreateInvoiceMutation)(
  InvoiceFormComponent
)

export default InvoiceFormWithGraph
