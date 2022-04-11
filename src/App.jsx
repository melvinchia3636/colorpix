import { Icon } from "@iconify/react"
import { useState } from "react"
import Canvas from "./Canvas";
import Login from "./Login"
import Navbar from "./Navbar"

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="App w-screen h-screen overflow-hidden relative bg-zinc-800">
      <Canvas isLoginOpen={isLoginOpen} />
      <Navbar setIsLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen} />
      <Login isLoginOpen={isLoginOpen}  />
    </div>
  )
}

export default App
