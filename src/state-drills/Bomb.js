import React from 'react';

class Bomb extends React.Component {
  constructor() {
    super();
    this.state = {
      str: "",
      count: 0
    }
  }

  timerConv = () => {
    const newCount = this.state.count + 1;
    let newStr = "";
    
    if (newCount >= 8) {
      newStr = "Boom!";
      clearInterval(this.interval);
    } else {
        if (newCount % 2 === 0) {
          newStr = "Tick"
        } else newStr = "Tock"
    }
  
    
    this.setState({
      count: newCount,
      str: newStr
    })

    console.log(`${newCount}: ${newStr}`)
  
  }
  
  componentDidMount() {
    this.interval = setInterval(() => 
    {this.timerConv()}, 1000)
  }

  render() {
    return (
      <div>
        <p>{this.state.str}</p>
      </div>
    )
  }
}



export default Bomb;