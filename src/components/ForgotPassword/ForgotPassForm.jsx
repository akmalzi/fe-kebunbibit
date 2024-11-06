function htmlForgotPasshtmlForm(){
    return(
        <>
            <htmlForm className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white" placeholder="nama@gmail.com" required />
            </div>
            <p className="text-center mb-4">Tidak perlu khawatir, kami akan mengirimkan pesan untuk membantu Anda mengatur ulang kata sandi.</p>
            <button type="submit" className="text-white bg-primaryColor hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm min-w-full px-5 py-2.5 text-center ">Submit</button>
            </htmlForm>
        </>
    )
}

export default htmlForgotPasshtmlForm