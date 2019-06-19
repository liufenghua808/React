
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }
    //父级改变数据的方法
    add = () => {
        console.log(this)
        let { num } = this.state;
        num++;
        this.setState({ num })
    }

    render() {
        let { num } = this.state;
        console.log(num);
        return (
            <div>
                <div>父级的{num}</div>
                {console.log(num)}
                <hr />
                {/*在父组件上给子组件中绑定自定义属性num add，把数据放到自定义属性上（发送） */}
                <Btn num={num} add={this.add} />
                {/* <button onClick={this.add}>0</button> */}
            </div>
        );
    }
}

class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        //子级接收父级传递的数据和方法
        let { num, add } = this.props;
        //console.log(num,add)
        return (
            //需要传参的时候可使用箭头函数
            <button onClick={add}>
                {num}
            </button>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))