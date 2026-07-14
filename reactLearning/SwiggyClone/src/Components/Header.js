import { Link } from "react-router"

export default function Header(){
    return (
        <header className="bg-[#FF5200] font-serif">
            <div className="flex justify-between  container mx-auto py-8 items-center border-b-1 border-white ">
                <img className="w-[160] h-[48]  " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>

                <div className=" text-base text-white ">
                    <a className="_blank mr-7 " href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a className="_blank mr-7" href="https://partner.swiggy.com/food/login">Partner with us</a>
                    <a  href="#footer" className="py-3 px-4 border border-white rounded-2xl mr-7">Get the App</a>
                    
                    <Link to="/SignIn" className="border border-black bg-black py-3 px-4 rounded-2xl mr-7">Sign in
                    </Link>
                </div>
            </div>
            
            <div className="pt-16 pb-8 relative">
                <img className="h-100 w-55 absolute left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-100 w-55 absolute right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="text-5xl text-white max-w-[60%] container mx-auto text-center">
                    Order food. Discover best
                    restaurants. Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex gap-5 mt-10" >
                    <input className="bg-white w-[40%] text-base px-6 py-4 rounded-2xl" placeholder="Delhi,India"></input>
                    <input className="bg-white w-[50%] px-4 py-4 rounded-2xl" placeholder="Search for restaurant and items for more"></input>
                </div>
            </div>
            <div className="max-w-[80%] container mx-auto flex ">
               
                <Link to="/restaurant">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                </Link>

                <Link to="/restaurant">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                </Link>

                <Link to="/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                </Link>

            </div>
        </header>
    )
}