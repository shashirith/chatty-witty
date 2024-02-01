import ChatSidebar from "components/ChatSidebar/ChatSidebar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
        <ChatSidebar />
        <div className="flex flex-col bg-slate-600">
          <div className="flex-1">chat Window</div>
          <footer className="bg-slate-800 p-10">Footer</footer>
        </div>
      </div>
    </>
  );
}
