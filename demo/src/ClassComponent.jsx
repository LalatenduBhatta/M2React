import React from "react"

class ClassComponet extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 0 }
    }
    incremnet = () => {
        console.log(this.state.number + 1);
        // this.state.number = this.state.number + 1
        this.setState({ number: this.state.number + 1 })
    }
    render() {
        return (
            <div>
                <h1>THIS IS CLASS COMPONET</h1>
                <h2>{this.state.number}</h2>
                <button onClick={this.incremnet}>INC</button>
            </div>
        )
    }
}

export default ClassComponet;