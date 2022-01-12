import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";

import Avatar from "./Avatar";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage =
    message.get("username") === user?.get("username") ||
    message.get("email") === user?.get("email") ||
    message.get("ethAddress") === user?.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={message.get("username")} />
      </div>

      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-red-200"
            : "rounded-bl-none bg-blue-400"
        }`}
      >
        <p className="truncate">{message.get("message")}</p>
      </div>

      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${
          isUserMessage && "order-first pr-1"
        }`}
        datetime={message.createdAt}
      />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-red-200" : "text-blue-400"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
}

export default Message;
