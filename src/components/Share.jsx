import React, { useEffect, useState } from 'react'
import Modal from 'react-responsive-modal'
import Avatar from './Avatar'
import useUserData from '../hooks/useUserData'
import { useDispatch } from 'react-redux'
import { fetchFriends } from '../app/features/userSlice'
import useFetchFriendsData from '../hooks/useFetchFriendsData'
import useConversation from '../hooks/Chat/useConversation'
import { MessageType, PostType, PublicStatus } from '../helpers/constant'
import { sharePost } from '../app/features/postSlice'

const Share = ({
    openModalShare,
    onCloseModalShare,
    postId,
}) => {
    const dispatch = useDispatch()
    const [user] = useUserData()
    const [selectedPublicStatus, setSelectedPublicStatus] = useState(0)
    const [listFriends, listFriendsLoading, refetchListFriends] = useFetchFriendsData(user?.id, fetchFriends);
    const [listSelectedFriendsToShare, setListSelectedFriendsToShare] = useState([]);
    const [loading, messages, inputMessages, sendMessage, lastMessages, setInputMessages] = useConversation(user.id);
    const [shareText, setShareText] = useState('')

    const defaultSharedPostData = {
        content: '',
        groupId: null,
        publicStatus: PostType.DEFAULT
    }

    const [sharedPostData, setSharedPostData] = useState(defaultSharedPostData)

    const handleClickFriendToShare = (item) => {
        const checkFriendAlreadyExists = listSelectedFriendsToShare.some(eachFriend => eachFriend.id === item.id);
        let updatedListSelectedFriendsToShare;

        if (checkFriendAlreadyExists) {
            // If the friend already exists, remove them from the list
            updatedListSelectedFriendsToShare = listSelectedFriendsToShare.filter(friend => friend.id !== item.id);
        } else {
            // If the friend doesn't exist, add them to the list
            updatedListSelectedFriendsToShare = [...listSelectedFriendsToShare, item];
        }

        // Update the state with the new list
        setListSelectedFriendsToShare(updatedListSelectedFriendsToShare);
    };
    const handleSubmitShare = async () => {
        // Iterate over listSelectedFriendsToShare and send a message to each selected friend
        listSelectedFriendsToShare.forEach(async friend => {
            const messageData = {
                type: MessageType.POST_SHARE, // Set message type to POST_SHARE
                content: shareText, // Add the content of the shared post
                listReceiverIds: [friend.id],
                sharedPostId: postId,
                // Set the list of receiver IDs (just the ID of the current friend)
                // Add any other necessary data for the message
            };
            await sendMessage({ sendTo: friend.id, messageData }); // Pass sendTo and messageData to sendMessage
        });
    };

    const handleSubmitRepost = async () => {
        switch (selectedPublicStatus) {
            case 0:
                sharedPostData.publicStatus = PublicStatus.PUBLIC;
                break;
            case 1:
                sharedPostData.publicStatus = PublicStatus.FRIENDS;
                break;
            case 2:
                sharedPostData.publicStatus = PublicStatus.PRIVATE;
                break;
            default:
                sharedPostData.publicStatus = PublicStatus.PUBLIC;
                break;
        }
        // Assuming there's more code to handle the actual submission of the post
        sharedPostData.content = shareText
        sharedPostData.type = PostType.REPOST
        sharedPostData.id = postId
        sharedPostData.repostId = postId
        try {

            const response = await dispatch(sharePost({ userId: user?.id, postData: sharedPostData }));
            console.log(response);
            if (response.EC === 0) {
                setSharedPostData(defaultSharedPostData)
                onCloseModalShare()
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    }




    return (
        <Modal
            classNames={{
                modal: 'customModal',
                // overlay: 'customOverlay',
            }}
            open={openModalShare} onClose={onCloseModalShare} center
        >
            {/* if there is a button in form, it will close the modal */}
            <div className="p-3">
                <button onClick={onCloseModalShare} className="btn btn-sm btn-circle btn-ghost z-10 absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-xl text-center mt-5">Share</h3>
                <div className="divider"></div>
                <div className="tw-fc gap-3">
                    <div className="tw-ic gap-3">
                        <Avatar image={user?.image} size={8} />
                        <div className="tw-fc w-full p-3">
                            <h5 className='font-bold'>{user?.name}</h5>
                            <div className="tw-ic font-semibold gap-2">
                                <div className="badge badge-neutral">Feed</div>
                                <div tabIndex={0} className='font-semibold dropdown  gap-1 text-xs bg-neutral px-2 py-1 cursor-pointer rounded-md tw-jb'>
                                    <i className="fa-solid fa-user-group"></i>
                                    <span>{selectedPublicStatus === 0 ? 'Public' : (selectedPublicStatus === 1 ? 'Friends' : 'Private')}</span>
                                    <i className="fa-solid fa-caret-down"></i>

                                    {/* dropdown  */}
                                    <ul tabIndex={0} className="dropdown-content z-[1] -right-[13rem] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a onClick={() => setSelectedPublicStatus(0)}>Public</a></li>
                                        <li><a onClick={() => setSelectedPublicStatus(1)}>Friends</a></li>
                                        <li><a onClick={() => setSelectedPublicStatus(2)}>Private</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <textarea value={shareText} onChange={e => setShareText(e.target.value)} className="textarea textarea-ghost w-full" placeholder="Say something about this..."></textarea>
                    <div className="flex lg:justify-end">
                        <button onClick={handleSubmitRepost} className='btn btn-primary lg:w-1/3'>Share Now</button>
                    </div>
                </div>
                <div className="divider">
                </div>
                <div className="tw-fc gap-3">
                    <h5 className='font-bold text-lg'>Send in Messenger</h5>
                    <div className="tw-ic gap-2">
                        {listFriends.map(item => (
                            <div key={item.id} onClick={() => handleClickFriendToShare(item)} className={`tw-fc w-24 p-2 tw-cc cursor-pointer ${listSelectedFriendsToShare.some(friend => friend.id === item.id) ? 'bg-neutral' : null} rounded-btn tw-hv hover:bg-neutral`}>
                                <Avatar image={item.profilePic} size={8} />
                                <h5 className='text-center font-semibold'>{item.name}</h5>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleSubmitShare} className='btn btn-primary'>Share</button>
                </div>
            </div>
        </Modal>
    )
}

export default Share
