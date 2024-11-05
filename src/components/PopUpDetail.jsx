import img from "/assets/heroImg/katalog-heroImg.png"
import backIcon from "/assets/navigasi/back-icon.svg"
import AutoImageChanger from "../Animation/AutoImageChanger"

function PopUpDetail(props){
    return(
        <>
            <div className='w-full h-screen fixed top-0 left-0 z-50 bg-black bg-opacity-50'>
                <div className='w-2/4 h-fit py-10 px-20 bg-[#F8F9FA] rounded-xl shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <button onClick={props.onClick} className="relative right-[40px] text-black hover:text-primaryColor transition duration-200 ease-in flex items-center justify-center">
                        <img src={backIcon} alt="" className="w-3 h-3"/>
                        <span className="ml-1 mb-[2px]">
                            kembali
                        </span>
                    </button>
                    <div className='flex flex-col items-center'>
                        <div className='w-full'>
                            <img src={img} className='w-full h-fit rounded-3xl mt-8 shadow-lg' alt="" />
                            <div className="absolute top-[55px] right-[40px] w-[100px] h-[100px] rounded-full bg-white shadow-xl flex justify-center items-center">
                                <AutoImageChanger/>
                            </div>
                        </div>
                        <h3 className='font-bold text-primaryColor text-2xl my-3'>Camping Ground</h3>
                        <p className='text-center'>Berkemah di Kebun Bibit Wonorejo adalah tempat ideal untuk menikmati alam dan berkemah bersama keluarga atau teman. Dikelilingi pepohonan rindang dan udara segar, area ini menyediakan suasana yang nyaman bagi pengunjung yang ingin merasakan pengalaman berkemah di tengah kota..</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopUpDetail