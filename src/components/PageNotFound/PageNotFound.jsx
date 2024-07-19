import React from 'react'
import AnimationPageNotFound from '../../assets/Animation/pageNotFoundAnimation.json'
import Lottie from 'lottie-react'
import { Link, useNavigate } from 'react-router-dom'


const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex justify-center items-center flex-col space-y-2">
            <Lottie style={{ height: "800px", width: "800px" }} animationData={AnimationPageNotFound} loops />

            <h2>Trang bạn đang tìm kiếm không có, vui lòng quay về trang chủ</h2>
            {/* <Link to={"/"} className="bg-red text-white rounded-xl" >
                Bấm vào đây để về trang chủ
            </Link> */}

            <button
                onClick={() => {
                    navigate("/");
                }}
                className="bg-red-600 text-white py-2 px-5 rounded-lg"
            >
                Bấm vào để về trang chủ
            </button>


        </div>
    )
}

export default PageNotFound