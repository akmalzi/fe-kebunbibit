import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FirstHero from "../components/FirstHero"
import Map from "../components/Navigasi/Map"
import CardFavFasilitas from "../components/Navigasi/CardFavFasilitas"
import heroImg from "/assets/heroImg/navigasi-heroImg.png"
import SlideInUp from "../Animation/ScrollAnimation/SlideInUp"


function Navigasi(){
    const title = "Navigasi Kebun Bibit Wonorejo"
    const subTitle = "Temukan berbagai fasilitas menarik di Kebun Bibit Wonorejo, mulai dari pusat informasi bibit hingga ruang belajar yang nyaman, semuanya dirancang untuk membantu Anda memahami cara menanam dan merawat tanaman dengan baik."

    return (
        <>
            <Navbar/>
            <section className="pb-4 animate-fade-in">
                <FirstHero imageUrl={heroImg} title={title} subTitle={subTitle}/> 
                <div className="mt-20 px-40">
                    <SlideInUp>
                        <h2 className="text-end text-4xl font-bold text-primaryColor">Temukan Spot Menarik <br />
                        di Kebun Bibit Wonorejo</h2>
                    </SlideInUp>

                    <Map/>
                    
                    <SlideInUp>
                        <h2 className="text-3xl text-center mt-[120px] font-semibold">Tempat Favorit Pengunjung</h2>
                        <h2 className="text-3xl text-center mt-2 font-semibold text-primaryColor">Kebun Bibit Wonorejo</h2>
                    </SlideInUp>
                    
                    <SlideInUp>
                        <div className="w-full flex justify-evenly mt-6 mb-16">
                            <CardFavFasilitas/>
                            <CardFavFasilitas/>
                            <CardFavFasilitas/>
                        </div>
                    </SlideInUp>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Navigasi