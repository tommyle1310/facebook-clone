import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import hoangAvt from '../../public/images/hoang_avt.jpg'
import my_avt from '../../public/images/my_avt.jpg'


const dataChat = [
    {
        id: 1,
        username: 'SaNguyen',
        image: my_avt,
        link: '/profile/asodusao',
        chatContent: [
            { id: 1, sender: false, content: 'You were the Chosen One!', status: 'Delivered', sentAt: '12:45', image: null, video: null },
            { id: 2, sender: true, content: 'Hello user', status: 'Sent', sentAt: '12:46', image: null, video: null }
        ],
        isOnline: false
    },
    {
        id: 2,
        username: 'trat khop vai',
        image: hoangAvt,
        link: '/profile/asodusao',
        chatContent: [],
        isOnline: false
    },
    {
        id: 3,
        username: 'Daisy',
        image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
        link: '/profile/yourprofile',
        chatContent: [
            { id: 1, sender: true, content: 'Hey there!', status: 'Sent', sentAt: '14:00', image: null, video: null },
            { id: 2, sender: false, content: 'Hi, how are you?', status: 'Delivered', sentAt: '14:05', image: null, video: null }
        ],
        isOnline: true
    },
];


const Chat = () => {
    const [displayChatBoxes, setDisplayedChatBoxes] = useState([])
    const [displayChatUsers, setDisplayChatUsers] = useState([])
    const [selectedChatUser, setSelectedChatUser] = useState({})

    useEffect(() => {
        if (displayChatBoxes.length === 0) {
            setDisplayChatUsers(dataChat)
        } else {
            const filteredChatUser = displayChatUsers?.filter(item => item.id !== selectedChatUser.id)
            setDisplayChatUsers(filteredChatUser)
        }
    }, [displayChatBoxes])

    const handleClickChatUser = (item) => {
        setSelectedChatUser(item)
        setDisplayedChatBoxes([item, ...displayChatBoxes])
    }

    const handleCloseChatBoxes = (itemInput) => {
        const copiedDisplayedChatBoxes = displayChatBoxes.filter(item => item.id !== itemInput.id)
        setDisplayedChatBoxes(copiedDisplayedChatBoxes)
        setDisplayChatUsers([...displayChatUsers, itemInput])
    }
    return (
        <div className="fixed bottom-0 z-20 right-0 flex gap-5 flex-row-reverse max-md:hidden">
            <div className="flex flex-col-reverse gap-2 p-3">
                {
                    displayChatUsers?.slice(-3)?.map(item => (
                        <div onClick={() => { handleClickChatUser(item) }} key={item.id} className={`avatar cursor-pointer ${item.isOnline ? 'online' : null}`}>
                            <div className="w-12 rounded-full">
                                <img src={item.image} alt={item.name} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex gap-2">
                {displayChatBoxes?.slice(-3)?.map(item => (
                    <div key={item.id} className="w-76 h-96 rounded-tl-box rounded-tr-box flex flex-col bg-base-200 shadow-md shadow-secondary  overflow-hidden">
                        <div className="h-16 w-full  flex justify-between  p-3 gap-3 items-center">
                            <Link to='/profile/asdoans' className={`avatar ${item.isOnline ? 'online' : null}`}>
                                <div className="w-7 rounded-full">
                                    <img src={item.image} />
                                </div>
                            </Link>
                            <div className="flex flex-col flex-1 tw-hv hover:bg-base-content hover:text-black px-2 cursor-pointer rounded-md">
                                <h5 className=" font-semibold">{item.username}</h5>
                                <p className="text-sm">Last online: 4min</p>
                            </div>
                            <div className="flex">
                                <div className="join-item cursor-pointer size-6 justify-center items-center flex rounded-full tw-hv hover:bg-secondary"><i className="text-xs fa-solid fa-phone"></i></div>
                                <div className="join-item cursor-pointer size-6 justify-center items-center flex rounded-full tw-hv hover:bg-secondary"><i className="text-xs fa-solid fa-video"></i></div>
                                <div onClick={() => { handleCloseChatBoxes(item) }} className="join-item cursor-pointer size-6 justify-center items-center flex rounded-full tw-hv hover:bg-secondary"><i className="text-xs fa-solid fa-minus"></i></div>
                                <div className="join-item cursor-pointer size-6 justify-center items-center flex rounded-full tw-hv hover:bg-secondary"><i className="text-xs fa-solid fa-xmark"></i></div>
                            </div>
                        </div>
                        <div className="flex-1 bg-base-100 overflow-y-auto px-3">
                            {item.chatContent.map(chatItem => (
                                <div key={item.id} className={`chat ${chatItem.sender ? 'chat-start' : 'chat-end'}`}>
                                    {chatItem.sender &&
                                        <div className="chat-image avatar">
                                            <div className="w-6 rounded-full">
                                                <img alt="Tailwind CSS chat bubble component" src={chatItem.sender ? item.image : null} />
                                            </div>
                                        </div>
                                    }
                                    <div className="chat-header text-[8px]">
                                        <time className=" opacity-50">12:45</time>
                                    </div>
                                    <div className="chat-bubble max-w-[60%] text-xs">{chatItem.content}</div>
                                    <div className="chat-footer opacity-50 text-[8px]">
                                        {chatItem.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-12 gap-1 flex items-center px-3">
                            <button className='tw-hv hover:bg-secondary size-6 rounded-full'><i className="fa-solid fa-circle-plus"></i></button>
                            <button className='tw-hv hover:bg-secondary size-6 rounded-full'><i className="fa-solid fa-image"></i></button>
                            <div className="flex-1">
                                <label className="input h-8 input-bordered input-primary flex items-center gap-2 ">
                                    <input type="text" className="grow" placeholder="Search" />
                                    <kbd className="kbd kbd-sm">⌘</kbd>
                                </label>
                            </div>
                            <button className='tw-hv hover:bg-secondary size-6 rounded-full'><i className="fa-solid fa-face-grin-squint-tears"></i></button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Chat
