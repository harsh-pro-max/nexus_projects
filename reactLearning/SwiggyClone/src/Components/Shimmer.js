export default function Shimmer() {

    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                Array(10).fill(0).map((_, index) => (
                    <div 
                        key={index}
                        className="max-w-[280px] w-full animate-pulse"
                    >
                        {/* Image */}
                        <div className="w-full h-40 bg-gray-300 rounded-xl"></div>

                        {/* Text */}
                        <div className="mt-3 space-y-2">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}