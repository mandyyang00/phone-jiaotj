import React from 'react'
import './xunwenbilu.css'
import Header from '../Header/Header'
import {url} from '../config'
import axios from 'axios'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


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
			time:`${year}年${month}月${day}日${hour}时${minute}`
		}
	}
	componentWillMount(){
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
			data:res.data
		})
	}
	onOkDown(){
		let place=document.querySelector('.place').value
		let askman=document.querySelector('.askman').value
		let whiteman=document.querySelector('.whiteman').value
		let ask=document.querySelector('.ask').value
		let answer=document.querySelector('.answer').value
		let nametime1=document.querySelector('.nametime1').value
		let nametime2=document.querySelector('.nametime2').value
		let about=document.querySelector('.about').value
		let data={
			
		}
		axios.post(`${url}/`,data)
			.then(res=>console.log(res))
			.catch(err=>console.log(err))

	}

	render(){
		let {data}=this.state
		// console.log(data)
		return(
			
			<div className="xunwenbilu" >
				<Header title='询问笔录'></Header>
				{!data ? 'jiazai' :
				<div>
					<div className='clearfix'>
						<p style={{'float':'right'}}>
						第<input type="text" style={{'width':'50px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className=''/>
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
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name}/>
							</td>
							<td>与案件关系</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Relation}/>
							</td>
						</tr>
						<tr>
							<td>性别</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Sex}/>
							</td>
							<td>年龄</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Name}/>
							</td>
						</tr>
						<tr>
							<td>身份证号</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.IDCode}/>
							</td>
							<td>联系电话</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.TelNo}/>
							</td>
						</tr>
						<tr>
							<td>工作单位及职务</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Relation}/>
							</td>

						</tr>
						<tr>
							<td>联系地址</td>
							<td colSpan='3'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} value={data.Address}/>
							</td>

						</tr>
						<tr>
							<td colSpan='4'>
								<p style={{'textIndent':'0','textAlign':'left'}}>
								我们是：<input type="text" style={{'width':'80px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='who'/>
								的执法人员<input type="text" style={{'width':'80px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='name'/>
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
							<td colSpan='2'>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}} className='nametime1'/>
							</td>
							
							<td colSpan='2'>
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
				<Link to='lian'><button onClick={this.onOkDown.bind(this)}>立案申请表</button></Link>
				<button>立案申请表</button>
					
					
			</div>
		)
	}
}

const mapStateToProps = (state) =>({
  xianchangId: state.xianchangId.xianchangId
})
export default connect(mapStateToProps)(Xunwenbilu)