const initialState = {
  form: {
    id: 'user',
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
        regex: new RegExp('a')
      },
    ]
  }
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "CHANGE_VALUE":
      return {
        ...state,
        form: {
          ...state.form,
          elements: state.form.elements.map(
            element => {
              if (element.name === action.payload.id) {
                return {
                  ...element,
                  value: action.payload.value
                }
              } else {
                return element
              }
            }
          )
        }
      }
    default:
      return state
  }
}

export default reducer
