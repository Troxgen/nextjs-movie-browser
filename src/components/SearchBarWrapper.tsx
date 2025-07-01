"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import MovieCard from "@/components/MovieCard";

export function SearchBarWrapper({ movies }: { movies: any[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "batman";

  const [search, setSearch] = useState(""); 
  useEffect(() => {
    setSearch(searchQuery);
  }, [searchQuery]);

  function handleSearch(query: string) {
    router.push(`/?search=${encodeURIComponent(query)}`);
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {movies.map((movie: any) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
