import React from "react";
import "./EmmaExamImage.css";
import BackgroundExamImage from "../../../../assets/image/bgcardartist.jpg";
import ExImgEmma1 from "../../../../assets/image/imageemma1.webp";
import ExImgEmma2 from "../../../../assets/image/imageemma2.webp";
import ExImgEmma3 from "../../../../assets/image/imageemma3.webp";
import ExImgEmma4 from "../../../../assets/image/imageemma4.webp";
import ExImgEmma5 from "../../../../assets/image/imageemma5.webp";
import ExImgEmma6 from "../../../../assets/image/imageemma6.webp";

function EmmaExamImage() {
  return (
    <div className="EmmaExamImage">
      <img
        className="BackgroundExImage"
        src={BackgroundExamImage}
        alt="bgeximage"
      ></img>

      <div className="EmmaExampleImage">
        <div className="ExampleImageRow">
          <img
            className="ExampleImageEmma1"
            src={ExImgEmma1}
            alt="eximageemma1"
          ></img>
          <img
            className="ExampleImageEmma2"
            src={ExImgEmma2}
            alt="eximageemma2"
          ></img>
          <img
            className="ExampleImageEmma3"
            src={ExImgEmma3}
            alt="eximageemma3"
          ></img>
        </div>
        <div className="ExampleImageRow">
          <img
            className="ExampleImageEmma4"
            src={ExImgEmma4}
            alt="eximageemma4"
          ></img>
          <img
            className="ExampleImageEmma5"
            src={ExImgEmma5}
            alt="eximageemma5"
          ></img>
          <img
            className="ExampleImageEmma6"
            src={ExImgEmma6}
            alt="eximageemma6"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default EmmaExamImage;
