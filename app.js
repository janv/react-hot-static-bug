import React from 'react'

export default class A extends React.Component {
  render(){
    return <B onClick={this.handleClick}/>
  }

  handleClick = () => this.setState({})
}

class B extends React.Component {
  render(){
    return <button onClick={this.handleClick}>Hi</button>
  }

  handleClick = () => this.props.onClick()
}

