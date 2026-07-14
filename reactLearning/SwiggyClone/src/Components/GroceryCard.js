export default function GroceryCard({Grocery}){
    return (
        <div className="flex-none">
            <a href={Grocery?.action?.link}>
                <img className="h-45 w-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+Grocery?.imageId} ></img>
            </a>
            <h3 className="text-center">{Grocery?.action?.text}</h3>
            
        </div>
    )
}