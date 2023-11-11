import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Canvas from "./components/Canvas";
import { auth } from "./firebase";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import SavingDialog from "./components/SavingDialog";

export const CanvasContext = createContext({
  grid:
    JSON.parse(localStorage.grid || "null") ||
    Array(7)
      .fill(0)
      .map(() =>
        Array(7)
          .fill(0)
          .map((e) => "")
      ),
  setGrid: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  userData: null,
  setUserData: () => {},
  isSavingDialogOpen: false,
  setIsSavingDialogOpen: () => {},
});

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
  const [userData, setUserData] = useState();
  const [isSavingDialogOpen, setIsSavingDialogOpen] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setIsLoginOpen(false);
        setUserData(user);
        console.log(user);
      } else {
        setIsLoggedIn(false);
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
        isSavingDialogOpen,
        setIsSavingDialogOpen,
      }}
    >
      <div className="App w-screen h-screen overflow-hidden relative bg-zinc-800">
        <Canvas isLoginOpen={isLoginOpen} />
        <Navbar setIsLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen} />
        <Login isLoginOpen={isLoginOpen} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <SavingDialog />
      </div>
    </CanvasContext.Provider>
  );
}

export default App;
