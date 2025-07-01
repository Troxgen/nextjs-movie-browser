import React from "react";
import Image from "next/image";
import { fetchMovieDetail } from "@/lib/omdb";

export const dynamic = "force-dynamic";

interface MovieDetail {
  Title: string;
  Year: string;
  Genre: string;
  Poster: string;
  Plot: string;
  imdbRating?: string;  
  Runtime: string;
  Director: string;
  Response?: string;
  Error?: string;
}

export default async function MovieDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = (await fetchMovieDetail(id)) as MovieDetail;

  if (movie.Response === "False") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl font-bold mb-2">Film bulunamadı</h2>
          <p className="text-gray-600">{movie.Error || "Bir hata oluştu."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-6 bg-gray-700">
              <Image
                src={movie.Poster}
                alt={movie.Title}
                width={300}
                height={450}
                className="rounded-lg shadow-md mx-auto"
                unoptimized
              />
            </div>

            <div className="md:w-2/3 p-6">
              <h1 className="text-3xl font-bold text-green-600 mb-2">
                {movie.Title}
              </h1>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                {movie.Year}
              </span>

              <div className="mt-4">
                <strong className="text-green-600">Tür:</strong>{" "}
                <em>{movie.Genre}</em>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-yellow-500 text-lg">⭐</span>
                <span className="text-lg font-semibold">{movie.imdbRating ?? "N/A"}</span>
                <span>/10</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-700 p-3 rounded-lg">
                  <span className="text-green-600 font-medium block">Süre</span>
                  <span>{movie.Runtime}</span>
                </div>
                <div className="bg-gray-700 p-3 rounded-lg">
                  <span className="text-green-600 font-medium block">Yönetmen</span>
                  <span>{movie.Director}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-green-600 mb-3">
              Film Özeti
            </h2>
            <p className="text-slate-300 leading-relaxed text-justify">
              {movie.Plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
