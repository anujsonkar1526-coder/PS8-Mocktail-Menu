import{BrowserRouter,Routes,Route,Link} from 'react-router'


import React from 'react'
import Home from './components/Home'
import Drinks from './components/Drinks'
import DrinkDetails from './components/DrinkDetails'

function App() {
  return (
    <BrowserRouter>

    <h1>Mocktail Cafe</h1>

    <Link to='/'>Home</Link>{"                              |              "}
    <Link to='/drinks'>Drinks</Link>{"                              |              "}
    <Link to='/drinks/:id'>DrinkDetails</Link>


    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/drinks' element={<Drinks/>}/>
      <Route path='/drinks/:id' element={<DrinkDetails/>}/>
      <Route path='/*' element={<h2>Page note found</h2>}/>









    </Routes>
    
    
    
    
    
    
    
    
    
    
    </BrowserRouter>
    
  )
}

export default App
