import React, { useEffect, useState } from 'react'
import Avatar from '../Avatar'
import useConversation from '../../hooks/Chat/useConversation'
import useUserData from '../../hooks/useUserData'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAvatar, fetchFriends, searchFriends, selectUser } from '../../app/features/userSlice'
import useSearchFriends from '../../hooks/Search/useSearchFriends'
import { addUserChat, selectChat } from '../../app/features/chatSlice'

const NavChat = () => {
    const dispatch = useDispatch()
    const [user] = useUserData()
    const [loading, messages, inputMessages, sendMessage, lastMessages] = useConversation(user?.id)
    const [searchQuery, setSearchQuery, searchResults, searchLoading] = useSearchFriends(user?.id);
    const [avatarUrls, setAvatarUrls] = useState({})




    const handleOpenChatUser = (userId) => {
        dispatch(addUserChat({ userId: user?.id, chatUserId: userId }))
    }

    const fetchAvt = async (itemId) => {
        const res = await dispatch(fetchAvatar(itemId))
        setAvatarUrls(prev => ({ ...prev, [itemId]: res.payload }))
    }

    useEffect(() => {
        Object.keys(lastMessages).forEach(userId => {
            if (!avatarUrls[userId]) {
                fetchAvt(userId)
            }
        })
    }, [lastMessages, avatarUrls])
    return (
        <button tabIndex={0} role='button' className="btn btn-ghost btn-circle text-lg dropdown">
            <i className="fa-brands fa-facebook-messenger"></i>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow rounded-box w-52 right-48">
                <div className="tw-fc gap-3 items-start p-5 overflow-y-auto bg-base-100 min-h-screen w-[30rem]">
                    <h3 className='text-xl font-bold'>Chats</h3>
                    <div className="w-full h-10 relative">
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="text" className="grow"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {
                                searchQuery ?
                                    <i onClick={() => setSearchQuery('')} className="fa-solid fa-xmark tw-hv hover:color-secondary cursor-pointer"></i>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            }
                        </label>
                        {searchResults.length > 0 && <div className="w-full  z-10 bg-base-200 mt-2 sh shadow-md shadow-primary p-3 absolute">
                            {searchResults.map(item => (
                                <div key={item.id}
                                    className="rounded-btn tw-hv p-3 tw-ic gap-3"
                                    onClick={() => handleOpenChatUser(item.id)}
                                >
                                    <Avatar size={12} image={item.profilePic} alt={item.name} />
                                    <div className="tw-fc items-start">
                                        <h5 className='text-lg font-bold'>{item.name}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                        }
                    </div>
                    <div className="w-full mt-5 h-5 tw-fc">
                        {Object.entries(lastMessages).map(([otherUserId, lastMessage]) => (
                            <div key={otherUserId}
                                onClick={() => handleOpenChatUser(lastMessage?.receiverId === user?.id ? lastMessage?.senderId : lastMessage?.receiverId)}

                                className="rounded-btn tw-hv hover:bg-neutral p-3 tw-ic gap-3"
                            >
                                <Avatar size={12} image={avatarUrls[otherUserId]} alt={lastMessage?.sender?.name} />
                                <div className="tw-fc items-start">
                                    <h5 className='text-lg font-bold'>{lastMessage?.receiverId === user?.id ? lastMessage?.sender?.name : lastMessage?.receiver?.name}</h5>
                                    <h5 className='tw-ic gap-2'>
                                        {lastMessage?.senderId === user?.id ? 'You' : lastMessage?.sender?.name}:
                                        <span className='flex-1'>{lastMessage?.content}</span>
                                        <span className='text-[10px] -mb-1'>
                                            {formatDistanceToNow(parseISO(lastMessage?.createdAt || "2024-05-28T10:49:08.519Z"), { addSuffix: true })}
                                        </span>
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ul>
        </button>
    )
}

export default NavChat
