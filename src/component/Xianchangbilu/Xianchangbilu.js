import React from 'react'
import Header from '../Header/Header'
import './xianchangbilu.css'



class Xianchangbilu extends React.Component{
	render(){
		return(
			<div className='xianchangbilu'>
				<Header title='现场笔录'></Header>
				<table>
					<tr>
						<td style={{'width':'40px'}}>执法<br/>地点</td>
						<td style={{'width':'33%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						<td style={{'width':'30px'}}>执法<br/>时间</td>
						<td>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td rowSpan='2' style={{'width':'40px'}}>执法<br/>人员</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						<td rowSpan='2' style={{'width':'30px'}}>执法<br/>证号</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td style={{'width':'40px'}}>记录人</td>
						<td colSpan='3' style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						
					</tr>
					<tr>
						<td colSpan='4'>现场人员基本情况</td>
					</tr>
					<tr>
						<td>姓名</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						<td>性别</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td>身份<br/>证号</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						<td>与本<br/>案关系</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td>单位<br/>及职务</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
						<td>联系<br/>电话</td>
						<td style={{'width':'35%'}}>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
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
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td colSpan='4'>主要内容</td>
					</tr>
					<tr>
						<td colSpan='4'>
							<p style={{'textAlign':'left','textIndent':'10px'}}>
								在检查中发现：<input type="text" style={{'width':'50%','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}/>
							</p>
							<textarea name="" id="" cols="30" rows="4"
									 style={{'width':'90%','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa'}}>
							</textarea>
							<p style={{'textAlign':'left','textIndent':'10px'}}>
								上述笔录我已经看过（或已向我宣读过），情况属实无误。
							</p>
							<p style={{'textAlign':'right'}}>
								现场人员签名：<input type="text" style={{'width':'100px','border':'0','outline':'0'}}/>
							</p>
							<p style={{'textAlign':'right','marginBottom':'20px'}}>
								时间：<input type="text" style={{'width':'100px','border':'0','outline':'0'}}/>
							</p>
						</td>
					</tr>
					<tr>
						<td>备注</td>
						<td colSpan='3'>
							<input type="text" style={{'width':'90%','border':'0','outline':'0'}}/>
						</td>
					</tr>
					<tr>
						<td colSpan='4'>
							<p style={{'textAlign':'left','textIndent':'10px','marginBottom':'10px'}}>
								执法人员签名：
								<br/>
								<input type="text" style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','marginLeft':'30px','lineHeight':'30px'}}/>
								<input type="text" style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','margin':' 0  20px','lineHeight':'30px'}}/>
							</p>
							<p style={{'textAlign':'left','textIndent':'10px','marginBottom':'10px'}}>
								    时间：<br/><input type="text" style={{'width':'100px','border':'0','outline':'0','borderBottom':'1px solid #aaaaaa','marginLeft':'30px','lineHeight':'30px'}}/>
							</p>
						</td>
					</tr>
				</table>
			</div>
		)
	}
}

export default Xianchangbilu