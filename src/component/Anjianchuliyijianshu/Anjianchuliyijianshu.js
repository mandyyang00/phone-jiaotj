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
						<td></td>
						</tr>
					</table>
				</div>
			</div>
		)
	}
}

export default Anjianchuliyijianshu