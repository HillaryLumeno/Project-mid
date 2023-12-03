import About from "../components/About"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import Exp from "../components/Experience"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Nav from "../components/NavBar"
import Port from "../components/Portfolio"
import Service from "../components/Service"

const HomePages = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <About/>
        <Service/>
        <Exp/>
        <Port/>
        <Contact/>
        <Blog/>
        <Footer/>
        <a href="#" className="btn back-to-top"><i className="fa fa-chevron-up" /></a>
        
</div>

  )
}

export default HomePages