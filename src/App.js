import React from 'react'
import "./App.css"
import About from './Screens/About/About'
import CardDetails from './Screens/CardDetails/CardDetails'
import Contact from './Screens/Contact/Contact'
import Faq from './Screens/Faq/Faq'
import Footer from './Screens/Footer/Footer'
import Home from './Screens/Home/Home'
import Navbar from './Screens/Navbar/Navbar'
import Question from './Screens/Question/Question'
import Store from './Screens/Store/Store'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <About />
      <Contact />
      <Home />

      <Faq />

    <Store /> 
    */}
    {/* <CardDetails /> */}
    <Question/>
      <Footer />

    </div>
  )
}

export default App