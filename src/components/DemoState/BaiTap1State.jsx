import React, { useState } from "react";

const BaiTap1State = (props) => {
  // Dữ liệu props là dữ liệu chỉ đọc (readOnly) chỉ phục vụ việc truyền DATA từ component cha xuống cho con xử lý
  // Nếu cố gắng cập nhật thì trình duyệt sẽ báo lỗi.
  const [selectCar, setSelectCar] = useState("black-car.jpg");
  console.log(props);
  const arrButton = [
    {
      icon: "/public/CarBasic/icons/icon-black.jpg",
      title: "Crystal Black",
      subTitle: "Pearl",
      selectCar: "black-car.jpg",
    },
    {
      icon: "/public/CarBasic/icons/icon-steel.jpg",
      title: "Modern Steel",
      subTitle: "Metallic",
      selectCar: "steel-car.jpg",
    },
    {
      icon: "/public/CarBasic/icons/icon-silver.jpg",
      title: "Lunar silver",
      subTitle: "Metallic",
      selectCar: "silver-car.jpg",
    },
    {
      icon: "/public/CarBasic/icons/icon-red.jpg",
      title: "Rally Red",
      subTitle: "Metallic",
      selectCar: "red-car.jpg",
    },
  ];
  return (
    <div>
      <h2>Bài Tập hiển thị loại xe tương ứng bàng State{props.abc}</h2>
      <button
        className="py-2 px-5 bg-red-500 text-white rounded-lg"
        onClick={props.updateStateCount}
      >
        Tăng count
      </button>
      <div className="flex">
        <div className="w-2/5">
          <img src={`public/CarBasic/products/${selectCar}`} alt="" />
        </div>
        <div className="w-1/3">
          {arrButton.map((item, index) => {
            return (
              <button
                className="flex items-center py-2 px-5 rounded-lg border space-x-3 border-black w-full"
                onClick={() => {
                  setSelectCar(item.selectCar);
                }}
              >
                <img src={item.icon} alt="" width="40" />
                <div className="text-left">
                  <b>{item.title}</b>
                  <p>{item.subTitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BaiTap1State;
