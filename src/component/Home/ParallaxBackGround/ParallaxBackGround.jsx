import React from "react";
import "./ParallaxBackGround.css";
import pinkcircle from "../../../assets/image/pinkcircle.png";
import pointedpink from "../../../assets/image/pointedpink.png";
import pointedyellow from "../../../assets/image/pointedyellow.png";
import pointedhalfpink from "../../../assets/image/pointedhalfpink.png";
function ParallaxBackGround() {
  return (
    <div className="ParallaxBackGround">
      <div className="PointedYellow">
        <img src={pointedyellow} alt="pointedyellow"></img>
      </div>

      <div className="CirclePink">
        <img src={pinkcircle} alt="pinkcircle"></img>
      </div>

      <div className="RightPointedPink">
        <img src={pointedhalfpink} alt="rightpointedpink"></img>
      </div>

      <div className="LeftPointedPink">
        <img src={pointedpink} alt="leftpointedpink"></img>
      </div>
    </div>
  );
}

export default ParallaxBackGround;
