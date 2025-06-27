import Image from "next/image";
import { fetchMovies } from '@/lib/omdb';
import {SearchBarWrapper }from '@/components/SearchBarWrapper';

export default async function Home({ searchParams }: { searchParams?: { search?: string } }) {
  const search = searchParams?.search || 'batman';
  const data = await fetchMovies(search);
  const movies = data.Search || [];

  return (
    <main className="p-6">
      <SearchBarWrapper movies={movies} />
    </main>
  );
}
