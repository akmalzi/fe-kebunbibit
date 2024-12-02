import PropTypes from "prop-types";

function PopUpDiskusi(props) {
    return (
        <div
            className="w-full h-screen fixed top-0 left-0 z-50 bg-black bg-opacity-50"
        >
            <div className="w-2/4 h-fit bg-[#F8F9FA] rounded-md overflow-hidden shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex justify-between bg-primaryColor py-4 px-8">
                    <span className="text-white text-xl">
                        Diskusi Baru
                    </span>
                    <button onClick={props.onClick}>
                        <svg className="size-6 fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="py-12 px-8">
                    <form className="flex flex-col gap-y-6" action={props.onSubmit}>
                        <label htmlFor="judulDiskusi">
                            Judul
                            <input className="w-full p-2 rounded-md" type="text" name="judul" id="judulDiskusi" placeholder="Tulis Judul Diskusi" />
                        </label>
                        <label htmlFor="deskripsiDiskusi">
                            Deskripsi
                            <textarea
                                className="w-full p-2 rounded-md"
                                rows={5}
                                name="deskripsi"
                                id="deskripsiDiskusi"
                                placeholder="Tambahkan sebanyak mungkin detail, dengan memberikan detail Anda akan memudahkan orang lain untuk membalas."
                                style={{ resize: "none" }}
                            />
                        </label>
                        <label htmlFor="Tag">
                            Tag
                            {/* TODO: */}
                        </label>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="w-fit px-4 bg-primaryColor text-white py-2 rounded-md hover:bg-hoverPrimaryColor"
                            >
                                Kirim Pesan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

PopUpDiskusi.propTypes = {
    onClick : PropTypes.func,
    onSubmit : PropTypes.func
}

export default PopUpDiskusi;