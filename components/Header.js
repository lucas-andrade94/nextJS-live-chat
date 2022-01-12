import Image from "next/image";
import { useMoralis } from "react-moralis";

import ChatLogo from "../assets/ChatLogo.webp";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user, logout } = useMoralis();

  console.log(user);

  return (
    <div className="sticky top-0 z-50 bg-black shadow-sm text-red-200 border-b-2 border-red-400">
      <div className="grid grid-cols-5 md:grid-cols-6 items-end md:items-center px-5 md:px-0">
        <div className="absolute top-5 left-5 h-24 w-24 mx-auto hidden md:inline-grid">
          <Image
            className="rounded-full"
            src={ChatLogo}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="col-span-6 text-left md:text-center py-5">
          <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:mx-auto border-red-900 border-8 rounded-full">
            <Avatar />
          </div>

          <h1 className="text-xl sm:text-3xl">Welcome to the Metaverse</h1>
          <h2 className="text-2xl sm:text-5xl font-bold truncate">{user?.getUsername()}</h2>

          <ChangeUsername />
          <button
            className="text-sm absolute top-10 right-5 hover:text-red-400"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
