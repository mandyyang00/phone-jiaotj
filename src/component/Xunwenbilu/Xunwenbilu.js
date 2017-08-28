import React from 'react'
import './xunwenbilu.css'
import Header from '../Header/Header'
import {url} from '../config'
import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {message} from 'antd'


class Xunwenbilu extends React.Component{
	constructor(){
		super()
		let date=new Date()
		let year=date.getFullYear()
		let month=date.getMonth()+1
		let day=date.getDate()
		let hour=date.getHours()
		let minute=date.getMinutes()
		console.log(year)
		this.state={
			data:null,
			time:`${year}年${month}月${day}日${hour}时${minute}`,
			visibal:false,
			xunwenId:null
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
		let xunwenId=sessionStorage.xunwenId
		if(xunwenId){
			axios.post(`${url}/AskRecordService/GetAskRecord`,{ID:xunwenId})
				.then(res=>this.idOk(res))
				.catch(err=>console.log(err))
			}else{
				null
			}
	}
	onOk(res){
		console.log(res)
		this.setState({
			data:res.data
		})
	}
	idOk(res){
		console.log('sss',res)
		document.querySelector('.seconds').value=res.data.InvolvedName
		document.querySelector('.place').value=res.data.Place
		document.querySelector('.askman').value=res.data.InvolvedIDCode
		document.querySelector('.whiteman').value=res.data.InvolvedRelation
		document.querySelector('.beixunwenren').value=res.data.InvolvedName
		document.querySelector('.anjianguanxi').value=res.data.InvolvedRelation
		document.querySelector('.sex').value=res.data.InvolvedSex
		document.querySelector('.old').value=res.data.InvolvedID
		document.querySelector('.codeid').value=res.data.InvolvedIDCode
		document.querySelector('.tel').value=res.data.InvolvedTelNo
		document.querySelector('.department').value=res.data.InvolvedDepartment
		document.querySelector('.address').value=res.data.InvolvedAddress
		document.querySelector('.who').value=res.data.Department
		document.querySelector('.name1').value=res.data.Asker1
		document.querySelector('.name2').value=res.data.Asker2
		document.querySelector('.codeid1').value=res.data.Certificates1
		document.querySelector('.codeid2').value=res.data.Certificates2
		document.querySelector('.ask').value=res.data.InvolvedID
		document.querySelector('.answer').value=res.data.InvolvedID
		document.querySelector('.name3').value=res.data.Asker1Sign
		document.querySelector('.nametime1').value=res.data.Times
		document.querySelector('.name4').value=res.data.Asker2Sign
		document.querySelector('.nametime2').value=res.data.AskerSignTime
		document.querySelector('.about').value=res.data.InvolvedID

	}
	onOkDown(){
		let place=document.querySelector('.place').value
		let askman=document.querySelector('.askman').value
		let whiteman=document.querySelector('.whiteman').value
		let who=document.querySelector('.who').value
		let name1=document.querySelector('.name1').value
		let name2=document.querySelector('.name2').value
		let codeid1=document.querySelector('.codeid1').value
		let codeid2=document.querySelector('.codeid2').value
		let ask=document.querySelector('.ask').value
		let answer=document.querySelector('.answer').value
		let nametime1=document.querySelector('.nametime1').value
		let nametime2=document.querySelector('.nametime2').value
		let about=document.querySelector('.about').value
		let data={
			Place:place,
			Asker1:askman,
			Asker2:whiteman,
			InvolvedID:sessionStorage.xianchangId,
			Department:who,
			Certificates1:codeid1,
			Certificates2:codeid2,
			Asker1:name1,
			Asker1:name2,
			AskContent:ask,
			AnswerContent:answer,
			Memo:about


		}
		if(place.length!==0 && askman.length!==0 && whiteman.length!==0  && who.length!==0 && codeid1.length!==0 && codeid2.length!==0 && name1.length!==0 && name2.length!==0 && ask.length!==0 && answer.length!==0 && about.length!==0 &&  place.trim()!=='' && askman.trim()!=='' && whiteman.trim()!=='' && ask.trim()!=='' && who.trim()!=='' && codeid1.trim()!=='' && codeid2.trim()!=='' && name1.trim()!=='' && name2.trim()!=='' && ask.trim()!=='' && answer.trim()!=='' && about.trim()!==''){
			axios.post(`${url}/AskRecordService/AddAskRecord`,data)
				.then(res=>this.handleOk(res))
				.catch(err=>console.log(err))
		}else{
			message.error('资料不完整')
		}
		

	}
	handleOk(res){
		console.log(res)
		this.setState({
			visibal:true,
			xunwenId:res.data.ID

		})
		sessionStorage.setItem('xunwenId',res.data.ID)
	}

	render(){
		let {data,visibal}=this.state
		// console.log(data)
		return(
			
			<div className="xunwenbilu" >
				<Header></Header>	
				<h1>询问笔录</h1>
				<Link to='/xianchangbilu'><button>返回上一级</button></Link>
				{!data ? '加载中' :
				<div>
					<div className='clearfix'>
						<p style={{'float':'right'}}>
						第<input type="text" style={{'width':'50px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='seconds'/>
								次询问
						</p>
					</div>
					
					<table>
						<tr>
							<td style={{'width':'40px'}}>时间</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'30','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
								年<input type="text" style={{'width':'30','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
								月<input type="text" style={{'width':'30','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
								日<input type="text" style={{'width':'30','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
								时<input type="text" style={{'width':'30','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/><br/>
								
								分至<input type="text" style={{'width':'30','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
								时<input type="text" style={{'width':'30','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
								分
								
							</td>
						</tr>
						<tr>
							<td>地点</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='place'/>
							</td>
						</tr>
						<tr>
							<td>询问人</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='askman'/>
							</td>
							<td>记录人</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}  className='whiteman'/>
							</td>
						</tr>
						<tr>
							<td>被询问人</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name} className='beixunwenren'/>
							</td>
							<td>与案件关系</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Relation} className='anjianguanxi'/>
							</td>
						</tr>
						<tr>
							<td>性别</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Sex} className='sex'/>
							</td>
							<td>年龄</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name} className='old'/>
							</td>
						</tr>
						<tr>
							<td>身份证号</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.IDCode} className='codeid'/>
							</td>
							<td>联系电话</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.TelNo} className='tel'/>
							</td>
						</tr>
						<tr>
							<td>工作单位及职务</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Relation} className='department'/>
							</td>

						</tr>
						<tr>
							<td>联系地址</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Address} className='address'/>
							</td>

						</tr>
						<tr>
							<td colSpan='4'>
								<p style={{'textIndent':'0','textAlign':'left'}}>
								我们是：<input type="text" style={{'width':'80px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='who'/>
								的执法人员<input type="text" style={{'width':'80px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='name1'/>,
								<input type="text" style={{'width':'80px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='name2'/>
								这是我们的执法证件，执法证件号码分别是<input type="text" style={{'width':'80px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='codeid1'/>、<input type="text" style={{'width':'80px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='codeid2'/>，请你确认，现依法向你询问，请如实回答所有问题，执法人员与你有直接利害关系的，你可以申请回避。
							
								</p>
								<p style={{'textIndent':'0','textAlign':'left'}}>
									<p>问：</p>
									<textarea name="" id="" cols="10" rows="3"
												 style={{'width':'80%','border':'0','outline':'0','border':'1px solid #aaaaaa','marginLeft':'40px'}} className='ask'>
									</textarea>
								</p>
								<p style={{'textIndent':'0','textAlign':'left'}}>
									<p>答：</p>
									<textarea name="" id="" cols="10" rows="3"
												 style={{'width':'80%','border':'0','outline':'0','border':'1px solid #aaaaaa','marginLeft':'40px'}} className='answer'>
									</textarea>
								</p>
							</td>
						</tr>
						<tr>
							<td colSpan='2'>询问人签名及时间</td>
							<td colSpan='2'>被询问人签名及时间</td>
							
						</tr>
						<tr>
							<td colSpan='1'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='name3'/>
							</td>
							<td colSpan='1'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='nametime1'/>
							</td>
							<td colSpan='1'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='name4'/>
							</td>
							<td colSpan='1'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='nametime2'/>
							</td>
						</tr>
						<tr>
							<td>备注</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='about'/>
							</td>
						</tr>

					</table>
				</div>}	
				{visibal ?
					<Link to='lian'><button onClick={this.onOkDown.bind(this)}>立案申请表</button></Link>
					: <button onClick={this.onOkDown.bind(this)}>立案申请表</button>
				}
				
				
					
					
			</div>
		)
	}
}

const mapStateToProps = (state) =>({
  xianchangId: state.xianchangId.xianchangId
})
export default connect(mapStateToProps)(Xunwenbilu)