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
import { Select } from 'antd';
const Option = Select.Option;
const { MonthPicker, RangePicker } = DatePicker
const RadioGroup = Radio.Group;






class Xianchangbilu extends React.Component{

	//如果之前填写过该笔录，那么翻过到此页时会自动请求数据
	componentDidMount(){
		let ID=sessionStorage.allId  					
		// console.log('dfgvb',ID)
		if(ID){
			axios.post(`${url}/SceneRecordService/GetSceneRecord`,{ID:ID})
				.then(res=>this.idOk(res))
				.catch(err=>console.log(err))
			}else{
				null
			}
	}


//自动请求已经填写过得数据

	idOk(res){         		
		console.log('....',res)
		this.setState({
			value:res.data.InvolvedSex,
			policeman1:res.data.Enforcers1,
			policeman2:res.data.Enforcers2,
			policeID1:res.data.Certificates1,
			policeID2:res.data.Certificates2,
			times0:res.data.EnforcerSignTime.slice(0,10)

		})
		document.querySelector('.nameV').value=res.data.InvolvedName
		document.querySelector('.ant-input').value=this.state.times0
		document.querySelector('.idcode').value=res.data.InvolvedIDCode
		document.querySelector('.relation').value=res.data.InvolvedRelation
		document.querySelector('.deparment').value=res.data.InvolvedDepartment
		document.querySelector('.tel').value=res.data.InvolvedTelNo
		document.querySelector('.address').value=res.data.InvolvedAddress
		document.querySelector('.che').value=res.data.InvolvedCarNo
		document.querySelector('.chuan').value=res.data.InvolvedCarModel

		document.querySelector('.place').value=res.data.Place
		document.querySelector('.pliceman3').value=res.data.InvolvedName
		document.querySelector('.plicewrite').value=res.data.Recorder
		document.querySelector('.maincontent').value=res.data.Content
		document.querySelector('.about').value=res.data.Memo
		
	
		
		


		


			
	}


	//所有的state数据 
	constructor(){
		super()
		// console.log(year)
		this.state={
			xianchangId:null,		//当事人基本信息ID
			allId:null, 			//现场笔录页ID
			readOnly:'readonly',
			visibal:false, 		//页面跳转判断
			value: 0,				//radio判断性别
			times0:'', 
			reok:false,				//时间
			policeman1:'',
			policeman2:'',
			policeID1:'',
			policeID2:'',
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


	

	//基本信息填写完毕后，先保存
	
	onClick(){
		let nameV=document.querySelector('.nameV').value
		let sex=this.state.value
		let idcode=document.querySelector('.idcode').value
		let relation=document.querySelector('.relation').value
		let deparment=document.querySelector('.deparment').value
		let tel=document.querySelector('.tel').value
		let che=document.querySelector('.che').value
		let chuan=document.querySelector('.chuan').value
		let address=document.querySelector('.address').value
		let re=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/ //判断身份证的正则表达式
		let reok=re.test(idcode)
		
		// if(reok==false){
		// 	document.querySelector('.idcode').value='身份证号输入错误'
		// }
		
			let data={
				Name:nameV,
				Sex:sex,
				IDCode:idcode,
				Relation:relation,
				Department:deparment,
				TelNo:tel,
				CarNo:che,
				CarModel:chuan,
				Address:address
			}
		if(reok==true){
			axios.post(`${url}/InvolvedService/AddInvolved`,data)
			.then(res=>{
				this.onOk(res)
			})
			.catch(err=>console.log('错误才返回',err))
			this.setState({visibal:true})
		}else{
			message.error('身份证号输入错误')
		}
		// axios.post(`${url}/InvolvedService/AddInvolved`,data)
		// 	.then(res=>{
		// 		this.onOk(res)
		// 	})
		// 	.catch(err=>console.log('错误才返回',err))
		// 	this.setState({visibal:true})
			

		
		

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
			
	}

	//当事人基本信息显示ok

	onOk(res){
		// console.log(res.data.ID)
		this.props.dispatch({type:'GET_ID',xianchangId:res.data.ID})
		this.setState({
			xianchangId:res.data.ID,
			readOnly:''
		})
		sessionStorage.setItem('xianchangId',res.data.ID)
		
		
	}

	//此页其他信息

	onClickDown(){
		let place=document.querySelector('.place').value
		let times1=document.querySelector('.ant-input').value//第一个时间，后面签名时间应与之相同
		let pliceman1=this.state.policeman1
		let pliceman2=this.state.policeman2
		let pliceID1=this.state.policeID1
		let pliceID2=this.state.policeID1
		let plicewrite=document.querySelector('.plicewrite').value
		let maincontent=document.querySelector('.maincontent').value
		let pliceman3=document.querySelector('.pliceman3').value
		let times=document.querySelector('.ant-input').value
		let about=document.querySelector('.about').value
		let pliceman4=this.state.policeman1
		let pliceman5=this.state.policeman2
		let data={
			InvolvedID:this.state.xianchangId,
			Place:place,
			Time:times1,
			Enforcers1:pliceman1,
			Enforcers2:pliceman2,
			Certificates1:pliceID1,
			Certificates2:pliceID2,
			Recorder:plicewrite,
			Content:maincontent,
			InvolvedSignTime:times1,
			Memo:about,
			EnforcerSign1:pliceman4,
			EnforcerSign2:pliceman5,
			EnforcerSignTime:times1
			
	}
		axios.post(`${url}/SceneRecordService/AddSceneRecord`,data)
					.then(res=>this.onOkDown(res))
					.catch(err=>console.log(err))
		console.log('hhhh',pliceman2)
		
		if(place.length==0){
			this.setState({
				class9:true
			})
		}
		if(times1.length==0){
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
		
		
		

	}


	onOkDown(res){
		// console.log(res)
		this.setState({
			allId:res.data.ID,
			


		})
		sessionStorage.setItem('allId',res.data.ID)
	}

 //选择男女
	 onChange = (e) => {
    // console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
    console.log(this.state.value)
    
  }
  //选择警察select,第一个
   //填写的时间改变时，后面签名的时间也随之改变

  handleChange1(value){
		
		// console.log(`${value}`)
		this.setState({
			policeman1:`${value}`
		})
		let times0=document.querySelector('.ant-input').value    //填写的时间改变时，后面签名的时间也随之改变
		this.setState({														//第一个签名
			times0:times0,
			visibal:true  				//判断是否可以到下一页
		})
		// console.log(times0)
  }

   handleChange2(value){							//第二个签名
   	this.setState({
			policeman2:`${value}`
		})
		
   }
    handleChange3(value){						//获取第一个警察证件号
   	this.setState({
			policeID1:`${value}`
		})
		
   }
    handleChange4(value){						//获取第一个警察证件号
   	this.setState({
			policeID2:`${value}`
		})
		
   }
   //判断身份证是否正确

   codeOk(){
   	let idcode=document.querySelector('.idcode').value
   	let re=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/ //判断身份证的正则表达式
		this.setState({
			reok:re.test(idcode)
		})
		if(this.state.reok){

		}
   }

 
	// onChangetime(){
	// 	let times0=document.querySelector('.ant-input').value
	// 	this.setState({
	// 		times0:times0
	// 	})
	// 	console.log(times0)
	// }



	//执法人员名字选定后，后面的签名也自行ok
  // nameOk(){
  // 	let policeman1=document.querySelector('.police ant-select-selection-selected-value').value
		// this.setState({
		// 	policeman1:policeman1
		// })
		// console.log(policeman1)
  // }
	

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
							<input type="text" style={{'border':'0','outline':'0'}} className={classnames({'address':true,'ss':class8})} onChange={this.codeOk.bind(this)}/>
						</td>
					</tr>
					<tr >
						<td colSpan='2'><button onClick={this.onClick.bind(this)} >保存基本信息</button>
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
							<DatePicker style={{'width':'99%','border':'0','outline':'0'}} className='times'/>
						</td>
					</tr>
					<tr>
						<td rowSpan='2' style={{'width':'40px'}} >执法<br/>人员</td>
						<td>
							<Select value={this.state.policeman1}  onChange={this.handleChange1.bind(this)} style={{'width':'100%','border':'0','outline':'0'}} className='pliceman1'>
						      <Option value="jack" >Jack</Option>
						      <Option value="lucy">Lucy</Option>
						      <Option value="xiawang" >xiawang</Option>
						      <Option value="Yiminghe">yiminghe</Option>
						   </Select>
						</td>
					</tr>
					<td>
							<Select value={this.state.policeman2}  onChange={this.handleChange2.bind(this)} style={{'width':'100%','border':'0','outline':'0'}} className='pliceman2'>
						      <Option value="jack" >Jack</Option>
						      <Option value="lucy">Lucy</Option>
						      <Option value="xiawang" >xiawang</Option>
						      <Option value="Yiminghe">yiminghe</Option>
						   </Select>
					</td>
					<tr>
						<td rowSpan='2'>执法<br/>证号</td>
						<td>
							<Select value={this.state.policeID1} onChange={this.handleChange3.bind(this)} style={{'width':'100%','border':'0','outline':'0'}} className='pliceID1'>
						      <Option value="111" >111</Option>
						      <Option value="222">222</Option>
						      <Option value="333" >333</Option>
						      <Option value="444">444</Option>
						   </Select>
						</td>
					</tr>
					<tr>
						<td>
							<Select value={this.state.policeID2} onChange={this.handleChange4.bind(this)} style={{'width':'100%','border':'0','outline':'0'}} className='pliceID1'>
						      <Option value="111" >111</Option>
						      <Option value="222">222</Option>
						      <Option value="333" >333</Option>
						      <Option value="444">444</Option>
						   </Select>
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
								在检查中发现：
							</p>
							<div className='maincontent' style={{'width':'240px','min-height':'100px','margin':'0 auto','lineHeight':'40px','border':'0','outline':'0'}} readOnly={this.state.readOnly} contentEditable='true'>
							</div>
							<p style={{'textAlign':'left','textIndent':'10px'}}>
								上述笔录我已经看过（或已向我宣读过），情况属实无误。
							</p>
							<p style={{'textAlign':'right'}}>
								现场人员签名：<input type="text" style={{'width':'100px','border':'0','outline':'0'}} readOnly={this.state.readOnly} className='pliceman3'/>
							</p>
							<p style={{'textAlign':'right','marginBottom':'20px'}}>
								时间：<input type="text" style={{'width':'100px','border':'0','outline':'0'}} readOnly='readonly' className='times' value={this.state.times0}/>
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
								<input type="text" style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','marginLeft':'30px','lineHeight':'30px'}} readOnly={this.state.readOnly} className='pliceman4' value={this.state.policeman1}/>
								<input type="text" style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','margin':' 0  20px','lineHeight':'30px'}} readOnly={this.state.readOnly} className='pliceman5' value={this.state.policeman2}/>
							</p>
							<p style={{'textAlign':'left','textIndent':'10px','marginBottom':'10px'}}>
								    时间：<br/><input type="text" style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','marginLeft':'30px','lineHeight':'30px'}}  readOnly='readonly' className='times'  value={this.state.times0}/>
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