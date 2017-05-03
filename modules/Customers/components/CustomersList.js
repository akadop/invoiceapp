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
    pad={{ horizontal: 'small', between: 'medium' }}
  >
    <NavControl name="Customers" />
  </Header>
)

// a table of all the customers we have registered in the system
export default props => {
  const allCustomers = props.data.allCustomers
  return (
    <Box full="horizontal" primary={true}>
      {HeaderNav}
      <Box align="center">
        <Box
          responsive={true}
          pad={{ horizontal: 'medium', vertical: 'small' }}
        >
          <Label uppercase={true}>
            registered customers.
          </Label>
        </Box>
        <Table responsive={true}>
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
