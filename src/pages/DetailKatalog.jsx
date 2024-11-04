import { useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FirstHero from "../components/FirstHero";
import detailTanaman from "../data/dummy/detailTanaman.json" 

function DetailKatalog(){
  const { parameter } = useParams();
  const heroTitle = "Detail Tanaman"
  const heroSubtitle = ""

  return (
    <>
        <Navbar/>
        <FirstHero title={heroTitle} subTitle={heroSubtitle}/>
        <section className="min-h-fit" id="katalog">
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
