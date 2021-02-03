import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput/>
        <ul>
          {this.props.bands.map((name, index) => { return <li key={index}>{name}</li>})}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps)(BandsContainer)
