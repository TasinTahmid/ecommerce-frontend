import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div>
      <nav className="nav-bar">
            <div id="portfolio"> Ecommerce Website</div>
            <input type="text" placeholder='Search...' />
            <ul className="nav-list">
              <li><Link to='/products'>Products</Link></li>
              <li><Link to='/users'>Users</Link></li>     
            </ul>

      </nav>
       <h1>It's admin-dashboard dude...</h1> 
       
    </div>
  )
}

export default AdminDashboard;