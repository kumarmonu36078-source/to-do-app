
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import DetailPage from './pages/DetailPage';
import RongPage from './pages/RongPage';
import { createContext} from 'react';
import { useState ,useEffect } from 'react';
import HeroPage from './components/HeroPage';


export const CartContext=createContext();


export default function App() {
 const[Cart ,setCart] = useState([])

 useEffect(()=>{
  const cartFromStorage = JSON.parse(localStorage.getItem('cart'))
  setCart(cartFromStorage || [])
 }, [])

  useEffect(()=>{

    
      localStorage.setItem('cart', JSON.stringify(Cart))
    

  }, [Cart])
  return (
    <>
    <CartContext.Provider value={{Cart,setCart}}>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/loginpage' element={<LoginPage/>}/> 
      <Route path='/product/:id' element={<DetailPage/>}/>
      <Route path='/cardpage' element={<CardPage/>}/>
      <Route path='*' element={<RongPage/>}/>
      
    </Routes>
    </BrowserRouter>
    </CartContext.Provider>
   
      
    </>
  )
}

