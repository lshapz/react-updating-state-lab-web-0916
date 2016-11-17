const React = require('react');

class DigitalClicker extends React.Component {

  constructor(){
    super();
    this.state = {timesClicked: 0}
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(event){
    
    this.setState({timesClicked: ++this.state.timesClicked})
    
  }

  render(){
    

    return(
    <button onClick={this.handleClick} name="five">{this.state.timesClicked.toString()}</button> 
    )
  }
}

module.exports = DigitalClicker;
