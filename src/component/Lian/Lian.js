import React from 'react'
import Header from '../Header/Header'
import './lian.css'



class Lianan extends React.Component{
	render(){
		return(
			<div className='lian'>
				<Header title='立案审批表'></Header>
				<div className='title'>
					<input type="text"/>
					<span >罚案</span>
					<span style={{'border':'0','width':'10px'}}>(</span><input type="text" style={{'border':'0','width':'40px'}}/><span style={{'border':'0','width':'10px'}}>)</span>
					
					<input type="text"/>
					<span>号</span>
				</div>
				<table>
					<tr>
						<td style={{'width':'40px'}}>案件<br/>来源</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						<td style={{'width':'40px'}}>受案<br/>时间</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
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
						<td>地址</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td>年龄</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						<td>法定<br/>代表人</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td>身份<br/>证号</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						<td>联系<br/>电话</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td>住址</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>联系<br/>电话</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
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
									 style={{'width':'90%','border':'0','outline':'0'}}>
							</textarea>
						</td>
					</tr>
					<tr>
						<td colSpan='4'>立案依据</td>
						
					</tr>
					<tr>
						<td colSpan='4'>
							<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}}>
							</textarea>
						</td>
					</tr>
					<tr>
						<td colSpan='4'>受案机构意见</td>
						
					</tr>
					<tr>
						<td colSpan='4'>
							<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}}>
							</textarea>
							<p style={{'textIndent':'60%','lineHeight':'20px'}}>签名:
								<input type="text"  style={{'width':'100px','border':'0','outline':'0'}}/>
							</p>
							<p style={{'textIndent':'60%','lineHeight':'20px'}}>时间:
								<input type="text"  style={{'width':'100px','border':'0','outline':'0'}}/>
							</p>
						</td>
					</tr>
					<tr>
						<td colSpan='4'>负责人审批意见</td>
						
					</tr>
						<td colSpan='4'>
							<textarea name="" id="" cols="30" rows='4'
									 style={{'width':'90%','border':'0','outline':'0'}}>
							</textarea>
							<p style={{'textIndent':'60%','lineHeight':'20px'}}>签名:
								<input type="text"  style={{'width':'100px','border':'0','outline':'0'}}/>
							</p>
							<p style={{'textIndent':'60%','lineHeight':'20px'}}>时间:
								<input type="text"  style={{'width':'100px','border':'0','outline':'0'}}/>
							</p>
						</td>
					<tr>
						<td>备注</td>
						<td colSpan='3'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
				</table>
				
			</div>
		)
	}
}

export default Lianan