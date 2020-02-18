import React from 'react'
import PropTypes from 'prop-types';

class LikeControl extends React.Component {
  state = {
    count: 0
  }

  incrementMe = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
  decrementMe = () => {
    let newCount = this.state.count - 1
    this.setState({
      count: newCount
    })
  }
  render(){
    return(
      <div>
      <button onClick={this.incrementMe}>⬆️ </button>
      {this.state.count}
      <button onClick={this.decrementMe}>⬇️  </button>
      </div>
    )
  }
}

export default LikeControl
