import React from 'react';
import routing from './config/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
function App() {
  return (
    <div className="App">
      {routing}
      {Home}
    </div>
  );
}

export default App;
