import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FirstHero from "../components/FirstHero"
import CardKatalog from "../components/CardKatalog"
import dataKatalog from "../data/dummy/katalog.json" 

function Katalog(){
    const heroTitle = "Katalog Koleksi Bibit Kebun Bibit Wonorejo"
    const heroSubtitle = "lorem ipsum ceritanya.."

    return(
        <>
            <Navbar/>
            <section className="pb-4">
                <FirstHero title={heroTitle} subTitle={heroSubtitle}/> 
                <div className="flex flex-col items-center mt-[72px]">    
                    <h1 className="font-bold text-4xl text-center text-primaryColor mb-[64px]">Temukan ragam bibit unggul untuk <br />
                    mempercantik lingkungan Anda</h1>  
                </div>
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
            </section>
            <Footer/>        
        </>
    )
}

export default Katalog