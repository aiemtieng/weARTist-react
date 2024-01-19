import React from "react";
import "./EmmaProfile.css";
import BackgroundProfile from "../../../../assets/image/tabpurplepaper.png";
import Polygon from "../../../../assets/image/Polygon.png";
import EmmaImage from "../../../../assets/image/emma.png";

function EmmaProfile() {
  return (
    <div className="EmmaProfile">
      <img
        className="BackgroundEmmaProfile"
        src={BackgroundProfile}
        alt="bgprofile"
      ></img>
      <img className="BackgroundPolygon" src={Polygon} alt="polygon"></img>
      <img className="ImageEmma" src={EmmaImage} alt="imageemma"></img>

      <div className="TextProfileEmma">
        <h3 className="TextNameEmma">Emma Miller</h3>
        <svg className="LineUnderEmmaNameText" width="310" height="10">
          <line
            x1="0"
            y1="5"
            x2="310"
            y2="5"
            style={{ stroke: "white", strokeWidth: "2" }}
          />
        </svg>
        <h3 className="TextDescriptionAboutEmma">
          สวัสดีค่ะ ! ฉันชื่อเอมม่า อายุ 21 ปี <br />
          ฉันชอบดูการ์ตูนและรักในการวาดภาพมาก <br />
          โดยฉันเคยวาดภาพลงหนังสือส่งประกวดและ
          <br /> วาดภาพขาย
        </h3>

        <h3 className="TextStatus">STATUS: <p>รับวาดภาพการ์ตูน</p></h3>
        <h3 className="TextType">TYPE: <p>Digital Art</p></h3>
        <h3 className="TextPrice">Price: <p>ภาพครึ่งตัว 200 บ. <br/> ภาพเต็มตัว 500 บ.</p></h3>
      </div>

      
    </div>
  );
}

export default EmmaProfile;
