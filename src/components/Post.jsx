import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useUserData from '../hooks/useUserData'
import { getAllPosts } from '../app/features/postSlice'
import useFetchAllPost from '../hooks/useFetchPosts'
import { PublicStatus } from '../helpers/constant'
import videoSample from '../../public/videos/fast_motion_city.mp4'

const Post = ({
    publicStatus = PublicStatus.PUBLIC,
    authorName = 'Tomm Le',
    avatarAuthor = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
    timestamp = '3 days',
    content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus impedit ullam illum fugiat, maxime dicta esse debitis culpa reprehenderit. Aliquam mollitia maxime tenetur repudiandae, magnam modi ullam? Laudantium, nostrum!',
    imagePost = "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/440856955_484012010859491_7428709411396250070_n.jpg?stp=cp6_dst-jpg&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE44JkseRdBcFsjb-OWtD21EBr5UTJzYkMQGvlRMnNiQ-1DXMu7RT7C545YU9pTEb01KRMRMRL_LD689Ngr9WIK&_nc_ohc=q4fJ8HimLQcQ7kNvgH5nfkH&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYAssxsQkUIHXthpRLccgFlXa5I0QQgU74R1IZ55mH9BYQ&oe=664551F1",
    videoPost = '',
    authorId

}) => {



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
                        <h5 className='font-semibold'>{authorName}</h5>
                        <div className='flex items-center gap-2'>
                            {timestamp}
                            <div className="text-xs">
                                {publicStatus === PublicStatus.PUBLIC ? <i className="fa-solid fa-earth-americas"></i> : (
                                    publicStatus === PublicStatus.FRIENDS ? <i className="fa-solid fa-users-rays"></i> :
                                        <i className="fa-solid fa-lock"></i>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='max-md:hidden items-start cursor-pointer tw-hv hover:text-primary py-0  text-info  text-sm font-semibold'>Follow</div>
                </div>
                <div className="gap-3 flex items-center">
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
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
                    <i className="text-warning max-md:text-xs fa-solid fa-face-laugh-squint"></i>
                    <i className="text-primary max-md:text-xs fa-solid fa-thumbs-up"></i>
                    <i className="text-warning max-md:text-xs fa-solid fa-face-sad-tear"></i>
                </div>
                <div className="flex items-center gap-5">
                    <p className='max-md:text-xs'>238 comments</p>
                    <p className='max-md:text-xs'>9999 shares</p>
                </div>
            </div>
            <div className="divider -mb-1"></div>
            <div className="join ">
                <button className='w-1/3 btn  btn-ghost flex items-center max-md:text-xs'><i className="fa-regular fa-thumbs-up"></i><span className='max-md:hidden'>like</span></button>
                <button className='w-1/3 btn  btn-ghost flex items-center max-md:text-xs'><i className="fa-regular fa-comment"></i><span className='max-md:hidden'>comment</span></button>
                <button className='w-1/3 btn  btn-ghost flex items-center max-md:text-xs'><i className="fa-regular fa-share-from-square"></i><span className='max-md:hidden'>share</span></button>
            </div>
        </div>
    )
}

export default Post
