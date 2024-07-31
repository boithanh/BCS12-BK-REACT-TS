import React from 'react'
import { useDispatch } from 'react-redux';
import { capNhatHoTen } from '../../redux/slices/userSlice';

const DemoRedux = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Demo về xử lý chức năng với redux toolkit</h2>
            <label htmlFor=""> Tên Người dùng</label>
            <input type="text" placeholder="Vui lòng nhập thông tin người dùng" className="border p-2 rounded-md" onChange={
                (e) => {
                    // console.log(e.target.value);
                    dispatch(capNhatHoTen(e.target.value));
                }
            } />

        </div>
    )
}

export default DemoRedux