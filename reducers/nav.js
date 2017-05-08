import { NAV_ACTIVATE, NAV_ENABLE, NAV_RESPONSIVE } from '../actions'

import { createReducer } from './utils'

const initialState = {
	active: true, // start with nav active
	enabled: true, // start with nav disabled
	responsive: 'multiple',
	items: [
		{ path: '/index', label: 'Create Customer' },
		{ path: '/createInvoice', label: 'Create New Invoice' },
		{ path: '/customers', label: 'Customer List' },
		{ path: '/handbook', label: 'Employee Handbook' },
		{ path: '/invoices', label: 'Invoices' },
		{ path: '/signature', label: 'Signatures' },
	],
}
const handlers = {
	[NAV_ACTIVATE]: (_, action) => ({
		active: action.active,
		activateOnMultiple: undefined,
	}),

	[NAV_ENABLE]: (_, action) => ({ enabled: action.enabled }),

	[NAV_RESPONSIVE]: (state, action) => {
		const result = { responsive: action.responsive }
		if (action.responsive === 'single' && state.active) {
			result.active = false
			result.activateOnMultiple = true
		} else if (action.responsive === 'multiple' && state.activateOnMultiple) {
			result.active = true
		}
		return result
	},
}

export default createReducer(initialState, handlers)
