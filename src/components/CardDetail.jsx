function CardDetail({ judul, penjelasan, gambar }){
  return (
    <>
      <div className="w-full px-20 h-fit my-20">
        <div className="grid grid-cols-2 mt-11">
          <img src={gambar} alt="" className="w-11/12 h-auto rounded-lg" />
          <div className="flex flex-col justify-center">
            <h2 className="text-[#73ba10] text-[40px] font-semibold font-poppins">
              {judul}
            </h2>
            <p className="text-black text-2xl font-medium font-poppins mt-8">
              {penjelasan}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
