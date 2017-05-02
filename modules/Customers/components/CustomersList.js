import { Box, Header, Section, Table, TableHeader, TableRow } from 'grommet'

// a table of all the customers we have registered in the system
export default props => {
  const allCustomers = props.data.allCustomers
  return (
    <Section>
      <Table>
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
    </Section>
  )
}
