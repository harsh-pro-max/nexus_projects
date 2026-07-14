import {FoodDatas} from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption(){
    console.log(FoodDatas);
    return (
        <div>
            <h2 className="mt-20 w-[80%] container mx-auto text-3xl font-bold">Order our best food options</h2>


            <div className="w-[80%] mx-auto overflow-x-auto scrollbar-hide flex-nowrap ">
            <div className="grid grid-flow-col grid-rows-2 gap-8 grid-cols-a">
                {
                    FoodDatas.map((FoodData) => (
                        <FoodCard key={FoodData.id} FoodData={FoodData} />
                    ))
                }
            </div>
        </div>
        </div>
    )
}