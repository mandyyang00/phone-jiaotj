import React from 'react'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import './list.css'



class List extends React.Component{
	componentDidMount(){
		sessionStorage.setItem('xianchangId','')
		sessionStorage.setItem('allId','')
	}
	render(){
		return(
			<div className='list'>
				<Header title='秦皇岛市交通局执法系统'></Header>
				<div>
					<Link to='/xianchangbilu'><button>新建现场笔录</button></Link>
					<Link to='/anjianchuliList'><button>查看案件处理决定</button></Link>
				</div>
				
			</div>
			)
	}
}

export default List