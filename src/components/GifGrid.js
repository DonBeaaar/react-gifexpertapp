import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifts(category);
  // const [imgs, setImgs] = useState([]);
  // Nuevo HOOK
  // useEffect(() => {
  //   getGifs(category).then((gifs) => {
  //     setImgs(gifs);
  //   });
  // }, [category]);
  //Recibe una lista de dependencias, si está vacio solo se recarga cuando se inicia el compoennte

  return (
    <>
      <h2 > {category} </h2>
      {loading && <p className="card animate__animated animate__flash">"Está cargando"</p>}
      {<div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>}
    </>
  );
};

export default GifGrid;
