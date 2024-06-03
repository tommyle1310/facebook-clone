import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import FriendSuggestion from '../components/FriendSuggestion'
import CreateSection from '../components/CreateSection'
import useFetchAllPost from '../hooks/useFetchPosts'
import { useDispatch, useSelector } from 'react-redux'
import { getLikedPosts } from '../app/features/postSlice'
import useUserData from '../hooks/useUserData'
import useFetchLikedPosts from '../hooks/useFetchLikedPosts'
import { formatDistanceToNow, parseISO } from 'date-fns'

const Home = () => {
    const [user] = useUserData()
    const [posts, postsLoading, refetchPosts] = useFetchAllPost()
    const { likedPosts, loading, refetchLikedPosts } = useFetchLikedPosts()
    // console.log(posts);
    return (
        <div className='pt-20 tw-fc gap-3 w-full md:max-w-2xl'>
            <div className="carousel join carousel-center w-full gap-3 bg-base-300 rounded-box">
                <div className="carousel-item rounded-box overflow-hidden  bg-accent tw-hv cursor-pointer tw-hv group hover:opacity-80 w-32 max-md:w-24  ">
                    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="tw-hv group-hover:scale-110 " />
                </div>
                <div className="carousel-item rounded-box overflow-hidden bg-accent tw-hv cursor-pointer tw-hv group hover:opacity-80 w-32 max-md:w-24 ">
                    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="tw-hv group-hover:scale-110 " />
                </div>
            </div>

            <CreateSection />

            {posts?.length > 0 &&
                posts?.map((item) => (
                    <Post
                        type={item?.type}
                        statsData={{ likes: item?.likes, comments: item?.comments }}
                        isLiked={likedPosts?.some(likedItem => likedItem?.post?.id === item?.id && likedItem.userId === user?.id)}
                        key={item?.id} postId={item?.id}
                        authorId={item?.author?.id}
                        authorName={item?.author?.name}
                        avatarAuthor={item?.author?.profilePic}
                        content={item?.content}
                        imagePost={item?.imageUrl}
                        publicStatus={item?.publicStatus}
                        timestamp='2 days'
                        refetch={refetchPosts}
                        isInComment={false}
                        repost={item?.repost}
                        updatedAt={formatDistanceToNow(parseISO(item.updatedAt), { addSuffix: true })}
                    />
                ))
            }


            <FriendSuggestion />
        </div>
    )
}

export default Home
