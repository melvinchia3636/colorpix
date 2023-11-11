import { Icon } from "@iconify/react";
import React, { useContext, useState } from "react";
import { CanvasContext } from "../App";

function SavingDialog() {
  const { isSavingDialogOpen, setIsSavingDialogOpen } =
    useContext(CanvasContext);
  const [shareToPublic, setShareToPublic] = useState(true);

  return (
    <div
      className={`${
        isSavingDialogOpen ? "z-[9999]" : "z-[-1] delay-700"
      } transition-all w-full h-screen fixed top-0 left-0`}
    >
      <div
        className={`${
          isSavingDialogOpen ? "opacity-100" : "opacity-0 delay-200"
        } transition-opacity duration-200 w-full h-screen bg-black/20 absolute top-0 left-0 flex items-center justify-center`}
      >
        <div
          className={`${
            isSavingDialogOpen ? "translate-x-0" : "translate-x-[200%]"
          } transition-[transform] duration-500 p-8 rounded-lg bg-zinc-800 min-w-[30vw] shadow-2xl`}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-zinc-200 flex items-center gap-2">
              <Icon icon="mdi:content-save" className="w-6 h-6 inline-block" />
              Save project
            </h1>
            <button
              onClick={() => setIsSavingDialogOpen(false)}
              className="text-zinc-500 hover:text-zinc-200 transition-all"
            >
              <Icon icon="mdi:close" className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full relative flex items-center mt-8 border-2 border-zinc-500 focus-within:border-zinc-200 group/input rounded-md transition-all">
            <div className="absolute top-0 left-3 bg-zinc-800 -translate-y-1/2 px-3 text-zinc-500 group-focus-within/input:text-zinc-200 transition-all">
              Project Name
            </div>
            <input
              className="w-full border-0 p-6 bg-transparent text-white placeholder-zinc-500 tracking-wide focus:outline-none caret-zinc-200"
              placeholder="My project"
            />
            <Icon
              icon="mdi:file-document"
              className="w-6 h-6 mr-6 text-zinc-500 group-focus-within/input:text-white transition-all"
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <p className="text-white font-medium flex items-center gap-2">
              <Icon icon="mdi:eye" className="w-5 h-5 inline-block" />
              Share to public
              <div className="relative -mt-0.5">
                <div className="w-4 h-4 peer" tabIndex={0}>
                  <Icon icon="mdi:information-outline" className="w-4 h-4" />
                </div>
                <div className="z-[-1] peer-hover:z-[9999] peer-focus:z-[9999] transition-all absolute opacity-0 peer-hover:opacity-100 peer-focus:opacity-100 duration-200 -translate-x-1/2 left-1/2 -translate-y-[120%] w-64 bg-zinc-700 p-4 rounded-md shadow-lg text-zinc-200">
                  <p className="text-sm font-semibold tracking-wide flex items-center gap-1.5">
                    <Icon icon="mdi:eye" className="w-4 h-4 inline-block" />
                    Share to public
                  </p>
                  <p className="text-xs mt-2">
                    If you share your artwork to public, your artwork will be
                    available in the explore page for everyone to see.
                  </p>
                </div>
              </div>
            </p>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                checked={shareToPublic}
                onChange={() => setShareToPublic(!shareToPublic)}
              />
              <div class="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-zinc-600 peer-checked:bg-blue-500"></div>
            </label>
          </div>
          <button className="mt-6 w-full bg-zinc-200 text-lg font-medium tracking-wide py-3 rounded-md hover:bg-zinc-300 text-zinc-800 focus:outline-none transition-all">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavingDialog;
