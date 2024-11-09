import { useState } from 'react';
import imageUrl from "/assets/navigasi/location-icon.svg"
import PopUpDetail from './PopUpDetail';
import navigasiData from "../../../data/dataNavigasi.json"

function LocationButton(){
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        console.log(navigasiData)
    };

    return(
        <>
            <div>
                <button className='' onClick={togglePopup}>
                    <img src={imageUrl} className='w-3 md:w-6 lg:w-8 drop-shadow-lg hover:-translate-y-2 hover:scale-120 transition ease-in-out' alt="" />
                </button> 
                {isOpen && (
                    <PopUpDetail onClick={togglePopup}/>
                )}
            </div>
        </>
    )
}

export default LocationButton