import React from "react";

const DanhSachDienThoai = ({ listPhone, title, updateDienThoai }) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="grid grid-cols-4">
        {/* Thực hiện sử dụng mảng để render tạo ra các div item hiển thị dữ liệu điện thoại, các thông tin cần hiển thị bao gồm: hình ảnh, tên điện thoại vào button xem chi tiết */}
        {listPhone.map((item, index) => {
          const { image, name } = item;
          return (
            <div key={index}>
              <img src={image} alt="" />
              <h2>{name}</h2>
              <button
                className="py-5 px-2 bg-green-500"
                onClick={() => {
                  updateDienThoai(item);
                }}
              >
                Xem chi tiết
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DanhSachDienThoai;
