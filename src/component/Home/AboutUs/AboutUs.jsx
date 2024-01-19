import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import Tabweartist from "../../../assets/image/tabweartist.png";
import ImageAboutUs1 from "../../../assets/image/imgaboutus1.jpg";
import ImageAboutUs2 from "../../../assets/image/imgaboutus2.jpg";
import ImageAboutUs3 from "../../../assets/image/imgaboutus3.png";

function AboutUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [ImageAboutUs1, ImageAboutUs2, ImageAboutUs3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust the time as needed)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="AboutUs">
      <img src={Tabweartist} alt="tabweartist"></img>
      <h3 className="TextAboutUs">ABOUT US</h3>
      <svg className="LineUnderAbouUsText" width="560" height="10">
        <line
          x1="0"
          y1="5"
          x2="560"
          y2="5"
          style={{ stroke: "white", strokeWidth: "3" }}
        />
      </svg>

      <div className="TitleDescriptionAboutUs">
        <ul>
          <li className="TextTitleEng">weARTist</li>
          <li className="TextTitleThai">เว็บติสท์ๆ สำหรับคนรักงานอาร์ต</li>
        </ul>
        <div className="DescriptionAboutUs">
          <span className="TextDescription">
            เป็นเว็บไซต์สื่อกลางสำหรับเยี่ยมชมผลงานศิลป์ของเหล่านักวาด <br />
            ได้อย่างอิสระและเป็นแพลตฟอร์มสำหรับนักวาดที่จะลงผลงาน <br />
            แสดงความอาร์ตให้ผู้เยี่ยมชมได้ชมกันในรูปแบบของนิทรรศการ <br />
            งานศิลปะออนไลน์ นอกจากนี้เว็บไซต์ของเรายังเป็นสื่อกลาง <br />
            การซื้อ - ขายงานศิลป์ออนไลน์อีกด้วย !
          </span>
        </div>
      </div>

      <div className="ImageAnimation">
        {images.map((image, index) => (
          <img
            key={index}
            className={`fadeInOut ${
              index === currentImageIndex ? "active" : ""
            }`}
            src={image}
            alt={`imganimation${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
