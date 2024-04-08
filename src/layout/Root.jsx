
import {Outlet} from "react-router-dom";
import Navbar from './../pages/Navbar';
import Footer from './../pages/Footer';


const Root = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="lg:min-h-[calc(100vh - 450px)]"></div>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;