import React, {Component} from 'react'
import User from './User'
class ListUser extends Component{

   

    handleOnEdit(user){
        console.log(user)
        this.props.handleOnEdit(user)
    }


        render() {
            let userList = this.props.users.map(
                (item) =>
                    (<User key={item.id} user={item}  handleOnEdit={this.handleDelete.bind(this)} />)
            );
        
    
            console.log(this.props.users);
            return (
                <div>
                <table className="table">
                    <thead>
                        <tr>

                            <th scope="col">name</th>
                            <th scope="col">identification</th>
                            <th scope="col">photo</th>
                            <th scope="col">activo</th>
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