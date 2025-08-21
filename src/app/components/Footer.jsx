"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              MyApp
            </h2>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              A modern Next.js application with scalable design and clean
              architecture.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-200">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-blue-600 transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/add-product"
                  className="hover:text-blue-600 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-600 transition">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-200">
              Support
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-600 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-200">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-4 text-gray-600 dark:text-gray-400">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="h-5 w-5 hover:text-blue-600 transition" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="h-5 w-5 hover:text-blue-600 transition" />
              </Link>
              <Link href="https://github.com" target="_blank">
                <Github className="h-5 w-5 hover:text-blue-600 transition" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5 hover:text-blue-600 transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
