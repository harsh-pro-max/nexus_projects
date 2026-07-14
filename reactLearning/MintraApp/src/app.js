import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Card from "./Components/Card";
import arr  from "./utils/DummyData";

console.log(arr);

function App(){
    
    let [Arr1 , setArr1]=useState(arr);
    let [data,setData]= useState(arr);

    function sortPriceA(){
        const sorted=[...data].sort((a,b)=>{
            return a.price- b.price
        });
        setArr1(sorted);
    }
    function sortPriceD(){
        const sorted=[...data].sort((a,b)=>{
            return b.price - a.price;
            
        });
        setArr1(sorted);
    }
    function sortAbove499(){
        const filter=[...data].filter((value)=> value.price> 499
        );
        setArr1(filter);
    }
    function sortAbove999(){
        const filter=[...data].filter((value)=> value.price> 999
        );
        setArr1(filter);
    }

    return (
        <>
            <Header />

            <div className="filterHead">
                <button onClick={sortPriceA}>Sort By Price+</button>
                
                <button onClick={sortPriceD}>Sort By Price-</button>
                <button onClick={sortAbove499}>Price above 499</button>
                <button onClick={sortAbove999}>Price above 999</button>

            </div>

            <div className="cardDiv">
                {
                    Arr1.map((value , index)=>{
                        return <Card key={index} cloth={value.cloth} Offer={value.Offer} image={value.image} Price={value.price}/>
                    })
                }  
            </div>

            <Footer/>
        </>
        
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>)