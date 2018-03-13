


function reducer(state = initialState, action) {
  switch(action.type) {
    case "FORM_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state
  }
}

export default reducer
