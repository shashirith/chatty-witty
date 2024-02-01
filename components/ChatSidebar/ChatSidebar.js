import Link from "next/link";

const ChatSidebar = () => {
  return (
    <div className="bg-slate-900 text-white">
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
};

export default ChatSidebar;
