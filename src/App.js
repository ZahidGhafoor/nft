import React, { useRef } from 'react'
import { Route, Switch } from 'react-router-dom'
import "./App.css"
import About from './Screens/About/About'
import CardDetails from './Screens/CardDetails/CardDetails'
import Contact from './Screens/Contact/Contact'
import Faq from './Screens/Faq/Faq'
import Footer from './Screens/Footer/Footer'
import Home from './Screens/Home/Home'
import LinkBar from './Screens/LinkBar/LinkBar'
import Navbar from './Screens/Navbar/Navbar'
import Test from './Screens/Questions/Test'
import Store from './Screens/Store/Store'

const App = () => {

  const home = useRef(null)
  const about = useRef(null)
  const faq = useRef(null)
  const contacts = useRef(null)

  const homescroll = () => home.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const aboutscroll = () => about.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const faqscroll = () => faq.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const contactscroll = () => contacts.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const HomeGroup = () => {
    return (
      <>
        <Home home={home} />
        <LinkBar
          homescroll={homescroll}
          aboutscroll={aboutscroll}
          faqscroll={faqscroll}
          contactscroll={contactscroll}
        />
        <About about={about} />
        <Faq faq={faq} />
        <Test />
        <Contact contact={contacts} />
      </>
    )
  }


  return (
    <div>

      <Switch>
        <Route exact  path={["/" , "/vison" , "/mission" , "/contact"]} component={HomeGroup} />
        <Route path="/store" component={Store} />
        <Route path="/nft-deatils" component={CardDetails} />
        {/* <Route path="/products" component={Product} /> */}
      </Switch>
      {/* <CardDetails /> */}
      <Footer />

    </div>
  )
}

export default App