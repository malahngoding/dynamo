import { CircleButtonBack } from '@/components/base-component-a/circlebutton'

export const LoginForm = () => {
    return (
        <div className="flex flex-col bg-green-100">
            <div>
                <p className="mx-6 mt-5 mb-10 text-blue font-sans text-4xl font-bold tracking-wider">F O R M S</p>
                <form>
                    <div className="h-[414px] w-[375px] m-5 border-2 border-white bg-white">
                        <p className="mt-6 mx-6 w-[327px] h-[40px] text-4xl text-black font-sans text-center font-extrabold">Login</p>
                        <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                            <div>
                                <svg className="my-3 mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <input className="w-[251px] h-[28px] my-3" name="email" placeholder="Email address" />
                            </div>
                        </div>
                        <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                            <div>
                                <svg className="my-3 mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <input className="w-251px h-28px my-3" name="password" placeholder="●●●●●●●" />
                            </div>
                        </div>
                        <button className="mt-12 mx-6 w-[327px] h-[60px] rounded-2xl bg-black text-white font-sans text-xl font-extrabold">
                            <div className="flex flex-row">
                                <div className="ml-28 my-4">Sign In</div>
                                <svg className="ml-4 my-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 18L16 12L10 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                        <div className="flex flex-row mx-6 mt-10 mb-6">
                            <p className="text-black font-sans text-sm font-normal">You are new?</p>
                            <p className="text-red font-sans text-sm font-bold ml-1">Create new</p>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <form>
                    <div className="h-[530px] w-[375px] m-5 border-2 border-white bg-white">
                        <p className="mt-6 mx-6 w-[327px] h-[40px] text-4xl text-black font-sans font-extrabold">
                            Sign Up</p>
                        <p className="mx-6 mt-3 font-normal text-base">
                            You have chance to create new
                        </p>
                        <p className="mx-6 font-normal text-base">
                            account if you really want to.
                        </p>
                        <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                            <div>
                                <svg className="my-3 mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <input className="w-[251px] h-[28px] my-3" name="email" placeholder="Full Name" />
                            </div>
                        </div>
                        <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                            <div>
                                <svg className="my-3 mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 6L12 13L2 6" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <input className="w-[251px] h-[28px] my-3" name="password" placeholder="Email address" />
                            </div>
                        </div>
                        <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                            <div>
                                <svg className="my-3 mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <input className="w-[251px] h-[28px] my-3" name="password" placeholder="●●●●●●●" />
                            </div>
                        </div>
                        <button className="mt-8 mx-6 w-[327px] h-[60px] rounded-2xl bg-yellow text-black border-2 border-black font-sans text-xl font-extrabold box-border shadow-lg ">Sign up</button>
                        <div className="flex flex-row mx-6 mt-8 mb-6">
                            <p className="text-black font-sans text-sm font-normal">Already have account?</p>
                            <p className="text-red font-sans text-sm font-bold ml-1">Go here</p>
                        </div>
                    </div>
                </form>
            </div>

            <div className="flex flex-col border-2 border-white bg-white w-[375px] h-[224px] m-5 items-stretch">
                <div className="flex flex-row">
                    <input
                        className="h-[56px] w-[56px] border-2 border-black mt-6 ml-10 rounded-2xl text-center font-extrabold text-xl"

                        placeholder="_"
                    />
                    <input
                        className="h-[56px] w-[56px] border-2 border-black mt-6 mx-6 rounded-2xl text-center font-extrabold text-xl"

                        placeholder="_"
                    />
                    <input
                        className="h-[56px] w-[56px] border-2 border-black mt-6 rounded-2xl text-center font-extrabold text-xl"

                        placeholder="_"
                    />
                    <input
                        className="h-[56px] w-[56px] border-2 border-black mt-6 mx-6 rounded-2xl text-center font-extrabold text-xl"

                        placeholder="_"
                    />
                </div>
                <div className="flex flex-row mx-6 mt-6 items-stretch px-10">
                    <p className="text-black font-sans text-sm font-normal text-center">Didnt&apos;t get fav number?</p>
                    <p className="text-red font-sans text-sm font-bold ml-1">Get new</p>
                </div>
                <button className="mt-5 mx-6 w-[327px] h-[60px] rounded-2xl bg-black text-white font-sans text-xl font-extrabold">Verify</button>
            </div>

            <div>
                <form>
                    <div className="h-[478px] w-[375px] m-5 border-2 border-white bg-white">
                        <p className="mt-6 mx-6 w-[327px] h-[40px] text-4xl text-black font-sans font-extrabold">
                            Login</p>
                        <p className="mx-6 mt-3 font-normal text-base">
                            You don&apos;t think you should login first
                        </p>
                        <p className="mx-6 font-normal text-base">
                            and behave like human not robot.
                        </p>
                        <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                            <div>
                                <svg className="my-3 mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <input className="w-[251px] h-[28px] my-3" name="email" placeholder="Email address" />
                            </div>
                        </div>
                        <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                            <div>
                                <svg className="my-3 mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <input className="w-[251px] h-[28px] my-3" name="password" placeholder="●●●●●●●" />
                            </div>
                        </div>
                        <button className="mt-12 mx-6 w-[327px] h-[60px] rounded-2xl bg-yellow text-black border-2 border-black font-sans text-xl font-extrabold box-border shadow-lg ">Sign in</button>
                        <div className="flex flex-row mx-6 mt-11 mb-6">
                            <p className="text-black font-sans text-sm font-normal">You are new?</p>
                            <p className="text-red font-sans text-sm font-bold ml-1">Create new</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex flex-col border-2 border-black w-[375px] h-[340px] bg-white m-5 rounded-t-lg">
                <div className="flex flex-row border-b-2 border-black">
                    <div className="flex flex-1 font-sans font-extrabold text-xl mr-12 my-4 ml-6 h-[28px] w-[302px]">Welcome Back</div>
                    <svg className="mr-6 mt-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#18191F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" stroke="#18191F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div>
                    <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                        <div>
                            <svg className="my-3 mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <input className="w-251px h-28px my-3" name="email" placeholder="Email address" />
                        </div>
                    </div>
                    <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                        <div>
                            <svg className="my-3 mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <input className="w-251px h-28px my-3" name="password" placeholder="●●●●●●●" />
                        </div>
                    </div>
                    <button className="mt-6 mx-6 mb-8 w-[327px] h-[60px] rounded-2xl bg-black text-white font-sans text-xl font-extrabold">
                        <div className="flex flex-row">
                            <div className="ml-24 my-4">Continue</div>
                            <svg className="ml-4 my-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18L16 12L10 6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const SignUpFormYellow = () => {
    return (
        <form className="h-[530px] w-[360px] md:w-[375px] md:m-5 border-2 border-white bg-white flex flex-col justify-center items-center rounded-xl">
            <p className="mt-6 mx-6 w-[327px] h-[40px] text-4xl text-black font-sans font-extrabold">
                Sign Up
            </p>
            <p className="mx-4 md:mx-6 mt-3 font-normal text-base justify-self-start">
                You have chance to create new account if you really want to.
            </p>
            <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                <div>
                    <svg
                        className="my-3 mx-3"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                            stroke="#18191F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                            stroke="#18191F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div>
                    <input
                        className="w-[251px] h-[28px] my-3"
                        name="email"
                        placeholder="Full Name"
                    />
                </div>
            </div>
            <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                <div>
                    <svg
                        className="my-3 mx-3"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                            stroke="#18191F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M22 6L12 13L2 6"
                            stroke="#18191F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div>
                    <input
                        className="w-[251px] h-[28px] my-3"
                        name="password"
                        placeholder="Email address"
                    />
                </div>
            </div>
            <div className="flex flex-row border-2 border-black mx-6 mt-6 w-[327px] h-[56px] rounded-2xl box-border">
                <div>
                    <svg
                        className="my-3 mx-3"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                            stroke="#18191F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                            stroke="#18191F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div>
                    <input
                        className="w-[251px] h-[28px] my-3"
                        name="password"
                        placeholder="●●●●●●●"
                    />
                </div>
            </div>
            <button className="mt-8 mx-6 w-[327px] h-[60px] rounded-2xl bg-yellow text-black border-2 border-black font-sans text-xl font-extrabold box-border shadow-lg ">
                Sign up
            </button>
            <div className="flex flex-row mx-6 mt-8 mb-6">
                <p className="text-black font-sans text-sm font-normal">
                    Already have account?
                </p>
                <p className="text-red font-sans text-sm font-bold ml-1">Go here</p>
            </div>
        </form>
    )
}

export const ForgotPasswordForm = () => {
    return (
        <form>
            <div className=" xs:m-2 border-2 lg:border-0 border-b-8 lg:border-b-0 border-black bg-white p-2 lg:p-6 rounded-xl">
                <div className="ml-3 xs:mx-6 pt-6">
                    <CircleButtonBack width="w-[45px] lg:w-[60px]" height="h-[45px] lg:h-[60px]" color="bg-white" border="border-2 border-b-4" rounded="rounded-full" />
                </div>
                <p className="mt-3  ml-6 text-4xl text-black font-sans text-start  font-extrabold">Lupa Password</p>
                <p className="ml-6  text-xl  text-black font-sans  font-normal">Malah Ngoding</p>
                <p className="ml-6 mt-14 text-base font-normal">Silahkan masukan email kamu, nanti </p>
                <p className="ml-6 text-base font-normal">kita setel ulang sandinya</p>
                <div className="flex flex-row border-2 border-black mx-6 mt-2 lg:mt-6 lg:w-[327px] lg:h-[56px] rounded-2xl">
                    <div>
                        <svg className="my-3 mx-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#18191F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <input className="border-0 focus:border-yellow my-1 w-full rounded-xl lg:w-[251px] lg:h-[28px] lg:my-3" name="email" type="text" placeholder="Email address" />
                    </div>

                </div>
                <div>
                    <p className="xs:mx-6 text-sm text-red"></p>
                </div>
                <div>
                    <p className="xs:mx-6 text-sm text-red"></p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 border-b-4 mt-6 mx-6 h-[60px] lg:w-[327px] lg:h-[60px] rounded-2xl bg-red-800 text-black font-sans text-xl font-extrabold" >
                    <div className="flex flex-row justify-center items-center">
                        <div className="">Kirim</div>
                    </div>
                </div>

            </div>
        </form>
    )
}