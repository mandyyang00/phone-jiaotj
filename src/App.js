import React, { Component } from 'react';
import Login from './component/Login/Login'
import List from './component/List/List'
import Xianchangbilu from './component/Xianchangbilu/Xianchangbilu'
import Xunwenbilu from './component/Xunwenbilu/Xunwenbilu'
import Lian from './component/Lian/Lian'
import { Provider } from 'react-redux'
import store from './redux/store'


import './App.css';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
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
      	</div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
