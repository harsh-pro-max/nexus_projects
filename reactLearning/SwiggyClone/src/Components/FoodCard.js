export default function FoodCard({FoodData}){
    return (
        <div className="flex-none w-35 h-35">
        <a href={FoodData?.action?.link}>
            <img className="w-35 h-35 object-cover gap-3"  src={`https://media-assets.swiggy.com/swiggy/image/upload/` + FoodData?.imageId} ></img>
        </a>
        
        </div>

    )
}