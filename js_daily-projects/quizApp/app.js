// const original_answer=["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan","11","Kapil Dev"];

const original_answer= {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q4: "Sachin Tendulkar",
    q5: "264",
    q6: "Muttiah Muralitharan",
    q7: "11",
    q8: "Kapil Dev",
}



const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    
    event.preventDefault();

    const data= new FormData(form);

    
    let result= 0
    for(let [key,value] of data.entries());
    {
        if(value === original_answer[key]){
            result++;
        }
    }
    const out= document.querySelector("#out");
    out.innerText=`${result} out of 7 correct.`;
    document.querySelector(".container").append(out);
    let resetBtn=document.createElement("button");
    

});