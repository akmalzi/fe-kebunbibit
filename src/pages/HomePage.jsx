import FirstHero from "../components/FirstHero";
import SecondHero from "../components/SecondHero";
import Facilities from "../components/Facilities";
import CustomerReviews from "../components/CustomersReview";
import MapSection from "../components/MapSection";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function HomePage() {
    return (
        <>
            <Navbar/>
            <section className="pb-4">
                <FirstHero />
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
