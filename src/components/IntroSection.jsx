import React from 'react'

const IntroSection = ({ isProfilePage, isPublic, permissions, isAdmin, data, disabled }) => {
    return (
        <div className="h-80 w-full bg-accent rounded-b-xl relative ">
            {isProfilePage &&
                <div className="absolute -bottom-20 border-base-100 left-10 size-40 overflow-hidden rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            }
            <div className={isProfilePage ? "absolute w-[48rem] -bottom-16 left-56  tw-jb gap-5" : "absolute w-[48rem] -bottom-16 left-12  tw-jb gap-5"}>
                <div className="tw-ic gap-5" >
                    <div className="tw-fc">
                        <p className='text-xl font-bold'>{data.title ? data.title : data.name}</p>
                        <p className='text-lg font-semibold'>{data.members ? `${data.members} members` : `${data.friends} friends`}</p>
                    </div>
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                {isProfilePage ?
                    <div className="tw-ic gap-2">
                        <button className='btn btn-primary tw-ic'><i className="fa-solid fa-plus"></i> Create a story</button>
                        <button className='btn btn-info tw-ic'><i className="fa-solid fa-pen text-xs"></i>Edit my profile</button>
                    </div>
                    : (
                        permissions.allowShare ?
                            <div className="tw-ic gap-2">
                                <button className='btn btn-primary tw-ic'><i className="fa-solid fa-plus"></i> Invite</button>
                                <button className='btn btn-info tw-ic'><i className="fa-solid fa-pen text-xs"></i>Share</button>
                                <button className='btn btn-info tw-ic'><i className="fa-solid fa-pen text-xs"></i>Joined<i className="fa-solid fa-chevron-down"></i></button>
                            </div>
                            :
                            <div className="tw-ic gap-2">
                                <button className='btn btn-primary tw-ic'><i className="fa-solid fa-plus"></i> Invite</button>
                                <button className='btn btn-info tw-ic'><i className="fa-solid fa-pen text-xs"></i>Joined<i className="fa-solid fa-chevron-down"></i></button>
                            </div>
                    )
                }

            </div>
        </div>
    )
}

export default IntroSection
