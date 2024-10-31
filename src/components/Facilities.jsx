function Facilities(){
    return(
        <>
            <section className="px-[72px] flex ">
                <div className="w-1/2 min-h-4 mr-4">
                    <div className="bg-[url('./assets/taman-bermain.png')] bg-cover rounded-[10px] w-full h-[253px] p-[30px] mb-[16px]">
                        <h3 className="font-bold text-white text-5xl drop-shadow-text">
                            Taman <br /> 
                            Bermain
                        </h3>
                    </div>
                    <div className="flex justify-between">
                        <div className="bg-[url('./assets/rute-kebun.png')] bg-cover rounded-[10px] w-1/2 h-[253px] p-[30px] mr-4">
                            <h3 className="font-bold text-white text-5xl drop-shadow-text">
                                Rute <br /> 
                                Kebun
                            </h3>
                        </div>

                        <div className="bg-[url('./assets/wisata-kuliner.png')] bg-cover rounded-[10px] w-1/2 h-[253px] p-[30px] flex items-end">
                            <h3 className="font-bold text-white text-5xl drop-shadow-text">
                                Wisata <br /> 
                                Kuliner
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 min-h-4 flex">
                    <div className="w-1/2 h-full mr-4 bg-[url('./assets/mini-zoo.png')] bg-cover bg-center rounded-[10px] p-[30px]">
                        <h3 className="font-bold text-white text-5xl drop-shadow-text">
                            Mini Zoo
                        </h3>
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <div className="bg-[url('./assets/study-tour.png')] bg-cover rounded-[10px] w-full h-[253px] p-[30px] mb-4 flex items-end">
                            <h3 className="font-bold text-white text-5xl drop-shadow-text">
                                Study <br /> 
                                Tour
                            </h3>
                        </div>

                        <div className="bg-[url('./assets/camp-area.png')] bg-cover rounded-[10px] w-full h-[253px] p-[30px]">
                            <h3 className="font-bold text-white text-5xl drop-shadow-text">
                                Camp <br /> 
                                Area
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Facilities