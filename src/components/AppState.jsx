import React from 'react'

const AppState = (state) => {
return (
  <ul>
    <li>{`email: ${state.email}`}</li>
    <li>{`fname: ${state.fname}`}</li>
    <li>{`lname: ${state.lname}`}</li>
  </ul>
)}

export default AppState
