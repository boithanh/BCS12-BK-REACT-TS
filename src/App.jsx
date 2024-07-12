import { useState } from "react";
//Xóa 2 dòng không sử dụng đi
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import HeaderDemo from "./components/HeaderDemo";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RenderShoe from "./components/RenderShoe";
import DemoEvent from "./components/DemoEvent";
import DemoCss from "./components/DemoCss/DemoCss";
import DemoState from "./components/DemoState/DemoState";
import BaiTap1State from "./components/DemoState/BaiTap1State";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className=" mx-auto">
        <DemoCss />
        <Home />
        <HeaderDemo />

        <div className="grid grid-cols-3">
          <Navigation />
          <Content />
        </div>

        <Footer />
        <RenderShoe />
        <DemoEvent />
      </div>
      <div className="container">
        <h5 className="demo_sass">Hello be ba</h5>
      </div>
      <DemoState /> */}
      <BaiTap1State />
    </>
  );
}

export default App;
