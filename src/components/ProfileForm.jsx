import React from 'react'
import { Control, Form, actions } from 'react-redux-form'

class CreateProfile extends React.Component {

  handleSubmit(profile) {
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }

  render() {
    return (
      <Form model="profile" onSubmit={profile => this.handleSubmit(profile)}>
        <div>
          <label htmlFor="profile.fname">First name:</label>
          <Control.text model="profile.fname" id="profile.fname" />
        </div>
        <div>
          <label htmlFor="profile.lname">Last name:</label>
          <Control.text model="profile.lname" id="profile.lname" />
        </div>

        <button type="submit">
          Submit
        </button>


      </Form>
    )
  }
}

export default CreateProfile
