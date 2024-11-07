import SlideInUpAnimation from "../../Animation/ScrollAnimation/SlideInUp"

function SecondHero(){
    return (
        <>
            <section className="flex px-[18px] justify-center">
                <SlideInUpAnimation>
                    <div className="flex py-20 px-16 h-fit">
                        <div className="w-1/2 min-h-full flex items-center">
                            <div>
                                <h2 className="text-primary-600 text-[56px] leading-[110%] font-bold">
                                    Kebun Bibit <br />
                                    Wonorejo
                                </h2>
                                <p className="text-[20px] font-normal mt-[36px] mr-12 leading-[140%]">
                                    Kebun Bibit Wonorejo adalah ruang hijau yang menawarkan keindahan alam, beragam tanaman, dan pengalaman belajar yang interaktif tentang bagaimana menanam dan merawat tanaman. Temukan ragam flora khas dan nikmati suasana yang asri di tengah kota.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-center bg-[url('./assets/heroImg/hero2-img.png')] rounded-3xl bg-cover min-h-[371px] shadow-2xl">
                        </div>
                    </div>
                </SlideInUpAnimation>
            </section>
        </>
    )
}

export default SecondHero