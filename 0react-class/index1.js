import React from 'react';
import ReactDOM from 'react-dom';
import './css/1.css';

//热更新
if (module.hot) {
    module.hot.accept();
}

/**
 *   ReactDOM.render(
 *      first param 结构,  //顶层结构有且只有一个外层标签  
 *      second param 根元素,
 *      three param  回调
 *  )
 * 
 * JSX语法：
 * 1、class =>className
 * 2、要有闭合结束标签
 * 3、{}
 *      花括号内可以执行JS代码
 *      花括号内默认把数组展开
 * 如果元素属性是一个变量需要花括号  src ={obj.xx}
 * 受控组件、非受控组件
 * 
 * 
 * 受控组件：
 *      如：
 * value='123'  无法输入新内容
 *      处理方法：
 *      1、不使用value
 *      2、defaultValue='123'
 *   
 */
let arr = [1, 2, 3]
ReactDOM.render(
    <div>Hello,World!!!
        <p className='active'>222222222222222</p>

        {
            /*<p className='active'>222222222222222</p>*/
            //console.log(22)   //花括号内可以执行js代码
            //console.log(arr) //[1,2,3]
            arr.map((e, i) => <p key={i}>{e}</p>)

        }


        <input type='text' defaultValue='123' />
        <input type='checkbox' defaultChecked />
    </div>,


    document.getElementById('root'),
    () => {
        console.log("success");
    }
);




