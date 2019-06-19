import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/list'

if (module.hot) {
    module.hot.accept();
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            arr: [{ name: 'tom' }, { name: 'lili' }]
        }
    }
    render() {
        let { arr } = this.state;
        let list = arr.map((item, i) => {
            return (
                <List
                    // text={item}
                    // key={i}

                    //建议使用如下方式，便于管理
                    {...{
                        text: item.name,
                        key: i,
                        a: 10,
                        b: 20
                    }}
                />
            )
        });


        //结构
        //在父组件中给子组件中绑定自定义属性，把父组件的数据放到子组件中的自定义属性上(发送)
        return (
            <ul>
                {/* <List data={this.state.arr} /> */}
                {list}
            </ul>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))