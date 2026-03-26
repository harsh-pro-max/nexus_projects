const images = document.querySelectorAll(".first img");
let index = 0;

// first image active
images[0].classList.add("active");

setInterval(() => {
    images[index].classList.remove("active");

    index = (index + 1) % images.length;

    images[index].classList.add("active");
}, 3000);

const products = [
  {
    id: 1,
    title: "Buy Gemstones",
    description: "Best quality gemstones with assurance of AstroSage.com",
    image: "./assets/gemstones.png",
    buttonText: "BUY NOW"
  },
  {
    id: 2,
    title: "Buy Yantras",
    description: "Take advantage of Yantra with assurance of AstroSage.com",
    image: "./assets/yantras.png",
    buttonText: "BUY NOW"
  },
  {
    id: 3,
    title: "Buy Feng Shui",
    description: "Bring Good Luck to your Place with Feng Shui from AstroSage.com",
    image: "./assets/feng.png",
    buttonText: "BUY NOW"
  },
  {
    id: 4,
    title: "Buy Rudraksh",
    description: "Best quality Rudraksh with assurance of AstroSage.com",
    image: "./assets/rudraksh.png",
    buttonText: "BUY NOW"
  }
];
const secondDiv=document.querySelector(".second");

products.forEach((item)=>{
    console.log(item);
    
    const productTitle= document.createElement("h3");
    productTitle.className="product-title";
    productTitle.textContent=item.title;

    const productBody=document.createElement("div");
    productBody.className="product-body";
    
    const productImg=document.createElement("img");
    productImg.src=item.image;
    
    
    const productDiv=document.createElement("div");
    productDiv.className="product-card";
    const productPara=document.createElement("p");
    productPara.className="product-desc";
    productPara.textContent=item.description;

    const buyBtn=document.createElement("button");
    buyBtn.className="buy-btn";
    buyBtn.textContent=item.buttonText;

    productDiv.appendChild(productPara);
    productDiv.appendChild(buyBtn);

    productBody.appendChild(productImg);
    productBody.appendChild(productDiv);

    secondDiv.appendChild(productTitle);
    secondDiv.appendChild(productBody);
});


// predictions data
const ageGroupPredictions = {
  child: [
    "You will grow with strong learning ability.",
    "You will perform well in studies.",
    "You will develop creativity early.",
    "You will become confident with time.",
    "You will enjoy learning new skills."
  ],

  adult: [
    "You will grow steadily in your career.",
    "You will achieve financial stability.",
    "You will build strong professional skills.",
    "You will overcome challenges logically.",
    "You will become independent and successful."
  ],

  senior: [
    "You will live a peaceful life.",
    "You will guide others with your wisdom.",
    "You will maintain balance in life.",
    "You will enjoy meaningful relationships.",
    "You will gain respect in your surroundings."
  ]
};


const genderPredictions = {
  male: [
    "You will develop strong leadership qualities.",
    "You will take bold decisions in life.",
    "You will focus on building your career.",
    "You will become mentally strong.",
    "You will handle responsibilities effectively."
  ],

  female: [
    "You will achieve balance in personal and professional life.",
    "You will develop strong emotional intelligence.",
    "You will grow with confidence and independence.",
    "You will inspire others around you.",
    "You will create meaningful relationships."
  ]
};


const timePredictions = [
  "Your early decisions will shape your future.",
  "Your patience will bring success.",
  "Your timing in life will be important.",
  "You will get opportunities at the right time.",
  "You will succeed through consistent effort.",
  "You will achieve growth step by step.",
  "Your discipline will define your success.",
  "You will build strong habits.",
  "You will gain clarity over time.",
  "Your actions will shape your destiny."
];

const generalPredictions = [
  "You will achieve something big in life.",
  "You will grow stronger with challenges.",
  "You will create your own opportunities.",
  "You will build a stable future.",
  "You will improve continuously.",
  "You will gain confidence through action.",
  "You will reach your goals step by step.",
  "You will develop strong skills.",
  "You will stand out from others.",
  "You will succeed with consistency."
];

const recommendations = [
  "Focus on your daily routine.",
  "Avoid distractions.",
  "Improve your discipline.",
  "Practice consistently.",
  "Stay focused on your goals.",
  "Take care of your health.",
  "Think before making decisions.",
  "Learn from your mistakes.",
  "Stay calm in tough situations.",
  "Keep improving daily."
];


const form= document.querySelector("form");

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  const name= document.querySelector("#name").value ;

  const gender= document.querySelector("#gender").value ;

  const dateDay= Number(document.querySelector("#day").value );

  const dateMonth=Number(document.querySelector("#month").value );

  const dateYear=Number(document.querySelector("#year").value );

  const timeHour=Number(document.querySelector("#hour").value );
  
  const timeMinute=Number(document.querySelector("#minute").value );

  const timeSecond=Number(document.querySelector("#second").value );

  const age= Number(document.querySelector("#age").value );

  let ageGroup;
  
  if(age<=18) ageGroup="child";
  else if(age <= 50) ageGroup="adult";
  else ageGroup = "senior";

  const ageData= ageGroupPredictions[ageGroup];

  const genderData= genderPredictions[gender];

  const baseCalculation= dateDay + dateMonth + dateYear+ timeHour+ timeMinute+ timeSecond;

  const ageIndex= baseCalculation % ageData.length;
  
  const genderIndex= baseCalculation % genderData.length;

  const timeIndex= baseCalculation %timePredictions.length;

  const generalIndex= baseCalculation % generalPredictions.length;

  const recIndex= baseCalculation % recommendations.length;




  const resultBox=document.querySelector(".resultBox");
  const resultPara= document.createElement("p");
  resultPara.className="result";
  
  
  const finalResult= `
  welcome ${name} to  astrology prediction. 
  ${ageData[ageIndex]}
  ${genderData[genderIndex]}
  ${timePredictions[timeIndex]}
  ${generalPredictions[generalIndex]}
  Recommendations for You: ${recommendations[recIndex]} 
  `;

  resultPara.textContent=finalResult;
  resultBox.appendChild(resultPara);

  // resultPara style 
  resultPara.style.border="1px solid black";
  resultPara.style.fontSize="1.2rem";
  resultPara.style.marginLeft="2.5rem";
  resultPara.style.marginRight="2.5rem";
  resultPara.style.marginBottom="1rem";


  console.log(name,gender,dateDay,dateMonth,dateYear,timeHour,timeMinute,timeSecond,age);
});

