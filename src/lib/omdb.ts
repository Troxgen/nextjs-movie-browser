const API_KEY = process.env.OMDB_API_KEY; 

export async function fetchMovies(search: string) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(search)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Filmler listelenemedi !");
  return res.json();
}

export async function fetchMovieDetail(imdbID: string) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Film detayı getirilemedi !");
  return res.json();
}
