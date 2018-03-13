import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
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

      <FormGroup
        controlId="email"
        validationState={getValidationState()}
      >
        <ControlLabel>Email</ControlLabel>
        <FormControl type="email" value={email} placeholder="Email" onChange={handleChange} />
        <FormControl.Feedback />
        <HelpBlock>Please enter your email address</HelpBlock>
      </FormGroup>

      <InputField
        id="emailConfirm"
        label="Confirm Email"
        value={emailConfirm}
        handleChange={handleChange}
        getValidationState={getValidationState}
        helpText="help text" />

      <FormGroup
        controlId="fname"
        validationState={getValidationState()}
      >
        <ControlLabel>Fname</ControlLabel>
        <FormControl type="text" value={fname} placeholder="Fname" onChange={handleChange} />
        <FormControl.Feedback />
        <HelpBlock>Please enter your fname</HelpBlock>
      </FormGroup>

      <FormGroup
        controlId="lname"
        validationState={getValidationState()}
      >
        <ControlLabel>Lname</ControlLabel>
        <FormControl type="text" value={lname} placeholder="lname" onChange={handleChange} />
        <FormControl.Feedback />
        <HelpBlock>Please enter your lname</HelpBlock>
      </FormGroup>

      <Button disabled={isInvalid}>Submit</Button>

    </form>
  )
}

export default Form
