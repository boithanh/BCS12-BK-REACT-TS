import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../template/HomeTemplate/HomeTemplate";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import { path } from "../common/path";
import BaiTapProp from "../components/BaiTap/BaiTapProp";
import BaiTapHIenThiDienThoai from "../components/BaiTap/BaiTapHIenThiDienThoai/BaiTapHIenThiDienThoai";
import ShoeDetail from "../components/ShoeDetail";
import DemoRedux from "../components/DemoRedux/DemoRedux";
import BaiTapLacXINgau from "../components/BaiTap/BaiTapLacXiNgau/BaiTapLacXINgau";

const useRouteCustom = () => {
    const elements = useRoutes([

        {
            path: path.homePage,
            element: <HomeTemplate />,
            children: [
                {
                    index: true,
                    element: <BaiTapProp />,
                },
                {
                    path: path.baiTapDienThoai,
                    element: <BaiTapHIenThiDienThoai />,
                },
                {
                    path: `${path.shoeDetail}/:id`,
                    element: <ShoeDetail />,
                },
                {
                    path: path.demoRedux,
                    element: <DemoRedux />
                }
                ,
                {
                    path: path.baiTapLacXiNgau,
                    element: <BaiTapLacXINgau />
                }
            ],
        },
        {
            path: "*",
            element: <PageNotFound />,
        },
    ]);
    return elements;
};

export default useRouteCustom;
