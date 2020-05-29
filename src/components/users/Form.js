import React , {Component} from 'react'
import axios from '../../utils/axios'

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
        name: "",
        identification:"",
        password:"",
        active:"",
        photo:"",
        }
      }
    
      handleSubmit(e){
        e.preventDefault();
        let  act = false
        if(act === this.state.Activo){
            act = true
        } 
        let usersi={
          name: this.state.name,
          identification: this.state.identification,
          password: this.state.password,
          active:act,
          photo:"funciona",
        }
        axios.put-('/api/user', usersi).then(
          res =>{
            console.log(res);
          }
        )
      }
        
    
      handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
       
      }
    
    
    
    
    
    
        render(){
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
                  <div className="form-group">
                        <label>Activo     :</label>
                        <select class="form-control form-control" placeholder="escoge estado" id="active" value={this.state.active} onChange={this.handleChange.bind(this)}  >
                            <option></option>
                            <option>Activo</option>
                            <option>No Activo</option>
                        </select>
                    </div>
              </form>
          </div>
    
    
    
    
            )
        }
}
export default Form;