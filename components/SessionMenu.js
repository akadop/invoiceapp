import Box from 'custom-grommet-package/components/Box'
import Heading from 'custom-grommet-package/components/Heading'
import Menu from 'custom-grommet-package/components/Menu'
import UserIcon from 'custom-grommet-package/components/icons/base/UserIcon'

export default ({ colorIndex, dropAlign }) => (
  <Menu icon={<UserIcon />} colorIndex={colorIndex} dropAlign={dropAlign}>
    <Box pad="medium">
      <Heading tag="h3" margin="none">Username</Heading>
    </Box>
  </Menu>
)
