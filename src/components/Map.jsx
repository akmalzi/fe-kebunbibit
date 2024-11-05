import LocationButton from "../components/LocationButton"
import mapNavigasi from "/assets/navigasi/peta.png"

function Map(){
    return(
        <>
            <div className="flex justify-center">
                <div className="w-fit h-fit relative">
                    <img src={mapNavigasi} alt="" className="w-[800px] drop-shadow-lg"/>
                        <ul>
                            <li className="absolute top-[42px] left-[381px]"><LocationButton/></li>
                            <li className="absolute top-[151px] left-[363px]"><LocationButton/></li>
                            <li className="absolute top-[163px] left-[430px]"><LocationButton/></li>
                            <li className="absolute top-[161px] right-[177px]"><LocationButton/></li>
                            <li className="absolute top-[94px] left-[93px]"><LocationButton/></li>
                            <li className="absolute top-[226px] left-[134px]"><LocationButton/></li>
                            <li className="absolute top-[226px] left-[236px]"><LocationButton/></li>
                            <li className="absolute top-[239px] left-[332px]"><LocationButton/></li>
                            <li className="absolute bottom-[243px] left-[99px]"><LocationButton/></li>
                            <li className="absolute bottom-[155px] left-[99px]"><LocationButton/></li>
                            <li className="absolute bottom-[158px] left-[229px]"><LocationButton/></li>
                            <li className="absolute bottom-[167px] left-[312px]"><LocationButton/></li>
                            <li className="absolute bottom-[194px] left-[353px]"><LocationButton/></li>
                            <li className="absolute bottom-[210px] right-[265px]"><LocationButton/></li>
                            <li className="absolute bottom-[137px] right-[265px]"><LocationButton/></li>
                            <li className="absolute bottom-[59px] right-[22px]"><LocationButton/></li>
                        </ul>
                </div>
            </div>
        </>
    )
}

export default Map