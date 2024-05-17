import React from 'react'
import Post from '../components/Post'
import Avatar from '../components/Avatar'

const WatchPage = () => {
    return (
        <div className='pt-10 w-full'>
            <div className="mx-auto max-w-screen-lg tw-fc gap-3 min-h-screen">
                <div className="tw-fc gap-3 bg-base-100 p-3 rounded-box mt-3">
                    <div className="font-bold text-xl tw-ic gap-3 mt-5 max-w-screen-md mx-auto">
                        <span className='text-primary'>New video for you</span>
                        <span className='text-primary'>2</span>
                    </div>
                    <div className="max-w-screen-md mx-auto flex flex-col md:flex-row md:items-center gap-3 ">
                        <div className="tw-jb tw-hv hover:bg-base-300 p-3 cursor-pointer basis-1/2 rounded-box">
                            <div className="tw-ic gap-3 ">
                                <Avatar size={12} />
                                <div className="tw-fc max-md:text-xs">
                                    <h5 className='max-md:text-sm'>New Video from Gentle 🔻 and others.</h5>
                                    <span className='text-xs text-info'>34 mins ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="tw-jb tw-hv hover:bg-base-300 p-3 cursor-pointer basis-1/2 rounded-box">
                            <div className="tw-ic gap-3 ">
                                <Avatar size={12} />
                                <div className="tw-fc max-md:text-xs">
                                    <h5 className='max-md:text-sm'>New Video from Gentle 🔻 and others.</h5>
                                    <span className='text-xs text-info'>34 mins ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mx-auto max-w-screen-md gap-3 tw-fc">
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default WatchPage
