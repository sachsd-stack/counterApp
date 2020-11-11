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

  customArithmetic = (e) => {
    this.setState({
        count: this.state.count + parseInt(e)
    });
}

  render() {
    return (
      <div className="App">
        <h1 className="center">{this.state.count}</h1>
        <div className="center">
          <Increment increment={this.increment}/>
          <Decrement decrement={this.decrement}/>
          <button className='reset' onClick={this.reset}>Reset</button>
        </div>
        <div className="center">
          <Custom customArithmetic={this.customArithmetic}/>
        </div>
      </div>
    );
  }
}

export default App;
