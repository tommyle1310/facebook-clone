import { useEffect, useState } from "react";
import { io } from 'socket.io-client';
import useUserData from "../../hooks/useUserData";
import Avatar from "../Avatar";

const ChatApp = () => {
    const [user] = useUserData();
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState({});
    const [inputMessages, setInputMessages] = useState({}); // Separate state for input messages

    useEffect(() => {
        if (user?.id) {
            const newSocket = io('http://localhost:8080', {
                query: { userId: user.id } // Pass the userId with the socket connection
            });
            setSocket(newSocket);

            // Listen for initial messages from the server
            newSocket.on('initialMessages', (initialMessages) => {
                setMessages(initialMessages);
            });

            // Listen for incoming messages from the server
            newSocket.on('message', (message) => {
                if (message.senderId === user.id || message.receiverId === user.id) {
                    const otherUserId = message.senderId === user.id ? message.receiverId : message.senderId;
                    setMessages((prevMessages) => ({
                        ...prevMessages,
                        [otherUserId]: [...(prevMessages[otherUserId] || []), message]
                    }));
                }
            });

            // Clean up the socket connection on unmount
            return () => {
                newSocket.off('initialMessages');
                newSocket.off('message');
                newSocket.close();
            };
        }
    }, [user]);

    const sendMessage = ({ sendTo }) => {
        if (inputMessages[sendTo]?.trim() && socket && user?.id) {
            const message = {
                senderId: user.id,
                content: inputMessages[sendTo],
                receiverId: +sendTo, // Replace with actual receiverId from your chat logic
                createdAt: new Date().toISOString()
            };
            socket.emit('message', message);
            setInputMessages((prevInputMessages) => ({
                ...prevInputMessages,
                [sendTo]: '' // Clear the input after sending the message
            }));
        }
    };

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
