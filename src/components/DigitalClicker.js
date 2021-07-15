// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component {
  constructor() {
    super()
    // initial state has count set at 0
    this.state = {
        timesClicked: 0
    }
  }

  handleClick = () => {
    // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
   //let newCount = this.state.count + 1
  
      this.setState(previousState => {
        return {
            timesClicked: previousState.timesClicked + 1}
          }, () => console.log(this.state.timesClicked)
      )
    
  }

  render() {
    return (
      <div>
        
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;