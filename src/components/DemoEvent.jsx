import React from "react";

const DemoEvent = () => {
  // onclick, onchange
  function chaoMungSinhVienMoi(hoTen) {
    //Phân biệt kĩ khi nào dùng data binding và string template
    //data Binding khi nào có thẻ JSX thì sử dụng
    //String template là phương thức và các xử lý logic của JS
    alert(`chuc mứng sinh viên${hoTen} đã nhập học`);
  }
  return (
    <div className="container">
      <h2 className="text-2xl font-bold">Demo về xử lý sự kiện trong React</h2>
      <button
        onClick={() => {
          //   alert("Người dùng đã bấm nút");
          chaoMungSinhVienMoi("Quách Khải");
        }}
        // Khác vs JS khi gắn sự kiện vào phải gọi hàm function nơi khác. React có data binding nên có thể tạo hàm trực tiếp bê trong sự kiện
        className="bg-black text-white py-2 px-5"
      >
        Click
      </button>
      <label htmlFor="" className="block">
        Họ tên
      </label>
      <input
        type="text"
        placeholder="Vui lòng nhập họ tên"
        className="p-2 border rounded-md block mb-10"
        onChange={(event) => {
          console.log(event.target.value);

          //Cơ chế onChange trên React giống onInput trên JS . Còn onChange bình thường khi rời khỏi input nó mới lấy dữ liệu ra cho mình
        }}
      />
    </div>
  );
};

export default DemoEvent;
