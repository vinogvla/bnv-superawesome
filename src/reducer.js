const initialState = {
  form: {
    id: 'user',
    elements: [
      { name:"email", value:"test", type:"email", label:"Email", regex:"" },
      { name:"fname", type:"text", label:"First Name", regex:"" },
      { name:"lname", type:"text", label:"last Name", regex:"" },
    ]
  }
}

function reducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state
  }
}

export default reducer
