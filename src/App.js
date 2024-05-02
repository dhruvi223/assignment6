import logo from './logo.svg';
import './App.css';
import { useAuth } from './AuthContext';
import {BrowserRouter, Routes, Switch, Route, Link, NavLink } from 'react-router-dom';
import SignIn from './views/authentication/SignIn';
import Cart from './views/Cart'
import { Toaster, toast } from "react-hot-toast";
import ProductList from "./views/ProductList";
import Navbar from './components/Navbar';

function App() {
  // const {isloggedIn, logout} = useAuth();
  // const users = [
  //   {
  //     "user_id": 1,
  //     "first_name": "andrew",
  //     "last_name": "user1",
  //     "email": "andrew@test.com",
  //     "password": "andrew@123"
  // },{
  //     "user_id": 2,
  //     "first_name": "mike",
  //     "last_name": "user2",
  //     "email": "mike@test.com",
  //     "password": "mike@123"
  // },{
  //     "user_id": 3,
  //     "first_name": "jeet",
  //     "last_name": "user3",
  //     "email": "jeet@test.com",
  //     "password": "jeet@123"
  // }

  // ]
  // localStorage.setItem('users', JSON.stringify(users));

  // const products = [
  //   {
  //     id: 'p1',
  //     price:126,
  //     title: 'Man Perfume',
  //     description: 'Denver - Hamilton',
  //   },
  //   {
  //     id: 'p2',
  //     price: 125,
  //     title: 'Man Deo',
  //     description: 'Navia - 24 hours refreshment',
  //   },
  // ];
  
  // localStorage.setItem('products', JSON.stringify(products));


  
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
      <Toaster/>
      <Routes>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/signin" element = {<SignIn/>}/>
        <Route path = "/product-list" element= {<ProductList/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
