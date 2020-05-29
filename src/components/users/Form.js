import React, { Component } from 'react'
import axios from '../../utils/axios'
import { Link } from 'react-router-dom'

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			identification: "",
			password: "",
			active: "",
			photo: "",
		}
	}

	componentDidMount() {
		this.setState({
			name: this.props.user.name,
			identification: this.props.user.identification,
			password: this.props.user.password,
			active: this.props.user.active,
			photo: this.props.user.photo,
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		let user = {
			name: this.state.name,
			identification: this.state.identification,
			password: this.state.password,
			active: this.state.active,
			photo: "funciona",
		}
		axios.put(`/api/user/${user.identification}`, user).then(
			res => {
				console.log(res);
			}
		).catch(error => {
			console.error(error)
		})
	}

	handleChange(e) {
		this.setState({ [e.target.id]: e.target.value });
	}

	render() {
		let user = {
			name: this.state.name,
			identification: this.state.identification,
			password: this.state.password,
			active: this.state.active,
			photo: this.state.photo,
		}
		return (
			<div className="container">

				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group">
						<label>Nombre     :</label>
						<input type="text" className="form-control" placeholder="Enter Nombre" id='name' value={this.state.name} onChange={this.handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<label>identification     :</label>
						<input disabled type="text" className="form-control" placeholder="Enter Identification" id='identification' value={this.state.identification} onChange={this.handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<label>Password     :</label>
						<input type="password" className="form-control" placeholder="Enter Password" id='password' value={this.state.password} onChange={this.handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<label>Activo     :</label>
						<select className="form-control form-control" placeholder="escoge estado" id="active" value={this.state.active} onChange={this.handleChange.bind(this)}  >
							<option></option>
							<option value="true">Activo</option>
							<option value="false">No Activo</option>
						</select>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
					<div className="form-group">
						<button type="button" className="btn btn-danger" onMouseUp={this.props.goBackHandler.bind(this, user)}>Go Back</button>
					</div>
				</form>
			</div>
		)
	}
}
export default Form;
