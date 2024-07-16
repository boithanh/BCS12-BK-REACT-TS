import React from 'react'
import AnimationPageNotFound from '../../assets/Animation/pageNotFoundAnimation.json'
import Lottie from 'lottie-react'

const PageNotFound = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col space-y-2">
            <Lottie style={{ height: "800px", width: "800px" }} animationData={AnimationPageNotFound} loops />

            <h2>Trang bạn đang tìm kiếm không có, vui lòng quay về trang chủ</h2>
            <button className="bg-red-600 text-white px-5 py-4">Trở về trang chủ</button>
        </div>
    )
}

export default PageNotFound