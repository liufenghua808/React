import React, { Component } from 'react';
class list extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        //在子组件中使用this.props.自定义属性名去接收数据
        //console.log(this.props.data)
        let { a, b } = this.props;
        console.log(a, b);
        console.log(this.props)
        console.log(this.props.text)
        return (
            <li>{this.props.text}</li>
        );
    }
}

export default list;
