
import React from 'react';
import './App.css';
import Signin from './component/Signin';
import Welcome from './component/Welcome';
import Games from './component/Games';
import Registration from './component/Registration';
import Games4 from './component/Games4';
import Bet1 from './component/Bet1';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Signin />
      <Registration />
      <Games /> 
      <Games />
      <Games />
      <Games4 />
      <Bet1 />
     
    </div>
  );
}
{/* p<img src={logo} alt="Logo" className="App-logo"/> */}


export default App;
