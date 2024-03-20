import { Outlet } from "react-router-dom"
import Navbar from "../NavBar/Navbar"

const MaterLayOut = () => {
    return (
    <>
    <Navbar/>
    <Outlet/>
    </>
    )
}

export default MaterLayOut