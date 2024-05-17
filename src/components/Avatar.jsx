import React from 'react'

const Avatar = ({ image = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg", size = 12 }) => {
    return (
        <div className="avatar">
            <div className={`size-${size} rounded-full`}>
                <img src={image} />
            </div>
        </div>
    )
}

export default Avatar
