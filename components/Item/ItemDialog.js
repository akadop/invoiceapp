import {
  Dialog,
  FlatButton,
  FloatingActionButton,
  RaisedButton,
} from 'material-ui'

import { Component } from 'react'
import { FieldArray } from 'redux-form'
import { HoverMorphIcon } from 'react-svg-buttons'

export default ({
  addItemDialogOpened,
  actions: { closeAddItemDialog, openAddItemDialog },
}) => {
  const actions = [
    <FlatButton
      label="close"
      primary="true"
      onTouchTap={closeAddItemDialog}
      style={{ margin: 2 }}
    />,
  ]
}
