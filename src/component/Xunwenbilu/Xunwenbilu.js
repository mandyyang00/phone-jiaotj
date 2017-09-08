import React from 'react'
import './xunwenbilu.css'
import Header from '../Header/Header'
import {url} from '../config'
import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {message} from 'antd'
import { Select } from 'antd';
import { DatePicker } from 'antd';
import classnames from 'classnames'
const Option = Select.Option;



class Xunwenbilu extends React.Component{
	constructor(){
		super()
		
		this.state={
			data:null,
			visibal:false,
			xunwenId:null,
			startValue: null,
    		endValue: null,
    		endOpen: false,
    		seconds:'',
    		askman:'',
    		name1:'',
    		name2:'',
    		codeid1:'',
    		codeid2:'',
    		name3:'',
    		nametime1:'',
    		name4:'',
    		nametime2:''

		}
	}


	handleChange1(value){							
   	this.setState({
			seconds:`${value}`
		})
		
   }
   handleChange2(value){							
   	this.setState({
			askman:`${value}`
		})
		
   }
   handleChange3(value){							
   	this.setState({
			whiteman:`${value}`
		})
		
   }
   handleChange4(value){							
   	this.setState({
			name1:`${value}`
		})
		
   }
   handleChange5(value){							
   	this.setState({
			name2:`${value}`
		})
		
   }
   handleChange6(value){							
   	this.setState({
			codeid1:`${value}`
		})
		
   }
   handleChange7(value){							
   	this.setState({
			codeid2:`${value}`
		})
		
   }
   handleChange8(value){							
   	this.setState({
			name3:`${value}`
		})
		
   }
   handleChange9(value){							
   	this.setState({
			nametime1:`${value}`
		})
		
   }
   handleChange10(value){							
   	this.setState({
			name4:`${value}`
		})
		
   }
   handleChange10(value){							
   	this.setState({
			nametime2:`${value}`
		})
		
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
		let askman=this.state.askman
		let whiteman=this.state.whiteman
		let who=document.querySelector('.who').value
		let name1=this.state.name1
		let name2=this.state.name2
		let codeid1=this.state.codeid1
		let codeid2=this.state.codeid2
		let ask=document.querySelector('.ask').innerText
		let answer=document.querySelector('.answer').innerText
		let nametime1=this.state.nametime1
		let nametime2=this.state.nametime2
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
		
			axios.post(`${url}/AskRecordService/AddAskRecord`,data)
				.then(res=>this.handleOk(res))
				.catch(err=>console.log(err))
		
		

	}
	handleOk(res){
		console.log(res)
		this.setState({
			visibal:true,
			xunwenId:res.data.ID

		})
		sessionStorage.setItem('xunwenId',res.data.ID)
	}


	

    disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }

	render(){
		let {data,visibal,startValue, endValue, endOpen}=this.state
		// console.log(data)
		return(
			
			<div className="xunwenbilu" >
				<Header></Header>	
				<h1>询问笔录</h1>
				<Link to='/xianchangbilu'><button>返回上一级</button></Link>
				{!data ? '加载中' :
				<div>
					<div className='clearfix' style={{'marginBottom':'5px'}}>
						<p style={{'float':'right'}}>
						第 
						<Select  style={{'width':'60px','border':'0','outline':'0'}} className='seconds' value={this.state.seconds} onChange={this.handleChange1.bind(this)}>
						      <Option value="1" >1</Option>
						      <Option value="2">2</Option>
						      <Option value="3" >3</Option>
						      <Option value="4">4</Option>
						  </Select>

								 次询问
						</p>
					</div>
					
					<table>
						<tr>
							<td style={{'width':'40px'}} rowSpan='2'>时间</td>
							<td>开始</td>
							<td colSpan='2'>
								 <DatePicker
						          disabledDate={this.disabledStartDate.bind(this)}
						          showTime
						          format="YYYY-MM-DD HH:mm:ss"
						          value={startValue}
						          placeholder="Start"
						          onChange={this.onStartChange}
						          onOpenChange={this.handleStartOpenChange.bind(this)}
						          style={{'width':'100%'}}/>
						     </td>
						</tr>
						<tr>
								<td>结束</td>
								<td colSpan='2'>
						          <DatePicker
						          disabledDate={this.disabledEndDate.bind(this)}
						          showTime
						          format="YYYY-MM-DD HH:mm:ss"
						          value={endValue}
						          placeholder="End"
						          onChange={this.onEndChange.bind(this)}
						          open={endOpen}
						          onOpenChange={this.handleEndOpenChange.bind(this)}
						          style={{'width':'100%'}}/>
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
							<td colSpan='3'>
								
								<Select  style={{'width':'100%','border':'0','outline':'0'}} className='askman' value={this.state.askman} onChange={this.handleChange2.bind(this)}>
						      <Option value="1" >1</Option>
						      <Option value="2">2</Option>
						      <Option value="3" >3</Option>
						      <Option value="4">4</Option>
						   </Select>
							</td>
						</tr>
						<tr>
							<td>记录人</td>
							<td colSpan='3'>
								
							<Select  style={{'width':'100%','border':'0','outline':'0'}} className='whiteman' value={this.state.whiteman} onChange={this.handleChange3.bind(this)}>
						      <Option value="1" >1</Option>
						      <Option value="2">2</Option>
						      <Option value="3" >3</Option>
						      <Option value="4">4</Option>
						   </Select>
							</td>
						</tr>
						<tr>
							<td rowSpan='6'>被询问人</td>
							<td>姓名</td>
							<td colSpan='2'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name} className='beixunwenren'/>
							</td>
						</tr>
						<tr>
							<td>与案件关系</td>
							<td  colSpan='2'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Relation} className='anjianguanxi'/>
							</td>
						</tr>
						<tr>
							<td>性别</td>
							<td colSpan='2'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Sex} className='sex'/>
							</td>
						</tr>
						<tr>
							<td>年龄</td>
							<td colSpan='2'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name} className='old'/>
							</td>
						</tr>
						<tr>
							<td>身份证号</td>
							<td colSpan='2'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.IDCode} className='codeid'/>
							</td>
						</tr>
						<tr>
							<td>联系电话</td>
							<td colSpan='2'>
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
								我们是：<input type="text" style={{'width':'180px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='who' value={sessionStorage.Department}/>
								的执法人员
									<Select  style={{'width':'120px','border':'0','outline':'0'}} className='name1' value={this.state.name1} onChange={this.handleChange4.bind(this)}>
								      <Option value="1" >1</Option>
								      <Option value="2">2</Option>
								      <Option value="3" >3</Option>
								      <Option value="4">4</Option>
								   </Select>
								,


								<Select  style={{'width':'120px','border':'0','outline':'0'}} className='name2' value={this.state.name2} onChange={this.handleChange5.bind(this)}>
								      <Option value="1" >111111111111</Option>
								      <Option value="2">2</Option>
								      <Option value="3" >3</Option>
								      <Option value="4">4</Option>
								   </Select>
								
								这是我们的执法证件，执法证件号码分别是
									


									<Select  style={{'width':'180px','border':'0','outline':'0'}} className='codeid1' value={this.state.codeid1} onChange={this.handleChange6.bind(this)}>
								      <Option value="1" >111111111111</Option>
								      <Option value="5">2</Option>
								      <Option value="3" >3</Option>
								      <Option value="4">4</Option>
								   </Select>

									、
									
									<Select  style={{'width':'180px','border':'0','outline':'0'}} className='codeid2'value={this.state.codeid2} onChange={this.handleChange7.bind(this)}>
								      <Option value="1" >111111111111</Option>
								      <Option value="2">2</Option>
								      <Option value="3" >3</Option>
								      <Option value="4">4</Option>
								   </Select>

									，请你确认，现依法向你询问，请如实回答所有问题，执法人员与你有直接利害关系的，你可以申请回避。
							
								</p>
								<p style={{'textIndent':'0','textAlign':'left'}}>
									<p>问：</p>
									
									<div className='ask' style={{'width':'240px','min-height':'150px','margin':'0 auto','lineHeight':'40px','border':'0','outline':'0','textAlign':'left','textIndent':'30px'}}  contentEditable='true'>
									</div>
								</p>
								<p style={{'textIndent':'0','textAlign':'left'}}>
									<p>答：</p>
									<div className='answer' style={{'width':'240px','min-height':'150px','margin':'0 auto','lineHeight':'40px','border':'0','outline':'0','textAlign':'left','textIndent':'30px'}}  contentEditable='true'>
									</div>
								</p>
							</td>
						</tr>
						<tr>
							<td >询问人签名</td>
							<td colSpan='3'>
								

								<Select  style={{'width':'100%','border':'0','outline':'0'}} className='name3' value={this.state.name3} onChange={this.handleChange8.bind(this)}>
								      <Option value="1" >111111111111</Option>
								      <Option value="2">2</Option>
								      <Option value="3" >3</Option>
								      <Option value="4">4</Option>
								   </Select>
							</td>
						</tr>
						<tr>
							<td>时间</td>
							<td colSpan='3'>
								

								<Select  style={{'width':'100%','border':'0','outline':'0'}} className='nametime1' value={this.state.nametime1} onChange={this.handleChange9.bind(this)}>
								      <Option value="1" >111111111111</Option>
								      <Option value="2">2</Option>
								      <Option value="3" >3</Option>
								      <Option value="4">4</Option>
								   </Select>
							</td>
						</tr>

						<tr>
							<td >被询问人签名</td>
							<td colSpan='3'>
								

								<Select  style={{'width':'100%','border':'0','outline':'0'}} className='name4'value={this.state.name4} onChange={this.handleChange10.bind(this)}>
								      <Option value="1" >111111111111</Option>
								      <Option value="2">2</Option>
								      <Option value="3" >3</Option>
								      <Option value="4">4</Option>
								   </Select>
							</td>
						</tr>
						<tr>
							<td>时间</td>
							<td colSpan='3'>
								

								<Select  style={{'width':'100%','border':'0','outline':'0'}} className='nametime2' value={this.state.nametime2} onChange={this.handleChange11.bind(this)}>
								      <Option value="1" >111111111111</Option>
								      <Option value="2">2</Option>
								      <Option value="3" >3</Option>
								      <Option value="4">4</Option>
								   </Select>
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