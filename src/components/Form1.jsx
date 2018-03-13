import React from 'react'
import { Button } from 'react-bootstrap'
import InputField from './InputField'

const Form = ({ email, emailConfirm, fname, lname, isInvalid, formChange, formSubmit }) => {

  function handleChange (e) {
    formChange({
      name: e.target.id,
      value: e.target.value
    })
  }

  const getValidationState = () => {
    const length = email.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
    return null
  }

  function handleSubmit (e) {
    e.preventDefault()
    formSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Form 1</h2>
      
      <InputField
        id="email"
        label="Email"
        value={email}
        placeholder="Please enter your email"
        type="email"
        handleChange={handleChange}
        getValidationState={getValidationState}
        helpText="Enter valid Email address" />


      <InputField
        id="emailConfirm"
        label="Confirm Email"
        type="email"
        value={emailConfirm}
        handleChange={handleChange}
        getValidationState={getValidationState}
        helpText="help text" />
      
      <InputField
        id="fname"
        label="First Name"
        value={fname}
        handleChange={handleChange}
        getValidationState={getValidationState} />
      
      <InputField
        id="lname"
        label="Last Name"
        value={lname}
        handleChange={handleChange}
        getValidationState={getValidationState} />


      <Button disabled={isInvalid}>Submit</Button>

    </form>
  )
}

export default Form
