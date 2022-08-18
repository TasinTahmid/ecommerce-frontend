import React from 'react';
import { useState, useEffect } from 'react';
import User from '../components/User';

const Users = () => {

  const [users, setUsers] = useState(null);

  useEffect(()=>{
    fetch('http://localhost:5000/api/all-users')
      .then( res => res.json())
      .then( data =>{
        setUsers(data);
      })
  },[]);

  return (
    <div>

      {
        users && users.map((u, index) => <User id = {u._id} name = {u.name} email={u.email} key={index} setUser = {setUsers} all = {users}></User>)
      }

    </div>
  )
}

export default Users;