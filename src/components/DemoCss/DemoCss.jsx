import React from "react";
import "./demoCss.css";
import style from "./demoCss.module.css";

const DemoCss = () => {
  return (
    <div className="demo_css">
      {/* Nhớ lưu ý khi viết global CSS khi thêm vào JS */}
      <h2 className={style.h2}>Demo về sử dụng CSS trong dự án REACT</h2>
      <p className={style.subtitle}>sdfsdfdsf</p>
    </div>
  );
};

export default DemoCss;
