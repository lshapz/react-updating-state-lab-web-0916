const React = require('react');

class DigitalClicker extends React.Component {

  constructor(){
    super();
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
    
    this.handleClickBit = this.handleClickBit.bind(this)
    this.handleClickRes = this.handleClickRes.bind(this)

  }

  handleClickBit(event){
    
    this.setState({settings: Object.assign({}, this.state.settings, {bitrate: 12})})
    
  }
   handleClickRes(event){
    
    this.setState({settings: Object.assign({}, this.state.settings, 
      {video: Object.assign({}, this.state.settings.video, {resolution: '720p'})})})
    
  }

  render(){
  
    return(
     <div> 
        <button className="bitrate" onClick={this.handleClickBit} />
        <button className="resolution" onClick={this.handleClickRes} />
    </div>
    )
  }
}

module.exports = DigitalClicker;
