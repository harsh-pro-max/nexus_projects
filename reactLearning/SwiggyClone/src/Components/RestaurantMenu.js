import { useParams } from "react-router";
import { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import { Link } from "react-router";
// import SearchFood from "./SearchFood";

export default function RestaurantMenu(){
    let {id} = useParams();

    
    const [selected, setSelected] = useState(null);
    const [RestData, setRestData] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8006&lng=86.1871&restaurantId=${id}`;

            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();

            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter((items) => 'title' in items?.card?.card);

            setRestData(filterData);
        }
        fetchData();
    }, []);

    return(
        <>
        <div className="w-[80%] mx-auto mt-10 mb-10">
        <Link to={`/city/delhi/${id}/search`}>
         <p className="w-full text-center py-2 bg-gray-200 text-2xl rounded-4xl">Search for Dishes</p>
         </Link>
        </div>

        {/* Filter Buttons */}
        <div className="w-[80%] mx-auto mt-10 mb-6 flex gap-3">

            <button 
                className={`rounded-full text-base py-2 px-5 border-2 font-semibold transition-all
                    ${selected === "veg" 
                        ? "border-green-600 bg-green-50 text-green-700" 
                        : "border-gray-300 text-gray-600"
                    }`} 
                onClick={()=> setSelected(selected === 'veg' ? null : 'veg')}
            > 
                🟢 Veg
            </button>

            <button 
                className={`rounded-full text-base py-2 px-5 border-2 font-semibold transition-all
                    ${selected === "nonveg" 
                        ? "border-red-600 bg-red-50 text-red-700" 
                        : "border-gray-300 text-gray-600"
                    }`} 
                onClick={()=> setSelected(selected === 'nonveg' ? null : 'nonveg')}
            > 
                🔴 Non Veg
            </button>

        </div>

        {/* Menu Cards */}
        <div className="w-[80%] mx-auto">
            {RestData.map((menuItems) => 
                <MenuCard 
                    key={menuItems?.card?.card?.title} 
                    menuItems={menuItems} 
                    foodSelected={selected}
                />
            )}
        </div>
        </>
    )
}