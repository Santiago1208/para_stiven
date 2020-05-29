import React, { Component } from 'react'
import axios from '../../utils/axios'

class FormUser extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: "",
			identification: "",
			password: "",
			photo: "",
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		let usersi = {
			name: this.state.name,
			identification: this.state.identification,
			password: this.state.password,
			active: true,
			photo: "funciona",
		}
		axios.post('/api/user', usersi).then(
			res => {
				console.log(res);
			}
		)
	}

	handleChange(e) {
		this.setState({ [e.target.id]: e.target.value });
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group">
						<label>Nombre     :</label>
						<input type="text" className="form-control" placeholder="Enter Nombre" id='name' value={this.state.name} onChange={this.handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<label>identification     :</label>
						<input type="text" className="form-control" placeholder="Enter Identification" id='identification' value={this.state.identification} onChange={this.handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<label>Password     :</label>
						<input type="password" className="form-control" placeholder="Enter Password" id='password' value={this.state.password} onChange={this.handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
		)
	}

}

export default FormUser;

