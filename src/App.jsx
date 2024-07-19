
import { Route, Routes } from "react-router-dom";
import BaiTapProp from "./components/BaiTap/BaiTapProp";
import BaiTapHIenThiDienThoai from "./components/BaiTap/BaiTapHIenThiDienThoai/BaiTapHIenThiDienThoai";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ShoeDetail from "./components/ShoeDetail";
import useRouteCustom from "./routes/useRouteCustom";
// import useRouteCustom from "./routes/useRouteCustom";

// import './App.css'

function App() {
  // const routes = useRouteCustom();
  const routes = useRouteCustom()
  return routes


  // path (tuyến đường):endpoint
  //Cách setup và sử dụng
  // index, element, path trong react router dom
  //setup template sử dụng chung cho các trang
  //Page NOt Found
  //Lấy dữ liệu param (:id), query param
  // x
  // return (<>

  // </>
  // );
}

export default App;
