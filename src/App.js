import React from 'react';
import routing from './config/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Login from './components/login/Login'
function App() {
  return (
    <div className="App">
      {routing}
      {Login}
    </div>
  );
}

export default App;
