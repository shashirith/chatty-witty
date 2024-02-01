import { useState } from "react";
import ChatSidebar from "components/ChatSidebar/ChatSidebar";
import Head from "next/head";

export default function ChatPage() {
  // Initialize the message state
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <>
      <Head>
        <title>Next Chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
        <ChatSidebar />
        <div className="flex flex-col bg-slate-600">
          <div className="flex-1">chat Window</div>
          <footer className="bg-slate-800 p-10">
            <form onSubmit={handleSubmit}>
              <fieldset className="flex gap-2">
                {/* Make textarea a controlled component */}
                <textarea
                  placeholder="Type your message here"
                  value={message}
                  onChange={() => {
                    setMessage(event.target.value);
                  }}
                  className="w-full resize-none rounded-md bg-slate-700 p-2 text-white focus:border-emerald-500 focus:bg-slate-700 focus:outline-emerald-500"
                />
                <button type="submit" className="btn">
                  submit
                </button>
              </fieldset>
            </form>
          </footer>
        </div>
      </div>
    </>
  );
}
