import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AuthForm = ({ title, onSubmit }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="flex flex-col w-full lg:flex-row md:gap-32 pb-10">
            {title === 'Login' &&
                <div className="grid flex-grow bg-base-300 flex-col gap-4 card shadow-sm shadow-primary rounded-box p-5">
                    <h1 className='font-bold text-3xl text-primary'>Facebook</h1>
                    <h4 className='text-4xl'>Recent logins</h4>
                    <p>Click your picture or add an account</p>
                    <div className="grid max-w-lg grid-cols-3  max-sm:flex-col max-md:flex max-md:mx-auto">
                        <div className="card hover:scale-95 tw-hv hover:cursor-pointer mt-3 mr-3   bg-base-100 shadow-xl ">
                            <figure className="">
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl object-cover relative h-48" />
                                <div className="badge badge-error absolute -right-2 -top-2">1</div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Tommy Le</h2>
                            </div>
                        </div>
                        <div className="card hover:scale-95 tw-hv hover:cursor-pointer mt-3  mr-3   bg-base-100 shadow-xl ">
                            <figure className="">
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl object-cover relative h-48" />
                                <div className="badge badge-error absolute -right-2 -top-2">+99</div>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Tommy Le</h2>
                            </div>
                        </div>
                        <div className="card hover:scale-95 tw-hv hover:cursor-pointer  mt-3  mr-3   bg-base-100 shadow-xl">
                            <figure className="justify-center min-h-32 flex items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 text-primary">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                                </svg>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-primary">Add account</h2>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* <div className="divider lg:divider-horizontal">OR</div> */}

            <div className={`gap-5 flex-grow card tw-hv md:max-w-md lg:max-w-lg w-full  mx-auto shadow-primary shadow-sm hover:cursor-pointer bg-base-300 rounded-box p-5`}>
                {title === 'Sign Up' && <div className='text-3xl font-extrabold text-primary p-5'>Facebook</div>}
                {title === 'Sign Up' && <div className='text-3xl text-center font-bold text-primary pb-5'>Sign Up</div>}
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address or phone number" className="input input-bordered input-md w-full" />
                {title === 'Sign Up' &&
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Username" className="input input-bordered input-md w-full" />
                }
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="input input-bordered input-md w-full" />
                <button onClick={() => onSubmit({ name, email, password })} className="btn btn-active btn-primary">{title === 'Login' ? 'Login' : 'Sign Up'}</button>
                {title === 'Login' && <p className="text-center">Forgotten password?</p>}
                <div className="divider"></div>
                <div className="w-full flex justify-center">
                    <Link to={title === 'Login' ? '/signup' : '/login'} className={`btn btn-link text-info btn-success max-w-xl`}>{title === 'Login' ? `Don't have an account? Register now` : 'Already have an account? Login'}</Link>
                </div>

            </div>
        </div>
    )
}

export default AuthForm
