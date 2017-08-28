import React from 'react'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import './list.css'



class List extends React.Component{
	componentDidMount(){
		sessionStorage.setItem('xianchangId','')
		sessionStorage.setItem('allId','')
		sessionStorage.setItem('xunwenId','')
		sessionStorage.setItem('lianId','')
	}
	render(){
		return(
			<div className='list'>
				<div className='clearfix'>
					<Header></Header>	
				</div>
				
				<div>
					<h1>秦皇岛市交通局执法系统</h1>
					<div>
						<Link to='/xianchangbilu'><button className='button'>新建现场笔录</button></Link>
						<Link to='/anjianchuliList'><button className='button'>查看案件处理决定</button></Link>
					</div>
				</div>
				
			</div>
			)
	}
}

export default List