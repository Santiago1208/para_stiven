import React, { Component } from 'react'
import User from './User'
class ListUser extends Component {



	handleOnEdit(user) {
		this.props.handleOnEdit(user)
	}
	handleDelete(user) {
		this.props.handleDelete(user);
	}



	render() {
		let userList = this.props.users.map(
			(user) =>
				(<User key={user.identification} user={user} handleOnEdit={this.handleOnEdit.bind(this)} handleDelete={this.handleDelete.bind(this)} />)
		);
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">name</th>
							<th scope="col">identification</th>
							<th scope="col">photo</th>
							<th scope="col">activo</th>
							<th scope="col">eliminar</th>
							<th scope="col">editar</th>
						</tr>
					</thead>
					<tbody>
						{userList}
					</tbody>
				</table>
			</div>
		);
	}

}

export default ListUser;
