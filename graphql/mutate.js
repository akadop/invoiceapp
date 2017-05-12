const CreateInvoiceWithGraph = graphql(CreateInvoiceMutation, {
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
          items: [],
          payment,
        },
      }),
  }),
})(InvoiceFormContainer)
