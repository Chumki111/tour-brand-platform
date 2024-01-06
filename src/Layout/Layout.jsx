import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";



const Layout = () => {
    return (
        <div className="">
            
            <Navbar/>
            <div className="min-h-screen">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;