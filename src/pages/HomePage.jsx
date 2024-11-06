import FirstHero from "../components/FirstHero";
import SecondHero from "../components/HomePage/SecondHero";
import Facilities from "../components/HomePage/Facilities";
import CustomerReviews from "../components/HomePage/CustomersReview";
import MapSection from "../components/HomePage/MapSection";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SlideInUp from "../Animation/ScrollAnimation/SlideInUp"
import SlideInRight from "../Animation/ScrollAnimation/SlideInRight"
import SlideInLeft from "../Animation/ScrollAnimation/SlideInLeft"
import FadeIn from "../Animation/ScrollAnimation/FadeIn"
import heroImg from "/assets/heroImg/homepage-heroImg.png"

function HomePage() {
    const heroTitle = "Jelajahi Keindahan Kebun Bibit Wonorejo"
    const heroSubtitle = "Tempat di mana alam dan kehijauan"

    return (
        <>
            <Navbar/>
            <section className="pb-4 animate-fade-in">
                <FirstHero imageUrl={heroImg} title={heroTitle} subTitle={heroSubtitle}/>
                <SlideInLeft>
                    <SecondHero/>
                </SlideInLeft>
                <SlideInRight>
                    <Facilities/>
                </SlideInRight>
                <FadeIn>
                    <CustomerReviews/>
                </FadeIn>
                <SlideInUp>
                    <MapSection/>
                </SlideInUp>
            </section>
            <Footer/>
        </>
    );
}

export default HomePage;
