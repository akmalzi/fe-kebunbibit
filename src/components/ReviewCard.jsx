import { useState , useEffect} from "react"
import ProfileImg from "/assets/user-profile.png"

function ReviewCard(props){
    const [review, setReview] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ut blanditiis fugiat quas laborum fugit recusandae vitae placeat necessitatibus. Reprehenderit delectus ad fugit ducimus nisi minima quaerat illum at corrupti.")
    const [userImg, setUserImg] = useState(ProfileImg)
    const [username, setUsername] = useState("Orang")
    const [role, setRole] = useState("Role")

    useEffect(()=>{
        setReview(props.review)
        setUserImg(props.userImg)
        setUsername(props.username)
        setRole(props.role)
    },[])

    return (
        <>
            <div className="w-1/2 flex flex-col justify-center items-center text-center p-6 border-[1px] border-gray-300 mx-2">
                <p className="text-lg">
                    {review}
                </p>
                <img src={userImg} className="w-12 h-full my-4" alt="" />
                <h5 className="text-2xl font-bold">{username}</h5>
                <h6 className="text-[18px]">{role}</h6>
            </div>
        </>
    )
}

export default ReviewCard