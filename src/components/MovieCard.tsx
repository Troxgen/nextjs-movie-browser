type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Runtime?: string; // örn: "130 min"
  imdbRating?: string; // örn: "7.0"
};

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <a 
      href={`/movies/${movie.imdbID}`}
      className="group block relative overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition-transform duration-300"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
    
      </div>
      
      <div className="bg-black text-white p-3 space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="text-white font-medium text-sm leading-tight flex-1 mr-2">
            {movie.Title}
          </h3>
          <span className="text-green-600 font-semibold text-sm whitespace-nowrap">
            {movie.Year}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-300 pt-1">
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{movie.Runtime || "130 min"}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{movie.imdbRating || "7.0"}</span>
          </div>
        </div>
      </div>
    </a>
  );
}