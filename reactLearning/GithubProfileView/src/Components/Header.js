import { useEffect,useState } from "react";

export default function Header(obj){
    return (
        <>
            {/* header section */}
            <div className="header">
                <h1>Github Profile View</h1>
                
                <div className="searchCount">
                    
                    <input placeholder="Profiles Count" value={obj.count}onChange={(e)=>obj.countFunc(e.target.value)}  />
                    <button onClick={()=>obj.countSearch(Number(obj.count))}>Search</button>
                </div>
            </div>
        </>
    )
}