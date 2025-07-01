"use client";

import React, { useState, useEffect, ChangeEvent } from "react";

type Props = {
  onSearch: (query: string) => void;
  initialValue?: string;
};

export default function SearchBar({ onSearch, initialValue = "" }: Props) {
  const [search, setSearch] = useState(initialValue);

  useEffect(() => {
    setSearch(initialValue);
  }, [initialValue]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(search.trim());
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Film ara..."
        value={search}
        onChange={handleChange}
        className="w-64 pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors duration-300"
      >
        Ara
      </button>
    </form>
  );
}
