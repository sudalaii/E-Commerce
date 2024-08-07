import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";

function HomeNav(){
    return(
        <>
        <NavBar />
        <Outlet/>
        </>
    )
}
export default HomeNav;