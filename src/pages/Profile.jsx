import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";
import User from "../data/dummy/user.json";
import ProfileMenu from "../components/ProfileMenu";

function Profile() {
    return (
        <>
            <UserNavbar />
            <section className="py-20 px-40 animate-fade-in">
                <div className="grid grid-cols-4 gap-x-12">
                    <div className="col-span-3 border-[1px] border-gray-300 rounded-xl p-12 shadow-md">
                        <h2 className="mb-8 text-2xl font-semibold text-primaryColor">
                            Profil Pengguna
                        </h2>
                        <div className="flex">
                            <div className="flex flex-col items-center mx-20">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt=""
                                    className="rounded-full size-36 mb-12 shadow-md"
                                />
                                <div className="flex flex-col gap-y-6">
                                    <button className="py-2 px-8 font-semibold rounded-lg transition-colors bg-primaryColor hover:bg-hoverPrimaryColor text-white shadow-md">
                                        Ganti Profil
                                    </button>
                                    <button className="py-2 px-8 font-semibold rounded-lg transition-colors bg-deleteColor hover:bg-deleteHoverColor text-white shadow-md">
                                        Hapus Profil
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center border-[1px]">
                            </div>
                            <div className="grow flex flex-col justify-between mx-20">
                                <form className="flex flex-col gap-y-4 mb-36" id="formProfile" action="">
                                    <label htmlFor="fullname">
                                        <span className="font-semibold">Nama Lengkap</span>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            className="w-full border-gray-300 py-2 rounded-none border-b-2"
                                            value={User.fullName}
                                        />
                                    </label>
                                    <label htmlFor="fullname">
                                        <span className="font-semibold">Username</span>
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            className="w-full border-gray-300 py-2 rounded-none border-b-2"
                                            value={User.username}
                                        />
                                    </label>
                                    <label htmlFor="fullname">
                                        <span className="font-semibold">Email</span>
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="w-full border-gray-300 py-2 rounded-none border-b-2"
                                            value={User.email}
                                            disabled
                                            readOnly
                                        />
                                    </label>
                                </form>
                                <button
                                    className="w-fit transition-colors bg-primaryColor hover:bg-hoverPrimaryColor text-white rounded-md px-4 py-2"
                                >
                                    Simpan Perubahan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <ProfileMenu User={User} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile;