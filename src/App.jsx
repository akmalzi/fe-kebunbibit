import { useState, useEffect } from "react"
import RootLayout from "./layouts/RootLayout"
import LoginLayout from "./layouts/LoginLayout"
import RegisterLayout from "./layouts/RegisterLayout"
import ForgotPassLayout from "./layouts/ForgotPassLayout"
import ImageLogo from "/assets/logo-app.png"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time (ms) as needed

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="relative">
      {/* Loading Screen Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <img src={ImageLogo} className="w-[300px] mb-4 absolute top-[300px]" alt="" />
        </div>
      )}

      {/* Main Content (hidden while loading) */}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <RootLayout />
        <LoginLayout />
        <RegisterLayout />
        <ForgotPassLayout />
        {/* Add other main content components here */}
      </div>
    </div>
  );
}

export default App