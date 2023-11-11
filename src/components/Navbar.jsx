import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { CanvasContext } from "../App";
import { auth } from "../firebase";

function Navbar({ setIsLoginOpen, isLoginOpen }) {
  const { setGrid, isLoggedIn, userData, setUserData, setIsSavingDialogOpen } =
    useContext(CanvasContext);

  return (
    <div
      className={`absolute ${
        !isLoginOpen && "w-14 hover:w-56"
      } w-14 overflow-hidden duration-500 group transition-all text-zinc-200 z-[9999] left-0 top-1/2 -translate-y-1/2 bg-zinc-700 p-4 py-5 flex flex-col h-screen justify-between shadow-md`}
    >
      <div
        className={`flex flex-col gap-8 transition-all duration-500 ${
          isLoginOpen && "-translate-x-[10rem]"
        }`}
      >
        <button
          onClick={() => {
            const confirm = window.confirm(
              "Are you sure you want to clear the canvas?"
            );
            if (confirm) {
              setGrid(
                Array(7)
                  .fill(0)
                  .map(() =>
                    Array(7)
                      .fill(0)
                      .map((e) => "")
                  )
              );
            }
          }}
          className="flex items-center gap-6 group-hover:gap-4 transition-all delay-700 group-hover:transition-none font-medium tracking-wider"
        >
          <Icon
            icon="mdi:file-outline"
            className="w-6 h-6 flex-shrink-0 -mt-0.5"
          />
          New
        </button>
        <button
          onClick={() => {
            !isLoggedIn ? setIsLoginOpen(true) : setIsSavingDialogOpen(true);
          }}
          className="flex items-center gap-6 group-hover:gap-4 transition-all delay-700 group-hover:transition-none font-medium tracking-wider"
        >
          <Icon
            icon="mdi:content-save"
            className="w-6 h-6 flex-shrink-0 -mt-0.5"
          />
          Save
        </button>
        <button className="flex items-center gap-6 group-hover:gap-4 transition-all delay-700 group-hover:transition-none font-medium tracking-wider">
          <Icon icon="mdi:import" className="w-6 h-6 flex-shrink-0 -mt-0.5" />
          Import
        </button>
        <button className="flex items-center gap-6 group-hover:gap-4 transition-all delay-700 group-hover:transition-none font-medium tracking-wider">
          <Icon
            icon="mdi:export-variant"
            className="w-6 h-6 flex-shrink-0 -mt-0.5"
          />
          Export
        </button>
        <button className="flex items-center gap-6 group-hover:gap-4 transition-all delay-700 group-hover:transition-none font-medium tracking-wider">
          <Icon
            icon="mdi:cog-outline"
            className="w-6 h-6 flex-shrink-0 -mt-0.5"
          />
          Settings
        </button>
        <button className="flex items-center gap-6 group-hover:gap-4 transition-all delay-700 group-hover:transition-none font-medium tracking-wider">
          <Icon icon="mdi:book" className="w-6 h-6 flex-shrink-0 -mt-0.5" />
          Collection
        </button>
        <button className="flex items-center gap-6 group-hover:gap-4 transition-all delay-700 group-hover:transition-none font-medium tracking-wider">
          <Icon
            icon="mdi:information-outline"
            className="w-6 h-6 flex-shrink-0 -mt-0.5"
          />
          About
        </button>
      </div>
      <div className="flex flex-col gap-8">
        {isLoggedIn ? (
          <button
            onClick={() => {
              auth.signOut();
              setIsLoginOpen(true);
              setUserData(null);
            }}
            className="flex items-center gap-6 group-hover:gap-4 transition-all delay-700 group-hover:transition-none font-medium tracking-wider whitespace-nowrap"
          >
            <img
              src={
                userData?.photoURL ||
                "https://ui-avatars.com/api/?name=" + userData?.displayName
              }
              className="w-6 h-6 rounded-full flex-shrink-0"
              referrerPolicy="no-referrer"
            />
            {userData?.displayName}
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoginOpen(!isLoginOpen);
            }}
            className="flex items-center gap-6 group-hover:gap-4 transition-all delay-700 group-hover:transition-none font-medium tracking-wider whitespace-nowrap"
          >
            <Icon icon="mdi:user" className="w-6 h-6 flex-shrink-0" />
            Login
          </button>
        )}
        <button className="flex items-center gap-6 group-hover:gap-4 transition-all delay-700 group-hover:transition-none font-medium tracking-wider whitespace-nowrap">
          <Icon icon="mdi:compass-outline" className="w-6 h-6 flex-shrink-0" />
          Explore
        </button>
      </div>
    </div>
  );
}

export default Navbar;
