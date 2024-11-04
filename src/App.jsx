import { useState, useEffect } from "react"
import RootLayout from "./layouts/RootLayout"
import LoginLayout from "./layouts/LoginLayout"
import RegisterLayout from "./layouts/RegisterLayout"
import ForgotPassLayout from "./layouts/ForgotPassLayout"
import ImageLogo from "/assets/logo-app.png"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Loading Screen */}
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <img src={ImageLogo} className="w-[300px] mb-4 absolute top-[300px]" alt="Loading Logo" />
        </div>
      ) : (
        // Main Content with Fade-in Transition
        <div className="opacity-0 animate-fade-in">
          <RootLayout />
          <LoginLayout />
          <RegisterLayout />
          <ForgotPassLayout />
        </div>
      )}
    </div>
  );
}

export default App