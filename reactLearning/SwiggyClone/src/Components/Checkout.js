import { useSelector } from "react-redux"

export default function Checkout(){

    const items=useSelector(state=>state.cartslice.items);

    console.log(items);
    

    return(
        <>
            <div className="container mx-auto w-[80%] text-2xl mt-10 text-center " >
                {
                    items.map((value)=><div className="text-3xl" key={value.name}>
                    <p >{value.name} <span className="font-bold text-red-400">({value.quantity}) </span>  </p>
                    
                    </div>)
                }
            </div>
        </>
    )
}