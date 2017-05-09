import AllCustomersQuery from '../graphql/AllCustomersQuery'
import CustomersList from '../components/CustomersList'
import { graphql } from 'react-apollo'

// connect the apollo client to the query being made
const CustomersListWithGraph = graphql(AllCustomersQuery)(CustomersList)

// export the query wrapped component
export default CustomersListWithGraph
