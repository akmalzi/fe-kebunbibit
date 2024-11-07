import { Link } from "react-router-dom"
import imgLogo from "/assets/logo-app.png"
import TelusuriButton from "./TelusuriButton"

function Navbar(){
    return (
        <>
            <nav className="flex w-full h-fit py-4 px-[18px] justify-between items-center sticky top-0 z-50 bg-white">
                <img src={imgLogo} alt="" width="136px"/>
                <div>
                    <ul className="flex">
                        <li>
                            <Link className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primary-600" to={"/"}>Beranda</Link>
                        </li>
                        <li>
                            <Link className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primary-600" to={"/katalog"}>Katalog</Link>
                        </li>
                        <li>
                            <Link className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primary-600" to={"/edukasi"}>Edukasi</Link>
                        </li>
                        <li>
                            <Link className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primary-600" to={"/forum"}>Forum</Link>
                        </li>
                        <li>
                            <TelusuriButton/>
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