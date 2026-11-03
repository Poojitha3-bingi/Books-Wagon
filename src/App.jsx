
import './App.css';

import LandingPage from './LandingPage.jsx';


import AdminDashboard from "./Admin/ADashboard.jsx";
import AHome from './Admin/AHome.jsx';
import ManageBooks from './Admin/ManageBooks.jsx';
import AddBooks from './Admin/AddBooks.jsx';
import Update from "./Admin/Update.jsx";
import ViewAllOrders from './Admin/viewAllOrders.jsx';
import ViewAllUsers from './Admin/ViewAllUsers.jsx';
import LogOut from './Admin/LogOut.jsx';


import UserDashboard from "./User/UDashboard.jsx";
import ViewBooks from './User/ViewBooks.jsx';
import BookDetail from './User/BookDetail.jsx';
import UHome from './User/UHome.jsx';
import Cart from './User/Cart.jsx';
import Wishlist from './User/Wishlist.jsx';
import Order from './User/Order.jsx';
import ULogOut from "./User/ULogOut.jsx";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

       
        <Route path="/" element={<LandingPage />} />

        <Route path="/Admin" element={<AdminDashboard />}>
          <Route path="ahome" element={<AHome />} />
          <Route path="amanagebooks" element={<ManageBooks />} />
           <Route path = 'Update/:cid' element = {<Update></Update>}/>
          <Route path="aaddbooks" element={<AddBooks />} />
          <Route path = "viewallusers" element = {<ViewAllUsers></ViewAllUsers>}/>
          <Route path="viewallorders" element={<ViewAllOrders />} />
          <Route path="logout" element={<LogOut />} />
        </Route>

     
        <Route path="/User" element={<UserDashboard />}>
          <Route path="uhome" element={<UHome />} />
          <Route path="uviewBooks" element={<ViewBooks />} />
          <Route path="detail/:id" element={<BookDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="orders" element={<Order />} />
          <Route path="ulogout" element={<ULogOut />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
