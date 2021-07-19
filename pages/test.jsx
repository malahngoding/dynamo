export default function Test() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="w-[120px] h-[120px] bg-blue-800 z-10" />
            <div className="w-[120px] h-[120px] bg-red-800 -mt-40 z-0 md:mt-0 xs:mt-0" />
        </div>
    );
}