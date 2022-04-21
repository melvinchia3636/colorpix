import { Icon } from '@iconify/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from './firebase';

function CreateAccount({ setInSignUpPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = () => {
    if (!email) {
      document.getElementById("email").setCustomValidity("Invalid field.");
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div>
      <h2 className="text-4xl font-medium tracking-widest text-white">
        Create Account
      </h2>
      <p className="mt-2 text-zinc-500 tracking-wide w-[28rem]">Create an account save and publish your Colorpix art work online.</p>
      <div className="w-full group relative flex items-center mt-16 border-2 border-zinc-500 focus-within:border-zinc-200 group rounded-md transition-all">
        <input id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border-0 p-6 bg-transparent text-white placeholder-zinc-500 tracking-wide focus:outline-none caret-zinc-200 invalid:text-rose-500 invalid:placeholder-rose-500 peer" type="email" placeholder="example@mail.com" />
        <div className="absolute top-0 left-3 bg-zinc-800 -translate-y-1/2 px-3 text-zinc-500 group-focus-within:text-zinc-200 transition-all peer-invalid:text-red-500">Email</div>
        <Icon icon="mdi:at" className="w-6 h-6 mr-6 text-zinc-500 group-focus-within:text-white transition-all peer-invalid:text-rose-500" />
      </div>
      <div className="w-full group relative flex items-center mt-11 border-2 border-zinc-500 focus-within:border-zinc-200 group rounded-md transition-all">
        <div className="absolute top-0 left-3 bg-zinc-800 -translate-y-1/2 px-3 text-zinc-500 group-focus-within:text-zinc-200 transition-all">Password</div>
        <input id="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border-0 p-6 bg-transparent text-white placeholder-zinc-500 tracking-wide focus:outline-none caret-zinc-200" type="password" placeholder="•••••••••" />
        <Icon icon="mdi:lock" className="w-6 h-6 mr-6 text-zinc-500 group-focus-within:text-white transition-all" />
      </div>
      <div className="w-full group relative flex items-center mt-11 border-2 border-zinc-500 focus-within:border-zinc-200 group rounded-md transition-all">
        <div className="absolute top-0 left-3 bg-zinc-800 -translate-y-1/2 px-3 text-zinc-500 group-focus-within:text-zinc-200 transition-all">Confirm Password</div>
        <input id="confirm-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full border-0 p-6 bg-transparent text-white placeholder-zinc-500 tracking-wide focus:outline-none caret-zinc-200" type="password" placeholder="•••••••••" />
        <Icon icon="mdi:lock" className="w-6 h-6 mr-6 text-zinc-500 group-focus-within:text-white transition-all" />
      </div>
      <button onClick={signUp} className="mt-12 w-full bg-zinc-200 text-lg font-medium tracking-wide py-3 rounded-md hover:bg-zinc-300 text-zinc-800 focus:outline-none transition-all">
        Sign Up
      </button>
      <button className="mt-4 w-full border-2 border-zinc-500 text-zinc-200 font-medium tracking-wide py-4 rounded-md hover:bg-zinc-700  transition-all focus:outline-none flex items-center justify-center gap-4">
        <Icon icon="logos:google-icon" className="w-6 h-6" />
        Continue with Google
      </button>
      <div className="text-zinc-500 text-center text-sm mt-4">
        Already have an account? <button onClick={() => setInSignUpPage(false)} className="text-zinc-200 hover:text-zinc-300 transition-all font-medium" href="#">Sign in</button>
      </div>
    </div>
  )
}

export default CreateAccount