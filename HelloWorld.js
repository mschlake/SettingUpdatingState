import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            who: 'World', 
            friend: 'friend',
            react: 'React',
            world: 'world'
        }
    };
    handleFriendClick = () => {
        console.log("Hello friend")
        this.setState({
            who: this.state.friend
        })
    }
    handleReactClick = () => {
        console.log("Hello React")
        this.setState({
            who: this.state.react
        })
    }
    handleWorldClick = () => {
        console.log("Hello world")
        this.setState({
            who: this.state.world
        })
    }
    render() {
        return (
        <div> 
            <p>Hello, {this.state.who}!</p>
            <button onClick={this.handleFriendClick}>
            Friend
            </button>
            <button onClick={this.handleReactClick}>
            React
            </button>
            <button onClick={this.handleWorldClick}>
            world
            </button>
        </div>
        )
    }
}

export default HelloWorld;