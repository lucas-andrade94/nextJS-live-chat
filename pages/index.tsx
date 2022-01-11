import Head from "next/head";
import { useMoralis } from "react-moralis";

import Login from "../components/Login";
import Header from "../components/Header";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-red-900 overflow-hidden">
      <Head>
        <title>Metaverse Live Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        {/* Messages */}
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
