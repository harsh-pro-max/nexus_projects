const avatarImgEle= document.querySelector(".avatar");
const nameEle= document.querySelector("#name");
const userId=document.querySelector("#userId");
const userBio=document.querySelector("#bio");
const followersEle= document.querySelector(".followers")
const searchBtn=document.querySelector("#search");
const edidBtn= document.querySelector("#edit");

searchBtn.addEventListener("click",()=>{
    const repoContainer = document.querySelector(".repoContainer");
    repoContainer.innerHTML = ""; // ✅ RESET
    showProfile();
});

async function showProfile(){
    const userData=await fetchGithubData();
    avatarImgEle.setAttribute("src",`${userData.avatar_url}`);
    nameEle.innerText=userData.name;
    userId.innerText=userData.userName;
    userBio.innerText=userData.userBio;
    followersEle.innerHTML=`<i class="fa-solid fa-users"></i>  ${userData.followers}      Followers  ${userData.following}  Following`;
    edidBtn.classList.remove("disable");
    avatarImgEle.classList.remove("disable");

    const reposData=await reposFetch(userData.repo_urls);

    reposeShowData(reposData);

}

const repoSection=document.querySelector(".repoSection");

const repoTitle=document.querySelector(".repoTitle");

function reposeShowData(repos) {
    console.log(repos);
    repoSection.classList.remove("disable");
    repoTitle.classList.remove("disable");

    const repoContainer=document.querySelector(".repoContainer");

    for(let i=0;i<repos.length;i++){
        // repoCard div
        const repoCard= document.createElement("div");
        repoCard.className="repoCard";

        // repoTop div
        const repoTop=document.createElement("div");
        repoTop.className="repoTop";
        // repoTop div elements
        
        const repoName=document.createElement("h3");
        repoName.className="repoName";
        repoName.innerText=repos[i].name;
        
        const publicBtn=document.createElement("span");
        publicBtn.className="publicBtn";
        publicBtn.innerText=repos[i].visibility;
        // append in repoTop div
        repoTop.appendChild(repoName);
        repoTop.appendChild(publicBtn);
        

        const repoDesc=document.createElement("p");
        repoDesc.className="repoDesc";
        repoDesc.innerText=repos[i].description;

        
        // repo bottom div
        const repoBottom=document.createElement("div");
        repoBottom.className="repoBottom";
        
        // bottom div element for append
        const language=document.createElement("span");
        language.className="language";
        language.innerText=repos[i].language;

        const lastUpdate=document.createElement("span");
        lastUpdate.className="lastUpdate";
        const days = Math.floor((Date.now() - new Date(repos[i].updated_at)) / (1000 * 60 * 60 * 24));

        lastUpdate.innerText=`${days} days ago`;

        // append element in repoBottom div
        repoBottom.appendChild(language);
        repoBottom.appendChild(lastUpdate);

        // append in repoCard
        repoCard.appendChild(repoTop);
        repoCard.appendChild(repoDesc);
        repoCard.appendChild(repoBottom);
        // append all element in main container
        repoContainer.appendChild(repoCard);
    
        
    }
    
}


async function reposFetch(url){
    try{
        const res=await fetch(url);
        // console.log(res);

        if(!res.ok){
            throw new Error("github repose not fetch");
        }

        const data=await res.json();
        // console.log(data);
        return data;
    }
    catch(err){
        console.log("error is given",err);
        return null
    }
}

async function fetchGithubData(){
    const searchInp=document.querySelector("#searchInp").value;
    const url=`https://api.github.com/users/${searchInp}`;

    try{
        const res= await fetch(url);
        console.log(res);
        if(!res.ok){
            throw new Error("profile not found");
        }
        const data= await res.json();
        console.log(data,data.repos_url);

        return {
            avatar_url:data.avatar_url,
            name:data.name,
            userName:data.login,
            userBio:data.bio,
            followers:data.followers,
            following:data.following,
            repo_urls:data.repos_url,
        }
    }
    catch(err){
        console.log("error is here:",err);
        return null;
    }
}

fetchGithubData();