// import { jsx } from "react/jsx-runtime";

import { Link } from "react-router";

export default function RestCard({ item }) {
    return (
        <Link to={"/city/delhi/"+item?.info?.id} >
        <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95 ">
            <img
                className="w-70 h-45 object-cover rounded-xl"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item.info.cloudinaryImageId}
                alt="food"
            />

            <div className="w-[95%] mx-auto mt-3">
                <div className="font-bold text-xl">
                    {item?.info?.name}
                </div>

                <div className="flex gap-2">
                    <span className="text-lg">⭐ {item?.info?.avgRating}</span>
                    <span className="text-lg font-semibold">
                        {item?.info?.costForTwo}
                    </span>
                </div>

                <div className="text-gray-500 text-xl mt-1 overflow-auto">{item?.info?.cuisines.join(" ")}</div>
            </div>
        </div>
        </Link>
    );
}