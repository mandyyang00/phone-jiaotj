import React, { Component } from 'react';
import Login from './component/Login/Login'
import List from './component/List/List'
import Xianchangbilu from './component/Xianchangbilu/Xianchangbilu'
import Xunwenbilu from './component/Xunwenbilu/Xunwenbilu'
import Lian from './component/Lian/Lian'
import Anjianchulilist from './component/Anjianchulilist/Anjianchulilist'
import Anjianchuliyijianshu from './component/Anjianchuliyijianshu/Anjianchuliyijianshu'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'antd/dist/antd.css'


import './App.css';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  //    hasClass(obj,cls) {  
  //       return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
  //   };  
      
  // addClass(obj,cls) {  
  //       if (!hasClass(obj,cls)) obj.className += " " + cls;  
  //   }  
      
  render() {
    return (
      <Provider store={store}>
    	 <HashRouter>
       
      	<div className="App">
         	<Route path='/' exact component={Login}></Route>
         	<Route path='/login' component={Login}></Route>
				  <Route path='/list' component={List}></Route>
				  <Route path='/xianchangbilu' component={Xianchangbilu}></Route>
          <Route path='/lian' component={Lian}></Route>
          <Route path='/xunwenbilu' component={Xunwenbilu}></Route>
          <Route path='/anjianchulilist' component={Anjianchulilist}></Route>
          <Route path='/anjianchuliyijianshu' component={Anjianchuliyijianshu}></Route>
      	</div>
       

      </HashRouter>
      </Provider>
    );
  }
}

export default App;
