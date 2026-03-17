const cricketQuestions = [
  {
    question: "Who is known as the God of Cricket?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Brian Lara"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "How many players are there in one cricket team on the field?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "Which country won the 2019 ICC Cricket World Cup?",
    options: ["India", "England", "Australia", "New Zealand"],
    answer: "England"
  },
  {
    question: "What is the length of a cricket pitch?",
    options: ["20 yards", "21 yards", "22 yards", "24 yards"],
    answer: "22 yards"
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "What is the maximum number of overs in a T20 innings?",
    options: ["10", "15", "20", "25"],
    answer: "20"
  },
  {
    question: "Which Indian captain won the 2007 T20 World Cup?",
    options: ["Virat Kohli", "MS Dhoni", "Sourav Ganguly", "Kapil Dev"],
    answer: "MS Dhoni"
  },
  {
    question: "Which player scored 400 runs in a single Test innings?",
    options: ["Sachin Tendulkar", "Brian Lara", "Virender Sehwag", "Don Bradman"],
    answer: "Brian Lara"
  },
  {
    question: "What does LBW stand for?",
    options: ["Long Ball Wicket", "Leg Before Wicket", "Leg By Wicket", "Line Ball Wicket"],
    answer: "Leg Before Wicket"
  },
  {
    question: "Which country has won the most ODI World Cups?",
    options: ["India", "West Indies", "Australia", "England"],
    answer: "Australia"
  },
  {
    question: "What is it called when a bowler takes three wickets in three balls?",
    options: ["Triple", "Hat-trick", "Super spell", "Golden over"],
    answer: "Hat-trick"
  },
  {
    question: "Which cricketer is called 'The Wall'?",
    options: ["Rahul Dravid", "VVS Laxman", "Sourav Ganguly", "Virat Kohli"],
    answer: "Rahul Dravid"
  },
  {
    question: "How many runs are awarded for hitting the ball over the boundary without bouncing?",
    options: ["4", "5", "6", "7"],
    answer: "6"
  },
  {
    question: "Which format of cricket lasts up to five days?",
    options: ["T20", "ODI", "Test", "The Hundred"],
    answer: "Test"
  },
  {
    question: "Which Indian bowler took 10 wickets in a single Test innings?",
    options: ["Kapil Dev", "Anil Kumble", "Zaheer Khan", "Jasprit Bumrah"],
    answer: "Anil Kumble"
  },
  {
    question: "Which country hosted the 2011 Cricket World Cup final?",
    options: ["India", "Sri Lanka", "Bangladesh", "Pakistan"],
    answer: "India"
  },
  {
    question: "Who is known as the 'Universe Boss'?",
    options: ["Chris Gayle", "Andre Russell", "AB de Villiers", "Kieron Pollard"],
    answer: "Chris Gayle"
  },
  {
    question: "How many balls are there in one over in international cricket?",
    options: ["5", "6", "7", "8"],
    answer: "6"
  },
  {
    question: "Which stadium is known as the largest cricket stadium in the world?",
    options: ["MCG", "Eden Gardens", "Narendra Modi Stadium", "Lords"],
    answer: "Narendra Modi Stadium"
  },
  {
    question: "Which Indian player is known as 'Hitman'?",
    options: ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Hardik Pandya"],
    answer: "Rohit Sharma"
  }
];


function randomQuestion(){
  const data = new Set();
  // set select only unique question not reapet 

  while(data.size!=5){
    const index = Math.floor(Math.random()*20);
    data.add(cricketQuestions[index]);
  }
  // return data;
  return [...data];
}
// console.log(randomQuestion());

const form = document.querySelector("form");
console.dir(form);

const problem = randomQuestion();
console.log(problem);

// created mt set key , value
const original_answer={};



problem.forEach((obj,index)=>{

  console.log(obj);
  // creating div
  const div_element= document.createElement('div');
  div_element.className='question';
  // key value added 
  original_answer[`q${index+1}`]= obj['answer'];

  
  // cleating quetion and option in a div
  const para=document.createElement('p');
  para.textContent = `${index + 1}. ${obj.question}`;
  // console.log(para);
  div_element.appendChild(para);
  // para is question and in para 4 options creating
  obj['options'].forEach((opt)=>{

    const label= document.createElement('label');
    const input= document.createElement('input');
    
    input.type="radio";
    input.name=`q${index+1}`;
    input.value=opt;
    // console.log(opt);

    label.appendChild(input);
    label.appendChild(document.createTextNode(opt));

    div_element.appendChild(label);
    div_element.appendChild(document.createElement('br'));
    
  });

  form.appendChild(div_element);

});

const button = document.createElement('button');
  button.type='submit';
  button.className='submit-btn';
  button.textContent="Submit";

  form.appendChild(button);

const resetBtn= document.createElement('button');
resetBtn.className='reset-btn';
resetBtn.type='reset';
resetBtn.textContent="Reset";

form.appendChild(resetBtn);


// submited form check

 form.addEventListener('submit',(event)=>{
     
    event.preventDefault();
    const data = new FormData(form);

  
    let result = 0
 
    for(let [key,value] of data.entries())
    {
     if(value===original_answer[key])
         result++;

    // console.log(value);
    // console.log(original_answer[key]);
    }

 
    const out = document.getElementById('out');
    out.innerText = `${result} out of 5 is correct`;
 
 
    // form.reset();
 
 });


