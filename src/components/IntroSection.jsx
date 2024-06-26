import React, { useState } from 'react';
import Avatar from './Avatar';
import useImageUpload from '../hooks/useImageUpload';
import useUserData from '../hooks/useUserData';
import { useDispatch } from 'react-redux';
import { editUserAvatar } from '../app/features/authSlice';

const IntroSection = ({ isProfilePage, data, permissions, imageAvatar, refetchProfileData }) => {
    const [user] = useUserData()
    const dispatch = useDispatch()
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
    const [isOpenModalUploadImage, setIsOpenModalUploadImage] = useState(false)

    const { image, handleFileInputChange, resetImage, getImageDataString } = useImageUpload();

    const saveImageToDatabase = async () => {
        const imageDataString = getImageDataString();
        if (imageDataString) {
            // Now you can save `imageDataString` to your database
            // Example: send it to an API endpoint or store it in your database directly
            const response = await dispatch(editUserAvatar({ userId: user?.id, image: imageDataString }))
            if (response?.EC === 0) {
                setIsOpenModalUploadImage(false)
                refetchProfileData()
            }
        } else {
            console.log('No image selected.');
        }
    };
    // console.log('img:', user?.image);


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
                                            <button onClick={() => setIsOpenModalUploadImage(true)} className='text-info font-semibold'>Edit</button>
                                        </div>
                                        <div className="text-center">
                                            <Avatar image={user.image} />
                                        </div>
                                        <div className="tw-jb">
                                            <h5 className='text-lg font-bold'>Cover Photo</h5>
                                            <p className='text-info font-semibold'>Edit</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="avatar">
                                                <div className="w-48 h-20 rounded-xl">
                                                    <img src={user?.image} />
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
                    {isOpenModalUploadImage &&
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                            <div className="bg-base-100 tw-cc shadow-sm rounded-md z-30  min-w-[48rem] min-h-screen modal-box">
                                <div className=" mx-auto w-full h-full p-3">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button onClick={() => setIsOpenModalUploadImage(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div className=''>
                                        {/* Input element for selecting the image */}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="file-input file-input-bordered file-input-secondary w-full "
                                            onChange={handleFileInputChange}
                                        />

                                        {/* Display the selected image */}
                                        <div className='max-w-md mx-auto relative my-5 rounded-btn py-10 bg-black'>
                                            {image && (
                                                <>
                                                    <button onClick={resetImage} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    <img className='w-1/2 aspect-square mx-auto' src={image} alt="Selected" />
                                                </>
                                            )}
                                        </div>

                                        {/* Button to save the image to the database */}
                                        <button className='btn btn-primary w-full ' onClick={saveImageToDatabase}>Save Image</button>
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
                    <img src={imageAvatar} className='bg-cover w-full h-full' alt={"profile"} />
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
                        {data?.friendImages?.slice(-5)?.map((item, index) => (
                            <div className="avatar" key={index}>
                                <div className="w-8">
                                    <img src={item} alt={`avatar-${index}`} />
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
