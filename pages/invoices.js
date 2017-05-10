import CreateInvoiceWizardContainer
  from '../components/Invoice/CreateInvoiceWizardContainer'
import pageWithDataAndLayout from '../hocs/pageWithDataAndLayout'
import showResults from './showResults'

export default pageWithDataAndLayout(() => (
  <CreateInvoiceWizardContainer onSubmit={showResults} />
))
