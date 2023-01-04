import React from "react";



const Card = ({ movie }: any) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={movie.Poster}
          alt= {movie.Title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.Title}</h2>
          <p>{movie.Year}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
