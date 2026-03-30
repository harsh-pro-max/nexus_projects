const restaurants= [];

const images= ["first","second","third","fourth","fifth","sixth","seventh","eigth","nine","tenth"];

const rest_name=[  "Spice Route Delhi",
  "Tandoori Tales",
  "Delhi Darbar Bites",
  "Chaat Junction",
  "Mughal Feast House",
  "Urban Curry Spot",
  "Masala Street Kitchen",
  "Royal Kebabs Corner",
  "The Delhi Diner",
  "Desi Flavors Hub",
  "Old Delhi Delights",
  "Curry & Cravings",
  "Capital Spice Kitchen",
  "Zayka Junction",
  "Flavors of Dilli",
  "The Hungry Nawab",
  "Street Spice Adda",
  "Taste of Chandni",
  "The Curry Culture",
  "Dil Se Dilli Foods"
];
const foodTypes = [
  "North Indian",
  "South Indian",
  "Chinese",
  "Italian",
  "Mexican",
  "Street Food",
  "Fast Food",
  "Mughlai",
  "Continental",
  "Desserts"
];
const locations = [
  "Connaught Place",
  "Chandni Chowk",
  "Karol Bagh",
  "Saket",
  "Dwarka",
  "Rohini",
  "Lajpat Nagar",
  "Hauz Khas",
  "Rajouri Garden",
  "Vasant Kunj"
];

for(let i=0;i<100;i++){
    const obj={};
    obj["images"]=images[Math.floor(Math.random()* 10)];

    obj["name"]=rest_name[Math.floor(Math.random()*20)];

    obj['rating']=(Math.random()*5).toFixed(1);
    obj["food_type"]=foodTypes[Math.floor(Math.random()*10)];

    obj["Price_for_two"]= Math.floor(Math.random()* 2401 +100);
    obj["location"]=locations[Math.floor(Math.random()*10)];

    obj["distance_from_Customer_house"]=(Math.random()*10+1).toFixed(1);

    obj["Offers"]=Math.floor(Math.random()*30);

    obj["alcohol"]= Math.random()> 0.7;
    obj["Restaurant_open_time"] = Math.floor(Math.random() * 24);
    obj["Resturant_close_time"] = (obj["Restaurant_open_time"]+12)%24;

    restaurants.push(obj);
}
// Array convert to json file 
// const jsonData = JSON.stringify(restaurants);
// console.log(jsonData);

getResturant(restaurants);

function getResturant(restaurants){
    
    const root = document.querySelector('.root');
    restaurants.forEach(restaurant =>{

        // create a card
        // 1.image
        // 2.Card_content div
            // card_header (Name and rating)
            // card_footer (Food_type and price)
            // card_location ( Resturant location, distance)
        
        // create a card
        const card= document.createElement('div');
        card.classList.add('card');

        // create image
        const image = document.createElement('img');
        image.src=`assets/${restaurant.images}.jpeg`;

        // card - contant 
        const Card_content =document.createElement('div');
        Card_content.classList.add('card-content');

        // card header
        const Card_header = document.createElement('div');
        Card_header.classList.add('card-header');

        const h3 = document.createElement('h3');
        h3.innerText= restaurant.name;

        const rate = document.createElement('span');
        rate.textContent=`rating:${restaurant.rating}`;
        rate.classList.add('rating');


        Card_header.appendChild(h3);
        Card_header.appendChild(rate);



        //card footer
        const Card_footer = document.createElement('div');
        Card_footer.classList.add('card-footer');

        const food = document.createElement('span');
        food.textContent = restaurant.food_type;

        const price=document.createElement('span');
        price.textContent="₹"+ restaurant.Price_for_two;

        Card_footer.appendChild(food);
        Card_footer.appendChild(price);


        // card location
        const Card_location = document.createElement('div');
        Card_location.classList.add('card-location');

        const location = document.createElement('span');
        location.textContent = restaurant.location;

        const distance=document.createElement('span');
        distance.textContent=restaurant.distance_from_Customer_house;

        Card_location.appendChild(location);
        Card_location.appendChild(distance);

        // append a new div offer
        const offerEle=document.createElement('div');
        offerEle.classList.add("Offer");
        offerEle.classList.add("hidden");
        offerEle.textContent=`${restaurant.Offers}% off`;


        

        // append elements in card content
        Card_content.appendChild(Card_header);
        Card_content.appendChild(Card_footer);
        Card_content.appendChild(Card_location);
        Card_content.appendChild(offerEle);

        // append cliend in card 
        card.appendChild(image);
        card.appendChild(Card_content);
        

        root.appendChild(card);

    });
}

const offers= document.querySelector(".Offers");
const rating= document.querySelector(".Rating");
const alcohol=document.querySelector(".Alcohol");
const openBtn=document.querySelector(".Open");
const root= document.querySelector(".root");
const filter=document.querySelector(".Filters");

openBtn.addEventListener("click", () => {
  root.replaceChildren();

  const currentHour = new Date().getHours();

  const openRestaurants = restaurants.filter((obj) => {
    const open = obj.Restaurant_open_time;
    const close = obj.Resturant_close_time;

    if (open < close) {
      // normal case
      return currentHour >= open && currentHour < close;
    } else {
      // cross-midnight case
      return currentHour >= open || currentHour < close;
    }
  });

  getResturant(openRestaurants);
});

alcohol.addEventListener("click",()=>{
  
  // root.textContent="";
  root.replaceChildren();
  const alcoholFilter=restaurants.filter((obj)=>{
    return obj.alcohol;
  });

  getResturant(alcoholFilter);
});


rating.addEventListener("click",()=>{
  root.replaceChildren();
  const result= restaurants.filter((obj)=>obj.rating>4.5);

  getResturant(result);
});

offers.addEventListener("click",()=>{
  root.replaceChildren();
  const result= restaurants.filter((obj)=>obj.Offers>20);
  const cardContant=document.querySelector(".Offer");
  // cardContant.classList.remove("hidden");

  getResturant(result);
  
});


const closeBtn=document.querySelector("#closeFilter");
const filterPopup=document.querySelector("#filterPopup");

closeBtn.addEventListener("click",()=>{
  filterPopup.classList.add("hidden");
});

filter.addEventListener("click",()=>{
  
  filterPopup.classList.remove("hidden");
});

const applyFilter=document.querySelector("#applyFilter");
applyFilter.addEventListener("click",()=>{
  const selectedOpt=document.querySelector('input[name="filterOption"]:checked').value;

  if(selectedOpt === "rating"){
    restaurants.sort((a,b)=>b.rating- a.rating);
  }
  else if(selectedOpt === "highLow"){
    restaurants.sort((a,b)=> b.Price_for_two - a.Price_for_two);

  }
  else if(selectedOpt === "costLowHigh"){
    restaurants.sort((a,b)=>a.Price_for_two - b.Price_for_two);
  }
  else if(selectedOpt === "distance"){
    restaurants.sort((a,b)=>a.distance_from_Customer_house - b.distance_from_Customer_house)
  }
  root.replaceChildren();
  getResturant(restaurants);
  filterPopup.classList.add("hidden");
});