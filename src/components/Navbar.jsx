import { Link } from "react-router-dom"
import imgLogo from "/assets/logo-app.png"
import PopupButton from "./PopUpButton"

function Navbar(){
    return (
        <>
            <nav className="flex w-full h-fit py-4 px-[18px] justify-between items-center">
                <img src={imgLogo} alt="" width="136px"/>
                <div>
                    <ul className="flex">
                        <li>
                            <Link className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primaryColor" to={"/"}>Beranda</Link>
                        </li>
                        <li>
                            <Link className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primaryColor" to={"/katalog"}>Katalog</Link>
                        </li>
                        <li>
                            <Link className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primaryColor" to={"/edukasi"}>Edukasi</Link>
                        </li>
                        <li>
                            <Link className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primaryColor" to={"/forum"}>Forum</Link>
                        </li>
                        <li>
                            <PopupButton/>
                        </li>
                    </ul>
                </div>
                <div className="w-[136px] text-center">
                    <Link to="/login" className="py-2 px-5 border-[2px] border-black rounded-full">Login</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar