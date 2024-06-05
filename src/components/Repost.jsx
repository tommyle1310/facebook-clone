import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar'; // Adjust the import according to your project structure
import { formatDistanceToNow, parseISO } from 'date-fns';
import { PostType as constantPostType } from '../helpers/constant'; // Adjust the import according to your project structure
import Post from './Post';
// import videoPost from '../'; // Adjust the import according to your project structure

const Repost = ({ post }) => {
    const { content, repost, nonRepost } = post;
    console.log(nonRepost);
    if (!post || post.type !== constantPostType.REPOST) {
        // return <>
        //     <p>{content}</p>
        //     <div className='tw-fc gap-3 border border-secondary border-opacity-25 p-3 rounded-btn'>
        //         <div className="tw-ic gap-3">
        //             <Link to={`/profile/${repost?.author?.id}`}>
        //                 <Avatar image={repost?.author?.profilePic} />
        //             </Link>
        //             <div className="tw-fc">
        //                 <div className="tw-ic gap-3">
        //                     <h5 className='font-semibold'>{repost?.author?.name}</h5>
        //                     <div className='max-md:hidden items-start cursor-pointer tw-hv hover:text-primary py-0  text-info  text-xs font-semibold'>Follow</div>
        //                 </div>
        //                 <p className='text-xs'>
        //                     {formatDistanceToNow(parseISO(repost?.updatedAt ?? repost?.createdAt ?? '2024-06-03T09:37:33.444Z'), { addSuffix: true })}
        //                 </p>
        //             </div>
        //         </div>
        //         {/* <p>{repost?.content}</p> */}
        //         <div className='aspect-auto'>
        //             <img className='w-full h-full object-contain' src={repost?.imageUrl} alt="" />
        //             {repost?.videoUrl &&
        //                 <div className="w-full h-full object-contain">
        //                     <video src={videoPost} className="mx-auto aspect-square" controls>
        //                         Your browser does not support the video tag.
        //                     </video>
        //                 </div>
        //             }
        //         </div>
        //     </div>
        // </>
        return null
    }

    // console.log(repost);
    return (
        <>
            <p>{content}</p>
            <div className='tw-fc gap-3 border border-secondary border-opacity-25 p-3 rounded-btn'>
                <div className="tw-ic gap-3">
                    <Link to={`/profile/${repost?.author?.id}`}>
                        <Avatar image={repost?.author?.profilePic} />
                    </Link>
                    <div className="tw-fc">
                        <div className="tw-ic gap-3">
                            <h5 className='font-semibold'>{repost?.author?.name}</h5>
                            <div className='max-md:hidden items-start cursor-pointer tw-hv hover:text-primary py-0  text-info  text-xs font-semibold'>Follow</div>
                        </div>
                        <p className='text-xs'>
                            {formatDistanceToNow(parseISO(repost?.updatedAt ?? repost?.createdAt ?? '2024-06-03T09:37:33.444Z'), { addSuffix: true })}
                        </p>
                    </div>
                </div>
                <p>{repost?.content}</p>
                <div className='aspect-auto'>
                    <img className='w-full h-full object-contain' src={repost?.imageUrl} alt="" />
                    {repost?.videoUrl &&
                        <div className="w-full h-full object-contain">
                            <video src={videoPost} className="mx-auto aspect-square" controls>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    }
                </div>
                {/* Render the nested repost */}
                {repost && <Repost post={repost} />}
            </div>
        </>
    );
};

export default Repost;
