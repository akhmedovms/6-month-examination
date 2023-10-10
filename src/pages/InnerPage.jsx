import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function InnerPage() {
  const { id } = useParams();
  const url = `https://api.kinopoisk.dev/v1.3/movie/${id}?token=W1QDTDE-W7749ND-PAFDWKF-28C31MZ`;
  const { data: movie, isPending, error } = useFetch(url);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {movie ? (
        <div className="flex justify-center">
          <div className="card card-side bg-base-100 shadow-xl flex justify-center w-min">
            <figure>
              <img className="w-96" src={movie.poster.previewUrl} alt="Movie" />
            </figure>
            <div className="pl-10 pt-5 pr-10">
              <h2 className="card-title pb-2">{movie.alternativeName}</h2>

              <p className="w-96 pb-4">
                {movie.description ? movie.description.substring(0, 300) : ""}
              </p>
              <hr />

              <p className="pt-4">
                {movie.countries.map((country) => {
                  return country.name + "," + " ";
                })}
              </p>
              <p>
                {movie.genres.map((gen) => {
                  return gen.name + "," + " ";
                })}
              </p>
              <p className="pb-4">
                {movie.slogan ? movie.slogan.substring(0, 50) : ""}
              </p>
              <hr />
              <p className="pb-4 pt-4">
                {movie.videos &&
                  movie.videos.trailers &&
                  movie.videos.trailers.length > 0 &&
                  movie.videos.trailers[movie.videos.trailers.length - 1]
                    .url && (
                    <a
                      className="underline-offset-3 underline"
                      href={
                        movie.videos.trailers[movie.videos.trailers.length - 1]
                          .url
                      }
                    >
                      {
                        movie.videos.trailers[movie.videos.trailers.length - 1]
                          .name
                      }
                    </a>
                  )}
              </p>

              <p className="pb-4">
                <span>Budget: </span>{" "}
                {movie.budget.value ? movie.budget.value.toLocaleString() : ""}$
              </p>
              <div className="flex justify-between items-end">
                <div className="flex gap-2 top-[100%]">
                  <div className="badge badge-outline">
                    <span>Rating: </span> {movie.rating.kp}
                  </div>
                  <div className="badge badge-outline">Year: {movie.year}</div>
                </div>
                <div className="justify-end mt-0">
                  <Link to={"/"} className="btn btn-primary">
                    Go Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default InnerPage;
