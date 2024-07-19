import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const ShoeDetail = () => {
    const param = useParams();
    const pathName = useLocation();
    console.log(param);
    return (
        <div>
            <Link className={pathName.pathname == "/shoe-detail/45" ? "text-green-500" : "text-black"}>
                Xem giày
            </Link>
        </div>
    )
}

export default ShoeDetail