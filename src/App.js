import React from 'react'
import {BrowserRouter,Routes,Router,Route} from 'react-router-dom'
import Listing from './Listing';
import Add from './Add'
import Details from './Details';
import Edit from './Edit';
const App = () => {
  return (
 <>
 <BrowserRouter>
    <Routes>
      
        
        <Route path='/' element={<Listing/>} />
        <Route path='/create' element={<Add/>} />
        <Route path='/employee/Edit/:id' element={<Edit/>} />
        <Route path='/employee/details/:id' element={<Details/>} />
    </Routes>
 </BrowserRouter>

 </>
  )
}

export default App