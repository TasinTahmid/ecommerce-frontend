import React from 'react'
import Nav from '../components/nav';
import { Link } from 'react-router-dom'; 

function home() {
  return (
    <div>
      {/* <Link to='/dashboard' >dashboard</Link> */}
      <Nav />
    </div>
  )
}

export default home;