import React, { Component } from 'react'


class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };

        // Change code below this line
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
      this.reset = this.reset.bind(this)
      this.customArithmetic = this.customArithmetic.bind(this)
    }

    increment(){
        this.setState(state => ({
          count: state.count + 1
        }));
      }
    
    decrement(){
        this.setState(state => ({
          count: state.count - 1
        }));
    }

    reset(){
        this.setState({
          count:0
        });
    }

    customArithmetic = (e) => {
        this.setState({
            count: this.state.count + parseInt(e.target.value)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            count: this.state.count
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="center">{this.state.count}</h1>
                <div className="center">
                    <button className='reset' onClick={this.reset}>Reset</button>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" className="center calculate" onChange={this.customArithmetic} placeholder="Input a number to add or subtract"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Buttons
