import React from 'react';

const IntroSection = ({ isProfilePage, data, permissions }) => {
    const renderActionButtons = () => {
        if (isProfilePage) {
            return (
                <div className="max-md:flex max-md:flex-col flex items-center gap-2">
                    <button className='btn max-md:w-full btn-primary tw-ic'><i className="fa-solid fa-plus"></i> Create a story</button>
                    <button className='btn max-md:w-full btn-info tw-ic'><i className="fa-solid fa-pen text-xs"></i>Edit my profile</button>
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
