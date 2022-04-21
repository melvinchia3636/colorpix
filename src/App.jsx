import { Icon } from "@iconify/react"
import { createContext, useState } from "react"
import Canvas from "./Canvas";
import Login from "./Login"
import Navbar from "./Navbar"

export const CanvasContext = createContext();

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [grid, setGrid] = useState(JSON.parse(localStorage.grid || "null") || Array(7).fill(0).map(() => Array(7).fill(0).map(e => "")))
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CanvasContext.Provider value={{ grid, setGrid, isLoggedIn, setIsLoggedIn }}>
      <div className="App w-screen h-screen overflow-hidden relative bg-zinc-800">
        <Canvas isLoginOpen={isLoginOpen} />
        <Navbar setIsLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen} />
        <Login isLoginOpen={isLoginOpen}  />
      </div>
    </CanvasContext.Provider>
  )
}

export default App
