import React from 'react'
import './anjianchuliyijianshu.css'
import {Link } from 'react-router-dom'
import {url} from '../config'
import axios from 'axios'
import Header from '../Header/Header'



class Anjianchuliyijianshu extends React.Component{
	render(){
		return(
			<div className='anjianchuliyijianshu'>
				<Header></Header>
				<h1>案件处理意见书</h1>	
				<div className='content'>
					<table>
						<tr>
							<td style={{'width':'40px'}}>案由</td>
							<td style={{'width':'35%'}}>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
							</td>
							<td style={{'width':'40px'}}>案件调查人员</td>
							<td style={{'width':'35%'}}>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
							</td>
						</tr>
						<tr>
							<td colSpan='4'>当事人</td>
						</tr>
						<tr>
							<td colSpan='2'>公民</td>
							<td colSpan='2'>法人或其他组织</td>
						</tr>
						<tr>
							<td>姓名</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
							</td>
							<td>名称</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
							</td>
						</tr>
						<tr>
							<td>性别</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
							</td>
							<td>法定代表人</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
							</td>
						</tr>
						<tr>
							<td>年龄</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
							</td>
							<td>地址</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
							</td>
						</tr>
						<tr>
							<td>住址</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
							</td>
							<td>联系电话</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
							</td>
						</tr>
						<tr>
							<td>职业</td>
							<td>
								<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
							</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
						 	<td colSpan='4'>案件调查经过及违法事实</td>
						</tr>
						<tr>
						 	<td colSpan='4'>
						 		<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}} className='shouanyijian' readOnly='readonly'>
								</textarea>
						 	</td>
						</tr>
						<tr>
						 	<td colSpan='4'>调查结论和处理意见</td>
						</tr>
						<tr>
						 	<td colSpan='4'>
						 		<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}} className='shouanyijian' readOnly='readonly'>
								</textarea>
								<p style={{'textIndent':'50%','lineHeight':'20px'}}>签名:
									<input type="text"  style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='name1'readOnly='readonly'/>
								</p>
								<p style={{'textIndent':'50%','lineHeight':'20px'}}>时间:
									<input type="text"  style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='time2'readOnly='readonly'/>
								</p>
						 	</td>
						</tr>
						<tr>
						 	<td colSpan='4'>法制工作机构审核意见</td>
						</tr>
						<tr>
						 	<td colSpan='4'>
						 		<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}} className='shouanyijian' readOnly='readonly'>
								</textarea>
								<p style={{'textIndent':'50%','lineHeight':'20px'}}>签名:
									<input type="text"  style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='name1'readOnly='readonly'/>
								</p>
								<p style={{'textIndent':'50%','lineHeight':'20px'}}>时间:
									<input type="text"  style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='time2'readOnly='readonly'/>
								</p>
						 	</td>
						</tr>
						<tr>
						 	<td colSpan='4'>行政执法机关意见</td>
						</tr>
						<tr>
						 	<td colSpan='4'>
						 		<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}} className='shouanyijian' readOnly='readonly'>
								</textarea>
								<p style={{'textIndent':'50%','lineHeight':'20px'}}>签名:
									<input type="text"  style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='name1'readOnly='readonly'/>
								</p>
								<p style={{'textIndent':'50%','lineHeight':'20px'}}>时间:
									<input type="text"  style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}} className='time2'readOnly='readonly'/>
								</p>
						 	</td>
						</tr>
					</table>
				</div>
				<Link to='/list'><button>返回主页</button></Link>
			</div>
		)
	}
}

export default Anjianchuliyijianshu