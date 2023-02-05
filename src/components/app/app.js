import { Component } from "react";

class User extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            counter: 0,
        }
    }

    clickHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    offClcik = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }))
    }

    restartClick = () => {
        this.setState({
            counter: 0
        })
    }

    render() { 
        const { firstName, lastName, link } = this.props
        return (
            <div className="w-50 mx-auto">
                <div className="border p-3 mt-5">
                <h4>
                    Mening ismim - {firstName}, sharifim - {lastName}
                </h4>
                <a href={link}>Youtube kanal</a>
                <div className="mt-3">
                <button onClick={this.clickHandler} className="btn btn-success">Increment</button>
                <button onClick={this.offClcik} className="btn btn-danger mx-2">Decrement</button>
                <button onClick={this.restartClick} className="btn btn-info">Restart</button>
                <p>{this.state.counter}</p>
                </div>
            </div>
            </div>
        )
    }
}

const App = () => {
    return (
        <div>
            <User firstName='Samar' lastName='Badriddinov' link='youtube.com' />
            <User firstName='Abdulloh' lastName='Karimov' link='youtube.com' />
        </div>
    )
}

export default App