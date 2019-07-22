import { LOADDATA } from './actionTypes'

const defaltState = {
  list :{}
}

const categoriesReducer = (state = defaltState, action) => {
  switch(action.type) {
    case LOADDATA :
      return {
        list : action.data.data
      }
    default :
      return state
  }
}

export default categoriesReducer