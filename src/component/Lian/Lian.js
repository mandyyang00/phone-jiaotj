import React from 'react'
import Header from '../Header/Header'
import './lian.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {url} from '../config'
import {message} from 'antd'
import classnames from 'classnames'
import { Select } from 'antd';
import { DatePicker } from 'antd';
const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker



class Lianan extends React.Component{
	constructor(){
		super()
		this.state={
			data:null,
			visibal:false,
			lianId:null,
			come:''
		}
	}
	componentDidMount(){
		let ID=sessionStorage.xianchangId
		console.log(ID)
		axios.post(`${url}/InvolvedService/GetInvolved`,{ID:ID})
			.then(res=>
				this.onOk(res)
				)
			.catch(err=>console.log(err))
	}
	onOk(res){
		console.log(res)
		this.setState({
			data:res.data,
			lianId:res.data.ID
		})
		sessionStorage.setItem('lianId',res.data.ID)
	}
	handleOk(){
		let InvolvedID=sessionStorage.xianchangId
		let code1=document.querySelector('.code1').value
		let code2=document.querySelector('.code2').value
		let code3=document.querySelector('.code3').value
		let come=this.state.come
		let time1=document.querySelector('.time1 ant-input').value
		let basic=document.querySelector('.basic').value
		let yiju=document.querySelector('.yiju').value
		let about=document.querySelector('.about').value
		let name3=document.querySelector('.name3').value
		let address1=document.querySelector('.address1').value
		let faren=document.querySelector('.faren').value
		let telnumber=document.querySelector('.telnumber').value
		var data1={
			InvolvedID:InvolvedID,
			Code1:code1,
			Code2:code2,
			Code3:code3,
			Source:come,
			PrimaryContent:basic,
			Basis:yiju,
			SceneRecordID:sessionStorage.allId,
			AskRecordID:sessionStorage.xunwenId,
			Memo:about


		}
		
			axios.post(`${url}/FilingService/Add`,data1)
				.then(res=>this.handleGo(res))
				.catch(err=>console.log(err))
		
	}

	handleGo(res){
		console.log(res)
		this.setState({
			visibal:true
		})
	}


	handleChange1(value){							
   	this.setState({
			seconds:`${value}`,
			visibal:true
		})
	}
	render(){
			let {data,visibal}=this.state
		return(
			<div className='lian'>
				<Header></Header>	
				<h2>立案审批表</h2>
				
				 
				<div className='title'>

					<input type="text" className='code1'/>
					<span >罚案</span>
					<span style={{'border':'0','width':'20px'}}>(</span><input type="text" style={{'border':'0','width':'40px'}} className='code2'/><span style={{'border':'0','width':'20px'}}>)</span>
					
					<input type="text" className='code3'/>
					<span>号</span>
				</div>
				{!data ? '加载中' :
				<table>
					<tr>
						<td style={{'width':'40px'}}>案件<br/>来源</td>
						<td colSpan='3'>
							<Select  style={{'width':'100%','border':'0','outline':'0'}} className='come' value={this.state.seconds} onChange={this.handleChange1.bind(this)}>
						      <Option value="1" >1</Option>
						      <Option value="2">2</Option>
						      <Option value="3" >3</Option>
						      <Option value="4">4</Option>
						  </Select>
						</td>
					</tr>

					<tr >
						<td style={{'width':'40px'}}>受案<br/>时间</td>
						<td colSpan='3'>
							<DatePicker style={{'width':'100%','border':'0','outline':'0'}} className='time1'/>
						</td>
					</tr>
					<tr>
						<td>案由</td>
						<td colSpan='3'>
							
							<Select  style={{'width':'100%','border':'0','outline':'0'}} className='beacuse' value={this.state.seconds} onChange={this.handleChange1.bind(this)}>
						      <Option value="1" >1</Option>
						      <Option value="2">2</Option>
						      <Option value="3" >3</Option>
						      <Option value="4">4</Option>
						  </Select>
						</td>
					</tr>

					<tr>
						<td rowSpan='12'>案件当事人基本情况
						</td>
					</tr>

					<tr>
						<td rowSpan='6' style={{'width':'40px'}}>公民</td>
						<td>姓名</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.InvolvedName}/>
						</td>
					</tr>
						
					<tr>
						<td>性别</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.InvolvedSex}/>
						</td>
					</tr>

					<tr>
						<td>年龄</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.InvolvedName}/>
						</td>
					</tr>

					<tr>
						<td>住址</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.InvolvedAddress}/>
						</td>
					</tr>
					<tr>
						<td>身份<br/>证号</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.InvolvedIDCode}/>
						</td>
					</tr>
					<tr>
						<td>联系<br/>电话</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='telnumber' value={data.InvolvedTelNo}/>
						</td>
					</tr>

					<tr>
						<td rowSpan='5'>法人或其他组织</td>
					</tr>

					<tr>
						<td>名称</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='name3'/>
						</td>
					</tr>
					<tr>
						<td>法定<br/>代表人</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='faren'/>
						</td>
					</tr>
					<tr>
						<td>地址</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='address1'/>
						</td>
					</tr>
					<tr>
						<td>联系<br/>电话</td>
						<td colSpan='2'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name}/>
						</td>
					</tr>

					

					<tr>
						<td colSpan='4'>案件基本情况</td>
						
					</tr>

					<tr>
						<td colSpan='4'>
							<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}} className='basic'>
							</textarea>
						</td>
					</tr>

					<tr>
						<td colSpan='4'>立案依据</td>
						
					</tr>

					<tr>
						<td colSpan='4'>
							<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}} className='yiju'>
							</textarea>
						</td>
					</tr>

					<tr>
						<td colSpan='4'>受案机构意见</td>
						
					</tr>

					<tr>
						<td colSpan='4'>
							<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}} className='shouanyijian' readOnly='readonly'>
							</textarea>
							<p style={{'textIndent':'50%','lineHeight':'20px'}}>签名:
								
								<Select  style={{'width':'30%','border':'0','outline':'0'}} className='name1' value={this.state.seconds} onChange={this.handleChange1.bind(this)}>
						      <Option value="1" >1</Option>
						      <Option value="2">2</Option>
						      <Option value="3" >3</Option>
						      <Option value="4">4</Option>
						  </Select>
							</p>
							<p style={{'textIndent':'50%','lineHeight':'20px'}}>时间:
								
								<DatePicker style={{'width':'30%','border':'0','outline':'0'}} className='time2'/>
							</p>
						</td>
					</tr>

					<tr>
						<td colSpan='4'>负责人审批意见</td>
						
					</tr>
					<tr>
						<td colSpan='4'>
							<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}}  className='fuzerenyijian' readOnly='readonly'>
							</textarea>
							<p style={{'textIndent':'50%','lineHeight':'20px'}}>签名:
								
								<Select  style={{'width':'30%','border':'0','outline':'0'}} className='name2' value={this.state.seconds} onChange={this.handleChange1.bind(this)}>
						      <Option value="1" >1</Option>
						      <Option value="2">2</Option>
						      <Option value="3" >3</Option>
						      <Option value="4">4</Option>
						  	</Select>
							</p>
							<p style={{'textIndent':'50%','lineHeight':'20px'}}>时间:
								
								<DatePicker style={{'width':'30%','border':'0','outline':'0'}} className='time3'/>
							</p>
						</td>
					</tr>
					<tr>
						<td>备注</td>
						<td colSpan='3'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='about'/>
						</td>
					</tr>
				</table>}
				<div style={{'marginTop':'20px'}} className='clearfix'>
				
					<Link to='/list'><button style={{'float':'left','marginLeft':'20px'}} onClick={this.handleOk.bind(this)}>提交并保存</button></Link>
					
					<Link to='/xunwenbilu'><button style={{'float':'right','marginRight':'20px'}}>返回上一级</button></Link>
				
				</div>
			</div>
		)
	}
}

export default Lianan