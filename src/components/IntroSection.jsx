import React, { useState } from 'react';
import Avatar from './Avatar';

const IntroSection = ({ isProfilePage, data, permissions }) => {
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
    const renderActionButtons = () => {
        if (isProfilePage) {
            return (
                <div className="max-md:flex max-md:flex-col flex items-center gap-2">
                    <button className='btn max-md:w-full btn-primary tw-ic'><i className="fa-solid fa-plus"></i> Create a story</button>
                    <button onClick={() => setIsOpenModalEdit(true)} className='btn max-md:w-full btn-info tw-ic'><i className="fa-solid fa-pen text-xs"></i>Edit my profile</button>
                    {isOpenModalEdit &&
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                            <div className="bg-base-100 shadow-sm rounded-md z-30  min-w-[48rem] min-h-screen modal-box">
                                <div className=" mx-auto w-full h-full p-3">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button onClick={() => setIsOpenModalEdit(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div className="tw-fc gap-5 w-full ">
                                        <h3 className="font-bold text-3xl text-center">Edit Profile</h3>
                                        <div className="divider"></div>
                                        <div className="tw-jb">
                                            <h5 className='text-lg font-bold'>Profile Picture</h5>
                                            <p className='text-info font-semibold'>Edit</p>
                                        </div>
                                        <div className="text-center">
                                            <Avatar />
                                        </div>
                                        <div className="tw-jb">
                                            <h5 className='text-lg font-bold'>Cover Photo</h5>
                                            <p className='text-info font-semibold'>Edit</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="avatar">
                                                <div className="w-48 h-20 rounded-xl">
                                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tw-jb">
                                            <h5 className='text-lg font-bold'>Bio</h5>
                                            <p className='text-info font-semibold'>Add</p>
                                        </div>
                                        <textarea className="textarea text-area-lg textarea-primary" placeholder="Bio"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                    }
                </div>
            );
        } else {
            return (
                <div className="tw-ic gap-2">
                    <button className='btn btn-primary tw-ic'><i className="fa-solid fa-plus"></i> Invite</button>
                    <button className='btn btn-info tw-ic'><i className="fa-solid fa-pen text-xs"></i>Joined<i className="fa-solid fa-chevron-down"></i></button>
                </div>
            );
        }
    };

    return (
        <div className="h-80 max-md:h-40 w-full bg-accent rounded-b-xl relative disabled">
            {isProfilePage && (
                <div className="absolute -bottom-20  border-base-100 left-10 size-40 max-md:size-20 max-md:-bottom-10 overflow-hidden rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profile" />
                </div>
            )}

            <div className={isProfilePage ? "absolute max-md:-bottom-56  w-full gap-2 md:hidden tw-fc" : "absolute max-md:-bottom-44  w-full gap-2 md:hidden tw-fc"}>
                <h5 className='text-lg font-bold'>{data.title ? data.title : data.name}</h5>
                <h5>{data.members ? `${data.members} members` : `${data.friends} friends`}</h5>
                {renderActionButtons()}
            </div>

            <div className={`absolute pl-56  w-full max-md:hidden -bottom-20  tw-jb gap-5`}>
                <div className="tw-ic gap-5">
                    <div className="tw-fc">
                        <p className='text-xl font-bold'>{data.title ? data.title : data.name}</p>
                        <p className='text-lg font-semibold'>{data.members ? `${data.members} members` : `${data.friends} friends`}</p>
                    </div>
                    <div className="avatar-group max-md:hidden -space-x-6 rtl:space-x-reverse">
                        {[1, 2, 3, 4].map((index) => (
                            <div className="avatar" key={index}>
                                <div className="w-8">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt={`avatar-${index}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {renderActionButtons()}
            </div>
        </div>
    );
};

export default IntroSection;
