import React from 'react'
import { changeValue } from '../actions'

const Element = ({ name, type, label, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} value={value} onChange={handleChange} />
    </div>
  )
}

export default Element
