import React, { Component } from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            arr: []
        }
    }
    //回车键抬起事件
    onkeyup = (ev) => {
        if (ev.keyCode === 13) {
            let { value } = ev.target;
            let arr = this.state.arr.concat();
            //let { arr } = this.state;
            arr.unshift(value);
            this.setState({ arr });
            ev.target.value = '';
        }
    }

    render() {
        //console.log(this.state)
        //逻辑
        let { arr } = this.state;
        let list = null;
        if (arr.length) {
            list = arr.map((e, i) => {
                return <li key={i}>{e}</li>
            })
        }

        //结构
        return (
            <div>
                <input type="text"
                    onKeyUp={this.onkeyup}
                />
                <ul>{list}</ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))