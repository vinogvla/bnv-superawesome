import React from 'react'

const DATA = [
  { country: "United States", state: "New York", city: "New York" },
  { country: "United States", state: "Massachusetts", city: "Boston" },
  { country: "United States", state: "Illinois", city: "Chicago" },
  { country: "United States", city: "Washington, D.C." },
  { country: "Canada", province: "Ontario", city: "Toronto" },
  { country: "Canada", province: "Ontario", city: "Ottawa" },
  { country: "Canada", province: "Ontario", city: "Barrie" },
  { country: "Canada", province: "British Columbia", city: "Vancouver" },
  { country: "Canada", province: "Quebec", city: "Montreal" },
  { country: "Canada", province: "Quebec", city: "Quebec" },
]

const DropDown = ({ label, options }) => {
  function handleChange(e) {
    console.log(`${e.target.name}: ${e.target.value}`)
  }
  return (
    <label>
      { label }
      <select onChange={handleChange}>
        { options.map ((element) => { return (
            <option key={element} value={element}>{element}</option>
          )})
        }
      </select>
    </label>
  )
}

export default class Form2 extends React.Component {
  render() {
    return (
      <form>
        <h2>Form 2 </h2>
        <DropDown options={DATA.map(e=>(e.country)).filter((e,i,a)=>(a.indexOf(e)===i))} />
        <DropDown options={DATA.map(e=>(e.city)).filter((e,i,a)=>(a.indexOf(e)===i))} />
      </form>
    )
  }
}
