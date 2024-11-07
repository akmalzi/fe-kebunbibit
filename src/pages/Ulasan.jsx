import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import dataUlasan from "../data/dummy/ulasan-list.json"
import UlasanForm from "../components/Ulasan/UlasanForm"
import UlasanCard from "../components/Ulasan/UlasanCard"
import CustomerRatingStars from "../components/Ulasan/CustomerRating"

function Ulasan(){
    return(
        <>
            <Navbar/>
            <section className="flex h-lvh bg-white animate-fade-in">
                <div className="py-4 px-6 w-2/6">
                    <div className="px-2 border-b-[1px] border-black max-w-fit">
                        <h1 className="text-2xl font-medium">Ulasan</h1>
                    </div>
                    <div className="flex items-center mt-2">
                        <h3 className="text-xl font-medium mr-2">4.9</h3>
                        <CustomerRatingStars rating={4}/>
                        <h3 className="text-xl font-medium ml-2">32 Ulasan</h3>
                    </div>
                    <UlasanForm/>
                </div>
                <div className="py-4 px-6 border-l-[2px] w-full md:w-2/3 overflow-y-auto space-y-6 p-4">
                    {dataUlasan.map((item, index) => (
                        <UlasanCard rating={item.rate} image={item.image} username={item.username} review={item.review} date={item.date} key={index}/>
                    ))}
                </div>
            </section>
            <Footer/>
        </>
    )    
}

export default Ulasan