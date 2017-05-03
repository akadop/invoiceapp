import {
  Box,
  Header,
  Label,
  Section,
  Table,
  TableHeader,
  TableRow,
} from 'grommet'

import NavControl from '../../Layout/NavControl'

// header for this page
const HeaderNav = (
  <Header
    direction="row"
    justify="between"
    size="large"
    margin="{{vertical: medium}}"
  >
    <NavControl name="Customer List" />
  </Header>
)

// a table of all the customers we have registered in the system
export default props => {
  const allCustomers = props.data.allCustomers
  return (
    <Box full={true} primary={true}>
      {HeaderNav}
      <Box pad={{ horizontal: 'medium' }}>
        <Label uppercase={true}>
          Current Customers in the Database
        </Label>
      </Box>
      <Box
        direction="row"
        pad={{
          vertical: 'small',
          horizontal: 'small',
          between: 'medium',
        }}
      >
        <Table responsive direction="row">
          <TableHeader
            labels={[
              'First Name',
              'Last Name',
              'Email',
              'Address',
              'City',
              'State',
              'Zipcode',
            ]}
            sortIndex={0}
          />
          <tbody>
            {allCustomers &&
              allCustomers.map(
                ({
                  firstName,
                  lastName,
                  email,
                  address,
                  addressCity,
                  addressState,
                  addressZip,
                  id,
                }) => (
                  <TableRow key={id}>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td>{addressCity}</td>
                    <td>{addressState}</td>
                    <td>{addressZip}</td>
                  </TableRow>
                )
              )}
          </tbody>
        </Table>
      </Box>
    </Box>
  )
}
