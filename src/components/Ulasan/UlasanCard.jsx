import CustomerRating from "./CustomerRating"

function UlasanCard(props){
    return(
        <>
            <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md">
                <CustomerRating rating={props.rating}/>
                <div className="flex items-center my-2">
                    <img src={props.image} alt="" className="w-[50px] h-[50px] rounded-full"/>
                    <h3 className="ml-[12px] font-bold text-[22px]">{props.username}</h3>
                </div>
                <p className="text-base font-medium mt-[4px]">{props.review}</p>
                <h4 className="mt-2 text-gray-600">{props.date}</h4>
            </div>
        </>
    )
}

export default UlasanCard