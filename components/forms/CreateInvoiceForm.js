import {
  Step,
  StepButton,
  StepContent,
  StepLabel,
  Stepper,
} from 'material-ui/Stepper'

import { FormSection } from 'redux-form'
import InvoiceFormCustomers from './_createInvoiceForm/InvoiceFormCustomers'
import InvoiceFormDetails from './_createInvoiceForm/InvoiceFormDetails'
import InvoiceFormItems from './_createInvoiceForm/InvoiceFormItems'
import InvoiceFormPayment from './_createInvoiceForm/InvoiceFormPayment'

// Invoice Form

export default ({ createInvoiceStep, actions: { setStepCreateInvoice } }) => {
  const style = {
    marginLeft: 20,
    width: 'calc(100% - 20px)',
  }
  return (
    <div style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}>
      <Stepper
        linear={false}
        activeStep={createInvoiceStep}
        orientation="vertical"
      >
        <Step>
          <StepButton onTouchTap={() => setStepCreateInvoice({ step: 0 })}>
            New Invoice: Customer Information
          </StepButton>
          <StepContent>
            <FormSection name="customer">
              <InvoiceFormCustomers />
            </FormSection>
          </StepContent>
        </Step>
        <Step>
          <StepButton onTouchTap={() => setStepCreateInvoice({ step: 1 })}>
            New Invoice: Add Items
          </StepButton>
          <StepContent>
            <InvoiceFormItems />
          </StepContent>
        </Step>
        <Step>
          <StepButton onTouchTap={() => setStepCreateInvoice({ step: 2 })}>
            Payment Information
          </StepButton>
          <StepContent>
            <FormSection name="payment">
              <InvoiceFormPayment />
            </FormSection>
          </StepContent>
        </Step>
        <Step>
          <StepButton onTouchTap={() => setStepCreateInvoice({ step: 3 })}>
            Additional Details
          </StepButton>
          <StepContent>
            <InvoiceFormDetails />
          </StepContent>
        </Step>
      </Stepper>
    </div>
  )
}
