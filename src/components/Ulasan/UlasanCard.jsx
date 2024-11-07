import CustomerRating from "./CustomerRating"

function UlasanCard(props){
    return(
        <>
            <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md">
                <CustomerRating rating={props.rating}/>
                <div className="flex items-center my-2">
                    <img src={props.image} alt="" className="w-[50px] h-[50px] rounded-full"/>
                    <h3 className="ml-2 font-bold text-xl">{props.username}</h3>
                </div>
                <p>{props.review}</p>
                <h4>{props.date}</h4>
            </div>
        </>
    )
}

export default UlasanCard