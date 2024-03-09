import React, { Component } from 'react'

export class ClassLifecycle extends Component {
    constructor() {//this is the 1st method of mounting phase
        super()
        this.state = {
            count: 0,
            color: "blue",
            hasErrors: false
        }
    }
    static getDerivedStateFromProps(props, state) { //this method used to assign props data as a state
        // console.log(props, state);
        console.log("this is getDerivedStateFromProps method")
        return state.color = props.color
    }
    componentDidMount() {//this is the last method mounting ,it only executes after initial render
        console.log("this is componentDidMount Method");
    }
    shouldComponentUpdate() {//it is the 2nd method of updating phase,which handels the copmonent re-render
        console.log("shouldComponentUpdate method");
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {//to catch the previous props and state value 
        // console.log(prevProps, prevState);
        console.log("this is getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps, prevState) {//this is the last method of updating phase ,it executs after every state update
        console.log("this is componentDidUpdate")
    }
    // componentWillUnmount() {//before removing the component from dom,unmounting phase
    //     console.log("its is componentWillUnmount")
    //     // alert("hey!!!! someone is removing me")
    // }
    static getDerivedStateFromError(error) {
        console.log("this is getDerivedStateFromError")
        return { hasErrors: true }
    }
    componentDidCatch(error, info) {
        console.log(info)
    }
    render() {//this is the 3rd method of mounting it renders the element in dom
        return (
            <>
                <div>ClassLifecycle</div>
                {console.log("this is render method")}
                <h1>{this.state.count}</h1>
                <h1 style={{ background: this.state.color }}>THIS IS THE BG TEXT</h1>
                <div>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Change Count</button>
                    <button onClick={() => this.setState({ color: "yellow" })}>Change Color</button>
                </div >
            </>
        )
    }
}

export default ClassLifecycle