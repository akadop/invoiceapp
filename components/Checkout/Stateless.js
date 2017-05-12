const SecondInvoiceContainer = props => {
  const { onSubmit, handleSubmit } = props
  return (
    <Paper zDepth={2} style={styles.Paper}>
      <form onSubmit={onSubmit}>
        <InvoiceFormDetailsSection />
        <FormSection name="customer">
          <CustomerFormSection />
        </FormSection>
        <FormSection name="items">
          <ItemsFormSection />
        </FormSection>
        <FormSection name="payment">
          <PaymentFormSection />
        </FormSection>
        <RaisedButton primary label="Next" onTouchTap={handleSubmit} />
      </form>
    </Paper>
  )
}
