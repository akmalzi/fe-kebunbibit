import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FirstHero from "../components/FirstHero"
import CardEdukasi from "../components/CardEdukasi"
import CardArtikel from "../components/CardArtikel"
import heroImg from "/assets/heroImg/edukasi-heroImg.png"
import dataEdukasi from "../data/dataEdukasi.json"
import dataArtikel from "../data/dataArtikel.json"


function Edukasi(){
    const titleHero = "Belajar Menanam dengan Mudah dan Terarah"
    const heroSubtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quas? Fugit neque debitis accusantium nihil deserunt error nisi et."

    return(
        <>
            <Navbar/>
            <section className="pb-6">
                <FirstHero imageUrl={heroImg} title={titleHero} subTitle={heroSubtitle}/>
                <h1 className="my-12 text-4xl font-bold text-center text-primaryColor">
                Cara Menanam Bibit
                </h1>
                <div className="flex w-full justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                        {dataEdukasi.map((value, index) => (
                            <CardEdukasi
                                key={index}
                                gambar={value.gambar}
                                langkah={value.langkah}
                                tataCara={value.tataCara}
                            />
                        ))}
                    </div>
                </div>
                <h2 className="mt-12 text-center text-primaryColor font-bold text-3xl">Artikel Terkait</h2>
                <div className="flex justify-center mt-5 gap-9 mb-12">
                    {dataArtikel.map((value, index) => (
                    <CardArtikel
                        key={index}
                        gambar={value.gambar}
                        judul={value.judul}
                        link={value.link}
                    />
                    ))}
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Edukasi