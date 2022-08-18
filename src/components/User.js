import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/user.css'

const User = ({ id,name, email, setUser, all}) => {
  const navigate = useNavigate();
  const deleteUser = () =>{
    fetch('http://localhost:5000/api/users/'+ id, {
      method: 'DELETE'
    }).then(() => {
      const newUsers = all.filter((u) => u._id!=id);
      setUser(newUsers);
      // navigate('/');
    })
  }

  return (
    <div className='userComponent'>
      <ul>
        <li style={{listStyle: "none"}}>name: {name}</li>
        <li style={{listStyle: "none"}}>email: {email}</li>
      </ul><br />
      <button onClick={deleteUser}>Delete</button>
    </div>
  )
}

export default User