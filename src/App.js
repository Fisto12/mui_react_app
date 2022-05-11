import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/userPage/User';
import Newuser from './pages/newuser/Newuser';
import ProductList from './pages/productList/ProductList.jsx';
import Product from './pages/product/Product';
import NewProduct from './pages/newproduct/NewProduct';



function App() {
  return (
    <div >
     <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route> 
          <Route exact path='/user' element={<UserList/>}></Route> 
          <Route exact path='/user/:userId' element={<User/>}></Route> 
          <Route exact path='/newUser' element={<Newuser/>}></Route> 
          <Route exact path='/product' element={<ProductList/>}></Route> 
          <Route exact path='/product/:productId' element={<Product/>}></Route>
          <Route exact path='/newProduct' element={<NewProduct/>}></Route> 
 

        </Routes>
      </div>
    </div>
  );
}

export default App;
