import React from 'react'

const GroupCardItem = () => {
    return (
        <div className='rounded-btn overflow-hidden shadow-md bg-base-100'>
            <div className="aspect-video bg-accent"></div>
            <div className="tw-fc p-3">
                <h5 className='text-lg font-bold'>Eat Collapse Saigon</h5>
                <p className='tw-ic'>
                    <span>753k members</span>
                    <span>7 posts a day</span>
                </p>
                <div className="tw-ic gap-3">
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar placeholder">
                            <div className="w-8 bg-neutral text-neutral-content">
                                <span>+99</span>
                            </div>
                        </div>
                    </div>
                    <p>Minh Le and 44 friends are members</p>
                </div>
                <button className="btn w-full btn-neutral">Join group</button>
            </div>
        </div>
    )
}

export default GroupCardItem
