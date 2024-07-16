
import { Route, Routes } from "react-router-dom";
import BaiTapProp from "./components/BaiTap/BaiTapProp";
import BaiTapHIenThiDienThoai from "./components/BaiTap/BaiTapHIenThiDienThoai/BaiTapHIenThiDienThoai";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import PageNotFound from "./components/PageNotFound/PageNotFound";

// import './App.css'

function App() {
  // path (tuyến đường):endpoint
  //Cách setup và sử dụng
  // index, element, path trong react router dom
  //setup template sử dụng chung cho các trang
  //Page NOt Found
  //Lấy dữ liệu param (:id), query param
  // x
  return (<>
    <Routes>
      {/* <Route path="bai-tap-pokemon" element={<BaiTapProp />} /> */}
      {/* Path bai-tap-hien-thi-dien-thoai */}
      {/* <Route path="/bai-tap-hien-thi-dien-thoai" element={<BaiTapHIenThiDienThoai />} /> */}
      {/* Khi nào cần truyền thẻ con vào thì cần dấu đóng, khi nào ko cần thì đóng luôn*/}
      <Route path="/" element={<HomeTemplate />}>
        {/* pathtemplate / pathChildElement */}
        {/* Trường hợp nếu bị lỗi trắng trang thì bỏ dấu / ở ChildElement */}

        <Route path="bai-tap-pokemon" element={<BaiTapProp />} />
        {/* Thuộc tính index giúp xác định các component con sẽ hiển thị cùng lúc khi người dùng truy cập tới đường dẫn của component */}
        <Route index element={<BaiTapHIenThiDienThoai />} />
      </Route>
      {/* Path với giá trị * sẽ là các đường dẫn không bao gồm các đường dẫn trong setup */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
  );
}

export default App;
