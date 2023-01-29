import { Icon } from '@iconify/react'
import React, { useContext, useState } from 'react'
import { CanvasContext } from './App'

function Canvas({ isLoginOpen }) {
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
    if (newGrid[rowIndex][colIndex] === currentSelectedColor) {
      newGrid[rowIndex][colIndex] = ""
    } else {
      newGrid[rowIndex][colIndex] = currentSelectedColor
    }
    setGrid(newGrid);
    localStorage.grid = JSON.stringify(newGrid)
  }

  const { grid, setGrid } = useContext(CanvasContext)

  return (
    <div className={`flex flex-col gap-8 items-center justify-center absolute top-0 transition-all duration-700 w-full h-screen ${isLoginOpen ? "left-full" : "left-0"}`}>
      <h1 className="font-['Monoton'] text-zinc-200 text-4xl tracking-widest">
        <span className="font-['Monoton'] text-rose-500">C</span>
        <span className="font-['Monoton'] text-amber-500">O</span>
        <span className="font-['Monoton'] text-teal-500">L</span>
        <span className="font-['Monoton'] text-sky-500">O</span>
        <span className="font-['Monoton'] text-purple-500">R</span>
        PIX
      </h1>
      <div className="flex flex-col gap-1.5">
        {grid.map((row, rowIndex) => <div className="flex gap-1.5">
          {row.map((col, colIndex) => <div onClick={() => fillColor(rowIndex, colIndex)} className={`w-10 h-10 transition-all cursor-pointer ${col || "bg-zinc-700"}`} />)}
        </div>)}
      </div>
      <div className="grid grid-cols-7 gap-4 flex-wrap">
        {colors.map(color => <button onClick={() => setCurrentSelectedColor(color)} className={`w-10 h-10 flex items-center justify-center rounded-full ${color}`}>
          <div className={`${color === currentSelectedColor ? "w-8 h-8" : "w-0 h-0"} transition-all bg-zinc-800 rounded-full`} />
        </button>)}
      </div>
    </div>
  )
}

export default Canvas