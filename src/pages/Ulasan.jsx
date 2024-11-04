import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import UlasanForm from "../components/UlasanForm"
import UlasanList from "../components/UlasanList"

function Ulasan(){
    return(
        <>
            <Navbar/>
            <section className="flex py-5">
                <div className="sticky top-0 w-1/3 px-4 border-[1px] border-white border-r-black">
                    <UlasanForm></UlasanForm>
                </div>
                <div className="w-2/3 px-4">
                    <UlasanList/>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Ulasan