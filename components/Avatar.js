import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username }) {
  const { user, logout } = useMoralis();

  return (
    <Image
      className="rounded-full bg-black"
      src={`https://avatars.dicebear.com/api/adventurer-neutral/${
        username || user?.get("username")
      }.svg`}
      layout="fill"
    />
  );
}

export default Avatar;
