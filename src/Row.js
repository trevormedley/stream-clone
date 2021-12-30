import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setSeries(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {series.map((series) => (
          <img
            key={series.id}
            className="row-poster"
            src={`${base_url}${series.poster_path}`}
            alt={series.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
