import Footer from "./components/Footer"
import Clients from "./components/Home/Clients"
import ContactUs from "./components/Home/ContactUs"
import Home from "./components/Home/Home"
import Services from "./components/Home/Services"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Clients />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
