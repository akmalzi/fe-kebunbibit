import LocationButton from "./Map/LocationButton";
import mapNavigasi from "/assets/navigasi/peta.png"

function Map(){
    return(
        <>
            <div className="flex justify-center">
                <div className="w-fit h-fit relative">
                    <img src={mapNavigasi} alt="" className="w-[400px] md:w-[590px] lg:w-[800px] drop-shadow-lg"/>
                        <ul>
                            <li className="absolute top-[21px] left-[192px] md:top-[30px] md:left-[281px] lg:top-[42px] lg:left-[381px]"><LocationButton/></li>
                            <li className="absolute top-[75px] left-[184px] md:top-[112px] md:left-[267px] lg:top-[151px] lg:left-[363px]"><LocationButton/></li>
                            <li className="absolute top-[81px] left-[217px] md:top-[121px] md:left-[316px] lg:top-[163px] lg:left-[430px]"><LocationButton/></li>
                            <li className="absolute top-[80px] right-[91px] md:top-[118px] md:right-[130px] lg:top-[161px] lg:right-[177px]"><LocationButton/></li>
                            <li className="absolute top-[46px] left-[48px] md:top-[69px] md:left-[68px] lg:top-[94px] lg:left-[93px]"><LocationButton/></li>
                            <li className="absolute top-[112px] left-[69px] md:top-[168px] md:left-[99px] lg:top-[226px] lg:left-[134px]"><LocationButton/></li>
                            <li className="absolute top-[112px] left-[120px] md:top-[167px] md:left-[173px] lg:top-[226px] lg:left-[236px]"><LocationButton/></li>
                            <li className="absolute top-[119px] left-[168px] md:top-[176px] md:left-[245px] lg:top-[239px] lg:left-[332px]"><LocationButton/></li>
                            <li className="absolute bottom-[117px] left-[51px] md:bottom-[175px] md:left-[73px] lg:bottom-[243px] lg:left-[99px]"><LocationButton/></li>
                            <li className="absolute left-[52px] bottom-[73px] md:bottom-[110px] md:left-[73px] lg:bottom-[155px] lg:left-[99px]"><LocationButton/></li>
                            <li className="absolute bottom-[74px] left-[116px] md:bottom-[113px] md:left-[168px] lg:bottom-[158px] lg:left-[229px]"><LocationButton/></li>
                            <li className="absolute bottom-[80px] left-[158px] md:bottom-[120px] md:left-[230px] lg:bottom-[167px] lg:left-[312px]"><LocationButton/></li>
                            <li className="absolute bottom-[92px] left-[179px] md:bottom-[140px] md:left-[260px] lg:bottom-[194px] lg:left-[353px]"><LocationButton/></li>
                            <li className="absolute bottom-[101px] right-[135px] md:bottom-[152px] md:right-[196px] lg:bottom-[210px] lg:right-[265px]"><LocationButton/></li>
                            <li className="absolute bottom-[64px] right-[135px] md:bottom-[98px] md:right-[196px] lg:bottom-[137px] lg:right-[265px]"><LocationButton/></li>
                            <li className="absolute bottom-[25px] right-[13px] md:bottom-[40px] md:right-[16px] lg:bottom-[59px] lg:right-[22px]"><LocationButton/></li>
                        </ul>
                </div>
            </div>
        </>
    )
}

export default Map