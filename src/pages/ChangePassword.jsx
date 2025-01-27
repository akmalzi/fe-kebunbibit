import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import ProfileMenu from "../components/ProfileMenu";
import User from "../data/dummy/user.json";
import { useState } from "react";

function ChangePassword() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    const handleVisible = (num) => {
        switch(num){
            case 1 : 
                setIsVisible1(!isVisible1);
                break;
            case 2 : 
                setIsVisible2(!isVisible2); 
                break;
            default : 
                setIsVisible3(!isVisible3);
        }
    }

    return (
        <>
            <UserNavbar />
            <section className="p-12 md:py-20 xl:px-20 md:px-40 animate-fade-in">
                <div className="flex xl:flex-row flex-col gap-x-8">
                    <div className="w-full order-2 xl:order-1 xl:w-3/4 border-[1px] border-gray-300 rounded-xl p-12 shadow-md">
                        <h2 className="mb-8 text-2xl font-semibold text-primaryColor">
                            Ubah Password
                        </h2>
                        <div className="flex flex-col justify-between w-full">
                            <form className="flex flex-col gap-y-4 mb-12 xl:mb-36" id="formProfile" action="">
                                <label htmlFor="oldPassword" className="relative block">
                                    <span className="font-semibold">Password Lama</span>
                                    <input
                                        id="oldPassword"
                                        name="oldPassword"
                                        type={isVisible1 ? "text" : "password"}
                                        className="w-full border-gray-300 py-2 rounded-none border-b-2 pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleVisible.bind(this, 1)}
                                        className="absolute inset-y-0 right-0 flex items-center pe-3 translate-y-3"
                                    >
                                        {!isVisible1 ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>

                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>

                                        )}
                                    </button>
                                </label>
                                <label htmlFor="newPasswrd" className="relative block">
                                    <span className="font-semibold">Password Baru</span>
                                    <input
                                        id="newPasswrd"
                                        name="newPasswrd"
                                        type={isVisible2 ? "text" : "password"}
                                        className="w-full border-gray-300 py-2 rounded-none border-b-2 pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleVisible.bind(this, 2)}
                                        className="absolute inset-y-0 right-0 flex items-center pe-3 translate-y-3"
                                    >
                                        {!isVisible2 ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>

                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>

                                        )}
                                    </button>
                                </label>
                                <label htmlFor="confirmNewPassword" className="relative block">
                                    <span className="font-semibold">Konfirmasi Password Baru</span>
                                    <input
                                        id="confirmNewPassword"
                                        name="confirmNewPassword"
                                        type={isVisible3 ? "text" : "password"}
                                        className="w-full border-gray-300 py-2 rounded-none border-b-2 pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleVisible.bind(this, 3)}
                                        className="absolute inset-y-0 right-0 flex items-center pe-3 translate-y-3"
                                    >
                                        {!isVisible3 ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>

                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>

                                        )}
                                    </button>
                                </label>
                            </form>
                            <button
                                className="w-fit transition-colors bg-primaryColor hover:bg-hoverPrimaryColor text-white rounded-md px-4 py-2"
                            >
                                Simpan Perubahan
                            </button>
                        </div>
                    </div>
                    <div className="w-full order-1 mb-8 xl:order-2 xl:mb-0 xl:w-1/4">
                        <ProfileMenu User={User} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ChangePassword;