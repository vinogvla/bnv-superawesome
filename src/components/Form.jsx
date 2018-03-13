import React from 'react'

const Form = ({ email, fname, lname, isInvalid, handleChange }) => {

  return (

    <form >

      <div className="formElement">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => handleChange(e.target.value)} />
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
