import { Link } from 'react-router'

import React from 'react'

function Home() {
  return (
    <div>
        <h1>Welcome to Mocktail Cafe</h1>
         <p>Find your favourite drinks here</p>

         <Link to='/drinks'><button>See Menu</button></Link>
      
    </div>
  )
}

export default Home
