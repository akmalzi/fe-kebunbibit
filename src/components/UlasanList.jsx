import UlasanListCard from "./UlasanListCard"
import ulasanData from "../data/dummy/ulasan-list.json"

function UlasanList(){
    return(
        <>
            <div className="flex flex-col w-full">
                    {ulasanData.map((item, index) => (
                        <UlasanListCard className="bg-slate-800" review={item.review} userImg={item.image} username={item.username} date={item.date} rate={item.rate} key={index}/>
                    ))}
            </div>
        </>
    )
}

export default UlasanList