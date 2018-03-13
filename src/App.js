import React from 'react'

import Form from './containers/Form'

const DATA = [
  { category: "one", class: "one", type: "one" },
  { category: "one", class: "one", type: "two" },
  { category: "one", class: "two", type: "one" },
  { category: "one", class: "two", type: "two" },
  { category: "two", class: "one", type: "one" },
  { category: "two", class: "one", type: "two" },
  { category: "two", class: "two", type: "one" },
  { category: "two", class: "two", type: "two" }
]

class Category extends React.Component {

  state = {
    value: "one"
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <label>
        Category
        <select onChange={this.handleChange}>
          { DATA.map((element) => { return element.category })
            .filter((element, index, array) => { return array.indexOf(element) === index } )
            .map ((element) => { return (
              <option key={element} value={element}>{element}</option>
            )})}
        </select>
      </label>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <Form />

        <Category />

      </div>
    )
  }
}

export default App
