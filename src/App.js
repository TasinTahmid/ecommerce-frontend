import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './components/nav';
import Home from './Pages/home';
import Login from './Pages/login';
import Register from './Pages/register';
import Dashboard from './Pages/dashboard';
import AdminDashboard from './Pages/admin-dashboard';
import Products from './Pages/Products';
import Users from './Pages/Users';

const App = () =>{
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = '/' exact element={<Home/>} />
        <Route path = '/Home' exact element={<Home/>} />
        <Route path = '/login' exact element={<Login/>} />
        <Route path = '/register' exact element={<Register/>} />
        <Route path = '/dashboard' exact element={<Dashboard/>} />
        <Route path = '/admin-dashboard' exact element={<AdminDashboard/>}/>
        <Route path = 'products' exact element={ <Products />}/>
        <Route path = 'users' exact element={<Users/>}/>
          
       
       </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;