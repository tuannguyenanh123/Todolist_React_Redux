import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.onCount = this.onCount.bind(this)
    }
    onCount() {
        this.setState({
            count: this.state.count + 1,
        })
        console.log(this.state.count);
        // count lúc này sẽ nhận giá trị chưa update giá trị trước
        
    }
    componentDidMount() {
        console.log('component did mount render lan 1');
    }
    componentDidUpdate() {
        console.log('update class' , this.state.count);
        
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div>
                ClassComponent
                <button onClick={this.onCount}>Plus</button>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
}

export default ClassComponent;