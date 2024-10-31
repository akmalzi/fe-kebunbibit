import {Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage"
import Katalog from "../pages/Katalog"
import Edukasi from "../pages/Edukasi"
import Forum from "../pages/Forum"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function RootLayout(){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/katalog"} element={<Katalog/>}/>
                <Route path={"/edukasi"} element={<Edukasi/>}/>
                <Route path={"/forum"} element={<Forum/>}/>
                <Route path={"/forum"} element={<Forum/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default RootLayout