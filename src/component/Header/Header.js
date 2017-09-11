import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'




class Header extends React.Component{
	loginOut(){
		sessionStorage.setItem('userId','')
		sessionStorage.setItem('lianId','')
		sessionStorage.setItem('xianchangId','')
		sessionStorage.setItem('xunwenId','')
		sessionStorage.setItem('Department','')
	}
	
	render(){
		return(
			<div className='header clearfix'>
				<h1><i>秦皇岛市交通局执法系统</i></h1>
			
				<Link to='/'><button onClick={this.loginOut.bind(this)}>退出</button></Link>
			</div>
		)
	}
}




export default Header