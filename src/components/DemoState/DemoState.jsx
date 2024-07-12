import React, { useState } from "react";
import hinhXeDen from "./../../assets/products/black-car.jpg";

const DemoState = () => {
  // luôn khai báo hook nằm ở đầu component
  // hooks không được khai báo trong các function hay bất kì điều kiện if else, chỉ được khai báo ở trong function component
  // hook useState
  const [state, setState] = useState(8);
  // Tùy trường hợp mà đặt tên state đúng vs ngữ cảnh sử dụng ví dụ tên ở đây sẽ là họ tên:
  //Cần tính toán thì cho số, cần bóc tách chuỗi thì cho dấu nháy kép
  const [hoTen, setHoten] = useState("Bối Thạnh");
  let diemToan = 9;
  //   console.log(state);
  return (
    <div>
      <h2>Demo về state trong React</h2>
      <p>{diemToan}</p>
      <p>Giá trị state: {state}</p>
      <button
        // onClick={() => {
        //   diemToan++;
        //   console.log(diemToan);
        // }}
        onClick={() => {
          setState(state + 1);
        }}
        className="py-2 px-5 bg-red-500 rounded-lg text-white"
      >
        Tăng điểm
      </button>
      <div>
        {/* Thực hiện truyền dữ liệu state hoTen vào thẻ p thông qua data binding  */}
        {/* ở input sẽ chạy sự kiện onChange để cập nhật lại dữ liệu cho state hoTen thông qua phương thức setHoTen  */}
        <label htmlFor="">Nhập tên</label>
        <input
          type="text"
          className="p-2 border"
          placeholder="nhập họ tên"
          onChange={(e) => {
            // console.log(e.target.value);
            setHoten(e.target.value);
          }}
        />
        <p>{hoTen}</p>
      </div>
      {/* Cách 1: Thay tên tấm hình bằng state */}
      <img src="./public/CarBasic/products/{state}" alt="" />
      {/* cÁCH CŨ Là ,../ đi tói tấm hình nhưng mà react ko cho làm nhưu vậy */}
      {/* <img src="./public/CarBasic/products/{state}" alt="" /> */}
      <img src="{hinhXeDen}" alt="" />
    </div>
  );
};

export default DemoState;
