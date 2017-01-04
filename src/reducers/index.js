import { combineReducers } from 'redux'

import toolbar from './toolbar'
import elements from './elements'

export default combineReducers({
  toolbar,
  elements
})