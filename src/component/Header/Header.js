import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'




class Header extends React.Component{
	loginOut(){
		sessionStorage.setItem('userId','')
		sessionStorage.setItem('lianId','')
		sessionStorage.setItem('xianchangId','')
		sessionStorage.setItem('xunwenId','')
	}
	
	render(){
		return(
			<div className='header'>
				<Link to='/'><button onClick={this.loginOut.bind(this)}>退出</button></Link>
			</div>
		)
	}
}




export default Header