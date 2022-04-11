import { Icon } from '@iconify/react'
import React from 'react'

function Navbar({ setIsLoginOpen, isLoginOpen }) {
  return (
    <div className="absolute text-zinc-200 z-[9999] left-0 top-1/2 -translate-y-1/2 bg-zinc-700 p-4 py-5 flex flex-col h-screen justify-between shadow-md">
      <div className={`flex flex-col gap-8 transition-all duration-700 ${isLoginOpen && "-translate-x-[200%]"}`}>
        <button>
          <Icon icon="mdi:file-outline" className="w-6 h-6" />
        </button>
        <button>
          <Icon icon="mdi:content-save" className="w-6 h-6" />
        </button>
        <button>
          <Icon icon="mdi:import" className="w-6 h-6" />
        </button>
        <button>
          <Icon icon="mdi:export" className="w-6 h-6" />
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
        <button onClick={() => setIsLoginOpen(!isLoginOpen)}>
          <Icon icon="mdi:user" className="w-6 h-6" />
        </button>
        <button>
          <Icon icon="mdi:compass-outline" className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default Navbar