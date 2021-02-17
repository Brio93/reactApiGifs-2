import React from "react";
import "./Gifs.css";
import "../styles.css";

const Gifs = ({ title, id, url }) => {
  return (
    <a href={`#${id}`} className="Gifs">
      <h3 className="title">{title}</h3>
      <img alt="{title}" src={url} />
    </a>
  );
};

export default Gifs;
