import React from 'react'

// const App = () => (
//   <div>hello</div>
// )

class App extends React.Component {
  state = {
    email: "meow2",
    fname: "",
    lname: 'a',
    isInvalid: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return(
      <div>
        email: {this.state.email}
        <hr />

        <form onSubmit={this.handleSubmit}>

          <div className="formElement">
            <label htmlFor="email">First name</label>
            <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>

          <div className="formElement">
            <label htmlFor="fname">First name</label>
            <input id="fname" name="fname" value={this.state.fname} onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor="lname">Last name</label>
            <input id="lname" name="lname" value={this.state.lname} onChange={this.handleChange} />
          </div>

          <button disabled={this.state.isInvalid}>Submit</button>

        </form>

      </div>
    )
  }
}

export default App
