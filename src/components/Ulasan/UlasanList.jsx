import UlasanCard from "../../components/Ulasan/UlasanCard"
import dataUlasan from "../../data/dummy/ulasan-list.json"

function UlasanList(){
    return(
        <>
            {dataUlasan.map((item, index) => (
                        <UlasanCard rating={item.rate} image={item.image} username={item.username} review={item.review} date={item.date} key={index}/>
            ))}
        </>
    )
}

export default UlasanList