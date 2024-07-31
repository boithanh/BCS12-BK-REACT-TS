import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { thayDoiBanChon } from '../../../redux/slices/xiNgauSlice';


const XiNgau = () => {
    const { xiNgau } = useSelector((state) => state.xiNgauSlice);
    const dispatch = useDispatch();
    return (
        <div className="xiNgau flex justify-between">
            <button className='btn-xiNgau' onClick={() => {
                dispatch(thayDoiBanChon("Tài"))
            }}>Tài</button>
            <div className='flex items-center bg-white p-3 h-max'>
                <img src={`./public/lacXiNgau/${xiNgau.xiNgau1}.png`} width={50} alt="" />
                <img src={`./public/lacXiNgau/${xiNgau.xiNgau2}.png`} width={50} alt="" />
                <img src={`./public/lacXiNgau/${xiNgau.xiNgau3}.png`} width={50} alt="" />
            </div>
            <button className='btn-xiNgau' onClick={() => {
                dispatch(thayDoiBanChon("Xỉu"))
            }}>Xỉu</button>
        </div>
    )
}

export default XiNgau