import React from 'react'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'



class Login extends React.Component{
	render(){
		return(
			<div className='login'>
				<Header title='秦皇岛市交通局执法系统'></Header>
				<div>
					<input type="text"/>
					<input type="text"/>
					<Link to='/list'><button>登录</button></Link>
				</div>
			</div>
		)
	}
}

export default Login