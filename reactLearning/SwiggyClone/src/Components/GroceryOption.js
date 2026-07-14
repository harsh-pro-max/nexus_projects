import {GroceryGridCard} from "../Utils/Grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption(){
    return (
     <div >
        <h2 className="mt-20 mb-10 w-[80%] container mx-auto text-3xl font-bold">Shop Groceries on Instamart</h2>

        <div className="w-[80%] container mx-auto flex flex-nowrap  overflow-x-auto gap-4 scrollbar-hide">
            {
                GroceryGridCard.map((item)=><GroceryCard Grocery={item} key={item.id} ></GroceryCard>)
            }

        </div>
     </div>   
    )
}