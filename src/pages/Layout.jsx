import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Components/Navbar";
//import HomePage from "../Home/Pages/HomePage"



function Layout(){
    return(
        <>
          <Navbar />
          {/* <HomePage /> */}
          <Outlet />

        </>
    )
}
export default Layout;