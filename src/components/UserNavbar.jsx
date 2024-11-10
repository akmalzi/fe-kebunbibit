import { Link } from "react-router-dom"
import imgLogo from "/assets/logo-app.png"
import TelusuriButton from "./TelusuriButton"
import User from "../data/dummy/user.json"

function UserNavbar(){
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
                            <TelusuriButton/>
                        </li>
                    </ul>
                </div>
                <div className="w-[136px] text-center me-4">
                    <Link to={"/profile"} className="flex items-center gap-x-4">
                        <img 
                            src="https://via.placeholder.com/150"
                            alt="Photo Profile"
                            className="rounded-full size-12"
                        />
                        <p className="text-lg ">{User.username}</p>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default UserNavbar