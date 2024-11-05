import LoginForm from "../components/LoginForm"

function LoginPage(){
    return(
        <>
            <section className="min-h-screen flex animate-fade-in">
                <div className="min-h-screen w-1/2 flex flex-col items-center justify-center px-32">
                    <h2 className="text-[32px] w-full font-bold text-primaryColor mb-9">Hai, selamat datang kembali</h2>
                    <LoginForm/>
                </div>
                <div className="w-1/2 min-h-screen p-[30px] flex items-end bg-[url('./assets/login-img.png')] bg-cover bg-center">
                    <h3 className="font-bold text-white text-2xl drop-shadow-text">
                        masuk ke aplikasi untuk dapat menggunakan semua fiturnya!
                    </h3>
                </div>
            </section>
        </>
    )
}

export default LoginPage