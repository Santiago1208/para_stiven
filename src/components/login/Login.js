import React, { Component } from 'react';
import axios from '../../utils/axios'
class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			identification: "",
			password: "",
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		let logi = {
			identification: this.state.identification,
			password: this.state.password,
		}
		axios.post('/api/user/autentificacion', logi).then(
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
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<label>Number Identification</label>
					<input type="text" className="form-control" id="identification" aria-describedby="emailHelp" placeholder="Enter Identification" value={this.state.identification} onChange={this.handleChange.bind(this)} />
				</div>
				<div className="form-group">
					<label >Password</label>
					<input type="password" className="form-control" id="password" placeholder=" Enter Password" value={this.state.password} onChange={this.handleChange.bind(this)} />
				</div>
				<div className="form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}

}


export default Login;
