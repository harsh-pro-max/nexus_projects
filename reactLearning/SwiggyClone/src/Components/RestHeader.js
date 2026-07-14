import { useSelector } from "react-redux"
import { Link } from "react-router";

export default function RestHeader(){

    const counter= useSelector(state=>state.cartslice.items);


    return (
        <div className="w-[100%] py-4 px-12 bg-white text-3xl flex justify-between items-center shadow-md">
            <div>
                <p className="text-orange-400 font-bold ">Swiggy</p>
            </div>
            <div>
                <Link to='/Checkout'>
                <p className="text-green-400 font-bold">Cart {`${counter.length}`}</p>
                </Link>
            </div>
        </div>
    )
}