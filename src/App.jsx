import RootLayout from "./layouts/RootLayout"
import LoginLayout from "./layouts/LoginLayout"
import RegisterLayout from "./layouts/RegisterLayout"
import ForgotPassLayout from "./layouts/ForgotPassLayout"

function App() {
  return (
    <>
      <div className="font-poppins">
        <RootLayout/>
        <LoginLayout/>
        <RegisterLayout/>
        <ForgotPassLayout/>
      </div>
    </>
  )
}

export default App
