import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"

function LoginLayout(){
    return(
        <>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
            </Routes>
        </>
    )
}

export default LoginLayout