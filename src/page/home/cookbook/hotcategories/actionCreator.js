import http from '../../../../utils/http'

import { LOADDATA } from "./actionTypes"

export const loadDataSync = (data) => {
  return {
    type:LOADDATA,
    data
  }
}

export const loadDataAsync = () => {
  return async (dispatch) => {
    let result = await http('/api/category')
    dispatch(loadDataSync(result))
  }
}


