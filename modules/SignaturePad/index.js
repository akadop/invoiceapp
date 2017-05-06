import { Box, Button, Footer, Header, Section } from 'grommet'

import NavControl from '../Layout/NavControl'
import React from 'react'
import ReactSignature from './ReactSignature'

const HeaderNav = (
  <Header
    justify="start"
    size="large"
    pad={{ horizontal: 'medium', between: 'medium' }}
  >
    <NavControl name="Signature" />
  </Header>
)

class SignaturePad extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: '' }
    this._submitClick = this._getImgData.bind(this)
    this._resetClick = this._handleResetClick.bind(this)
  }

  _handleResetClick() {
    this.refs.signatureboard.handleClear()
    console.log('Board has been cleared.')
  }

  _getImgData() {
    const dataURL = this.refs.signatureboard.toDataURL()
    console.log(dataURL)
  }

  render() {
    return (
      <Box full="horizontal" size="full" primary={true}>
        {HeaderNav}
        <Box align="center">
          <Section pad="medium" justify="center" colorIndex="light-2">
            <ReactSignature ref="signatureboard" />
          </Section>
          <Footer
            pad={{ between: 'small', vertical: 'medium' }}
            alignContent="center"
            justify="center"
            responsive={true}
          >
            <Button
              secondary
              label="reset"
              type="reset"
              onClick={this._resetClick}
            />
            <Button
              primary
              label="Submit"
              type="submit"
              onClick={this._submitClick}
            />
          </Footer>
        </Box>
      </Box>
    )
  }
}

export default SignaturePad
