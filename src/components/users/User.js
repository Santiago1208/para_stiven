import React, {Component} from 'react'

class User extends Component{

    handleOnEdit(user){
     
    }

    handleDelete(){
        
    }

    render(){
        let user = this.props.users;
        return(
            <tr>
                            <td > {user.name}</td>
                            <td >{user.identification}</td>
                            <td >{user.photo}</td>
                            <td >{user.active}</td>
                            <td ><button onClick = {this.handleOnEdit.bind(this)}>>Editar</button></td>
                            <td ><button onClick = {this.handleDelete.bind(this)}>Eliminar</button></td>
            </tr>
        )
    }
}

export default User;