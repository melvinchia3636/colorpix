import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Image from "../../assets/Login.png";
import "animate.css";
import { auth } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import CreateAccount from "./CreateAccount";
import { toast } from "react-toastify";

function Login({ isLoginOpen }) {
  const [showWord, setShowWord] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inSignUpPage, setInSignUpPage] = useState(false);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Welcome back, " + user.displayName + "!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  useEffect(() => {
    if (!isLoginOpen) {
      setTimeout(() => {
        setShowWord(false);
      }, 700);
    } else {
      setShowWord(true);
    }
  }, [isLoginOpen]);

  return (
    <div
      className={`absolute overflow-hidden top-0 w-full h-screen transition-all duration-700 bg-zinc-800 flex ${
        isLoginOpen ? "left-0" : "-left-full"
      }`}
    >
      <div
        className={`absolute top-0 w-1/2 h-full p-16 pl-32 flex items-center justify-center transition-all duration-700 ${
          inSignUpPage ? "-left-full" : "left-0"
        }`}
      >
        <div>
          <h2 className="text-4xl font-medium tracking-widest text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-zinc-500 tracking-wide w-[28rem]">
            Sign in save and publish your Colorpix art work online.
          </p>
          <div className="w-full group relative flex items-center mt-16 border-2 border-zinc-500 focus-within:border-zinc-200 group rounded-md transition-all">
            <div className="absolute top-0 left-3 bg-zinc-800 -translate-y-1/2 px-3 text-zinc-500 group-focus-within:text-zinc-200 transition-all">
              Email
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-0 p-6 bg-transparent text-white placeholder-zinc-500 tracking-wide focus:outline-none caret-zinc-200"
              type="email"
              placeholder="example@mail.com"
            />
            <Icon
              icon="mdi:at"
              className="w-6 h-6 mr-6 text-zinc-500 group-focus-within:text-white transition-all"
            />
          </div>
          <div className="w-full group relative flex items-center mt-11 border-2 border-zinc-500 focus-within:border-zinc-200 group rounded-md transition-all">
            <div className="absolute top-0 left-3 bg-zinc-800 -translate-y-1/2 px-3 text-zinc-500 group-focus-within:text-zinc-200 transition-all">
              Password
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-0 p-6 bg-transparent text-white placeholder-zinc-500 tracking-wide focus:outline-none caret-zinc-200"
              type="password"
              placeholder="•••••••••"
            />
            <Icon
              icon="mdi:lock"
              className="w-6 h-6 mr-6 text-zinc-500 group-focus-within:text-white transition-all"
            />
          </div>
          <button
            onClick={signIn}
            className="mt-12 w-full bg-zinc-200 text-lg font-medium tracking-wide py-3 rounded-md hover:bg-zinc-300 text-zinc-800 focus:outline-none transition-all"
          >
            Sign In
          </button>
          <button
            onClick={signInWithGoogle}
            className="mt-4 w-full border-2 border-zinc-500 text-zinc-200 font-medium tracking-wide py-4 rounded-md hover:bg-zinc-700  transition-all focus:outline-none flex items-center justify-center gap-4"
          >
            <Icon icon="logos:google-icon" className="w-6 h-6" />
            Sign in with Google
          </button>
          <div className="text-zinc-500 text-center text-sm mt-4">
            Don&apos;t have an account?{" "}
            <button
              onClick={() => setInSignUpPage(true)}
              className="text-zinc-200 hover:text-zinc-300 transition-all font-medium"
              href="#"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 w-1/2 h-full p-16 pl-32 flex items-center justify-center transition-all duration-700 ${
          !inSignUpPage ? "left-full" : "left-0"
        }`}
      >
        <CreateAccount setInSignUpPage={setInSignUpPage} />
      </div>
      <div className="absolute top-0 left-1/2 w-1/2 h-full bg-zinc-600">
        <img
          src={Image}
          className="w-full h-full object-cover brightness-[40%] absolute top-0 left-0"
        />
        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center">
          {showWord && (
            <>
              <h1 className="font-['Monoton'] text-zinc-200 text-6xl tracking-widest animate__animated animate__fadeInUp">
                <span className="font-['Monoton'] text-rose-500">C</span>
                <span className="font-['Monoton'] text-amber-500">O</span>
                <span className="font-['Monoton'] text-teal-500">L</span>
                <span className="font-['Monoton'] text-sky-500">O</span>
                <span className="font-['Monoton'] text-purple-500">R</span>
                PIX
              </h1>
              <p className="text-white mt-2 text-lg animate__animated animate__fadeInDown tracking-[0.38em]">
                MINI PIXEL ARTS
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
