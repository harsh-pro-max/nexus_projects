
async function showNewsCards(search ="india"){
    const articles= await fetchNewsData(search);
    const root=document.querySelector(".root");
    root.replaceChildren();

    articles.forEach((article)=>{
        console.log(article);

        // creating news card div
        const newsCard=document.createElement("article");
        newsCard.className="news-card";

        // creating image div
        const imageDiv=document.createElement("div");
        imageDiv.className="news-card__image-wrapper";
        
        // creating img element
        const img=document.createElement("img");
        img.className="news-card__image";
        
        img.src = article.image || "./assets/harsh.png";
        img.onerror = () => {
            img.src = "./assets/harsh.png";
        };

        
        imageDiv.appendChild(img);

        // content section
        const newsContent=document.createElement("div");
        newsContent.className="news-card__content";

        const newsTitle=document.createElement("h2");
        newsTitle.classList.add("news-card__title");

        newsTitle.textContent=article.title;

        

        // creating meta div
        const card_meta=document.createElement("div");
        card_meta.classList.add("news-card__meta");

        const newsSource=document.createElement("span");
        newsSource.classList.add("news-card__source");

        newsSource.textContent=article.source.name;

        

        // dot element
        const dot=document.createElement("span");
        dot.classList.add("news-card__dot");

        dot.textContent="•";

        

        // news card time
        const newsDate=document.createElement("span");
        newsDate.classList.add("news-card__time");

        newsDate.textContent = new Date(article.publishedAt).toLocaleString();

        // meta data append
        card_meta.appendChild(newsSource);
        card_meta.appendChild(dot);
        card_meta.appendChild(newsDate);

        const newsDesc=document.createElement("p");
        newsDesc.classList.add("news-card__description");
        newsDesc.textContent=article.description;


        const newsActions=document.createElement("div");
        newsActions.classList.add("news-card__actions");
        
        const newsLink=document.createElement("a");
        newsLink.classList.add("news-card__link");
        newsLink.href=article.source.url;
        newsLink.target = "_blank";
        newsLink.innerText="Read more...";

        newsActions.appendChild(newsLink);

        // append in news title in newsCard
        newsContent.appendChild(newsTitle);
        newsContent.appendChild(card_meta);
        newsContent.appendChild(newsDesc);
        newsContent.appendChild(newsActions);

        newsCard.appendChild(imageDiv);
        newsCard.appendChild(newsContent);

        root.appendChild(newsCard);

    });
}
showNewsCards();
// fetchNewsData();

async function fetchNewsData(search){

    const url = `https://gnews.io/api/v4/search?q=${search}&lang=en&max=50&apikey=7ab490adb0a1456a400effce58b4b518&_=` + Date.now();

    try{
        const res=await fetch(url);
        console.log(res);
        
        if(!res.ok){
            throw new Error("fetching data is failed");
        }
        const data= await res.json();
        console.log(data.articles);
        return data.articles;
    }
    catch(err){
        console.log("error is ditected",err);
        return [];
    }
}


// fetchNewsData();

const searchInp=document.querySelector("#searches");
searchInp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const searchValue = e.target.value.trim();
        if (!searchValue) return;

        showNewsCards(searchValue); // FIXED
        searchInp.textContent="";
    }
});


// const headLinks=document.querySelector(".headLinks");
// headLinks.addEventListener("click",(e)=>{
//     e.preventDefault();
//     const searchValue=e.target.text;
    
//     showNewsCards(searchValue);
    
// });

const headLinks = document.querySelector(".headLinks");

headLinks.addEventListener("click", (e) => {
    e.preventDefault();

    const target = e.target.closest("a"); // important

    if (!target) return;

    const searchValue = target.textContent.trim();

    showNewsCards(searchValue);
});
