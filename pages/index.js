import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const AuthLink = () => {
    // Determines the href and text based on the user's authentication status
    const href = user ? "/api/auth/logout" : "/api/auth/login";
    const text = user ? "Logout" : "Login";

    return (
      <Link
        href={href}
        className="rounded-md bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-600"
      >
        {text}
      </Link>
    );
  };

  return (
    <>
      <Head>
        <title>Chatty-witty</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-slate-800 text-center text-white">
        <AuthLink />
        {!user && (
          <Link
            href="/api/auth/signup"
            className="ml-4 rounded-md bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-600"
          >
            SignUp
          </Link>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx.req, ctx.res);
  if (session) {
    return {
      redirect: {
        destination: "/chat",
        permanent: false,
      },
    };
  }
  return { props: {} };
};
