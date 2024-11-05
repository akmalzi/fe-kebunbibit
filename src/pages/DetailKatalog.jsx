import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FirstHero from "../components/FirstHero";
import heroImg from "/assets/heroImg/detail-heroImg.png"
import detailTanaman from "../data/dummy/detailTanaman.json" 

function DetailKatalog(){
  const { parameter } = useParams();
  const heroTitle = "Detail Tanaman"
  const heroSubtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quas? Fugit neque debitis accusantium nihil deserunt error nisi et."

  return (
    <>
        <Navbar/>
        <FirstHero imageUrl={heroImg} title={heroTitle} subTitle={heroSubtitle}/>
        <section className="min-h-fit animate-fade-in" id="katalog">
            {detailTanaman.map((value, index) => {
                if (parameter === value.parameter) {
                    return (
                    <CardDetail
                        key={index}
                        judul={value.judul}
                        penjelasan={value.penjelasan}
                        gambar={value.image}
                    />
                    );
                }
            })}
        </section>
        <Footer/>
    </>
  );
};

export default DetailKatalog;
