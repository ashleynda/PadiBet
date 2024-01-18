
import React from 'react';
import './App.css';
import Signin from './component/Signin';
import Welcome from './component/Welcome';
import Games from './component/Games';
import Registration from './component/Registration';
// import Games4 from './component/Games4';
// import Bet1 from './component/Bet1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />}/> 
          <Route path='/registration' element={<Registration />}/>  
          <Route path='/signin' element={<Signin />}/>  
          <Route path='/games' element={<Games />}/>
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}
{/* p<img src={logo} alt="Logo" className="App-logo"/> */}


export default App;



// import React from 'react';
// import './App.css';
// import Signin from './component/Signin';
// import Welcome from './component/Welcome';
// import Games from './component/Games';
// import Registration from './component/Registration';
// import Games4 from './component/Games4';
// import Bet1 from './component/Bet1';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Welcome />}/>    
//           {/* <Route path='registration' element={<Registration />}/>  
//           <Route path='/signin' element={<Signin />}/> */}
//         </Routes>
//       </BrowserRouter>
      
//       {/* <Signin /> */}
//       {/* <Registration />
//       <Games /> 
//       <Games />
//       <Games />
//       <Games4 />
//       <Bet1 /> */}
{/* <Welcome />
      <Signin />
      <Registration />
      <Games /> 
      <Games />
      <Games />
      <Games4 />
      <Bet1 /> */}
     
//     </div>
//   );
// }
// {/* p<img src={logo} alt="Logo" className="App-logo"/> */}