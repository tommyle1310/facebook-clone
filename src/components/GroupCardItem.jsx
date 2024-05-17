import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

const GroupCardItem = () => {
    return (
        <div className='rounded-btn overflow-hidden shadow-md bg-base-300'>
            <div className="aspect-video bg-accent"></div>
            <div className="tw-fc p-3 gap-2">
                <h5 className='text-lg max-md:text-md font-bold max-md:font-semibold'>Eat Collapse Saigon</h5>
                <p className='tw-ic gap-3 text-sm'>
                    <span className='max-md:text-xs'>753k members</span>
                    <span className='max-md:text-xs'>7 posts a day</span>
                </p>
                <div className="tw-ic gap-3">
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        <Avatar size={8} />
                        <Avatar size={8} />
                        <Avatar size={8} />
                        <Avatar size={8} />
                        <Avatar size={8} />
                        <Avatar size={8} />
                        <Avatar size={8} />
                    </div>
                    <p className='max-md:text-xs'>Minh Le and 44 friends are members</p>
                </div>
                <Link to='/groups/:id' className="btn w-full btn-neutral max-md:text-sm">Join group</Link>
            </div>
        </div>
    )
}

export default GroupCardItem
