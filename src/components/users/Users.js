import React, {Component} from 'react'
import ListUser from './ListUser'
import axios from '../../utils/axios'
import { Link } from 'react-router-dom'
class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
     
    }

    componentDidMount(){
        axios.get('/api/user').then(res => {
          let use = null
          if (res.status == 200) {
            console.log(res.data)
            this.setState({
              users: res.data
            })
          }
          })
    }

    handleOnEdit(users) {
      console.log(this.state.users)
    
    }


        render() {
      if(this.state.users = null){
            return (
              <div>
                <ListUser  users={this.state.users} onEdit={this.handleOnEdit.bind(this)} />
              </div>
            );
          }
            return (
              <div>
                <ListUser />
              </div>
            );
        
    }
  }


export default Users;


