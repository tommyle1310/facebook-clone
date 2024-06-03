import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeUserChat, selectChat } from '../app/features/chatSlice';
import useUserData from '../hooks/useUserData';
import useConversation from '../hooks/Chat/useConversation';
import { io } from 'socket.io-client';
import { MessageType } from '../helpers/constant';

const Chat = () => {
    const chatContainerRef = useRef(null);

    const dispatch = useDispatch()
    const [user] = useUserData();
    const [displayChatBoxes, setDisplayChatBoxes] = useState([]);
    const [displayChatUsers, setDisplayChatUsers] = useState([]);
    const [selectedChatUser, setSelectedChatUser] = useState({});
    const [socket, setSocket] = useState(null);

    const { currentChatUsers } = useSelector(selectChat);

    // Using useConversation hook
    const [loading, messages, inputMessages, sendMessage, lastMessages, setInputMessages] = useConversation(user.id);

    // console.log(currentChatUsers);
    useEffect(() => {
        const newSocket = io('http://localhost:8080');
        setSocket(newSocket);

        return () => {
            if (newSocket) {
                newSocket.disconnect();
            }
        };
    }, []);
    // console.log(displayChatBoxes);
    useEffect(() => {
        if (displayChatBoxes.length === 0) {
            setDisplayChatUsers(currentChatUsers);
        } else {
            const filteredChatUsers = displayChatUsers.filter(item => item.id !== selectedChatUser.id);
            setDisplayChatUsers(filteredChatUsers);
        }
    }, [displayChatBoxes, currentChatUsers, selectedChatUser]);

    useEffect(() => {
        if (messages && selectedChatUser.id && messages[selectedChatUser.id]) {
            const objArray = messages[selectedChatUser.id].map(item => ({
                content: item.content,
                id: item.id,
                imageUrl: item.imageUrl,
                videoUrl: item.videoUrl,
                sender: item.sender,
                receiver: item.receiver,
                senderId: item.senderId,
                receiverId: item.receiverId,
                type: item.type,
                postData: item.sharedPost
            }));

            // Step 1: Filter objArray to get matching items
            const matchingItems = objArray.filter(item1 =>
                displayChatBoxes.find(item2 => item2.id === item1.senderId || item2.id === item1.receiverId)
            );

            // Step 2: Iterate over displayChatBoxes to update chatContent
            const updatedChatBoxes = displayChatBoxes.map(chatBox => {
                if (chatBox.id === selectedChatUser.id) {
                    return {
                        ...chatBox,
                        chatContent: matchingItems.filter(item =>
                            item.senderId === chatBox.id || item.receiverId === chatBox.id
                        )
                    };
                }
                return chatBox;
            });

            setDisplayChatBoxes(updatedChatBoxes);
        }
    }, [messages, selectedChatUser]);

    useEffect(() => {
        // Scroll to the bottom of the chat container when the chat content changes
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [lastMessages, displayChatBoxes]);

    const handleClickChatUser = (item) => {
        setSelectedChatUser(item);
        setDisplayChatBoxes(prev => [item, ...prev]);
    };

    const handleCloseChatBoxes = (itemInput) => {
        const copiedDisplayedChatBoxes = displayChatBoxes.filter(item => item.id !== itemInput.id);
        setDisplayChatBoxes(copiedDisplayedChatBoxes);
        setDisplayChatUsers(prev => [...prev, itemInput]);
    };

    const handleCloseUserChat = (itemInput) => {
        const copiedDisplayedChatBoxes = displayChatBoxes.filter(item => item.id !== itemInput.id);
        setDisplayChatBoxes(copiedDisplayedChatBoxes);
        setDisplayChatUsers(prev => [...prev, itemInput]);
        dispatch(closeUserChat({ userId: user?.id, chatUserId: itemInput.id }))

    };

    const handleChangeInput = (userId, value) => {
        setInputMessages(prev => ({
            ...prev,
            [userId]: value
        }));
    };

    const handleSendMessage = (userId) => {
        const messageData = {
            type: MessageType.DEFAULT, // Set message type to DEFAULT or any other appropriate type
            content: inputMessages[userId], // Get message content from inputMessages state
            listReceiverIds: [userId], // Add the userId of the receiver
            // Add any other necessary data for the message
        };
        sendMessage({ sendTo: userId, messageData }); // Pass sendTo and messageData to sendMessage
    };


    return (
        <div className="fixed bottom-0 z-20 right-0 flex gap-5 flex-row-reverse max-md:hidden">
            <div className="flex flex-col-reverse gap-2 p-3">
                {
                    displayChatUsers?.slice(0, 3)?.map(item => (
                        <div onClick={() => { handleClickChatUser(item) }} key={item.id} className={`avatar cursor-pointer ${item.isOnline ? 'online' : null}`}>
                            <div className="w-12 rounded-full">
                                <img src={item.profilePic} alt={item.name} />
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
                                    <img src={item.profilePic} alt={item.name} />
                                </div>
                            </Link>
                            <div className="flex flex-col flex-1 tw-hv hover:bg-base-content hover:text-black px-2 cursor-pointer rounded-md">
                                <h5 className=" font-semibold">{item.name}</h5>
                                <p className="text-sm">Last online: {item.lastOnline}</p>
                            </div>
                            <div className="flex">
                                <div className="join-item cursor-pointer size-6 justify-center items-center flex rounded-full tw-hv hover:bg-secondary"><i className="text-xs fa-solid fa-phone"></i></div>
                                <div className="join-item cursor-pointer size-6 justify-center items-center flex rounded-full tw-hv hover:bg-secondary"><i className="text-xs fa-solid fa-video"></i></div>
                                <div onClick={() => { handleCloseChatBoxes(item) }} className="join-item cursor-pointer size-6 justify-center items-center flex rounded-full tw-hv hover:bg-secondary"><i className="text-xs fa-solid fa-minus"></i></div>
                                <div onClick={() => handleCloseUserChat(item)} className="join-item cursor-pointer size-6 justify-center items-center flex rounded-full tw-hv hover:bg-secondary"><i className="text-xs fa-solid fa-xmark"></i></div>
                            </div>
                        </div>
                        <div className="flex-1 bg-base-100 overflow-y-auto px-3" ref={chatContainerRef}>
                            {item.chatContent.map(chatItem => (
                                <div key={chatItem.id} className={`chat ${chatItem.receiverId === user?.id ? 'chat-start' : 'chat-end'}`}>
                                    {chatItem.receiverId === user?.id &&
                                        <div className="chat-profilePic avatar  translate-y-12">
                                            <div className="w-6 rounded-full">
                                                <img alt="Tailwind CSS chat bubble component" src={item.profilePic} />
                                            </div>
                                        </div>
                                    }
                                    <div className="chat-header  text-[8px]">
                                        <time className=" opacity-50">{chatItem.sentAt}</time>
                                    </div>
                                    <div className="chat-bubble max-w-[60%]  text-xs">
                                        {chatItem.type === MessageType.DEFAULT && chatItem.content}
                                        {chatItem.type === MessageType.POST_SHARE &&
                                            <Link to={`/profile/${chatItem.postData.authorId}#${chatItem.postData.id}`} className='lg:w-48 md:w-40 sm:w-36 md  tw-fc gap-3 '>
                                                <p>{chatItem.content}</p>
                                                <img src={chatItem.postData.imageUrl} alt={chatItem.postData.content} className='h-1/2 aspect-video mx-auto' />
                                                <div className="flex-1 tw-fc gap-3">
                                                    <h5 className='text-md font-bold'>{chatItem.postData.authorId}</h5>
                                                    <p>{chatItem.postData.content}</p>
                                                </div>
                                            </Link>
                                        }

                                    </div>
                                    <div className="chat-footer opacity-50 text-[8px]">
                                        {chatItem.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-12 gap-1 flex items-center px-3">
                            <button className='tw-hv hover:bg-secondary size-6 rounded-full'><i className="fa-solid fa-circle-plus"></i></button>
                            <button className='tw-hv hover:bg-secondary size-6 rounded-full'><i className="fa-solid fa-profilePic"></i></button>
                            <div className="flex-1">
                                <label className="input h-8 input-bordered input-primary flex items-center gap-2 ">
                                    <input
                                        className="input "
                                        type="text"
                                        placeholder="Type a message..."
                                        value={inputMessages[item?.id] || ''}
                                        onChange={(e) => handleChangeInput(item?.id, e.target.value)}
                                    />
                                    <kbd className="kbd kbd-sm">⌘</kbd>
                                </label>
                            </div>
                            <button className='tw-hv hover:bg-secondary size-6 rounded-full'><i className="fa-solid fa-face-grin-squint-tears"></i></button>
                            <button onClick={() => handleSendMessage(item.id)} className='tw-hv hover:bg-primary size-6 rounded-full'><i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chat;
