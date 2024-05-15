import React from 'react'
import Post from '../components/Post'

const WatchPage = () => {
    return (
        <div className='pt-10 w-full'>
            <div className="mx-auto max-w-screen-lg tw-fc gap-3 min-h-screen">
                <div className="tw-fc gap-3 bg-base-100 p-3 rounded-box mt-3">
                    <div className="font-bold text-xl tw-ic gap-3">
                        <span>New video for you</span>
                        <span>2</span>
                    </div>
                    <div className="w-full tw-ic gap-3">
                        <div className="tw-jb tw-hv hover:bg-base-300 cursor-pointer basis-1/2 rounded-box">
                            <div className="tw-ic gap-3 ">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="tw-fc">
                                    <h5>New Video from Gentle 🔻 and others.</h5>
                                    <span className='text-xs'>34 mins ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="tw-jb tw-hv hover:bg-base-300 cursor-pointer basis-1/2 rounded-box">
                            <div className="tw-ic gap-3 ">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="tw-fc">
                                    <h5>New Video from Gentle 🔻 and others.</h5>
                                    <span className='text-xs'>34 mins ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full gap-3 tw-fc">
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default WatchPage
