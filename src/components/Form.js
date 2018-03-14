import React from 'react'
import Element from './Element'

const Form = ({ form, changeValue }) => {

  const handleChange = (e) => {
    changeValue({
      form: form.id,
      id: e.target.id,
      value: e.target.value
    })
  }

  return (
    <form>
    {
      form.elements.map((element, index)=> {
        return ( <Element key={index} {...element} handleChange={handleChange} />)
      })
    }
    <button type="submit">Submit</button>
    </form>
  )
}

export default Form
