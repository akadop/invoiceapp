const validate = values => {
  const errors = {}

  if (!values.items || !values.items.length) {
    errors.items = {
      _error: 'atleast one item is required to submit an invoice',
    }
  } else {
    const itemsArrayErrors = []
    values.items.forEach((item, itemIndex) => {
      const itemErrors = {}

      if (!item || !item.itemType) {
        itemErrors.itemType = 'Required'
        itemsArrayErrors[itemIndex] = itemErrors
      }

      if (!item || !item.unitPrice) {
        itemErrors.unitPrice = 'Required'
        itemsArrayErrors[itemIndex] = itemErrors
      }

      if (!item || !item.finalQuantity) {
        itemErrors.finalQuantity = 'Required'
        itemsArrayErrors[itemIndex] = itemErrors
      }

      if (!item || !item.finalQuantity) {
        itemErrors.finalQuantity = 'Required'
        itemsArrayErrors[itemIndex] = itemErrors
      }

      if (!item || !item.estimatedTotal) {
        itemErrors.estimatedTotal = 'Required'
      }
    })
  }

  if (!values.customer.firstName) {
    errors.customer.firstName = 'Please enter a first name'
  }

  if (!values.customer.lastName) {
    errors.customer.lastName = 'Please enter a last name'
  }

  if (
    !values.customer.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.customer.email = 'Invalid email address'
  }

  if (!values.customer.address) {
    errors.customer.address = 'Please enter an address'
  }

  if (!values.customer.addressCity) {
    errors.customer.addressCity = 'Please enter a city'
  }

  if (!values.customer.addressState) {
    errors.customer.addressState = 'Please enter a state'
  }

  if (!values.customer.addressZip) {
    errors.customer.addressZip = 'Please enter a zip code'
  }

  return errors
}

export default validate
