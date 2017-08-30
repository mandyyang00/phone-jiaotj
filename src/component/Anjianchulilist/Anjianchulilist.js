import React from 'react'
import Header from '../Header/Header'
import './anjianchulilist.css'
import {Link } from 'react-router-dom'
import {url} from '../config'
import axios from 'axios'


class Anjianchulilist extends React.Component{
	render(){
		return(
			<div className='anjianchulilist'>
				<Header></Header>
				<h1>案件处理决定列表</h1>
				<div className='content'>
					<table>
						<thead>
							<tr>
								<td style={{'width':'20%'}}>序号</td>
								<td style={{'width':'59.5%'}}>案件编号</td>
								<td style={{'width':'40%'}}>申请时间</td>
								
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td><Link to='/anjianchuliyijianshu'>1</Link></td>
								<td>1</td>
								
							</tr>
						</tbody>
					</table>

				</div>

			 </div>
		)
	}
}

export default Anjianchulilist