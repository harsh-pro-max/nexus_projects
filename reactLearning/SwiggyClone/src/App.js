import React  from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./Components/Resaurant";
import Home from "./Components/Home";
import {BrowserRouter,Link, Routes ,Route} from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood"
import RestHeader from "./Components/RestHeader";
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./Stored/stores";
import {Provider} from "react-redux";
import Checkout from "./Components/Checkout";
import SignIn from "./Components/SignIn";
import DineOut from "./Components/DineOut";

function App(){
    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            <Route element={<SecondaryHome></SecondaryHome>}>

            
                <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>

                <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>

                <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>

                <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
                <Route path="/dineout" element={<DineOut></DineOut>}></Route>
                
            </Route>
            <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
            
        </Routes>
        
        </BrowserRouter>
        </Provider>
        </>
    )
    
};

const Root =ReactDOM.createRoot(document.getElementById('root'));

Root.render(<App/>);