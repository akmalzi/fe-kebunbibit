import ReviewCard from "./ReviewCard"
import reviewData from "../data/dummy/customers-review.json"
function CustomerReviews(){
    return(
        <>
            <section className="flex flex-col items-center mt-20 px-[72px]">
                <h3 className="text-primaryColor text-4xl font-bold mb-5">Kata Customer</h3>
                {console.log(reviewData)}
                <div className="flex justify-between w-full">
                    {reviewData.map((item, index) => (
                        <ReviewCard className="bg-slate-800" review={item.review} userImg={item.userImg} username={item.username} role={item.role} key={index}/>
                    ))}
                </div>
                <div className="w-full flex mt-2 justify-end font-bold">
                    <a href="" className="text-primaryColor text-lg mr-2">Lihat selanjutnya</a>
                </div>
            </section>
        </>
    )
}

export default CustomerReviews