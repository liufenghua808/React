import React from 'react';
import ReactDOM from 'react-dom';
if(module.hot){
    module.hot.accept();
}

//let list = [1,2,3,4,5];
//创建组件
//1、类创建：首字母大写
class App extends React.Component {
    constructor(){
        super();
        this.state={
            list:[1,2,3,4]
        }
    }
    render() { //可以组件套组件
        return (
            <div>123
                <App1 />
                <button onClick={()=>{
                    // this.state.list.push(5);
                    // this.setState({list:this.state.list})

                    let arr = this.state.list.concat();
                    arr.push(5);
                    this.setState({list:arr})
                }}>点击</button>
                {
                    this.state.list.map((ele,i)=><p key={i}>{ele}</p>)
                }
            </div>)
    }
}

class App1 extends React.Component {
    render() {
        return (<div>112233</div>)
    }
}

//2、函数式
// function App() {
//     return (
//         <div>456
//             <p>789</p>
//         </div>
//     )
// }


ReactDOM.render(<App />, document.getElementById('root'));




