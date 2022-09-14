import React from "react";
import AlbumCard from "./AlbumCard";
const Display = () => {
  return (
    <div className="try">
      {[...Array(5)].map((item) => {
        return <AlbumCard />;
      })}
    </div>
  );
};

export default Display;
