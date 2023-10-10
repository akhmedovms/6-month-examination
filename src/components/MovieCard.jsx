import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  if (!Array.isArray(data)) {
    return <p>No results found.</p>;
  }

  if (data.length === 0) {
    return (
      <div className="grid place-items-center pt-60">
        <h1 className="text-4xl">No Data ;(</h1>
      </div>
    );
  }

  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pt-10">
      {data.map((movie) => (
        <li key={movie.id} className="p-4 rounded shadow">
          <Link to={`/innerpage/${movie.id}`}>
            <img src={movie.poster} alt="" className="w-full" />
            <h3 className="text-lg font-semibold pt-3 pb-1">
              {movie.alternativeName}
            </h3>
            <p>Year: {movie.year}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieCard;
