import {
  combineReducers
} from 'redux'

import { reducer as menulist } from '../page/home/cookbook/hotcategories/'

const reducer = combineReducers({
  menulist
})

export default reducer