import React from 'react'
import Header from '../Header/Header'
import './lian.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {url} from '../config'
import {message} from 'antd'



class Lianan extends React.Component{
	constructor(){
		super()
		this.state={
			data:null,
			visibal:false,
			lianId:null
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
		let come=document.querySelector('.come').value
		let time1=document.querySelector('.time1').value
		let time2=document.querySelector('.time2').value
		let time3=document.querySelector('.time3').value
		let name1=document.querySelector('.name1').value
		let name2=document.querySelector('.name2').value
		let basic=document.querySelector('.basic').value
		let yiju=document.querySelector('.yiju').value
		let shouanyijian=document.querySelector('.shouanyijian').value
		let fuzerenyijian=document.querySelector('.fuzerenyijian').value
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
			AcceptContent:shouanyijian,
			ManageContent:fuzerenyijian,


		}
		if(code1.length!==0 && code2.length!==0 && code3.length!==0  && come.length!==0 && time1.length!==0 && time2.length!==0 && name1.length!==0 && name2.length!==0 && time3.length!==0 && basic.length!==0 && yiju.length!==0 && shouanyijian.length!==0 && fuzerenyijian.length!==0 && about.length!==0 &&  code1.trim()!=='' && code2.trim()!=='' && code3.trim()!=='' && time3.trim()!=='' && come.trim()!=='' && time1.trim()!=='' && time2.trim()!=='' && name1.trim()!=='' && name2.trim()!=='' && basic.trim()!=='' && yiju.trim()!=='' && shouanyijian.trim()!=='' && fuzerenyijian.trim()!=='' && about.trim()!==''){
			axios.post(`${url}/FilingService/Add`,data1)
				.then(res=>this.handleGo(res))
				.catch(err=>console.log(err))
		}else{
			message.error('资料不完整')
		}
	}

	handleGo(res){
		this.setState({
			visibal:true
		})
	}
	render(){
			let {data,visibal}=this.state
		return(
			<div className='lian'>
				<Header></Header>	
				<h1>立案审批表</h1>
				<Link to='/xunwenbilu'><button>返回上一级</button></Link>
				<div className='title'>

					<input type="text" className='code1'/>
					<span >罚案</span>
					<span style={{'border':'0','width':'10px'}}>(</span><input type="text" style={{'border':'0','width':'40px'}} className='code2'/><span style={{'border':'0','width':'10px'}}>)</span>
					
					<input type="text" className='code3'/>
					<span>号</span>
				</div>
				{!data ? '加载中' : 
				<table>
					<tr>
						<td style={{'width':'40px'}}>案件<br/>来源</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='come'/>
						</td>
						<td style={{'width':'40px'}}>受案<br/>时间</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='time1'/>
						</td>
					</tr>
					<tr>
						<td colSpan='4'>案件当事人基本情况
						</td>
					</tr>
					<tr>
						<td colSpan='2'>公民</td>
						<td colSpan='2'>法人或其他组织</td>
					</tr>
					<tr>
						<td>姓名</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name}/>
						</td>
						<td>名称</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='name3'/>
						</td>
					</tr>
					<tr>
						<td>性别</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name}/>
						</td>
						<td>地址</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='address1'/>
						</td>
					</tr>
					<tr>
						<td>年龄</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name}/>
						</td>
						<td>法定<br/>代表人</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='faren'/>
						</td>
					</tr>
					<tr>
						<td>身份<br/>证号</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name}/>
						</td>
						<td>联系<br/>电话</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='telnumber'/>
						</td>
					</tr>
					<tr>
						<td>住址</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name}/>
						</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>联系<br/>电话</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name}/>
						</td>
						<td></td>
						<td>
							
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
									 style={{'width':'90%','border':'0','outline':'0'}} className='shouanyijian'>
							</textarea>
							<p style={{'textIndent':'50%','lineHeight':'20px'}}>签名:
								<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} className='name1'/>
							</p>
							<p style={{'textIndent':'50%','lineHeight':'20px'}}>时间:
								<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} className='time2'/>
							</p>
						</td>
					</tr>
					<tr>
						<td colSpan='4'>负责人审批意见</td>
						
					</tr>
						<td colSpan='4'>
							<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}}  className='fuzerenyijian'>
							</textarea>
							<p style={{'textIndent':'50%','lineHeight':'20px'}}>签名:
								<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} className='name2'/>
							</p>
							<p style={{'textIndent':'50%','lineHeight':'20px'}}>时间:
								<input type="text"  style={{'width':'100px','border':'0','outline':'0'}} className='time3'/>
							</p>
						</td>
					<tr>
						<td>备注</td>
						<td colSpan='3'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='about'/>
						</td>
					</tr>
				</table>}
				{visibal ? 
				<Link to='/list'><button onClick={this.handleOk.bind(this)}>提交</button></Link>
				:
				 <button onClick={this.handleOk.bind(this)}>提交</button>
				}
				
				
				
			</div>
		)
	}
}

export default Lianan