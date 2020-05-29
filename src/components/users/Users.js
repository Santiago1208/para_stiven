import React, { Component } from 'react'
import ListUser from './ListUser'
import axios from '../../utils/axios'
import Formulario from './Form'
class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			isEditing: false,
			editingUser: null
		}

	}

	componentDidMount() {
		this.updateUsers()
	}

	handleDelete(users) {
		const { history } = this.props;
		console.log(users);
		let identificationId = users.identification
		axios.delete("/api/user/" + identificationId).then(res => {
			console.log(res);
			console.log(res.data);
		})
		let usersTemp = this.state.users;
		this.setState({
			users: usersTemp.filter(user => user.identification !== identificationId)
		})
	}

	handleOnEdit(user) {
		this.setState({
			isEditing: true,
			editingUser: user
		})
	}

	updateUsers() {
		axios.get('/api/user').then(res => {
			const users = res.data.data
			if (res.status == 200) {
				console.log(users);
				this.setState({
					users
				})
			}
		}).catch(error => {
			console.error(error);
		})
	}

	handleGoBack(editedUser) {
		console.log(editedUser);
		let tempUsers = this.state.users
		tempUsers = tempUsers.filter(user => user.identification !== editedUser.identification);
		tempUsers.push(editedUser);
		this.setState({
			isEditing: false,
			editingUser: null,
			users: tempUsers
		})
	}

	render() {
		if (this.state.isEditing) {
			return (
				<div>
					<Formulario user={this.state.editingUser} goBackHandler={this.handleGoBack.bind(this)} />
				</div>
			);
		} else {
			return (
				<div>
					<ListUser users={this.state.users} handleDelete={this.handleDelete.bind(this)} handleOnEdit={this.handleOnEdit.bind(this)} />
				</div>
			);
		}
	}
}


export default Users;


