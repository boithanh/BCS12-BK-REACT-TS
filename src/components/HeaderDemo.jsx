// Cau lenh: rafce
//Đặt tên componet nhớ Ghi chữ đầu tiên viết InHOa. Nếu đặt sai thì xóa đặt lại không rename sẽ lỗi
import React from 'react'

const HeaderDemo = () => {
    // console.log("<div></div>");
    const SinhVien={
      hoTen:"Nguyễn Văn A",
      lop:"TEST2",
      tuoi:"18"
    }
  const arrMonAn=  [
    {
      tenMon:"Súp cua",
      giaTien:"15000",
    },
    {
      tenMon:"Lẩu matwell",
      giaTien:"25000",
    }
  ]

const classButton="py-2 px-5 bg-purple-500 text-white rounded-md";
  return (
    <div className="bg-blue-600 text-white py-1 text-center text-2xl">
    <p>Tôi là {SinhVien.hoTen}</p>
    <button className={classButton} id={SinhVien.lop}>Đăng Ký</button>
    <p>{SinhVien.tuoi>18?"Xin chúc mừng bạn đã đủ tuổi":"Xin lỗi bạn chưa đủ tuổi"}</p>
    {arrMonAn.map((item,index)=>{
    return
    {
      <div>
        <h2>{item.tenMon}</h2>
        <p>{item.giaTien}</p>
      </div>
    };
    }
    )}


    </div>
    // Cơ chế DataBinding của react hơi giống vs stringTemplate nhưng khác ở chỗ chỉ có dấu ngoặc nhọn
  )
}

export default HeaderDemo

