import React, {Component} from 'react';

class Home extends Component{


    render(){
        return (

          <div className="container">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
          <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
              <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <ul class="navbar-nav mr-auto my-2 my-lg-0 " >
                      <li class="nav-item">
                          <a class="navbar-brand fas fa-home" href="/">    Home</a>
                      </li>
                  </ul>
                  <div>
                      <ul class="navbar-nav mr-auto my-5 my-lg-0">
                          <li class="nav-item">
                              <a class="navbar-brand fas fa-book" href="/registrarme">    Registrarme</a>
                          </li>
                          <li class="nav-item">
                              <a class="navbar-brand fas fa-key" href="/acceder">    Acceder</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          </div>
          
      )
    }
}

export default Home;