import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
); // xóa react strict mode chừa lại mỗi <App/> nha

// bọc ngoài Browser router hay trong đều dc, miễn sao bọc được component app là được
