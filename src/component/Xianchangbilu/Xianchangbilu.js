import React from 'react'
import Header from '../Header/Header'
import './xianchangbilu.css'
import {Link } from 'react-router-dom'
import {url} from '../config'
import axios from 'axios'
import { connect } from 'react-redux'
import {message} from 'antd'





class Xianchangbilu extends React.Component{
	componentDidMount(){
		


	}
	constructor(){
		super()
		let date=new Date()
		let year=date.getFullYear()
		let month=date.getMonth()+1
		let day=date.getDate()
		let hour=date.getHours()
		let minute=date.getMinutes()
		// console.log(year)
		this.state={
			xianchangId:null,
			time:`${year}年${month}月${day}日`,
			readOnly:'readonly',
			visibal:false
		}
	}
	
	onClick(){
		let nameV=document.querySelector('.nameV').value
		let sex=document.querySelector('.sex').value
		let idcode=document.querySelector('.idcode').value
		let relation=document.querySelector('.relation').value
		let deparment=document.querySelector('.deparment').value
		let tel=document.querySelector('.tel').value
		let address=document.querySelector('.address').value
		if(nameV.length!==0 && sex.length!==0 && idcode.length!==0 && relation.length!==0 && deparment.length!==0 && tel.length!==0 && address.length!==0 && nameV.trim()!=='' && sex.trim()!=='' && idcode.trim()!=='' && relation.trim()!=='' && deparment.trim()!=='' && tel.trim()!=='' && address.trim()!==''){
			let data={
			Name:nameV,
			Sex:sex,
			IDCode:idcode,
			Relation:relation,
			TelNo:tel,
			Deparment:deparment,
			Address:address
			}
			axios.post(`${url}/InvolvedService/AddInvolved`,data)
			.then(res=>{
				this.onOk(res)
			})
			.then(err=>console.log('错误才返回',err))
		}else{
			message.error('资料不完整')
		}
		
		
	}
	onClickDown(){
		let place=document.querySelector('.place').value
		let pliceman1=document.querySelector('.pliceman1').value
		let pliceman2=document.querySelector('.pliceman2').value
		let pliceman3=document.querySelector('.pliceman3').value
		let pliceman4=document.querySelector('.pliceman4').value
		let pliceman5=document.querySelector('.pliceman5').value
		let pliceID1=document.querySelector('.pliceID1').value
		let pliceID2=document.querySelector('.pliceID2').value
		let plicewrite=document.querySelector('.plicewrite').value
		let titlecontent=document.querySelector('.titlecontent').value
		let maincontent=document.querySelector('.maincontent').value
		let about=document.querySelector('.about').value
		let times=document.querySelector('.times').value

		

	}

	onOk(res){
		// console.log(res)
		this.props.dispatch({type:'GET_ID',xianchangId:res.data.ID})
		this.setState({
			xianchangId:res.data.ID,
			readOnly:''
			
		})
		// console.log(this.state.xianchangId)
		sessionStorage.setItem('xianchangId',res.data.ID)
	}

	render(){
		let {xianchangId,visibal}=this.state
		// console.log(xianchangId)
		

		return(
			<div className='xianchangbilu'>
				<Header title='现场笔录'></Header>
				<table>
					<tr>
						<td colSpan='4' >现场人员基本情况</td>
					</tr>
					<tr>
						<td className='name'>姓名</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}  className='nameV'/>
						</td>
						<td>性别</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='sex'/>
						</td>
					</tr>
					<tr>
						<td>身份<br/>证号</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='idcode'/>
						</td>
						<td>与本<br/>案关系</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='relation'/>
						</td>
					</tr>
					<tr>
						<td>单位<br/>及职务</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='deparment'/>
						</td>
						<td>联系<br/>电话</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='tel'/>
						</td>
					</tr>
					<tr>
						<td>车（船）<br/>号</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						<td>车（船）<br/>型</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td>联系<br/>地址</td>
						<td colSpan='3' style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='address'/>
						</td>
					</tr>
					<tr >
						<td colSpan='4'><button onClick={this.onClick.bind(this)}>保存基本信息</button>
						</td>
					</tr>
					<tr>
						<td style={{'width':'40px'}}>执法<br/>地点</td>
						<td style={{'width':'33%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}  readOnly={this.state.readOnly} className='place'/>
						</td>
						<td style={{'width':'30px'}}>执法<br/>时间</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={this.state.time}  readOnly={this.state.readOnly} value={this.state.time}/>
						</td>
					</tr>
					<tr>
						<td rowSpan='2' style={{'width':'40px'}}>执法<br/>人员</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} readOnly={this.state.readOnly} className='pliceman1'/>
						</td>
						<td rowSpan='2' style={{'width':'30px'}}>执法<br/>证号</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} readOnly={this.state.readOnly} className='pliceID1'/>
						</td>
					</tr>
					<tr>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} readOnly={this.state.readOnly} className='pliceman2'/>
						</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} readOnly={this.state.readOnly} className='pliceID2'/>
						</td>
					</tr>
					<tr>
						<td style={{'width':'40px'}}>记录人</td>
						<td colSpan='3' style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} readOnly={this.state.readOnly} className='plicewrite'/>
						</td>
						
					</tr>
					
					<tr>
						<td colSpan='4'>主要内容</td>
					</tr>
					<tr>
						<td colSpan='4'>
							<p style={{'textAlign':'left','textIndent':'10px'}}>
								在检查中发现：<input type="text" style={{'width':'50%','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} readOnly={this.state.readOnly} className='titlecontent'/>
							</p>
							<textarea name="" id="" cols="30" rows="4"
									 style={{'width':'90%','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} readOnly={this.state.readOnly} className='maincontent'>
							</textarea>
							<p style={{'textAlign':'left','textIndent':'10px'}}>
								上述笔录我已经看过（或已向我宣读过），情况属实无误。
							</p>
							<p style={{'textAlign':'right'}}>
								现场人员签名：<input type="text" style={{'width':'100px','border':'0','outline':'0'}} readOnly={this.state.readOnly} className='pliceman3'/>
							</p>
							<p style={{'textAlign':'right','marginBottom':'20px'}}>
								时间：<input type="text" style={{'width':'100px','border':'0','outline':'0'}} readOnly={this.state.readOnly} className='times'/>
							</p>
						</td>
					</tr>
					<tr>
						<td>备注</td>
						<td colSpan='3'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}} readOnly={this.state.readOnly} className='about'/>
						</td>
					</tr>
					<tr>
						<td colSpan='4'>
							<p style={{'textAlign':'left','textIndent':'10px','marginBottom':'10px'}} >
								执法人员签名：
								<br/>
								<input type="text" style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','marginLeft':'30px','lineHeight':'30px'}} readOnly={this.state.readOnly} className='pliceman4'/>
								<input type="text" style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','margin':' 0  20px','lineHeight':'30px'}} readOnly={this.state.readOnly} className='pliceman5'/>
							</p>
							<p style={{'textAlign':'left','textIndent':'10px','marginBottom':'10px'}}>
								    时间：<br/><input type="text" style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','marginLeft':'30px','lineHeight':'30px'}} value={this.state.time} readOnly={this.state.readOnly}/>
							</p>
						</td>
					</tr>
				</table>
				{visibal ? 
					<Link to='/xunwenbilu'><button onClick={this.onClickDown.bind(this)}>询问笔录</button></Link>
					:
					<button  let onClick={this.onClickDown.bind(this)}>询问笔录</button>}
				

				
			</div>
		)
	}
}

export default connect(null)(Xianchangbilu)