import React from "react";
import "./Popup.css";

const Popup = ({ selected, closePopup, openPopup }) => {
  return (
    <div className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>/ {selected.Year}</span>
        </h2>
        <p className="rating">Rating: {selected.Ratings[0].Value}</p>
        <div className="plot">
          <img src={selected.Poster} alt="poster" />
          <p>{selected.Plot}</p>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
