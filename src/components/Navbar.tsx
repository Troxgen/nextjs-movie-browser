"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

import SearchBar from "./SearchBar"; // yolunu kendine göre ayarla
import React from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialSearch = searchParams?.get("search") || "batman";

function handleSearch(query: string) {
  const params = new URLSearchParams(searchParams.toString());

  if (query) {
    params.set("search", query);
  } else {
    params.delete("search");
  }

  router.push(`${pathname}?${params.toString()}`);
}


  return (
    <nav className="relative bg-black/95 backdrop-blur-md border-b border-green-900/20 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-green-900/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo ve Nav Links */}
          <div className="flex items-center space-x-8">
            <a
              href="/"
              className="group flex items-center space-x-3 hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
                  </svg>
                </div>
                <div className="absolute inset-0 w-10 h-10 bg-green-500/30 rounded-lg blur-md group-hover:blur-lg transition-all duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent group-hover:from-green-200 group-hover:to-white transition-all duration-500">
                  FilmHub
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
            </div>                                      
          </div>

          {/* SearchBar */}
          <div className="flex items-center space-x-4">
            <SearchBar onSearch={handleSearch} initialValue={initialSearch} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
    </nav>
  );
}
