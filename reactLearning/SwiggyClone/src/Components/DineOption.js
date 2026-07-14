import {dineoutRestaurants} from "../Utils/DineData";
import DineCard from "./DineCard";

export default function DineOption(){


    return (
        <div>
            <h2 className="mt-20 mb-7 w-[80%] container mx-auto text-3xl font-bold">Discover best restaurants on Dineout</h2>

            <div className="w-[80%] container mx-auto flex flex-nowrap  overflow-x-auto gap-3 scrollbar-hide">
            {
                dineoutRestaurants.map((items)=><DineCard key={items?.info?.id} item={items}></DineCard>)
            }    
            </div>

            <img className="mt-20 mb-7 w-[80%] container mx-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>   
        </div>
    )
}