import merge from 'lodash/fp/merge'

import mapProps from './mapProps'

export default (f) => mapProps((p) => merge(p, f(p)))
