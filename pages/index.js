import { Box, Heading } from 'grommet'

import CreateCustomerFormContainer
  from '../modules/Customers/containers/CreateCustomerFormContainer.js'
import page from '../hocs/page'

export default page(() => (
  <Box primary={true} responsive flex={true} align="center">
    <Heading tag="h2" margin="large">Add New Customer</Heading>
    <CreateCustomerFormContainer />
  </Box>
))
