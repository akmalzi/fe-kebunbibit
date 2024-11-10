import {Routes, Route} from "react-router-dom"
import Profile from "../pages/Profile"
import ChangePassword from "../pages/ChangePassword"

function ProfileLayout(){
    return(
        <Routes>
            {/* placeholder */}
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/ubah-password" element={<ChangePassword/>} />
        </Routes>
    )
}

export default ProfileLayout