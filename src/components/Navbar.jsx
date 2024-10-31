import { Link } from "react-router-dom"
import imgLogo from "/assets/logo-app.png"

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
                            <Link className="mx-5 text-lg transition duration-200 ease-in text-black hover:text-primaryColor" to={"/"}>Telusuri</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-[136px] bg-slate-300 text-right">
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar