import { useEffect, useState } from "react";
import { io } from 'socket.io-client';

const useConversation = (userId) => {
    const [socket, setSocket] = useState(null);
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState({});
    const [inputMessages, setInputMessages] = useState({});
    const [lastMessages, setLastMessages] = useState({});

    useEffect(() => {
        if (userId) {
            const newSocket = io('http://localhost:8080', {
                query: { userId }
            });
            setSocket(newSocket);
            newSocket.on('initialMessages', (initialMessages) => {
                setMessages(initialMessages);
                setLoading(false);
            });

            newSocket.on('message', (message) => {
                if (message.senderId === userId || message.receiverId === userId) {
                    const otherUserId = message.senderId === userId ? message.receiverId : message.senderId;
                    setMessages((prevMessages) => ({
                        ...prevMessages,
                        [otherUserId]: [...(prevMessages[otherUserId] || []), message]
                    }));
                }
            });

            return () => {
                newSocket.off('initialMessages');
                newSocket.off('message');
                newSocket.close();
            };
        }
    }, [userId]);

    const sendMessage = ({ sendTo, messageData }) => {
        if (socket && userId) {
            if (messageData.type === 'POST_SHARE' && messageData.listReceiverIds) {
                // Handle sending POST_SHARE message to multiple receivers
                messageData.listReceiverIds.forEach(receiverId => {
                    const message = {
                        ...messageData,
                        senderId: userId,
                        receiverId: receiverId,
                        createdAt: new Date().toISOString(),
                        sharedPostId: messageData.sharedPostId, // Reference to the shared post

                    };
                    socket.emit('message', message);
                });
            } else {
                // Handle sending regular message
                const message = {
                    senderId: userId,
                    content: messageData.content,
                    receiverId: +sendTo,
                    createdAt: new Date().toISOString()
                };
                socket.emit('message', message);
            }
            // Recalculate lastMessages after sending the message
            calculateLastMessages();
        }
        setInputMessages((prevInputMessages) => ({
            ...prevInputMessages,
            [sendTo]: ''
        }));
    };

    // Calculate last messages
    useEffect(() => {
        calculateLastMessages();
    }, [messages]);

    const calculateLastMessages = () => {
        const lastMsgs = {};
        // Loop through all messages to find the latest message for each user
        for (const [otherUserId, userMessages] of Object.entries(messages)) {
            if (userMessages.length > 0) {
                const lastMessage = userMessages[userMessages.length - 1];
                if (!lastMsgs[otherUserId] || lastMessage.createdAt > lastMsgs[otherUserId].createdAt) {
                    lastMsgs[otherUserId] = lastMessage;
                }
            }
        }
        setLastMessages(lastMsgs);
    };

    return [loading, messages, inputMessages, sendMessage, lastMessages, setInputMessages];
};

export default useConversation;
