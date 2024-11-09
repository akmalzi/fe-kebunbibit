import UlasanCard from "../../components/Ulasan/UlasanCard"
import dataUlasan from "../../data/dummy/ulasan-list.json"

function UlasanList(){
    return(
        <>
            <div className="py-4 px-6 border-l-[2px] w-full overflow-y-auto space-y-6 p-4">
                {dataUlasan.map((item, index) => (
                    <UlasanCard rating={item.rate} image={item.image} username={item.username} review={item.review} date={item.date} key={index}/>
                ))}
            </div> 
        </>
    )
}

export default UlasanList