import React, { Component } from 'react';
import '../styles/nav.css';

export class nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
            <div id="portfolio"> Ecommerce Website</div>
            <ul className="nav-list">
              <li><a href='http://localhost:3000/login'>Login</a></li>
              <li><a href='http://localhost:3000/Register'>Register</a></li>     
            </ul>
        </nav>
      </div>
    )
  }
}

export default nav;