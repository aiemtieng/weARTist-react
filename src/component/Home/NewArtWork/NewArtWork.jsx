import React, { useState, useEffect, useRef } from "react";
import "./NewArtWork.css";
import LongTabweARTist from "../../../assets/image/longtabweartist.png";
import { motion } from "framer-motion";
import ImageNewArtWork from "./ImageNewArtWork";

function NewArtWork() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="NewArtWork">
      <img
        className="LongTabOnTextArtNewWork"
        src={LongTabweARTist}
        alt="longtab"
      />

      <div className="TitleNewArtWork">
        <h3 className="TextNewArtWork">NEW ARTWORK !</h3>
        <svg className="LineUnderNewArtWorkText" width="1154" height="10">
          <line
            x1="0"
            y1="5"
            x2="1154"
            y2="5"
            style={{ stroke: "white", strokeWidth: "3" }}
          />
        </svg>
        <h3 className="TextNewArtWorkThai">ภาพวาดใหม่ประจำสัปดาห์</h3>
      </div>

      <div className="ImageNewArtWork">
        <motion.div className="carousel" ref={carousel} whileTap={{cursor:"grabbing"}}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {ImageNewArtWork.map((image) => (
              <motion.div className="imageitem" key={image}>
                <img src={image} alt="" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default NewArtWork;
