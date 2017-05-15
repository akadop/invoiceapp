import { Divider, ListItem } from 'material-ui'
import { equals, head, map, or, propOr } from 'ramda'
import { gql, graphql } from 'react-apollo'

import { CloseButton } from 'react-svg-buttons'
import { Component } from 'react'
import EventIcon from '../icons/EventIcon'
import IconButton from 'material-ui/IconButton'
import SelectableList from '../lists/SelectableList'

export default ({
  data: { allInvoices = [] },
  selectedInvoice,
  actions: { selectInvoice },
}) => {
  const isSelected = equals(selectedInvoice)

  const mapInvoices = map(({ id, storeName, createdAt }) => (
    <ListItem
      key={id}
      style={{
        color: '#fff',
        borderLeft: `5px solid ${isSelected(id) ? '#64FFDA' : 'transparent'}`,
      }}
      value={id}
      primaryText={`${storeName} - ${createdAt}`}
      leftIcon={<EventIcon />}
    />
  ))

  return (
    <div className="root">
      <IconButton
        iconStyle={{ width: '48px', height: '48px' }}
        style={{
          opacity: selectedInvoice ? 1 : 0.75,
          transition: 'opacity .15s linear',
          left: '50%',
          transform: 'translate3d(-50%, 0, 0)',
          width: 96,
          height: 96,
          color: '#fff',
        }}
        onTouchTap={() => selectInvoice({ selectedInvoice: '' })}
      >
        <CloseButton color="#fff" />
      </IconButton>
      <SelectableList
        onChange={(_, selectedInvoice) => selectInvoice({ selectedInvoice })}
        value={selectedInvoice}
      >
        {mapInvoices(allInvoices)}
      </SelectableList>
      <style jsx>{`
      .root {
        height: 100%;
        overflow-y: auto;
        z-index: 5;
        position: relative;
        background-color: #3F51B5;
      }
    `}</style>
    </div>
  )
}
