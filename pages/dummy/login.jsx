/* eslint-disable prettier/prettier */
export default function LoginPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col border-2 border-black w-[350px] justify-end items-center  rounded-lg">
        <p className="font-extrabold text-3xl mt-2 mb-5">Login</p>
        <div className="flex flex-col  h-full">
          <p className="font-bold">Username</p>
          <input
            type="username"
            className="h-[25px] w-[200px] mb-5 border-2 border-black rounded-lg"
          />
          <p className="font-bold">Password</p>
          <input type="password" className="h-[25px] w-[200px] border-2 border-black rounded-lg" />
          <button className="bg-green-300 border-4 border-green-300 font-bold rounded-lg my-5 h-[30px] w-[100px]">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
