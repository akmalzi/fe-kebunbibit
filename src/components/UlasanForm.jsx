import CustomerRatingStars from "./CustomerRatingStars"
import StarRating from "./StarRating"

function UlasanForm(props){
    return(
        <>
            <section className="">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="font-semibold underline underline-offset-2 text-2xl">Ulasan</h2>
                    <div className="w-fit flex items-center my-2">
                        <span className="text-xl font-medium mr-2">4.9</span>
                        <CustomerRatingStars rating={4}/>
                        <span className="text-xl font-medium ml-2">{props.ulasan} Ulasan</span>
                    </div>
                    <form action="#" className="space-y-8">
                        <div className="flex flex-col items-end">
                            <textarea id="message" rows="12" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 mb-2" placeholder="Leave a comment...">
                            </textarea>
                            <StarRating/>
                            <button type="submit" className="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-primaryColor sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 mt-2">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default UlasanForm