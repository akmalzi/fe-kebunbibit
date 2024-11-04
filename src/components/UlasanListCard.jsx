import { useState , useEffect} from "react"
import ProfileImg from "/assets/user-profile.png"
import CustomerRatingStars from "./CustomerRatingStars"

function UlasanListCard(props){
    const [review, setReview] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ut blanditiis fugiat quas laborum fugit recusandae vitae placeat necessitatibus. Reprehenderit delectus ad fugit ducimus nisi minima quaerat illum at corrupti.")
    const [userImg, setUserImg] = useState(ProfileImg)
    const [username, setUsername] = useState("Orang")
    const [date, setDate] = useState("11-04-2024")
    const [rate, setRate] = useState(3)

    useEffect(()=>{
        setReview(props.review)
        setUserImg(props.userImg)
        setUsername(props.username)
        setDate(props.date)
        setRate(props.rate)
    },[])

    return(
        <>
            <div className="flex flex-col px-2 border border-white border-b-black py-4 mb-4">
                <CustomerRatingStars rating={rate}/>
                <div className="flex items-center mt-2">
                    <img src={userImg} alt="" className="w-10 mr-2"/>
                    <h4 className="text-lg font-medium">{username}</h4>
                </div>
                <p className="mt-2">{review}</p>
                <span className="mt-2 text-gray-600">{date}</span>
            </div>
        </>
    )
}

export default UlasanListCard