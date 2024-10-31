import FirstHero from "../components/FirstHero";
import SecondHero from "../components/SecondHero";
import Facilities from "../components/Facilities";
import CustomerReviews from "../components/CustomersReview";
import MapSection from "../components/MapSection";

function HomePage() {
    return (
        <>
            <section className="pb-4">
                <FirstHero />
                <SecondHero/>
                <Facilities/>
                <CustomerReviews/>
                <MapSection></MapSection>
            </section>
        </>
    );
}

export default HomePage;
