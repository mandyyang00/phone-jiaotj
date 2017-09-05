let class0 = {
  class1:true,
  class2:false
}

export default function classReducer(state=class0,action) {
  switch (action.type) {
    case 'CLASS':
      console.log('CLASS', action)
      return {state}
    default:
      return state
  }
}