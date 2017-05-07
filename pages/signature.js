import CreateSignatureComponent
  from '../modules/Signature/CreateSignatureComponent'
import pageWithDataAndLayout from '../hocs/pageWithDataAndLayout'

// expose the signature module wrapped with apollo/redux
export default pageWithDataAndLayout(() => <CreateSignatureComponent />)
