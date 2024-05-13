import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
    return (
        <div className=" p-5 flex flex-col bg-base-300 rounded-box gap-2">
            <div className="flex items-center justify-between gap-5 w-full ">
                <div className="flex gap-5">
                    <Link to='/profile/asodu' data-tip={'helo world'} className="avatar tooltip">
                        <div className="w-10 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </Link>
                    <div className="flex flex-col">
                        <h5 className='font-semibold'>NQH IETLS</h5>
                        <p className='flex items-center gap-2'>3 days<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        </p>
                    </div>
                    <div className=' items-start cursor-pointer tw-hv hover:text-primary py-0  text-info  text-sm font-semibold'>Follow</div>
                </div>
                <div className="gap-3 flex items-center">
                    <button className='btn btn-ghost btn-circle'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                    <button className='btn btn-ghost btn-circle'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus impedit ullam illum fugiat, maxime dicta esse debitis culpa reprehenderit. Aliquam mollitia maxime tenetur repudiandae, magnam modi ullam? Laudantium, nostrum!</div>
            <div className='aspect-auto'>
                <img className='w-full h-full object-contain' src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/440856955_484012010859491_7428709411396250070_n.jpg?stp=cp6_dst-jpg&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE44JkseRdBcFsjb-OWtD21EBr5UTJzYkMQGvlRMnNiQ-1DXMu7RT7C545YU9pTEb01KRMRMRL_LD689Ngr9WIK&_nc_ohc=q4fJ8HimLQcQ7kNvgH5nfkH&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYAssxsQkUIHXthpRLccgFlXa5I0QQgU74R1IZ55mH9BYQ&oe=664551F1" alt="" />
            </div>
            <div className="flex justify-between items-center ">
                <div className="join gap-1">
                    <i className="text-warning fa-solid fa-face-laugh-squint"></i>
                    <i className="text-primary fa-solid fa-thumbs-up"></i>
                    <i className="text-warning fa-solid fa-face-sad-tear"></i>
                </div>
                <div className="flex items-center gap-5">
                    <p className='text-sm'>238 comments</p>
                    <p className='text-sm'>9999 shares</p>
                </div>
            </div>
            <div className="divider -mb-1"></div>
            <div className="join ">
                <button className='w-1/3 btn  btn-ghost flex items-center '><i className="fa-regular fa-thumbs-up"></i>like</button>
                <button className='w-1/3 btn  btn-ghost flex items-center '><i className="fa-regular fa-comment"></i>comment</button>
                <button className='w-1/3 btn  btn-ghost flex items-center '><i className="fa-regular fa-share-from-square"></i>share</button>
            </div>
        </div>
    )
}

export default Post
