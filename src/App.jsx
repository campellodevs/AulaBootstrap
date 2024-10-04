import Header from './components/Nav/Header'
import { Outlet } from "react-router-dom"
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
