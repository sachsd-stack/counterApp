import React, {Component} from 'react'
class Multiplier extends Component {
    state={
        count: ''
    }
    handleChange = (e) =>{
        this.setState({
            count: e.target.value 
        })
    }
    handleMultiplier = (e) =>{
        this.setState({
            count: this.props.multiplier(e.target.value)
        })
    }
      handleSubmit = (e) => {
        console.log(this.props)
        e.preventDefault();
        this.props.multiplier(this.state.count)
        this.setState({
            count: e.target.value
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} onChange={this.handleMultiplier}>
                    <input type="text" className="center multiplier" onChange={this.handleChange} value={this.state.count} placeholder="Input a number to multiply by"/>
                </form>
            </div>
        )
    }
}
export default Multiplier