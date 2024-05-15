import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItemsWithAvatar = ({ items }) => {
    return (
        <>
            {items?.map((item, index) => (
                <Link key={index} to={item.url} className="p-2 flex gap-3 items-center max-w-full tw-hv hover:bg-base-300 rounded-lg">
                    <div className="avatar">
                        <div className="w-6 rounded-lg">
                            <img src={item.image} alt={item.title} />
                        </div>
                    </div>
                    {item.title}
                </Link>
            ))}
        </>
    )
}

export default SidebarItemsWithAvatar
