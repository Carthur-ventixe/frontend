import { Outlet } from "react-router-dom"
import Nav from "../components/Nav/Nav"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function MainLayout() {
  return (
    <div className="main-wrapper">
        <Nav />
        <Header />
        <main>
            <Outlet />       
        </main>
        <Footer />
    </div>
  )
}
export default MainLayout