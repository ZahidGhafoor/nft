import React from 'react'
import "./App.css"
import About from './Screens/About/About'
import Contact from './Screens/Contact/Contact'
import Faq from './Screens/Faq/Faq'
import Footer from './Screens/Footer/Footer'
import Home from './Screens/Home/Home'
import Navbar from './Screens/Navbar/Navbar'
import Store from './Screens/Store/Store'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Home/>
      <About/>
      <Faq/>
      <Contact/> */}
      <Store/>
      <Footer/>

    </div>
  )
}

export default App