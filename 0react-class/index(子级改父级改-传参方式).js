
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
    /**
     * num:子级传过来的参数，用于改变子级时候父级跟着改
     */
    change = (num) => {
        num %= 2;//父级只有0、1，不都跟着子级走
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
                <Btn num={num} change={this.change} />
            </div>
        );
    }
}

/*
    父级把数据给了子级，只想在触发子级的时候，子级的数据变化，父级的数据不变；
    也就是说，父级通过自定义的方式传递数据给子级，子级可以在constructor中接收到父级传递的数据（就一次），把父级传递的这个数据，变为this.state,子级就拥有了父级的数据，并且修改子级的数据不会影响父级。
 */
class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.num
        }
    }
    add = () => {
        let { num } = this.state;
        num++;
        this.setState({ num });
        this.props.change(num)
    }

    render() {

        let { num } = this.state;
        return (
            <button onClick={this.add}>
                {num}
            </button>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))