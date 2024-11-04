import FirstHero from "../components/FirstHero";
import SecondHero from "../components/SecondHero";
import Facilities from "../components/Facilities";
import CustomerReviews from "../components/CustomersReview";
import MapSection from "../components/MapSection";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import heroImg from "/assets/heroImg/homepage-heroImg.png"

function HomePage() {
    const heroTitle = "Jelajahi Keindahan Kebun Bibit Wonorejo"
    const heroSubtitle = "Tempat di mana alam dan kehijauan"

    return (
        <>
            <Navbar/>
            <section className="pb-4">
                <FirstHero imageUrl={heroImg} title={heroTitle} subTitle={heroSubtitle}/>
                <SecondHero/>
                <Facilities/>
                <CustomerReviews/>
                <MapSection/>
            </section>
            <Footer/>
        </>
    );
}

export default HomePage;
