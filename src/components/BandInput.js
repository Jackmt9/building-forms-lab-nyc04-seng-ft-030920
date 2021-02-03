// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addBand(this.state)

    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Band:
            <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
          </label>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => dispatch({type: 'ADD_BAND', payload: band.name})
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
