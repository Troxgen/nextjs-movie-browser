// types
export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type OmdbResponse = {
  Search?: Movie[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
};

export type OmdbMovieDetail = Movie & {
  Plot: string;
  Genre: string;
  Director: string;
  Actors: string;
  Runtime: string;
};

// API Key
const API_KEY = process.env.OMDB_API_KEY;

// Film arama fonksiyonu
export async function fetchMovies(search: string): Promise<OmdbResponse> {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(search)}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Filmler listelenemedi!");
  }

  const data = await res.json() as OmdbResponse;

if (data.Response === "False") {
  return { Search: [], Response: "False" };
}
  if (!data.Search) {
    throw new Error("Filmler bulunamadı!");
  }

  return data;
}

export async function fetchMovieDetail(imdbID: string): Promise<OmdbMovieDetail> {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Film detayı getirilemedi!");
  }

  const data = await res.json() as OmdbMovieDetail;

  if ((data as any).Response === "False") { 
    // OMDb API bazen "Response" döner, ama OmdbMovieDetail tipinde yok.
    throw new Error((data as any).Error || "Film detayı bulunamadı!");
  }

  return data;
}
