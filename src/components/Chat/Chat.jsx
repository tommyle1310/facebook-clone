import { useEffect, useState } from "react";
import { io } from 'socket.io-client';
import useConversation from "../../hooks/Chat/useConversation";
import Avatar from "../Avatar";
import useUserData from "../../hooks/useUserData";

const ChatApp = () => {
    const [user] = useUserData(); // Assuming useUserData hook is available
    const [loading, messages, inputMessages, sendMessage, lastMessages, setInputMessages] = useConversation(user?.id);

    return (
        <div className="mt-72 tw-ic p-3 gap-3 ">
            {Object.entries(messages).map(([otherUserId, userMessages]) => (
                <div key={otherUserId} className="tw-fc gap-8 border border-success p-3 w-96">
                    <strong>User ID: {otherUserId}</strong>
                    {userMessages?.map((message, index) => (
                        <div key={index} className="tw-ic gap-3 p-3 ">
                            <Avatar size={8} image={message.sender.profilePic} />
                            <div className="tw-fc gap-3">
                                <strong>{message.sender.name}</strong>: {message.content} <em>({new Date(message.createdAt).toLocaleTimeString()})</em>
                            </div>
                        </div>
                    ))}
                    <input
                        className="input input-bordered"
                        type="text"
                        value={inputMessages[otherUserId] || ''}
                        onChange={(e) => setInputMessages((prevInputMessages) => ({
                            ...prevInputMessages,
                            [otherUserId]: e.target.value // Update the input state for the corresponding thread
                        }))}
                    />
                    <button onClick={() => sendMessage({ sendTo: otherUserId })}>Send</button>
                </div>
            ))}
        </div>
    );
}

export default ChatApp;
