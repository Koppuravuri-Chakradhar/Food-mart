import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header  from './Components/Header.jsx'
import Navbar from  './Components/Navbar.jsx'
import CategoryCards from './Components/CategoryCards.jsx'
import Bannner from './Components/Banner.jsx'
import New_Arrivals from './Components/New_Arrivals.jsx'
import Trending from './Components/Trending.jsx'
import Chocolate from './Components/chocolate.jsx'
import Footer from './Components/Footer.jsx'
import Selling from './Components/Selling.jsx'
import Discount from './Components/Discount.jsx'
import Popular from './popular.jsx'
import Arrived from './Arrived.jsx'
import Recent from './Components/Recent.jsx'
import Phone from './Components/phone.jsx'
import People from './Components/people.jsx'
import Component from './Components/Foodmart.jsx'
import Delivery from './Components/delivery.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header/>
    <Navbar/>
    <Bannner/>
    <CategoryCards/>
    <New_Arrivals/> 
    <Trending/>
    <Chocolate/>
    <Selling/>
    <Discount/>
    <Popular/>
    <Arrived/>
    <Recent/>
    <Phone/>
    <People/>
    <Delivery/>
    <Component/>
    <Footer/>
  </StrictMode>,
)
