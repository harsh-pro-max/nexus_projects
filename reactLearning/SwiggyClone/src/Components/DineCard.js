
export default function DineCard({item}){

    return(
        <div className="max-w-sm flex-none">
         <a href={item.cta.link} target="_blank">  
            <div className="relative">
                <img className="w-80 h-50" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item?.info?.mediaFiles[0]?.url}></img>
                <p className="absolute bottom-2 left-2 text-white">{item?.info?.name} </p>
                <p className="absolute bottom-2 right-2 text-green-300 font-bold"> {item?.info?.rating?.value}</p>

                
            </div>
        
        </a>

        </div>
    )
}