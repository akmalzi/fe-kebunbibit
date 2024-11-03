import { Routes, Route } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage"

function LoginLayout(){
    return(
        <>
            <Routes>
                <Route path={"/register"} element={<RegisterPage/>}/>
            </Routes>
        </>
    )
}

export default LoginLayout