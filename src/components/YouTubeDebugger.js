// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
        
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          } 
    }
  

  handleClickBitrate = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      }); 
  }
  handleClickResolution = () => {
    this.setState({
        settings: {
          ...this.state.settings,
          video: {
             resolution: '720p'
          }
        }
      }); 
  }

  render() {
    return (
      <div>
        <h1>{this.state.settings.bitrate}</h1>

        <h1>{this.state.settings.video.resolution}</h1>
        <button className='bitrate' onClick={this.handleClickBitrate}>bitrate</button>
        <button className='resolution' onClick={this.handleClickResolution}>resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;