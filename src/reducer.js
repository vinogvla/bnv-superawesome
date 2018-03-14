const initialState = {
  elements: [
    {
      name:"email",
      value:"test",
      type:"email",
      label:"Email",
      regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    },
    {
      name:"fname",
      type:"text",
      label:"First Name",
      value: "",
      regex: new RegExp('a')
    },
  ]
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "CHANGE_VALUE":
      return {
        ...state,
        elements: state.elements.map(
          element => (element.name === action.payload.id
              ? { ...element, value: action.payload.value }
              : element
          )
        )
      }
    default:
      return state
  }
}

export default reducer
