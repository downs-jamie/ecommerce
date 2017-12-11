import React, { Component } from 'react';

class Student extends Component{
	render(){
		var students = [
			'casey',
			'jamie',
			'amir',
			'chris',
			'valerie',
			'eddie'
		];
		var studentArray = students.map((student)=>{
			return (<li>{student}</li>)
		})
		return(
			<div>
				{studentArray}
			</div>
		)
	}
}

export default Student;