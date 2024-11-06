import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FirstHero from "../components/FirstHero"
import CardKatalog from "../components/Katalog/CardKatalog"
import dataKatalog from "../data/dummy/katalog.json" 
import heroImg from "/assets/heroImg/katalog-heroImg.png"
import FadeIn from "../Animation/ScrollAnimation/FadeIn"

function Katalog(){
    const heroTitle = "Katalog Koleksi Bibit Kebun Bibit Wonorejo"
    const heroSubtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quas? Fugit neque debitis accusantium nihil deserunt error nisi et."

    return(
        <>
            <Navbar/>
            <section className="pb-4 animate-fade-in">
                <FirstHero imageUrl={heroImg} title={heroTitle} subTitle={heroSubtitle}/> 
                <FadeIn>
                    <div className="flex flex-col items-center mt-[72px]">    
                        <h1 className="font-bold text-4xl text-center text-primaryColor mb-[64px]">Temukan ragam bibit unggul untuk <br />
                        mempercantik lingkungan Anda</h1>  
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="flex justify-center">
                        <div className="flex flex-wrap w-5/6 ">
                            {dataKatalog.map((value, index) => (
                                <CardKatalog
                                    key={index}
                                    parameter={value.id}
                                    namaAsli={value.nama}
                                    namaLatin={value.latin}
                                    image={value.image}
                                />
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </section>
            <Footer/>        
        </>
    )
}

export default Katalog