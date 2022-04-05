import { Icon } from "@iconify/react"
import { useState } from "react"

function App() {
  const [grid, setGrid] = useState(JSON.parse(localStorage.grid || "null") || Array(7).fill(0).map(() => Array(7).fill(0).map(e => "")))
  
  const colors = [
    "bg-rose-500",
    "bg-red-500",
    "bg-orange-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-green-500",
    "bg-emerald-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-violet-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
  ]
  const [currentSelectedColor, setCurrentSelectedColor] = useState(colors[0])

  const fillColor = (rowIndex, colIndex) => {
    let newGrid = [...grid];
    newGrid[rowIndex][colIndex] = currentSelectedColor;
    setGrid(newGrid);
    localStorage.grid = JSON.stringify(newGrid)
  }

  return (
    <div className="App w-full h-screen bg-zinc-800 flex flex-col gap-8 items-center justify-center">
      <h1 className="font-['Monoton'] text-4xl tracking-widest">
        <span className="text-rose-500">C</span>
        <span className="text-amber-500">O</span>
        <span className="text-teal-500">L</span>
        <span className="text-sky-500">O</span>
        <span className="text-purple-500">R</span>
        PIX
      </h1>
      <div className="flex flex-col gap-1.5">
        {grid.map((row, rowIndex) => <div className="flex gap-1.5">
          {row.map((col, colIndex) => <div onClick={() => fillColor(rowIndex, colIndex)} className={`w-10 h-10 transition-all ${col || "bg-zinc-700"}`} />)}
        </div>)}
      </div>
      <div className="grid grid-cols-7 gap-4 flex-wrap">
        {colors.map(color => <button onClick={() => setCurrentSelectedColor(color)} className={`w-10 h-10 flex items-center justify-center rounded-full ${color}`}>
          <div className={`${color === currentSelectedColor ? "w-8 h-8" : "w-0 h-0"} transition-all bg-zinc-800 rounded-full`} />
        </button>)}
        <button onClick={() => setCurrentSelectedColor("")} className={`w-10 h-10 flex items-center justify-center rounded-full ${currentSelectedColor === "" ? "outline outline-white" : ""}`}>
          <Icon icon="mdi:eraser" className="text-zinc-600 w-8 h-8" />
        </button>
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-700 p-4 py-5 flex flex-col h-screen justify-between shadow-md">
        <div className="flex flex-col gap-8">
          <button>
            <Icon icon="mdi:content-save" className="w-6 h-6" />
          </button>
          <button>
            <Icon icon="mdi:import" className="w-6 h-6" />
          </button>
          <button>
            <Icon icon="mdi:cog-outline" className="w-6 h-6" />
          </button>
          <button>
            <Icon icon="mdi:book" className="w-6 h-6" />
          </button>
          <button>
            <Icon icon="mdi:information-outline" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col gap-8">
          <button>
            <Icon icon="mdi:user" className="w-6 h-6" />
          </button>
          <button>
            <Icon icon="mdi:compass-outline" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
