import Box from 'custom-grommet-package/components/Box'
import BusyIcon from 'custom-grommet-package/components/icons/Spinning'
import Button from 'custom-grommet-package/components/Button'
import { Component } from 'react'
import Footer from 'custom-grommet-package/components/Footer'
import Form from 'custom-grommet-package/components/Form'
import FormFields from 'custom-grommet-package/components/FormFields'
import Header from 'custom-grommet-package/components/Header'
import Heading from 'custom-grommet-package/components/Heading'
import Layer from 'custom-grommet-package/components/Layer'
import PropTypes from 'prop-types'

export default class LayerForm extends Component {
  constructor() {
    super()
    this._onSubmit = this._onSubmit.bind(this)
  }

  _onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit
  }

  render() {
    const {
      submitLabel,
      onClose,
      title,
      compact,
      busy,
      secondaryControl,
      titleTag,
    } = this.props
    let control
    if (busy) {
      const label = true === busy ? '' : busy
      control = (
        <Box
          direction="row"
          align="center"
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          <BusyIcon />
          <span className="secondary">{label}</span>
        </Box>
      )
    } else {
      control = (
        <Button
          type="submit"
          primary={true}
          label={submitLabel}
          onClick={this._onSubmit}
        />
      )
    }

    return (
      <Layer align="right" closer={true} onClose={onClose} a11yTitle={title}>
        <Form onSubmit={this._onSubmit} compact={compact}>
          <Header>
            <Heading tag={titleTag} margin="none">{title}</Heading>
          </Header>
          <FormFields>
            {this.props.children}
          </FormFields>
          <Footer pad={{ vertical: 'medium' }} justify="between">
            {control}
            {secondaryControl}
          </Footer>
        </Form>
      </Layer>
    )
  }
}

LayerForm.propTypes = {
  busy: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  compact: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  secondaryControl: PropTypes.node,
  submitLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
}

LayerForm.defaultProps = {
  titleTag: 'h2',
}
