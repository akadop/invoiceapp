import { Box, Heading } from 'custom-grommet-package'

import NavControl from '../Layout/NavControl'

// header for this page
const HeaderNav = (
  <Header
    direction="row"
    justify="between"
    size="large"
    pad={{ horizontal: 'small', between: 'medium' }}
  >
    <NavControl name="Construction" />
  </Header>
)

const Construction = (
  <Box full="horizontal" primary={true}>
    {HeaderNav}
    <Box align="center">
      <Box responsive={true} pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Heading>under construction!</Heading>
      </Box>
    </Box>
  </Box>
)

export default Construction
