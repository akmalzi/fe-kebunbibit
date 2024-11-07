import img from "/assets/navigasi/fav-fasilitas.png"

function CardFavFasilitas(){
    return(
        <>
            <div className="w-[330px] h-[390px] relative shadow-lg">
                <img src={img} alt="" className="" />
                <div className="w-full h-fit py-2 px-2 bg-primary-600 bg-opacity-70 absolute bottom-0 flex justify-end">
                    <button className=" text-white font-semibold">lihat detail</button>
                </div>
            </div>
        </>
    )
}

export default CardFavFasilitas