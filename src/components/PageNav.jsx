import React from 'react'

const PageNav = () => {
    return (
        <div className="tw-jb z-10">
            <div role="tablist" className="tabs tabs-boxed ">
                <a role="tab" className="tab tw-hv hover:bg-base-300 tab-active">Posts</a>
                {/* <a role="tab" className="tab tw-hv hover:bg-base-300 ">Description</a>
                <a role="tab" className="tab tw-hv hover:bg-base-300">Friends</a>
                <a role="tab" className="tab tw-hv hover:bg-base-300">Images Uploaded</a>
                <a role="tab" className="tab tw-hv hover:bg-base-300">Videos Uploaded</a> */}
                <div role="tab" className="tab tw-hv hover:bg-base-300 tw-ic gap-2 dropdown">
                    <div tabIndex={0} role="button" className=" m-1"> More <i className="fa-solid fa-chevron-down text-xs"></i></div>
                    <ul tabIndex={0} className="dropdown-content -bottom-24 left-1 menu shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <button className='btn btn-ghost btn-circle'>
                <i className="fa-solid fa-ellipsis"></i>
            </button>
        </div>
    )
}

export default PageNav
