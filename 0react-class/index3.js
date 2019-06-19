import React, { Component } from 'react';
import ReactOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}
class App extends Component {
    constructor() {
        super();
        this.state = {
            val: '',
            arr: []
        }
        //this.change = this.change.bind(this);   =>onChange={this.change}
    }
    // change() {     =>onChange={this.change.bind(this)}
    //     console.log(this);  
    // }

    change = (ev) => {     //=>onChange={this.change}   建议采用此种语法
        //console.log(this); 
        //console.log(ev.target);
        let { value } = ev.target;

    }
    keyup = (ev) => {
        if (ev.keyCode === 13) {
            let { value } = ev.target;
            let { arr } = this.state;
            arr.push(value);
            this.setState(arr);
            ev.target.value = '';
        }

    }

    render() {
        //逻辑
        let { arr } = this.state;
        let list = null;
        if (arr.length) {
            list = arr.map((e, i) => {
                return (
                    <li key={i}>{e}</li>
                )
            })
        }

        //结构
        return (
            <div>
                <input
                    type="text"
                    //onChange={this.change.bind(this)}
                    //onChange={(ev)=>{this.change(ev)}}
                    onChange={this.change}
                    onKeyUp={this.keyup}
                />
                <ul>
                    {list}
                </ul>
            </div>
        )


    }


}

ReactOM.render(<App />, document.getElementById('root'));