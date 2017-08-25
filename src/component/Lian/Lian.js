import React from 'react'
import Header from '../Header/Header'



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
						<td>案件来源</td>
						<td></td>
						<td>受案时间</td>
						<td></td>
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
						<td></td>
						<td>名称</td>
						<td></td>
					</tr>
					<tr>
						<td>性别</td>
						<td></td>
						<td>地址</td>
						<td></td>
					</tr>
					<tr>
						<td>年龄</td>
						<td></td>
						<td>法定代表人</td>
						<td></td>
					</tr>
					<tr>
						<td>身份证号</td>
						<td></td>
						<td>联系电话</td>
						<td></td>
					</tr>
					<tr>
						<td>住址</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>姓名</td>
						<td></td>
						<td>联系电话</td>
						<td></td>
					</tr>
					<tr>
						<td colSpan='4'>案件基本情况</td>
						<td colSpan='4'></td>
					</tr>
					<tr>
						<td colSpan='4'>立案依据</td>
						<td colSpan='4'></td>
					</tr>
					<tr>
						<td colSpan='4'>受案机构意见</td>
						<td colSpan='4'></td>
					</tr>
					<tr>
						<td colSpan='4'>负责人审批意见</td>
						<td colSpan='4'></td>
					</tr>
					<tr>
						<td>备注</td>
						<td colSpan='3'></td>
					</tr>
				</table>
				
			</div>
		)
	}
}

export default Lianan