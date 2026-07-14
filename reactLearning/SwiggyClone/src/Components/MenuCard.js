import { useState } from "react";
import RestInfo from "./RestInfo"

export default function MenuCard({menuItems, foodSelected}){

    const cardData = menuItems?.card?.card;
    const [isOpen, setIsOpen] = useState(true);

    const allItems = cardData?.itemCards 
        || cardData?.categories?.flatMap(cat => cat?.itemCards) 
        || [];

    // Filter logic — bas yahan karo, aur kuch nahi
    const filteredItems = allItems.filter((item) => {
        if(foodSelected === 'veg') {
            return item?.card?.info?.isVeg === 1;
        }
        if(foodSelected === 'nonveg') {
            return item?.card?.info?.isVeg !== 1;
        }
        return true; // koi filter nahi — sab dikhao
    });

    // Agar filtered list empty hai to card hi mat dikhao
    if(filteredItems.length === 0) return null;

    return(
        <div className="w-full border-b border-gray-200 py-4">
            
            {/* Header */}
            <div 
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={()=>setIsOpen(!isOpen)}
            >
                <p className="text-xl font-bold text-gray-800">
                    {cardData?.title} 
                    <span className="text-gray-500 ml-1">({filteredItems.length})</span>
                </p>
                <span className="text-gray-600 text-xl mr-4">
                    {isOpen ? '▲' : '▼'}
                </span>
            </div>

            {isOpen && (
                <div className="mt-2">
                    {filteredItems.map((items) => 
                        <RestInfo 
                            key={items?.card?.info?.id} 
                            restData={items?.card?.info}
                        />
                    )}
                </div>
            )}
        </div>
    )
}