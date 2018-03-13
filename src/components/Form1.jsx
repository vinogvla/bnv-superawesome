import React from 'react'
  

const Form = ({ email, fname, lname, isInvalid, formChange, formSubmit }) => {

  function handleChange (e) {
    formChange({
      name: e.target.name,
      value: e.target.value
    })
  }

 function handleSubmit (e) {
    e.preventDefault()
    formSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formElement">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={email} onChange={handleChange} />
      </div>

      <div className="formElement">
        <label htmlFor="fname">First name</label>
        <input id="fname" name="fname" value={fname} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="lname">Last name</label>
        <input id="lname" name="lname" value={lname} onChange={handleChange} />
      </div>

      <button disabled={isInvalid}>Submit</button>

    </form>
  )
}

export default Form
