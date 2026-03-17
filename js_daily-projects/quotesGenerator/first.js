const quotes = [
  "Discipline is choosing what you want most over what you want now.",
  "Small improvements compound into remarkable results.",
  "Focus on systems, not goals.",
  "Clarity beats motivation.",
  "Consistency builds identity.",
  "You don’t rise to the level of your goals; you fall to the level of your habits.",
  "Deep work creates rare value.",
  "Execution separates ideas from results.",
  "Hard choices create an easy life.",
  "Comfort is the enemy of progress.",
  "Learn the rules, then master the exceptions.",
  "Your environment shapes your behavior.",
  "Skill is built through deliberate practice.",
  "Action reduces anxiety.",
  "Time magnifies either discipline or regret.",
  "Precision creates confidence.",
  "Repetition wires the brain.",
  "Avoid distraction; pursue depth.",
  "Preparation eliminates fear.",
  "Ownership builds authority.",
  "Growth demands discomfort.",
  "Focus is a competitive advantage.",
  "Start before you feel ready.",
  "Measure what matters.",
  "Results respect effort."
];


function quotesShow(){
    let para=document.querySelector("#quote");
    let index=Math.floor(Math.random()* quotes.length);

    para.innerText=quotes[index];

}
// quotesShow();
// setInterval(quotesShow,2000);
let quoBtn=document.querySelector(".quoBtn");
quoBtn.addEventListener("click",()=>{
    quotesShow();
});

//  Chnage the background color in every 5 second
function bodyColor(){
    let red=Math.floor(Math.random()* 255);
    let blue=Math.floor(Math.random()* 255);
    let green=Math.floor(Math.random()* 255);
    let body=document.querySelector("body");
    let heading=document.querySelector("h1");
    body.style.backgroundColor=`rgb(${red},${green},${blue})`;
    heading.style.color=`rgb(${red},${green},${blue})`;
    let heading2=document.querySelector("h2");
    heading2.innerText=`rgb(${red},${green},${blue})`;

}
// setInterval(bodyColor,3000);
let changeColor=document.querySelector(".changeColor");
changeColor.addEventListener("click",(event)=>{
    console.log(event.key);
    bodyColor();
});