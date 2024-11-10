import {Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage"
import Katalog from "../pages/Katalog"
import DetailKatalog from "../pages/DetailKatalog"
import Edukasi from "../pages/Edukasi"
import Forum from "../pages/Forum"
import Navigasi from "../pages/Navigasi"
import Fasilitas from "../pages/Fasilitas"
import DetailForum from "../pages/DetailForum"


function RootLayout(){
    return(
        <>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/katalog"} element={<Katalog/>}/>
                <Route path="/katalog/:parameter" element={<DetailKatalog />} />
                <Route path={"/edukasi"} element={<Edukasi/>}/>
                <Route path={"/forum"} element={<Forum/>}/>
                <Route path={"/forum/:parameter"} element={<DetailForum />}/>
                <Route path={"/navigasi"} element={<Navigasi/>}/>
                <Route path={"/fasilitas"} element={<Fasilitas/>}/>
            </Routes>
        </>
    )
}

export default RootLayout