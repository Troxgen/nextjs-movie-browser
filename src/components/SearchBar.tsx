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
    onSearch(search.trim() || "");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Film ara..."
        value={search}
        onChange={handleChange}
        className="border rounded p-2 flex-grow"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Ara
      </button>
    </form>
  );
}
