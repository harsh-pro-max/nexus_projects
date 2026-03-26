const jokeTypeEle=document.querySelector(".jokeType");
const setupEle=document.querySelector(".setup");
const punchlineEle=document.querySelector(".punchline");

const generateBtn=document.querySelector(".generateBtn");

const revealBtn=document.querySelector(".revealBtn");

async function jokeGenerator() {
    const url="https://official-joke-api.appspot.com/random_joke";

    try{
        const res=await fetch(url);

        // console.log(res);

        if (!res.ok) {
            throw new Error("joke not found");
        }

        const data=await res.json();

        return {
            punchline:data.punchline,
            setup:data.setup,
            jokeType:data.type,
        }

    }
    catch(err){
        console.log("errer is given",err);
        return null;
    }
}
// jokeGenerator();

generateBtn.addEventListener("click",async ()=>{
    const data=await jokeGenerator();
    setupEle.textContent=data.setup;
    jokeTypeEle.innerText=data.jokeType;
    punchlineEle.innerText=data.punchline;

});

revealBtn.addEventListener("click",()=>{
    
    punchlineEle.classList.remove("hidden"); 
});
