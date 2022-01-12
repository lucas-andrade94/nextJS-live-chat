import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user?.getUsername(),
        email: user?.getEmail(),
        ethAddress: user?.get("ethAddress"),
      })
      .then(
        (message) => {
          // The object was saved successfully
        },
        (error) => {
          // The save failed
          // Error is a Moralis.Error with an error code and message
          console.log(error.message);
        }
      );

    endOfMessagesRef?.current?.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 w-11/12 space-x-4 px-6 py-1 max-w-5xl border-2 border-blue-400 rounded-full bg-black opacity-90">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-400 py-2 px-4"
        type="text"
        placeholder={`Enter a message`}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-red-200"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
