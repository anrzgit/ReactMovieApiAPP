import React from 'react';
import { AllRoutes } from '../routes/AllRoutes';
import { Header,Footer } from '../components/index';

function App() {
  return (
   <div className='app' >
    <Header/>
    <AllRoutes/>
    <Footer/>
   </div>  
  )
}

export default App;
