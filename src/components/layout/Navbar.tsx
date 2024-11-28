"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import React from "react";

const Navbar = () => {
  const { data: session, status } = useSession();

  const handleLogout = () => {
    signOut({ callbackUrl: "/" }); // Redirect to home after logout
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          SaaS App
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          {session && (
            <Link href="/dashboard" className="text-gray-300 hover:text-white">
              Dashboard
            </Link>
          )}
          {session && session.user?.email === "admin@example.com" && (
            <Link href="/admin" className="text-gray-300 hover:text-white">
              Admin
            </Link>
          )}
          {!session && (
            <>
              <Link href="/auth/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
              <Link href="/auth/register" className="text-gray-300 hover:text-white">
                Register
              </Link>
            </>
          )}
          {session && (
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
