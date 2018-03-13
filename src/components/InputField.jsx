import React from 'react'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

const InputField = ({ id, label, value, handleChange, getValidationState, helpText, ...rest }) => {

  return (
    <FormGroup controlId={id} validationState={getValidationState()}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl value={value} onChange={handleChange} {...rest} />
      <FormControl.Feedback />
      <HelpBlock>{helpText}</HelpBlock>
    </FormGroup>
  )

}

export default InputField
