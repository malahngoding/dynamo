export const LoginForm = () => {
    return (
        <div className="flex flex-col bg-green-100">
            <div>
                <p className="mx-6 mt-5 mb-10 text-blue font-sans text-4xl font-bold tracking-wider">F O R M S</p>
                <form>
                    <div className="h-414px w-375px m-5 border-2 border-black bg-white">
                        <p className="mt-6 mx-6 w-327px h-40px text-4xl text-black font-sans text-center font-extrabold">Login</p>
                        <input className="mx-6 mt-6 w-327px h-56px border-2 border-black rounded-2xl box-border" type="text" name="email" placeholder="Email address" />
                        <input className="mx-6 mt-6 w-327px h-56px border-2 border-black rounded-2xl box-border" type="text" name="password" placeholder="Password" />
                        <button className="mt-12 mx-6 w-327px h-60px rounded-2xl bg-black text-white font-sans text-xl font-extrabold">Sign in</button>
                        <div className="flex flex-row mx-6 mt-10 mb-6">
                            <p className="text-black font-sans text-sm font-normal">You are new?</p>
                            <p className="text-red font-sans text-sm font-bold ml-1">Create new</p>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <form>
                    <div className="h-530px w-375px m-5 border-2 border-black bg-white">
                        <p className="mt-6 mx-6 w-327px h-40px text-4xl text-black font-sans font-extrabold">
                            Sign Up</p>
                        <p className="mx-6 mt-3 font-normal text-base">
                            You have chance to create new
                        </p>
                        <p className="mx-6 font-normal text-base">
                            account if you really want to.
                        </p>
                        <input className="mx-6 mt-6 w-327px h-56px border-2 border-black rounded-2xl box-border" type="text" name="name" placeholder="Full Name" />
                        <input className="mx-6 mt-6 w-327px h-56px border-2 border-black rounded-2xl box-border" type="text" name="email" placeholder="Email address" />
                        <input className="mx-6 mt-6 w-327px h-56px border-2 border-black rounded-2xl box-border" type="text" name="password" placeholder="Password" />
                        <button className="mt-8 mx-6 w-327px h-60px rounded-2xl bg-yellow text-black border-2 border-black font-sans text-xl font-extrabold box-border shadow-lg ">Sign up</button>
                        <div className="flex flex-row mx-6 mt-8 mb-6">
                            <p className="text-black font-sans text-sm font-normal">Already have account?</p>
                            <p className="text-red font-sans text-sm font-bold ml-1">Go here</p>
                        </div>
                    </div>
                </form>
            </div>

            <div className="flex flex-col border-2 border-black bg-white w-375px h-224px m-5 items-stretch">
                <div className="flex flex-row">
                    <div className="h-56px w-56px border-2 border-black mt-6 ml-10 rounded-2xl pt-3 text-center font-extrabold text-xl">
                        0
                    </div>
                    <div className="h-56px w-56px border-2 border-black mt-6 mx-6 rounded-2xl pt-3 text-center font-extrabold text-xl">
                        _
                    </div>
                    <div className="h-56px w-56px border-2 border-black mt-6  rounded-2xl pt-3 text-center font-extrabold text-xl">
                        _
                    </div>
                    <div className="h-56px w-56px border-2 border-black mt-6 mx-6 rounded-2xl pt-3 text-center font-extrabold text-xl">
                        _
                    </div>
                </div>
                <div className="flex flex-row mx-6 mt-6 items-stretch px-10">
                    <p className="text-black font-sans text-sm font-normal text-center">Didnt't get fav number?</p>
                    <p className="text-red font-sans text-sm font-bold ml-1">Get new</p>
                </div>
                <button className="mt-5 mx-6 w-327px h-60px rounded-2xl bg-black text-white font-sans text-xl font-extrabold">Verify</button>
            </div>

            <div>
                <form>
                    <div className="h-478px w-375px m-5 border-2 border-black bg-white">
                        <p className="mt-6 mx-6 w-327px h-40px text-4xl text-black font-sans font-extrabold">
                            Login</p>
                        <p className="mx-6 mt-3 font-normal text-base">
                            You don't think you should login first
                        </p>
                        <p className="mx-6 font-normal text-base">
                            and behave like human not robot.
                        </p>
                        <input className="mx-6 mt-6 w-327px h-56px border-2 border-black rounded-2xl box-border" type="text" name="email" placeholder="Email address" />
                        <input className="mx-6 mt-6 w-327px h-56px border-2 border-black rounded-2xl box-border" type="text" name="password" placeholder="Password" />
                        <button className="mt-12 mx-6 w-327px h-60px rounded-2xl bg-yellow text-black border-2 border-black font-sans text-xl font-extrabold box-border shadow-lg ">Sign in</button>
                        <div className="flex flex-row mx-6 mt-11 mb-6">
                            <p className="text-black font-sans text-sm font-normal">You are new?</p>
                            <p className="text-red font-sans text-sm font-bold ml-1">Create new</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex flex-col border-2 border-black w-375px h-340px bg-white m-5 rounded-t-lg">
                <div className="flex flex-row border-b-2 border-black">
                    <div className="flex flex-1 font-sans font-extrabold text-xl mr-12 my-4 ml-6 h-28px w-302px">Welcome Back</div>
                    <svg className="mr-6 mt-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#18191F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 6L18 18" stroke="#18191F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    <input className="mx-6 mt-6 w-327px h-56px border-2 border-black rounded-2xl box-border" type="text" name="email" placeholder="Email address" />
                    <input className="mx-6 mt-6 w-327px h-56px border-2 border-black rounded-2xl box-border" type="text" name="password" placeholder="Password" />
                    <button className="mt-6 mx-6 mb-8 w-327px h-60px rounded-2xl bg-black text-white font-sans text-xl font-extrabold">Continue</button>
                </div>
            </div>
        </div>
    )
}