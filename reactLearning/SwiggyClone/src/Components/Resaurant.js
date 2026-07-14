import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import { restaurants } from "../Utils/ResturantData";
import Shimmer from "./Shimmer";

export default function Restaurant() {

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {

    //     async function fetchDummy() {
    //         try {
    //             // Dummy API (only for delay)
    //             await fetch("https://jsonplaceholder.typicode.com/posts");

    //             // simulate extra delay (optional but useful)
    //             setTimeout(() => {
    //                 setLoading(false);
    //             }, 1000);

    //         } catch (err) {
    //             console.log("Error:", err);
    //             setLoading(false);
    //         }
    //     }

    //     fetchDummy();

    // }, []);

    // // ✅ Shimmer condition
    // if (loading) {
    //     return <Shimmer />;
    // }

    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/";

        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

        const response = await fetch(proxyServer+swiggyAPI);
        
        const data = await response.json();
        setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     }

     fetchData();
    },[])

    console.log(RestData);
    if(RestData.length==0){
        return <Shimmer></Shimmer>
    }

    // ✅ Actual UI (local data)
    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-10 gap-5">
            {
                RestData.map((items) => (
                    <RestCard key={items.info.id} item={items} />
                ))
            }
        </div>
    );
}