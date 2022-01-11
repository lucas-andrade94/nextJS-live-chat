import Image from "next/image";
import { useState } from "react";
import { useMoralis } from "react-moralis";

import ChatLogo from "../assets/ChatLogo.webp";
import BackgroundImage from "../assets/background.webp";

function Login() {
  const { authenticate, signup, login, authError } = useMoralis();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState(false);

  return (
    <div
      className="bg-black relative
    "
    >
      <div className="flex flex-col absolute top-0 bottom-0 my-auto z-50 h-4/6 w-full items-center justify-center space-y-6">
        {!loginEmail ? (
          <>
            <Image
              className="object-cover rounded-full"
              src={ChatLogo}
              height={200}
              width={200}
            />
            <button
              onClick={authenticate}
              className="bg-yellow-500 rounded-lg p-5 w-[200px] font-bold animate-bounce"
            >
              Login with MetaMask
            </button>
            <button
              onClick={() => setLoginEmail(true)}
              className="bg-yellow-500 rounded-lg p-5 w-[200px] font-bold animate-bounce"
            >
              Login with Email
            </button>
          </>
        ) : (
          <div className="flex flex-col justify-around w-[250px] sm:w-[350px] h-[350px] bg-[rgba(0,0,0,0.8)] p-4 text-white space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="font-bold">Email</label>
              <input
                type="email"
                className="px-2 py-2 outline-none text-black"
                placeholder="Insert your email"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
              />

              <label className="font-bold">Password</label>
              <input
                type="password"
                className="px-2 py-2 outline-none text-black"
                placeholder="Insert your password"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </div>
            {authError && (
              <div className="text-red-500">
                <span>{authError.message}</span>
              </div>
            )}
            <button
              onClick={() => login(email, password)}
              className="bg-yellow-500 rounded-lg p-3 font-bold text-black opacity-100"
            >
              Login with Email
            </button>
            <button
              onClick={() => signup(email, password, email)}
              className="bg-yellow-500 rounded-lg p-3 font-bold text-black opacity-100"
            >
              Register
            </button>
          </div>
        )}
      </div>

      <div className="w-full h-screen relative">
        <Image src={BackgroundImage} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
