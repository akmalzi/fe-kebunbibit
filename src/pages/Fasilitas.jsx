import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FirstHero from "../components/FirstHero"
import heroImg from "/assets/heroImg/fasilitas-heroImg.png"
import SlideInUp from "../Animation/ScrollAnimation/SlideInUp"
import FadeIn from "../Animation/ScrollAnimation/FadeIn"

function Fasilitas(){
    const title = "Fasilitas-fasilitas Kebun Bibit Wonorejo"
    const subTitle = "Temukan berbagai fasilitas menarik di Kebun Bibit Wonorejo, mulai dari pusat informasi bibit hingga ruang belajar yang nyaman, semuanya dirancang untuk membantu Anda memahami cara menanam dan merawat tanaman dengan baik."

    return(
        <>
            <Navbar/>
            <section className="pb-6 animate-fade-in">
                <FirstHero imageUrl={heroImg} title={title} subTitle={subTitle}/>
                <SlideInUp>
                    <div className="flex max-h-[480px] my-20 px-24">
                        <div className="w-3/5 flex flex-col justify-center pr-16">
                            <div className="text-[42px] font-semibold leading-tight mb-4">
                                Dapatkan pengalaman yang tak terlupakan di Kebun Bibit Wonorejo.
                            </div>
                            <div className="text-xl font-normal">
                                Nikmati keindahan alam yang memukau di Kebun Bibit Wonorejo, di mana
                                Anda dapat menjelajahi beragam flora cantik yang menghiasi setiap
                                sudut kebun. Dari pohon-pohon rimbun hingga bunga-bunga
                                berwarna-warni.
                            </div>
                        </div>
                        <div className="w-2/5 min-h-4 flex">
                            <div className="hover:-translate-y-1 hover:scale-95 transition ease-in-out  w-1/2 h-full mr-4 bg-[url('./assets/edukasi/gridEdukasi1.png')] bg-cover bg-center rounded-[10px] p-[30px] shadow-lg">
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <div className="hover:-translate-y-1 hover:scale-95 transition ease-in-out bg-[url('./assets/edukasi/gridEdukasi2.png')] bg-cover rounded-[10px] bg-center w-full h-[253px] p-[30px] mb-4 flex items-end shadow-lg">
                                </div>
                                <div className="hover:-translate-y-1 hover:scale-95 transition ease-in-out bg-[url('./assets/edukasi/gridEdukasi3.png')] bg-cover rounded-[10px] bg-center w-full h-[253px] p-[30px] shadow-lg">
                                </div>
                            </div>
                        </div>
                    </div>
                </SlideInUp>
                
                <FadeIn> 
                    <div className="w-full pb-10 flexabsolute text-center justify-center">
                        <span className="text-[#000000] text-4xl font-bold font-['Poppins'] ">
                            Fasilitas
                        </span>{" "}
                        <br />
                        <span className="text-[#77b122] text-4xl font-semibold font-['Poppins']">
                            Kebun Bibit
                        </span>
                    </div>
                </FadeIn>
                
                <FadeIn>
                    <div className="flex overflow-x-auto p-4">
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
                </FadeIn>
            </section>
            <Footer/>
        </>
    )
}

export default Fasilitas