let xianchangId = {
  xianchangId:null
}

export default function xianchangidReducer(state=xianchangId, action) {
  switch (action.type) {
    case 'GET_ID':
      console.log('GET_ID', action)
      return {...state, xianchangId: action.xianchangId}
    default:
      return state
  }
}