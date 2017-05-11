import {
  Dialog,
  FlatButton,
  FloatingActionButton,
  RaisedButton,
} from 'material-ui'

import { Component } from 'react'
import { FieldArray } from 'redux-form'
import ItemForm from './ItemForm'

export default class InvoiceItemList {
  constructor() {
    this.state = {
      expanded: false,
    }
    this.handleExpandChange = this.handleExpandChange.bind(this)
  }

  handleExpandChange = expanded => {
    this.setState({ expanded: expanded })
  }

  render() {
    return <ItemForm />
  }
}
