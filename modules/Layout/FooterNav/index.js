import { Anchor, Box, Footer, Menu, Paragraph, Title } from 'grommet'

import { PureComponent } from 'react'

class FooterNav extends PureComponent {
  render() {
    return (
      <Footer flex={true} responsive={true} justify="center" size="small">
        <Title>
          invoice app
        </Title>
        <Box direction="row" align="center" pad={{ between: 'medium' }}>
          <Paragraph margin="none">
            demo
          </Paragraph>
          <Menu direction="row" size="small" dropAlign={{ right: 'right' }}>
            <Anchor href="#">
              Support
            </Anchor>
            <Anchor href="#">
              Contact
            </Anchor>
            <Anchor href="#">
              About
            </Anchor>
          </Menu>
        </Box>
      </Footer>
    )
  }
}

export default FooterNav
