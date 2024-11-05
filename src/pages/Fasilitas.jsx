import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FirstHero from "../components/FirstHero"
import heroImg from "/assets/heroImg/fasilitas-heroImg.png"

function Fasilitas(){
    const title = "Fasilitas-fasilitas Kebun Bibit Wonorejo"
    const subTitle = "Temukan berbagai fasilitas menarik di Kebun Bibit Wonorejo, mulai dari pusat informasi bibit hingga ruang belajar yang nyaman, semuanya dirancang untuk membantu Anda memahami cara menanam dan merawat tanaman dengan baik."

    return(
        <>
            <Navbar/>
            <section className="pb-6 animate-fade-in">
                <FirstHero imageUrl={heroImg} title={title} subTitle={subTitle}/>
                <div className="grid grid-rows-2 grid-flow-col mx-28 mt-20 gap-6">
                    <div className="text-4xl font-semibold font-poppins my-4">
                        Dapatkan pengalaman yang tak terlupakan di Kebun Bibit Wonorejo.
                    </div>
                    <div className="font-poppins text-xl font-normal">
                        Nikmati keindahan alam yang memukau di Kebun Bibit Wonorejo, di mana
                        Anda dapat menjelajahi beragam flora cantik yang menghiasi setiap
                        sudut kebun. Dari pohon-pohon rimbun hingga bunga-bunga
                        berwarna-warni.
                    </div>
                    <div className="row-span-2">
                        <img
                        src="./assets/edukasi/gridEdukasi1.png"
                        className="hover:-translate-y-1 hover:scale-90 transition ease-in"
                        width={245}
                        alt=""
                        />
                    </div>
                    <div className="">
                        <img
                        src="./assets/edukasi/gridEdukasi2.png"
                        className="hover:-translate-y-1 hover:scale-90 transition ease-in"
                        width={213}
                        alt=""
                        />
                    </div>
                    <div className="">
                        <img
                        src="./assets/edukasi/gridEdukasi3.png"
                        className="hover:-translate-y-1 hover:scale-90 transition ease-in"
                        width={213}
                        alt=""
                        />
                    </div>
                </div>

                <div className="w-full py-10 flexabsolute text-center justify-center">
                    <span className="text-[#000000] text-4xl font-bold font-['Poppins'] ">
                        Fasilitas
                    </span>{" "}
                    <br />
                    <span className="text-[#77b122] text-4xl font-semibold font-['Poppins']">
                        Kebun Bibit
                    </span>
                </div>

                {/* Galeri Fasilitas  */}
                <div className="flex overflow-x-auto p-4">
                    {/* Ground Camp */}
                    <div className="relative flex flex-col items-center min-w-[575px] bg-slate-300 mr-5">
                        <img
                        src="/assets/fasilitas/camp-ground.png"
                        width={575}
                        alt=""
                        className="object-cover rounded-lg shadow-lg"
                        />
                        <span className="absolute bottom-0 left-0 right-0 text-white text-5xl font-bold font-['Poppins'] m-7 drop-shadow-[0_1.2px_5px_rgba(0,0,0,0.8)]">
                        Ground Camp
                        </span>
                    </div>
                    {/* Event Gathering */}
                    <div className="relative flex flex-col items-center min-w-[575px] bg-slate-300 mr-5">
                        <img
                        src="/assets/fasilitas/event-gathering.png"
                        width={575}
                        alt=""
                        className="object-cover rounded-lg shadow-lg"
                        />
                        <span className="absolute top-0 leading-[48px] tracking-wide right-0 text-white text-5xl font-bold font-['Poppins'] m-7 drop-shadow-[0_1.2px_5px_rgba(0,0,0,0.8)]">
                        Event &<br /> Gathering
                        </span>
                    </div>
                    {/* Edukasi Pembibitan */}
                    <div className="relative flex flex-col items-center min-w-[575px] bg-slate-300 mr-5">
                        <img
                        src="/assets/fasilitas/edukasi-pembibitan.png"
                        width={575}
                        alt=""
                        className="object-cover rounded-lg shadow-lg"
                        />
                        <span className="absolute bottom-0 left-0 right-0 text-white text-5xl font-bold font-['Poppins'] m-7 drop-shadow-[0_1.2px_5px_rgba(0,0,0,0.8)]">
                        Edukasi <br />
                        Pembibitan
                        </span>
                    </div>
                    {/* Jogging Track */}
                    <div className="relative flex flex-col items-center min-w-[575px] bg-slate-300 mr-5">
                        <img
                        src="/assets/fasilitas/jogging-track.png"
                        width={575}
                        alt=""
                        className="object-cover rounded-lg shadow-lg"
                        />
                        <span className="absolute top-0 leading-[48px] tracking-wide right-0 text-white text-5xl font-bold font-['Poppins'] m-7 drop-shadow-[0_1.2px_5px_rgba(0,0,0,0.8)]">
                        Jogging <br />
                        Track
                        </span>
                    </div>
                </div>
                {/* End Galeri Fasilitas  */}
            </section>
            <Footer/>
        </>
    )
}

export default Fasilitas