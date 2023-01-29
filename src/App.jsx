import { Icon } from "@iconify/react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Canvas from "./Canvas";
import { auth } from "./firebase";
import Login from "./Login";
import Navbar from "./Navbar";

export const CanvasContext = createContext();

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [grid, setGrid] = useState(
    JSON.parse(localStorage.grid || "null") ||
      Array(7)
        .fill(0)
        .map(() =>
          Array(7)
            .fill(0)
            .map((e) => "")
        )
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setIsLoginOpen(false);
        setUserData(user);
      } else {
        setIsLoggedIn(false);
        setIsLoginOpen(true);
      }
    });
  }, []);

  return (
    <CanvasContext.Provider
      value={{
        grid,
        setGrid,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
      }}
    >
      <div className="App w-screen h-screen overflow-hidden relative bg-zinc-800">
        <Canvas isLoginOpen={isLoginOpen} />
        <Navbar setIsLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen} />
        <Login isLoginOpen={isLoginOpen} />
      </div>
    </CanvasContext.Provider>
  );
}

export default App;
