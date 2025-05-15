import { Outlet } from "react-router-dom"
import Nav from "../components/nav/Nav"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

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