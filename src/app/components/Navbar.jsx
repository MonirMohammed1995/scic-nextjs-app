"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react"; // 👈 NextAuth hook

export default function Navbar() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { data: session } = useSession(); // 👈 check if user logged in

  // Public links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-gray-900/80 dark:border-gray-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          MyApp
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-600 transition ${
                pathname === link.href ||
                pathname.startsWith(link.href.replace(/\/$/, ""))
                  ? "text-blue-600 dark:text-blue-400"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* 👇 Private Link (only show if logged in) */}
          {session && (
            <Link
              href="/dashboard/add-product"
              className={`hover:text-blue-600 transition ${
                pathname.startsWith("/dashboard")
                  ? "text-blue-600 dark:text-blue-400"
                  : ""
              }`}
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* Right Side (Login/Logout + Theme Toggle + Mobile Menu Button) */}
        <div className="flex items-center gap-3">
          {!session ? (
            <Link href="/login">
              <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600">
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={() => signOut()}
              className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}

          {/* Theme Toggle */}
          <button
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full border bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
          >
            {dark ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenu && (
        <div className="md:hidden border-t bg-white dark:bg-gray-900 dark:border-gray-700">
          <nav className="flex flex-col gap-2 p-4 text-gray-700 dark:text-gray-200 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className={`rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                  pathname === link.href ? "text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* 👇 Private Link mobile */}
            {session && (
              <Link
                href="/dashboard/add-product"
                onClick={() => setMobileMenu(false)}
                className="rounded px-3 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Dashboard
              </Link>
            )}

            {!session ? (
              <Link
                href="/login"
                onClick={() => setMobileMenu(false)}
                className="rounded px-3 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  setMobileMenu(false);
                  signOut();
                }}
                className="rounded px-3 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
