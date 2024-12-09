import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ContactUs from './pages/ContactUs.jsx';
import Insights from './pages/Insights.jsx';
import OurWork from './pages/OurWork.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';

import LocomotiveScroll from 'locomotive-scroll';


const root = document.getElementById('root');
const locomotiveScroll = new LocomotiveScroll();

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< App />}></Route>

        <Route path='/services' element={< Services />}></Route>
        <Route path='/contact-us' element={< ContactUs />}></Route>
        <Route path='/insights' element={< Insights />}></Route>
        <Route path='/our-work' element={< OurWork />}></Route>
        <Route path='/about-us' element={< AboutUs />}></Route>

        {/* <App /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
