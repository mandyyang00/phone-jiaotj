import React from 'react'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import './login.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {url} from '../config'
import {Input, Button,message, } from 'antd';



class Login extends React.Component{
	constructor(){
		super()
		this.state={
			visiabl:false
		}
	
	}
	onClick(){
		let text=document.querySelector('.account').value
		let password=document.querySelector('.password').value
		console.log(text)
		if(text.trim()!=='' && password.trim!=='' && text.length!==0 && password.length!==0){
			let data1={
				UserName:text,
				Password:password
			}

			axios.post(`${url}/UserService/Login`,data1)
				.then(res=>{
					this.dataOk(res)

					
				})
				.catch(err=>console.log(err))

			
		}else{
			message.error('请先登录')
			return false
		}
		

		
	}
	dataOk(res){
		if(res.data.Code===0){
			message.error(res.data.Message)
		}else if(res.data.Code===1){
			message.error(res.data.Message)
		}else if(res.data.Code===2){
			console.log(res)
			this.setState({visibal:true})
			this.props.dispatch({type:'LOGIN',userId:res.data.Data.ID})
			sessionStorage.setItem('userId',res.data.Data.ID)
			console.log(res.data.Data.ID)
			
					
		}
	}
	render(){
		let {visibal} =this.state
		return(
			<div className='login'>
				<Header title='秦皇岛市交通局执法系统'></Header>
				<div>
					<input type="text" placeholder="账号" className='account'/>
					<input type="text" placeholder="密码" className='password'/>
					{visibal 
					?
					
						<Link to='/list'><button onClick={this.onClick.bind(this)}>登录</button ></Link>
					:
						<button onClick={this.onClick.bind(this)}>登录</button>
					}
				</div>
			</div>
		)
	}
}

export default Login