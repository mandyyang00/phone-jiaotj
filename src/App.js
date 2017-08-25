import React, { Component } from 'react';
import Login from './component/Login/Login'
import List from './component/List/List'
import Xianchangbilu from './component/Xianchangbilu/Xianchangbilu'
import Xunwenbilu from './component/Xunwenbilu/Xunwenbilu'
import Lian from './component/Lian/Lian'



import './App.css';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    	 <BrowserRouter>
      	<div className="App">
         	<Route path='/' exact component={Login}></Route>
         	<Route path='/login' component={Login}></Route>
				<Route path='/list' component={List}></Route>
				<Route path='/xianchangbilu' component={Xianchangbilu}></Route>
          	<Route path='/lian' component={Lian}></Route>
      	</div>
      </BrowserRouter>
    );
  }
}

export default App;
