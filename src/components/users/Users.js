import React, {Component} from 'react'
import ListUser from './ListUser'
import axios from '../../utils/axios'
import { Link } from 'react-router-dom'
import Formulario from './Form'
class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:[],
            a : 0
        }
    
    }

    componentDidMount(){
        axios.get('/api/user').then(res => {
          const users = res.data.data
          if (res.status == 200) {
          
            this.setState({
              users
            })
          }
          })
    }

    handleDelete(users) {
      const { history } = this.props;
      let identificationId = users.identification
     
      axios.delete("/api/user/"+identificationId).then(res => {
        console.log(res);
        console.log(res.data);
      })
      window.location.reload(true);

     
    }

    handleOnEdit(users){
      this.setState({
        a:1
      })
    }


        render() {

          if(this.state.a === 1){
            return (
              <div>
                <Formulario   />
              </div>
            );
          }else{
            return (
              <div>
                <ListUser  users={this.state.users} handleDelete={this.handleDelete.bind(this)} handleOnEdit={this.handleOnEdit.bind(this)}/>
              </div>
            );
          }

            
          
           
        
    }
  }


export default Users;


