import React, { Component } from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            val: 'hello',
            arr: [11, 22]
        }
    }

    onchange = (ev) => {
        //每次输入的时候改变val的数据，让输入框变化
        let { value } = ev.target;
        let { val } = this.state;
        this.setState({ val: value })
    }
    onkeyup = (ev) => {
        if (ev.keyCode === 13) {
            let { value } = ev.target;
            let arr = this.state.arr.concat();
            arr.unshift(value);
            this.setState({ arr, val: '' });
        }


    }
    render() {
        //逻辑
        let { arr, val } = this.state;
        let list = null;
        if (arr.length) {
            list = arr.map((ele, i) => <li key={i}>{ele}</li>)
        }

        //结构
        return (
            <div>
                <input type="text"
                    value={val}
                    onChange={this.onchange}
                    onKeyUp={this.onkeyup}
                />
                <ul>{list}</ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))