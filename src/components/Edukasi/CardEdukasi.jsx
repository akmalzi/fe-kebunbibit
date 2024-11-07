function CardEdukasi({ gambar, langkah, tataCara, tahapan }){
    return (
      <>
        <div className="border-2 w-[380px] h-[520px] rounded-lg">
          <div className="flex px-2">
            <img
              width={100}
              src={gambar}
              alt="katalog1"
              className="rounded-[10px] m-7"
            />
            <h2 className="text-black text-2xl my-auto pl-3 font-medium font-['Poppins'] leading-relaxed">
              {langkah}
            </h2>
          </div>
          <div className="text-black text-base font-medium font-['Poppins'] pl-7 pr-14">
            {tataCara}
          </div>
          <div>
            <ul className="text-black text-base font-medium font-['Poppins'] ml-12 pr-14 list-disc">
              {tahapan.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
};
  
export default CardEdukasi;
  