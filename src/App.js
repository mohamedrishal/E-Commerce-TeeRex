import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useState } from 'react';


function App() {

  const [searchItem,setSearchItem] = useState("")

  return (
    <div className="App"> 

      <Header searchItem={searchItem} setSearchItem={setSearchItem} />

     <Routes>
        <Route path='/' element={<Home searchItem={searchItem} />} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Wishlist' element={<Wishlist/>} />
     </Routes>

     <Footer />

     
    </div>
  );
}

export default App;
