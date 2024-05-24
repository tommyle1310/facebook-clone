import React, { useEffect, useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './css/Modal.css'
import Avatar from './Avatar'
import useImageUpload from '../hooks/useImageUpload';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPostComments } from '../app/features/postSlice';
import useUserData from '../hooks/useUserData';



const Comment = ({
    statsData,
    isLiked,
    postId,
    authorId,
    authorName,
    avatarAuthor,
    content,
    imagePost,
    publicStatus,
    openModalComment,
    commentData,
    handleSubmitComment,
    handleOnChangeCommentData,
    passImageStringToChild,
    onCloseModalComment,
    isResetImage
}) => {

    const { posts } = useSelector(state => state.post)
    const [user] = useUserData()

    const { image, handleFileInputChange, resetImage, getImageDataString } = useImageUpload()
    useEffect(() => {
        passImageStringToChild(image)
    }, [image])
    useEffect(() => {
        if (isResetImage) {
            resetImage();
        }
    }, [isResetImage]);
    const [postData, setPostData] = useState({})
    useEffect(() => {
        setPostData(posts?.find(item => item.id === postId));
    }, [posts])
    return (
        <Modal
            classNames={{
                modal: 'customModal',
                // overlay: 'customOverlay',
            }}
            open={openModalComment} onClose={onCloseModalComment} center>
            <div className="min-w-96 text-base tw-fc text-white relative">
                <h2 className='text-center text-xl font-bold'>{authorName}'s post</h2>
                <div className="divider"></div>
                <Post
                    isInComment={true}
                    statsData={statsData}
                    isLiked={isLiked}
                    postId={postId}
                    authorId={authorId}
                    authorName={authorName}
                    avatarAuthor={avatarAuthor}
                    content={content}
                    imagePost={imagePost}
                    publicStatus={publicStatus}
                    timestamp='2 days' />
                <div className="divider"></div>
                <div className="px-5 tw-fc gap-3">
                    <div className="w-full p-3 tw-ic gap-3">
                        <Avatar size={8} image={user?.image} />
                        <div className="p-3 bg-base-200 w-full">
                            <label className=" tw-jb gap-2">
                                <textarea className="textarea flex-1" value={commentData.content} onChange={e => handleOnChangeCommentData('content', e.target.value)} placeholder="Leave a comment..."></textarea>
                                <div className="">
                                    <label className="btn btn-circle text-xs">
                                        <input type="file" accept="image/*" onChange={handleFileInputChange} style={{ display: 'none' }} />
                                        <i className="fa-solid text-success fa-image"></i>
                                    </label>
                                    <kbd className="kbd cursor-pointer text-info kbd-sm"><i className="fa-solid fa-file-video"></i></kbd>
                                    <kbd onClick={handleSubmitComment} className="kbd cursor-pointer text-primary kbd-sm"><i className="fa-solid fa-square-up-right"></i></kbd>

                                </div>
                            </label>
                            {image &&
                                <div className="w-[60%] mx-auto aspect-square bg-base-200 tw-cc relative">
                                    <button onClick={resetImage} className="btn btn-sm btn-circle btn-ghost absolute -right-2 top-2">✕</button>
                                    <img src={image} className='mx-auto w-[80%] aspect-square' alt={'Your Image'} />
                                </div>
                            }
                        </div>
                    </div>

                    <h4 className='font-semibol'>Most Relevant</h4>
                    <div className="tw-fc gap-5 pb-5">
                        {postData?.comments?.map((item) => (
                            <div className="tw-fc gap-2" key={item?.id}>
                                <div className="flex gap-2">
                                    <Avatar size={8} image={item?.author?.profilePic} />
                                    <div className="p-3 flex-1 bg-neutral rounded-lg tw-fc text-sm">
                                        <h5 className='font-bold'>{item?.author?.name}</h5>
                                        <p className='text-xs'>{item?.content}</p>
                                    </div>
                                </div>
                                {item?.imageUrl &&
                                    <div className="w-[30%] ml-10">
                                        <img className='rounded-md w-full aspect-square object-cover' src={item?.imageUrl} alt="" />
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default Comment
