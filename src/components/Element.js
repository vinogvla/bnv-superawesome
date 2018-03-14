import React from 'react'

const Element = ({ name, type, label, value, regex, handleChange }) => {
  function isValid() {
    return regex.test(value)
  }
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} value={value} onChange={handleChange} />
      <p>{ isValid() ? "true" : "false" }</p>
    </div>
  )
}

export default Element
