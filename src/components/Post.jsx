import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useUserData from '../hooks/useUserData'
import { addCommentToPost, getAllPosts, getPostComments, toggleLikePost } from '../app/features/postSlice'
import { PublicStatus } from '../helpers/constant'
import videoSample from '../../public/videos/fast_motion_city.mp4'
import imageSample from '../../public/images/my_avt.jpg'

import useImageUpload from '../hooks/useImageUpload'
import Comment from './Comment'
import useFetchLikedPosts from '../hooks/useFetchLikedPosts'


const Post = (
    {
        publicStatus = PublicStatus.PUBLIC,
        authorName = 'Tomm Le',
        avatarAuthor = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
        content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus impedit ullam illum fugiat, maxime dicta esse debitis culpa reprehenderit. Aliquam mollitia maxime tenetur repudiandae, magnam modi ullam? Laudantium, nostrum!',
        imagePost = imageSample,
        videoPost = '',
        authorId,
        postId,
        isLiked = false,
        refetch,
        statsData = { likes: [], comments: 0, share: 0 },
        isInComment = false,
        updatedAt = '0s ago'
    }) => {
    const dispatch = useDispatch()
    useEffect(() => {
    }, [statsData]);

    // console.log('refetch: ', refetch);
    const [user] = useUserData()
    const { likedPosts, loading, refetch: refetchLike } = useFetchLikedPosts()
    const { image, handleFileInputChange, resetImage, getImageDataString } = useImageUpload()



    const defaultCommentData = {
        content: '',
        imageUrl: image || '',
        videoUrl: '',
        authorId: user?.id,
        postId: postId,
    }
    const [commentData, setCommentData] = useState(defaultCommentData)
    const [imageComment, setImageComment] = useState('')
    const [isResetImage, setIsResetImage] = useState(false)


    const [openModalComment, setOpenModalComment] = useState(false);
    const onOpenModalComment = () => setOpenModalComment(true);
    const onCloseModalComment = () => setOpenModalComment(false);
    const handleOnChangeCommentData = (type, value) => {
        setCommentData((prevData) => ({
            ...prevData,
            [type]: value,
        }));
    };

    const passImageStringToChild = (image) => {
        setImageComment(image)
    }


    const handleClickLike = async () => {
        dispatch(toggleLikePost({ userId: user?.id, postId }))
        dispatch(getAllPosts(user?.id))
        refetch()
    }
    const handleClickComment = async () => {
        // console.log('check userID:', user?.id, 'postID:', postId);
        if (isInComment === false) {
            onOpenModalComment()
        }
    }
    const handleClickShare = async () => {
        // console.log('check userID:', user?.id, 'postID:', postId);
    }
    const handleSubmitComment = async () => {
        const updatedCommentData = { ...commentData, imageUrl: imageComment };
        await setCommentData(updatedCommentData);
        const response = await dispatch(addCommentToPost({ userId: user?.id, postId: postId, commentData: updatedCommentData }));
        if (response.EC === 0) {
            setCommentData(defaultCommentData)
            setIsResetImage(true)
            dispatch(getAllPosts(user?.id))
            refetch()

        }
    };


    return (
        <div className=" p-5 flex flex-col bg-base-300 rounded-box gap-2">
            <div className="flex items-center justify-between gap-5 w-full max-md:text-xs">
                <div className="flex gap-5">
                    <Link to={`/profile/${authorId}`} data-tip={authorName} className="avatar tooltip">
                        <div className="w-8 rounded-full">
                            <img src={avatarAuthor} />
                        </div>
                    </Link>
                    <div className="flex flex-col">
                        <div className="tw-ic gap-3">
                            <h5 className='font-semibold'>{authorName}</h5>
                            <div className='max-md:hidden items-start cursor-pointer tw-hv hover:text-primary py-0  text-info  text-sm font-semibold'>Follow</div>
                        </div>
                        <div className='flex items-center gap-2'>
                            {updatedAt}
                            <div className="text-xs">
                                {publicStatus === PublicStatus.PUBLIC ? <i className="fa-solid fa-earth-americas"></i> : (
                                    publicStatus === PublicStatus.FRIENDS ? <i className="fa-solid fa-users-rays"></i> :
                                        <i className="fa-solid fa-lock"></i>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gap-3 flex items-center">
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                    {isInComment ||
                        <button className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    }
                </div>
            </div>
            <div className="max-md:text-xs">{content}</div>
            <div className='aspect-auto'>
                <img className='w-full h-full object-contain' src={imagePost} alt="" />
                {videoPost &&
                    <div className="w-full h-full object-contain">
                        <video src={videoPost} className="mx-auto  aspect-square" controls>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                }
            </div>
            <div className="flex justify-between items-center ">
                <div className="join gap-1">
                    <div className="tw-ic gap-1">

                        <i className="text-warning max-md:text-xs fa-solid fa-face-laugh-squint"></i>
                        <i className="text-primary max-md:text-xs fa-solid fa-thumbs-up"></i>
                        <i className="text-warning max-md:text-xs fa-solid fa-face-sad-tear"></i>
                        {statsData && statsData?.likes?.length || 0}
                    </div>

                </div>
                <div className="flex items-center gap-5">
                    <p onClick={handleClickComment} className='max-md:text-xs tw-hv hover:underline cursor-pointer'>{`${statsData?.comments?.length || 0} comments`}</p>
                    <p className='max-md:text-xs'>9999 shares</p>
                </div>
            </div>
            <div className="divider -mb-1"></div>
            <div className="join ">
                <button onClick={handleClickLike} className={`w-1/3 btn  ${isLiked ? 'btn-info' : 'btn-ghost'} flex items-center max-md:text-xs btn-info`}><i className="fa-regular fa-thumbs-up"></i><span className='max-md:hidden'>{isLiked ? 'Liked' : 'Like'}</span></button>
                <button onClick={handleClickComment} className='w-1/3 btn  btn-ghost flex items-center max-md:text-xs'><i className="fa-regular fa-comment"></i><span className='max-md:hidden'>comment</span></button>
                <button onClick={handleClickShare} className='w-1/3 btn  btn-ghost flex items-center max-md:text-xs'><i className="fa-regular fa-share-from-square"></i><span className='max-md:hidden'>share</span></button>

            </div>
            <Comment
                openModalComment={openModalComment}
                onCloseModalComment={onCloseModalComment}
                statsData={statsData}
                isLiked={isLiked}
                postId={postId}
                authorId={authorId}
                authorName={authorName}
                avatarAuthor={avatarAuthor}
                content={content}
                imagePost={imagePost}
                publicStatus={publicStatus}
                commentData={commentData}
                handleSubmitComment={handleSubmitComment}
                handleOnChangeCommentData={handleOnChangeCommentData}
                passImageStringToChild={passImageStringToChild}
                isResetImage={isResetImage}
                updatedAt={updatedAt}
                refetch={refetch}
            />
        </div>
    )
}

export default Post
