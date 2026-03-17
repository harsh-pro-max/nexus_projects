// Generate a basic insight based on DOB

const zodiacSigns = [
    "Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"
];

// 31 compliments by based on date
const compliments = [
  "You have a very sharp mind.",
  "Your consistency is impressive.",
  "You think deeper than most people.",
  "You have strong problem-solving ability.",
  "Your focus level is rare.",
  "You are improving faster than you realize.",
  "You have a natural learning instinct.",
  "Your discipline is becoming your strength.",
  "You don't quit easily — that's powerful.",
  "You handle challenges logically.",
  "You are building real skills, not just knowledge.",
  "Your curiosity is your biggest asset.",
  "You are becoming more precise in thinking.",
  "You understand concepts instead of memorizing.",
  "Your effort is visible in your work.",
  "You are developing strong technical clarity.",
  "You are getting better at structuring problems.",
  "You have good attention to detail.",
  "You are learning from your mistakes properly.",
  "You are becoming more confident through action.",
  "You think before you act — that’s rare.",
  "You are building a strong foundation.",
  "You stay consistent even when it’s hard.",
  "You are improving your logical reasoning daily.",
  "You are not afraid of complex problems.",
  "You are developing real-world thinking.",
  "You are getting sharper with practice.",
  "You are becoming more efficient with time.",
  "You take learning seriously.",
  "You are building something meaningful.",
  "You are on the right track — keep executing."
];

// victim card compliments size 20
const victimCompliments = [
  "You always give your best to others, even when it’s not returned.",
  "You help people without expecting anything, and that’s rare.",
  "You care deeply, even when people don’t notice it.",
  "You stay kind, even when others don’t treat you the same.",
  "You put others first, even when you are struggling yourself.",
  "You keep supporting people who don’t always support you back.",
  "You understand others, even when no one understands you.",
  "You give your time and energy selflessly.",
  "You try to keep everyone happy, even at your own cost.",
  "You don’t give up on people, even when they give up on you.",
  "You are always there for others, even when you feel alone.",
  "You forgive easily, even when you’ve been hurt.",
  "You stay loyal, even when people don’t value it.",
  "You carry more than you show to others.",
  "You keep going, even when no one appreciates your effort.",
  "You stay strong for others, even when you need support.",
  "You give without counting, even when others do.",
  "You stay patient, even when people test your limits.",
  "You keep believing in people, even after being disappointed.",
  "You handle everything quietly without expecting recognition."
];

// recommendations size 30
const recommendations = [
  "Feed a street dog today.",
  "Offer water to birds or animals nearby.",
  "Call your parents and talk for a few minutes.",
  "Help someone without expecting anything in return.",
  "Spend 10 minutes in silence and observe your thoughts.",
  "Write down 3 things you are grateful for.",
  "Avoid complaining for one full day.",
  "Give a genuine compliment to someone.",
  "Drink enough water and take care of your health.",
  "Help a stranger if you get a chance.",
  "Donate old clothes you no longer use.",
  "Take a short walk without your phone.",
  "Forgive someone you’ve been holding grudges against.",
  "Learn something new today, even if it’s small.",
  "Reduce your screen time for a few hours.",
  "Organize your workspace or room.",
  "Say thank you more often today.",
  "Spend time with nature, even if it’s just 5 minutes.",
  "Listen carefully when someone is speaking.",
  "Avoid negative self-talk for the day.",
  "Read a few pages of a good book.",
  "Share food with someone in need.",
  "Help a friend who is struggling.",
  "Do one task you’ve been avoiding.",
  "Smile more and spread positive energy.",
  "Respect your time and others’ time.",
  "Take responsibility for your actions today.",
  "Practice patience in difficult situations.",
  "Encourage someone who feels low.",
  "Reflect on your day before sleeping."
];

// predictions size 20
const predictions = [
  "You will achieve financial stability sooner than expected.",
  "You will become very successful in your career.",
  "You will attract great opportunities in the coming time.",
  "You will build a strong and respected identity.",
  "You will achieve something big that people will admire.",
  "You will overcome your current struggles with strength.",
  "You will gain clarity and direction in life.",
  "You will create a life others will look up to.",
  "You will earn more than you currently imagine.",
  "You will become more confident and fearless.",
  "You will build meaningful and strong relationships.",
  "You will reach a position of influence and respect.",
  "You will master skills that set you apart.",
  "You will turn your ideas into reality.",
  "You will experience personal growth rapidly.",
  "You will become known for your discipline.",
  "You will achieve goals that once felt impossible.",
  "You will create financial abundance for yourself.",
  "You will live a balanced and fulfilling life.",
  "You will become a crorepati with consistent effort."
];

const form = document.querySelector("#astroForm");

form.addEventListener('submit',(event)=>{

    event.preventDefault();
    
    const Name=document.querySelector("#name").value;

    const surName= document.querySelector("#surname").value;

    const day = Number(document.querySelector("#day").value);
    const month = Number(document.querySelector("#month").value);
    const year =Number( document.querySelector("#year").value);

    const result= document.querySelector("#result");
    // result.innerText=`hallo harsh kushwaha`;
    const first_message= `Hello ${Name} ${surName}`;
    
    const second_message= `Your Zodiac sign is ${zodiacSigns[month-1]} `;
    const third_message=compliments[day-1];
    
    let index=Math.floor(Math.random() * 20);
    const fourth_message= victimCompliments[index];

    index=(Name.length * surName.length * year)%30;
    const fifth_message = recommendations[index];

    index= (day * month * year)%20;
    const sixth_message = predictions[index];

    
    result.innerText= `
    ${first_message} ${second_message}  ${third_message} ${fourth_message} Our Reccomendation for you: ${fifth_message} Your Future Prediction is: ${sixth_message} `;

    result.style.display ="block";

    // console.log(Name,surName,day,month,year,result);
});