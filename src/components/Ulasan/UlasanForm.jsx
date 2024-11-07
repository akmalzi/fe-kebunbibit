import StarRating from "./StarRating"

function UlasanForm(){
    return(
        <>    
            <form className="w-full flex flex-col items-end">
                <label htmlFor="message" className="block mb-2 text-gray-900 text-xl font-medium self-start mt-6">Tambah Ulasan</label>
                <textarea id="message" rows="14" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primaryColor focus:border-primaryColor" placeholder="Tulis ulasan di sini..."></textarea>
                <StarRating/>
                <button type="submit" className="border-[2px] border-black p-[8px] text-[16px] font-semibold rounded-lg">Submit</button>
            </form>
        </>
    )
}

export default UlasanForm