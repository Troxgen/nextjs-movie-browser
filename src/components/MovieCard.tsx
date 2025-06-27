type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <a href={`/movies/${movie.imdbID}`}>
      <div className="relative w-full h-200 rounded overflow-hidden">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-black/60 backdrop-blur-sm px-4 py-2">
          <h2 className="text-lg font-semibold text-red-600 text-center">{movie.Title}</h2>
          <p className="text-sm text-red-200 text-center">{movie.Year}</p>
        </div>
      </div>
    </a>
  );
}

