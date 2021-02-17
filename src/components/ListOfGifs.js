import React, { useEffect, useState } from "react";
import Gifs from "./Gifs";
import getGifs from "../services/getGifs";

const ListOfGifs = ({ params }) => {
  const { keywords } = params;
  const [loading, setLoading] = useState(false);

  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keywords }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keywords]
  );

  if (loading) return <i> X Cargando... X </i>;

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gifs key={id} id={id} title={title} url={url} />
      ))}
    </div>
  );
};
export default ListOfGifs;
