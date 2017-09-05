import React from 'react'
import Header from '../Header/Header'
import './xianchangbilu.css'
import {Link } from 'react-router-dom'
import {url} from '../config'
import axios from 'axios'
import { connect } from 'react-redux'
import {message} from 'antd'

import classnames from 'classnames'
import { DatePicker } from 'antd';
import { Radio } from 'antd';
const { MonthPicker, RangePicker } = DatePicker

const RadioGroup = Radio.Group;






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
		document.querySelector('.ant-input').value=res.data.InvolvedSex
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
		
		// console.log(year)
		this.state={
			xianchangId:null,
			allId:null,
			// times:document.querySelector('.ant-input').value,
			readOnly:'readonly',
			visibal:false,
			value: 0,
			times0:'',
			
				class1:false,
				class2:false,
				class3:false,
				class4:false,
				class5:false,
				class6:false,
				class7:false,
				class8:false,
				class8:false,
				class10:false,
				class11:false,
				class12:false,
				class13:false,
				class14:false,
				class15:false,
				class16:false,


			

			
		}
	}


	//填写的时间改变时，后面签名的时间也随之改变
	onChangetime(){
		let aa=document.querySelector('.ant-input').value
		this.setState({
			times0:aa
		})
		console.log(aa)
	}

	//基本信息填写完毕后，先保存
	
	onClick(){
		let nameV=document.querySelector('.nameV').value
		let idcode=document.querySelector('.idcode').value
		let relation=document.querySelector('.relation').value
		let deparment=document.querySelector('.deparment').value
		let tel=document.querySelector('.tel').value
		let che=document.querySelector('.che').value
		let chuan=document.querySelector('.chuan').value
		let address=document.querySelector('.address').value
		let re=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
		let reok=re.test(idcode)
		if(reok==false){
			document.querySelector('.idcode').value='身份证号输入错误'
		}
		
			let data={
				Name:nameV,
				// Sex:sex,
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
		

		if(nameV.length==0){
			this.setState({
				class1:true
			})
		}
		if(idcode.length==0){
			this.setState({
				class2:true
			})
		}
		if(relation.length==0){
			this.setState({
				class3:true
			})
		}
		if(deparment.length==0){
			this.setState({
				class4:true
			})
		}
		if(tel.length==0){
			this.setState({
				class5:true
			})
		}
		if(che.length==0){
			this.setState({
				class6:true
			})
		}
		if(chuan.length==0){
			this.setState({
				class7:true
			})
		}
		if(address.length==0){
			this.setState({
				class8:true
			})
		}

		let sex=this.state.value
		console.log(sex)
		
		
		
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
		let times1=document.querySelector('.ant-input').value//第一个时间，后面签名是件应与之相同
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
		axios.post(`${url}/SceneRecordService/AddSceneRecord`,data)
					.then(res=>this.onOkDown(res))
					.catch(err=>console.log(err))
		
		if(place.length==0){
			this.setState({
				class9:true
			})
		}
		if(times.length==0){
			this.setState({
				class10:true
			})
		}
		if(pliceman1.length==0){
			this.setState({
				class11:true
			})
		}
		if(pliceman2.length==0){
			this.setState({
				class12:true
			})
		}
		if(pliceID1.length==0){
			this.setState({
				class13:true
			})
		}
		if(pliceID2.length==0){
			this.setState({
				class14:true
			})
		}
		if(plicewrite.length==0){
			this.setState({
				class15:true
			})
		}
		
		
		console.log(times1)

	}


	onOkDown(res){
		console.log(res)
		this.setState({
			visibal:true,
			allId:res.data.ID,
			


		})
		sessionStorage.setItem('allId',res.data.ID)
	}


	 onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
	

	render(){
		let {xianchangId,visibal,class1,class2,class3,class4,class5,class6,class7,class8,class9,class10,class11,class12,class13,class14,class15,class16}=this.state
		// console.log(xianchangId)
		

		return(
			<div className='xianchangbilu'>
				<Header></Header>
				<h1>现场笔录</h1>
				<Link to='/list'><button>返回上一级</button></Link>
				<table>
					<tr>
						<td colSpan='2' >现场人员基本情况</td>
					</tr>
					<tr>
						<td className='name'style={{'width':'19%'}} >姓名</td>
						<td style={{'width':'80%'}}>
							<input type="text" style={{'border':'0','outline':'0'}}  className={classnames({'nameV':true,'ss':class1})}/>
						</td>
					</tr>
					<tr>
						<td>性别</td>
						<td style={{'lineHeight':'35px'}}>
							<RadioGroup onChange={this.onChange.bind(this)} value={this.state.value} className='sex'>
					        <Radio value={0}>男</Radio>
					        <Radio value={1}>女</Radio>
					        
					      </RadioGroup>
						</td>
					</tr>
					<tr>
						<td>身份<br/>证号</td>
						<td>
							<input type="text" style={{'border':'0','outline':'0'}} className={classnames({'idcode':true,'ss':class2})} />
						</td>
					</tr>
					<tr>
						<td>与本<br/>案关系</td>
						<td>
							<input type="text" style={{'border':'0','outline':'0'}} className={classnames({'relation':true,'ss':class3})}/>
						</td>
					</tr>
					<tr>
						<td>单位<br/>及职务</td>
						<td>
							<input type="text" style={{'border':'0','outline':'0'}} className={classnames({'deparment':true,'ss':class4})}/>
						</td>
					</tr>
					<tr>
						<td>联系<br/>电话</td>
						<td>
							<input type="text" style={{'border':'0','outline':'0'}} className={classnames({'tel':true,'ss':class5})}/>
						</td>
					</tr>
					<tr>
						<td>车（船）<br/>号</td>
						<td>
							<input type="text" style={{'border':'0','outline':'0'}} className={classnames({'che':true,'ss':class6})}/>
						</td>
					</tr>
					<tr>
						<td>车（船）<br/>型</td>
						<td>
							<input type="text" style={{'border':'0','outline':'0'}} className={classnames({'chuan':true,'ss':class7})}/>
						</td>
					</tr>
					<tr>
						<td>联系<br/>地址</td>
						<td>
							<input type="text" style={{'border':'0','outline':'0'}} className={classnames({'address':true,'ss':class8})}/>
						</td>
					</tr>
					<tr >
						<td colSpan='2'><button onClick={this.onClick.bind(this)}>保存基本信息</button>
						</td>
					</tr>
					<tr>
						<td>执法<br/>地点</td>
						<td>
							<input type="text" style={{'border':'0','outline':'0'}}  readOnly={this.state.readOnly} className={classnames({'place':true,'ss':class9})}/>
						</td>
					</tr>
					<tr>
						<td>执法<br/>时间</td>
						<td>
							<DatePicker style={{'width':'99%','border':'0','outline':'0'}} />
						</td>
					</tr>
					<tr>
						<td rowSpan='2' style={{'width':'40px'}} >执法<br/>人员</td>
						<td>
							<input type="text" style={{'border':'0','outline':'0'}} readOnly={this.state.readOnly} className={classnames({'pliceman1':true,'ss':class11})} onChange={this.onChangetime.bind(this)}/>
						</td>
					</tr>
					<td>
							<input type="text" style={{'border':'0','outline':'0'}} readOnly={this.state.readOnly} className={classnames({'pliceman2':true,'ss':class12})}/>
					</td>
					<tr>
						<td rowSpan='2'>执法<br/>证号</td>
						<td>
							<input type="text" style={{'border':'0','outline':'0'}} readOnly={this.state.readOnly} className={classnames({'pliceID1':true,'ss':class13})}/>
						</td>
					</tr>
					<tr>
						<td>
							<input type="text" style={{'border':'0','outline':'0'}} readOnly={this.state.readOnly} className={classnames({'pliceID2':true,'ss':class14})}/>
						</td>
					</tr>
					
					
					<tr>
						<td>记录人</td>
						<td colSpan='3'>
							<input type="text" style={{'border':'0','outline':'0'}} readOnly={this.state.readOnly} className={classnames({'plicewrite':true,'ss':class15})}/>
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
								时间：<input type="text" style={{'width':'100px','border':'0','outline':'0'}} readOnly={this.state.readOnly} className='times' value={this.state.times0}/>
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
								    时间：<br/><input type="text" style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','marginLeft':'30px','lineHeight':'30px'}}  readOnly={this.state.readOnly} className='times'  value={this.state.times0}/>
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