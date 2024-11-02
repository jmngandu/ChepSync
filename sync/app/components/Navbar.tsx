import Link from "next/link";
import Image from "next/image";
import React from "react";
import { auth, signOut, signIn } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  const handleLogin = async () => {
    "use server";
    await signIn({ provider: "github" });
  };

  const handleLogout = async () => {
    "use server";
    await signOut({ redirectTo: "/" });
  };

  return (
    <>
      <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.jpg" alt="logo" width={70} height={30} />
          </Link>
          <div className="flex items-center gap-5 text-black">
            {session && session.user ? (
              <>
                <Link href="./startup/create">
                  <span>create</span>
                </Link>
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>
                <Link href={`/user/${session.id}`}>
                  <span>{session.user.name}</span>
                </Link>
              </>
            ) : (
              <form onSubmit={handleLogin}>
                <button type="submit">Login</button>
              </form>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
