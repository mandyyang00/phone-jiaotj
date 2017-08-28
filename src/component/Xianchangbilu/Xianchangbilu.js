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
		let ID=sessionStorage.allId
		console.log('dfgvb',ID)
		if(ID){
			axios.post(`${url}/SceneRecordService/GetSceneRecord`,{ID:ID})
				.then(res=>this.idOk(res))
				.catch(err=>console.log(err))
			}else{
				null
			}
	}
	idOk(res){
		console.log('....',res)
		document.querySelector('.nameV').value=res.data.InvolvedName
		document.querySelector('.sex').value=res.data.InvolvedSex
		document.querySelector('.idcode').value=res.data.InvolvedIDCode
		document.querySelector('.relation').value=res.data.InvolvedRelation
		document.querySelector('.deparment').value=res.data.InvolvedDepartment
		document.querySelector('.tel').value=res.data.InvolvedTelNo
		document.querySelector('.address').value=res.data.InvolvedAddress
		document.querySelector('.place').value=res.data.place
		document.querySelector('.pliceman1').value=res.data.Enforcers1
		document.querySelector('.pliceman2').value=res.data.Enforcers2
		document.querySelector('.pliceman3').value=res.data.InvolvedName
		document.querySelector('.pliceman4').value=res.data.InvolvedName
		document.querySelector('.pliceman5').value=res.data.InvolvedName
		document.querySelector('.pliceID1').value=res.data.Certificates1
		document.querySelector('.pliceID2').value=res.data.Certificates2
		document.querySelector('.plicewrite').value=res.data.Recorder
		document.querySelector('.titlecontent').value=res.data.InvolvedName
		document.querySelector('.maincontent').value=res.data.Content
		document.querySelector('.about').value=res.data.About
		document.querySelector('.times').value=res.data.InvolvedName

			
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
			allId:null,
			time:`${year}-${month}-${day}`,
			readOnly:'readonly',
			visibal:false,
			
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
			Department:deparment,
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

	onOk(res){
		console.log(res)
		this.props.dispatch({type:'GET_ID',xianchangId:res.data.ID})
		this.setState({

			xianchangId:res.data.ID,
			readOnly:'',
			
			
		})
		// console.log(this.state.xianchangId)
		sessionStorage.setItem('xianchangId',res.data.ID)
		
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
		let data={
			InvolvedID:this.state.xianchangId,
			Place:place,
			Enforcers1:pliceman1,
			Certificates1:pliceID1,
			Enforcers2:pliceman2,
			Certificates2:pliceID2,
			Recorder:plicewrite,
			Content:maincontent,
			Memo:about
			
			

		}
		if(place.length!==0 && times.length!==0 && pliceman1.length!==0 && pliceman2.length!==0 && pliceman3.length!==0 && pliceman4.length!==0 && pliceman5.length!==0 && pliceID1.length!==0&& pliceID2.length!==0&& plicewrite.length!==0 &&  place.trim()!=='' && times.trim()!=='' && pliceman1.trim()!=='' && pliceman2.trim()!=='' && pliceman3.trim()!=='' && pliceman4.trim()!=='' && pliceman5.trim()!=='' && maincontent.trim()!=='' && pliceID1.trim()!==''&& pliceID2.trim()!==''&& plicewrite.trim()!==''&& maincontent.trim()!==''){
				axios.post(`${url}/SceneRecordService/AddSceneRecord`,data)
					.then(res=>this.onOkDown(res))
					.catch(err=>console.log(err))
		}else{
			message.error('资料填写不完整')
		}

		

	}
	onOkDown(res){
		console.log(res)
		this.setState({
			visibal:true,
			allId:res.data.ID


		})
		sessionStorage.setItem('allId',res.data.ID)
	}

	

	render(){
		let {xianchangId,visibal}=this.state
		// console.log(xianchangId)
		

		return(
			<div className='xianchangbilu'>
				<Header></Header>
				<h1>现场笔录</h1>
				<Link to='/list'><button>返回上一级</button></Link>
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
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}  readOnly={this.state.readOnly} className='times'/>
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
								时间：<input type="text" style={{'width':'100px','border':'0','outline':'0'}} readOnly={this.state.readOnly} className='times' className='times'/>
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
								    时间：<br/><input type="text" style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','marginLeft':'30px','lineHeight':'30px'}}  readOnly={this.state.readOnly} className='times'/>
							</p>
						</td>
					</tr>
				</table>
				{visibal ? 
					<Link to='/xunwenbilu'><button onClick={this.onClickDown.bind(this)}>询问笔录</button></Link>
					:
					<button  onClick={this.onClickDown.bind(this)}>询问笔录</button>}
				

				
			</div>
		)
	}
}

export default connect(null)(Xianchangbilu)