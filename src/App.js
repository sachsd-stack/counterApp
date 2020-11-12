import React, { Component } from 'react'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import Custom from './components/Custom'

class App extends Component {
    state = {
      count: 0
    }

  increment = () =>{
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () =>{
    this.setState({
      count: this.state.count - 1
    });
  }

  reset = () =>{
    this.setState({
      count: 0
    });
  }

  custom = (number) => {
    let value = parseInt(number)
    this.setState({
        count:this.state.count + value
    });
}

  render() {
    return (
      <div className="App">
        <h1 className="center">{this.state.count}</h1>
        <div className="center">
          <Increment increment={this.increment}/>
          <Decrement decrement={this.decrement}/>
          <div>
            <button className='reset' onClick={this.reset}>Reset</button>
          </div>
        </div>
        <div className="center">
          <Custom custom={this.custom}/>
        </div>
      </div>
    );
  }
}

export default App;
