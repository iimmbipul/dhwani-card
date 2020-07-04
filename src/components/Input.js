import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <input ref={this.props.reff} value={this.props.value} placeholder={this.props.placeholder} onChange={(e)=>this.props.handleChange(e)}/>
        )
    }
}
