const validate = values => {
	const errors = {}

	if (!values.firstName) {
		errors.firstName = 'Please enter a first name'
	}

	if (!values.lastName) {
		errors.lastName = 'Please enter a last name'
	}

	if (
		!values.email &&
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Invalid email address'
	}

	if (!values.address) {
		errors.address = 'Please enter an address'
	}

	if (!values.addressCity) {
		errors.addressCity = 'Please enter a city'
	}

	if (!values.addressState) {
		errors.addressState = 'Please enter a state'
	}

	if (!values.addressZip) {
		errors.addressZip = 'Please enter a zip code'
	}

	return errors
}
export default validate
