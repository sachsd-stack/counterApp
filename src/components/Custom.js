import React, {Component} from 'react'

class Custom extends Component {
    state={
        count: ''
    }

    handleChange = (e) =>{
        this.setState({
            count: e.target.value
        })
    }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.customArithmetic(this.state.count)
        this.setState({
            count: ''
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" className="center calculate" onChange={this.customArithmetic} placeholder="Input a number to add or subtract"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Custom

