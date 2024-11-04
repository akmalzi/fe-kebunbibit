import { useState, useEffect} from "react"

function FirstHero(props){
    const [title, setTitle] = useState(null)
    const [subTitle, setSubTitle] = useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit.")
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(()=>{
        setTitle(props.title)
        setSubTitle(props.subTitle)
        setImageUrl(props.imageUrl)
    },[])

    return (
        <>
            <section className="px-[18px]">
            <div className={`w-full h-[604px] bg-cover bg-center rounded-3xl shadow-lg`} style={{ backgroundImage: `url(${imageUrl})` }}>
                    <div className="relative top-0 py-10 px-14">
                        <h1 className="text-[64px] font-bold text-white leading-[120%] drop-shadow-text w-4/6 font-poppins">{title}</h1>
                        <h3 className="text-lg text-white font-normal mt-2 w-3/5">{subTitle}</h3>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default FirstHero