import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";

function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const {
    data: movies,
    isPending,
    error,
  } = useFetch(
    `https://api.kinopoisk.dev/v1.2/movie/search?query=${input}&token=FDFMT84-W554R5F-QCM09ES-8E8Z7D3

    `
  );

  useEffect(() => {
    if (movies) {
      setData(movies.docs || []);
    }
  }, [movies]);

  const handleSearchInputChanges = (e) => {
    setInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (input.trim() !== "") {
      setData([]);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Type here any movie"
            onChange={handleSearchInputChanges}
          />
        </form>
      </div>
      {data && <MovieCard data={data} />}
    </>
  );
}

export default Home;
