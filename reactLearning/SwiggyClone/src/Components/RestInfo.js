import { useState } from "react";
import { addItems,IncrementItems,DecrementItems } from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";


export default function RestInfo({restData}){

    const price = (restData?.price || restData?.defaultPrice || 0) / 100;
    const rating = restData?.ratings?.aggregatedRating?.rating;
    const ratingCount = restData?.ratings?.aggregatedRating?.ratingCountV2;
    const imageId = restData?.imageId;

    // const [count,setCount] = useState(0);
    const dispatch= useDispatch();
    const items = useSelector(state=>state.cartslice.items);

    const element = items.find(item=>item.id === restData.id);
    const count= element?element.quantity:0;

    function handleAdditems(){
        dispatch(addItems(restData));   
    }

    function handleIncrementItems(){
        dispatch(IncrementItems(restData))
    }

    function handleDecrementItems(){
        dispatch(DecrementItems(restData));
    }

    return(
        <div className="flex w-full justify-between py-6 border-b border-gray-100">
            
            {/* Left — Info */}
            <div className="w-[65%] flex flex-col gap-1 pr-4">

                {/* Veg / Non-veg icon */}
                {restData?.itemAttribute?.vegClassifier === "VEG" 
                    ? <span className="w-5 h-5 border-2 border-green-600 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
                      </span>
                    : <span className="w-5 h-5 border-2 border-red-600 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
                      </span>
                }

                {/* Name */}
                <p className="text-lg font-semibold text-gray-800">
                    {restData?.name || "N/A"}
                </p>

                {/* Price */}
                {price > 0 && (
                    <p className="font-semibold text-gray-800">
                        {"₹" + price}
                    </p>
                )}

                {/* Rating — sirf tab dikhao jab ho */}
                {rating && ratingCount && ratingCount !== "0" && (
                    <div className="flex items-center gap-1 text-sm">
                        <span className="text-green-700 font-semibold">★ {rating}</span>
                        <span className="text-gray-500">({ratingCount})</span>
                    </div>
                )}

                {/* Description */}
                {restData?.description && (
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {restData.description}
                    </p>
                )}
            </div>

            {/* Right — Image + ADD button */}
            <div className="w-[28%] relative flex-shrink-0">
                {imageId ? (
                    <>
                        <img 
                            className="w-full h-36 object-cover rounded-lg"
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + imageId}
                            alt={restData?.name}
                        />
                        {
                            count===0?(<button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold px-8 py-2 rounded-lg shadow-md border border-gray-100 hover:bg-green-50 transition-all" onClick={()=>handleAdditems()}>
                            ADD
                        </button>):(
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2
                            gap-2 text-2xl text-green-600 bg-white rounded-lg px-8 py-2 flex">
                                <button onClick={()=>handleDecrementItems()}>-</button>
                                <span>{count}</span>
                                <button onClick={()=>handleIncrementItems()}>+</button>
                            </div>
                        )
                        }

                        
                    </>
                ) : (
                    // Image nahi hai to sirf ADD button dikhao
                    <div className="flex items-center justify-center h-full">
                        <button className="bg-white text-green-600 font-bold px-8 py-2 rounded-lg shadow-md border border-gray-100 hover:bg-green-50 transition-all">
                            ADD
                        </button>
                    </div>
                )}
            </div>

        </div>
    )
}