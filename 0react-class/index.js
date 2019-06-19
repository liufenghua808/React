import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {
                    id: 0,
                    txt: '新闻',
                    checked: true
                },
                {
                    id: 1,
                    txt: '新闻1',
                    checked: false
                },
                {
                    id: 2,
                    txt: '新闻2',
                    checked: false
                },
                {
                    id: 3,
                    txt: '新闻3',
                    checked: false
                },
                {
                    id: 4,
                    txt: '新闻4',
                    checked: false
                },
            ]
        };
    }

    //全选事件，全选按钮为true,则arr中的所有的checked属性值为true
    allchange = (ev) => {
        let { arr } = this.state;
        let { checked } = ev.target;
        arr.forEach(item => {
            item.checked = checked;
        })
        this.setState({ arr });
    }

    //修改子级每项是否选中的方法，此方法传递给了子级，
    //子级想修改需要把对应子级某项id传给父级，父级修改后再传递给子级
    parchange = (id) => {
        let { arr } = this.state;
        //找到数组中有没有和传进来的id一样的对象
        let o = arr.find(item => item.id === id);
        //如果有，则改变选中状态
        if (o) {
            o.checked = !o.checked;
            this.setState({ arr })
        }

    }

    render() {
        let { arr } = this.state;
        let list = null;
        let all = false;//全选默认为未选中
        let xz = 0;
        if (arr.length) {
            list = arr.map((item, i) => {
                return <List
                    {...{
                        key: i,
                        id: item.id,
                        txt: item.txt,
                        checked: item.checked,
                        parchange: this.parchange
                    }
                    }
                />
            })
            //全选根据arr中所有数据的checked变化而变化，所有数据的checked为true，全选才是选中，否则未选中
            all = arr.every(item => item.checked);
            //过滤出已经选中的条数
            xz = arr.filter(item => item.checked).length;

        }
        return (

            <div>
                全选：<input type="checkbox"
                    onChange={this.allchange}
                    checked={all} />
                <ul>
                    {list}
                </ul>
                <p>已选中条数：{xz}条</p>
            </div>
        );
    }
}


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //子级change方法用于把子级某项id传给父级的方法
    change = () => {
        let { id, parchange } = this.props;
        parchange(id);
    }
    render() {
        let { txt, checked } = this.props;
        //console.log(this.props)
        return (
            <li>
                <input
                    type="checkbox"
                    onChange={this.change}
                    checked={checked}
                />
                <span>{txt}</span>
            </li>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));