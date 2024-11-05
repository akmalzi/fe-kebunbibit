import { useState } from 'react';
import imageUrl from "/assets/navigasi/location-icon.svg"
import PopUpDetail from './PopUpDetail';

function LocationButton(props){
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <div>
                <button className='' onClick={togglePopup}>
                    <img src={imageUrl} className='w-8 drop-shadow-lg hover:-translate-y-2 hover:scale-120 transition ease-in-out' alt="" />
                </button> 
                {isOpen && (
                    <PopUpDetail onClick={togglePopup}/>
                )}
            </div>
        </>
    )
}

export default LocationButton