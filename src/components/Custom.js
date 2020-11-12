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
        this.props.custom(this.state.count)
        this.setState({
            count: ''
        });
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="center calculate" onChange={this.handleChange} value={this.state.count} placeholder="Input a number to add or subtract"/>
                    <div><button>Submit</button></div>
                </form>
            </div>
        )
    }
}

export default Custom

