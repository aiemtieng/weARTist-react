import React from "react";
import "./TextMainCommission.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function TextMainCommission() {
  const [text] = useTypewriter({
    words: ["ommission"],
    loop: true, // Set loop to true for continuous looping
    typeSpeed: 150,
    deleteSpeed: 150,
  });

  return (
    <div className="TextMainCommission">
      <h1 className="TextCommission">
        C{text}
        <Cursor />
      </h1>

      <span className="CommissionDescription">
        Commission พื้นที่สำหรับนักวาดและคนรักภาพวาดติดต่อกัน <br/>
        เพื่อจ้างงานวาดภาพแบบที่ตัวเองต้องการ ลูกค้าสามารถบรีฟงาน<br/> กับนักวาดได้
        โดยการติดต่อจะเป็นแบบส่วนตัวทั้งหมด
      </span>
    </div>
  );
}

export default TextMainCommission;
