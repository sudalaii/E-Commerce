import { Outlet } from "react-router-dom";

import AdminNavbar from "./AdminNavbar";

function AdminNav(){
    return(
        <>
        <AdminNavbar/>
        <Outlet/>
        </>
    )
}
export default AdminNav;