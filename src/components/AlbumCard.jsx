import React from "react";
import { motion } from "framer-motion";
import "./AlbumCard.css";
const AlbumCard = () => {
  return (
    <>
      <div className="example-container">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
          <img
            className="doog"
            src="https://images.unsplash.com/photo-1585543210219-e2be0092bad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8anVpY2UlMjB3cmxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
          <p className="subtext">Album Name</p>
        </motion.div>
        {/* <p>Hello</p> */}
      </div>
      {/* <div className="subtext">
        <p>Hello</p>
      </div> */}
    </>
  );
};

export default AlbumCard;
