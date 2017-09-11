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
const { MonthPicker, RangePicker } = DatePicker


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
    		whiteman:'',
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
			seconds:`${value}`,
			visibal:true
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
			name4:`${value}`
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
		this.setState({
			startValue:res.data.BetweenBegin,
    		endValue:res.data.BetweenEnd,
    		seconds:res.data.Times,
    		askman:res.data.Asker1,
			whiteman:res.data.Asker2,
    		name1:res.data.Asker1Sign,
    		name2:res.data.Asker2Sign,
    		codeid1:res.data.Certificates1,
    		codeid2:res.data.Certificates2,
    		name3:res.data.Asker1Sign,
    		nametime1:res.data.AskerSignTime,
    		name4:res.data.InvolvedSign,
    		nametime2:res.data.InvolvedSignTime

		})
		// document.querySelector('.time1 .ant-input').value=this.state.BetweenBegin
		// document.querySelector('.time2 .ant-input').value=this.state.BetweenEnd
		document.querySelector('.askman').value=this.state.Asker1
		document.querySelector('.whiteman').value=this.state.Asker2
		document.querySelector('.name1').value=this.state.Asker1Sign
		// document.querySelector('.start').value=res.data.BetweenBegin
		// document.querySelector('.start').value=res.data.BetweenBegin
		// document.querySelector('.start').value=res.data.BetweenBegin
		// document.querySelector('.start').value=res.data.BetweenBegin
		// document.querySelector('.start').value=res.data.BetweenBegin
		// document.querySelector('.start').value=res.data.BetweenBegin
		// document.querySelector('.start').value=res.data.BetweenBegin
		// document.querySelector('.start').value=res.data.BetweenBegin


		document.querySelector('.place').value=res.data.Place
		document.querySelector('.who').value=res.data.Department
		document.querySelector('.ask').value=res.data.AskContent 
		document.querySelector('.answer').value=res.data.AnswerContent
		document.querySelector('.about').value=res.data.Memo

	}
	onOkDown(){
		let seconds=this.state.seconds
		let start=this.state.startValue
		let end=this.state.endValue
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
		let name3=this.state.name3
		let name4=this.state.name4
		let nametime1=document.querySelector('.time1 .ant-input').value
		let nametime2=document.querySelector('.time2 .ant-input').value
		let about=document.querySelector('.about').value
		let data={
			BetweenBegin:start,
			BetweenEnd:end,
			Times:seconds,
			Place:place,
			Asker1:askman,
			Asker2:whiteman,
			Department:sessionStorage.Department,
			Asker1:name1,
			Asker2:name2,
			Certificates1:codeid1,
			Certificates2:codeid2,
			AskContent:ask,
			AnswerContent:answer,
			Asker1Sign:name3,
			AskerSignTime:nametime1,
			InvolvedSign:name4,
			InvolvedSignTime:nametime1,
			Memo:about,
			InvolvedID:sessionStorage.xianchangId
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
				<h2>询问笔录</h2>
				
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
								

								<DatePicker style={{'width':'99%','border':'0','outline':'0'}} className='time1'/>
							</td>
						</tr>

						<tr>
							<td >被询问人签名</td>
							<td colSpan='3'>
								

								<Select  style={{'width':'100%','border':'0','outline':'0'}} className='name4'value={this.state.name4} onChange={this.handleChange9.bind(this)}>
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
								

								<DatePicker style={{'width':'99%','border':'0','outline':'0'}} className='time2'/>
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

			<div style={{'marginTop':'20px'}} className='clearfix'>
				
					<Link to='lian'><button  style={{'float':'left','marginLeft':'20px'}} onClick={this.onOkDown.bind(this)}>立案申请表</button></Link>
					 
				
				
				<Link to='/xianchangbilu'><button style={{'float':'right','marginRight':'20px'}}>返回上一级</button></Link>
					
			</div>		
			</div>
		)
	}
}

const mapStateToProps = (state) =>({
  xianchangId: state.xianchangId.xianchangId
})
export default connect(mapStateToProps)(Xunwenbilu)