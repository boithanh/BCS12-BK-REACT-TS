import React from 'react'
import "./style.scss";
import XiNgau from './XiNgau';
import KetQua from './KetQua';
import { useDispatch } from 'react-redux';
import { ketQuaNguoiChoi } from '../../../redux/slices/xiNgauSlice';
const BaiTapLacXINgau = () => {
    const dispatch = useDispatch();
    return (
        <div className='baiTap2'>
            <h1 className='uppercase text-5xl'>Game đổ xúc xắc</h1>
            <XiNgau />
            <KetQua />
            <button className='btn-play' onClick={() => {
                dispatch(ketQuaNguoiChoi())
            }}>Play game</button>
        </div>
    )
}

export default BaiTapLacXINgau