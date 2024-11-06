import RegisterForm from "../components/Register/RegisterForm"

function RegisterPage(){
    return (
        <>
            <section className="min-h-screen flex animate-fade-in">
                <div className="min-h-screen w-1/2 flex flex-col items-center justify-center px-32 order-2">
                    <h2 className="text-[32px] w-full font-bold text-primaryColor mb-9">Hai, selamat datang! Daftar sekarang untuk memulai!</h2>
                    <RegisterForm/>
                </div>
                <div className="w-1/2 min-h-screen p-[30px] flex items-end bg-[url('./assets/register-img.png')] bg-cover bg-center order-1">
                    <h3 className="font-bold text-white text-2xl drop-shadow-text">
                        daftarkan dirimu sekarang!
                    </h3>
                </div>
            </section>
        </>
    )
}

export default RegisterPage