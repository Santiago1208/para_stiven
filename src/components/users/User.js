import React, { Component } from 'react'

class User extends Component {

	handleOnEdit(user) {
		this.props.handleOnEdit(user)
	}

	handleDelete(user) {
		this.props.handleDelete(user)
	}

	render() {
		let user = this.props.user;
		return (
			<tr>
				<td>{user.name}</td>
				<td>{user.identification}</td>
				<td>{user.photo}</td>
				<td>{user.active.toString()}</td>
				<td><button type="submit" className="btn btn-sm btn-danger " onClick={this.handleDelete.bind(this, user)}>Eliminar</button></td>
				<td><button type="submit" className="btn btn-primary" onClick={this.handleOnEdit.bind(this, user)}>Editar</button></td>
			</tr>
		)
	}
}
export default User;
