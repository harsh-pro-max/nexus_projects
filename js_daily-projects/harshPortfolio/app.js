// const { jsx } = require("react/jsx-runtime");

const skillsData = [
  {
    id: 1,
    name: "HTML",
    icon: ["fa-brands", "fa-html5", "iconCard"],
    category: "frontend"
  },
  {
    id: 2,
    name: "CSS",
    icon: ["fa-solid", "fa-css3-alt", "iconCard"],
    category: "frontend"
  },
  {
    id: 3,
    name: "JavaScript",
    icon: ["fa-brands", "fa-js", "iconCard"],
    category: "frontend"
  },
  {
    id: 4,
    name: "React",
    icon: ["fa-brands", "fa-react", "iconCard"],
    category: "frontend"
  },
  {
    id: 5,
    name: "Node.js",
    icon: ["fa-brands", "fa-node-js", "iconCard"],
    category: "backend"
  },
  {
    id: 6,
    name: "Express",
    icon: ["fa-brands", "fa-vuejs", "iconCard"],
    category: "backend"
  },
  {
    id: 7,
    name: "MongoDB",
    icon: ["fa-solid", "fa-database", "iconCard"],
    category: "database"
  },
  {
    id: 8,
    name: "Git",
    icon: ["fa-brands", "fa-square-git", "iconCard"],
    category: "tools"
  },
  {
    id: 9,
    name: "Problem Solving",
    icon: ["fa-solid", "fa-code", "iconCard"],
    category: "core"
  },
  {
    id:10,
    name:"C",
    icon: ["fa-solid","fa-c","iconCard"],
    category:"core"
  },
  {
    id:11,
    name:"Python",
    icon:["fa-brands","fa-python","iconCard"],
    category:"core"
  }
];

function skillShow(skillsData){
  const skillDiv=document.querySelector("#skills");

    skillsData.forEach(skill=> {
        const skillCard= document.createElement("div");
        skillCard.classList.add("skillCard")
        const iconEle=document.createElement("i");
        iconEle.classList.add(skill.icon[0]);
        iconEle.classList.add(skill.icon[1]);
        iconEle.classList.add(skill.icon[2]);


        const skillName=document.createElement("h3");
        skillName.classList.add("skillName");
        skillName.textContent=skill.name;

        const catagoryEle=document.createElement("p");
        catagoryEle.classList.add("category");
        catagoryEle.textContent=skill.category

        skillCard.appendChild(iconEle);
        skillCard.appendChild(skillName);
        skillCard.appendChild(catagoryEle);

        skillDiv.appendChild(skillCard);
    });
}

skillShow(skillsData);


const baseURL = "https://github.com/harsh-pro-max/nexus_projects/blob/main/js_daily-projects/";

const rawBaseURL = "https://raw.githubusercontent.com/harsh-pro-max/nexus_projects/main/js_daily-projects/";

const projectsData = [
  {
    id: 1,
    title: "Astrology Website",
    folder: "AstrologyWebsite",
    description: "Astrology prediction app based on user input like name and date of birth.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: baseURL + "AstrologyWebsite/README.md",
    hasLive: false,
    image: rawBaseURL+ "AstrologyWebsite/assets/demoVideo.gif",
    demo: baseURL + "AstrologyWebsite/assets/demoVideo.gif"
  },
  {
    id: 2,
    title: "Zomato Clone",
    folder: "zomatoClone",
    description: "Restaurant UI clone with filtering and card-based layout.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: baseURL + "zomatoClone/README.md",
    hasLive: false,
    image: rawBaseURL + "zomatoClone/assets/demoVideo.gif",
    demo: baseURL + "zomatoClone/assets/demoVideo.gif"
  },
  {
    id: 3,
    title: "News App",
    folder: "newsApp",
    description: "Fetches real-time news using API with search and filtering.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    githubLink: baseURL + "newsApp/README.md",
    hasLive: false,
    image: rawBaseURL + "newsApp/assets/demoVideo.gif",
    demo: baseURL + "newsApp/assets/demoVideo.gif"
  },
  {
    id: 4,
    title: "GitHub Fetch API",
    folder: "githubFetchApi",
    description: "Fetch and display GitHub user data dynamically.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    githubLink: baseURL + "githubFetchApi/README.md",
    hasLive: false,
    image:rawBaseURL + "githubFetchApi/assets/demoVideo.gif",
    demo: baseURL + "githubFetchApi/assets/demoVideo.gif"
  },
  {
    id: 5,
    title: "Quiz App",
    folder: "quizApp",
    description: "Dynamic quiz generator with score tracking.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: baseURL + "randomCricketQuiz/README.md",
    hasLive: false,
    image: rawBaseURL+"randomCricketQuiz/assets/demoVideo.gif",
    demo: baseURL + "randomCricketQuiz/assets/demoVideo.gif"
  },
  {
    id: 6,
    title: "Quotes Generator",
    folder: "quotesGenerator",
    description: "Generates random quotes using API.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    githubLink: baseURL + "quotesGenerator/README.md",
    hasLive: false,
    image: rawBaseURL+"quotesGenerator/assets/demoVideo.gif",
    demo: baseURL + "quotesGenerator/assets/demoVideo.gif"
  },
  {
    id: 7,
    title: "Tic Tac Toe",
    folder: "TicTacToe",
    description: "Classic tic tac toe game with win detection logic.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: baseURL + "TicTacToe/README.md",
    hasLive: false,
    image: rawBaseURL+"TicTacToe/assets/demoVideo.gif",
    demo: baseURL + "TicTacToe/assets/demoVideo.gif"
  },
  // {
  //   id:8,
  //   title:"AirBnb Clone",
  //   folder:""
  // }

];

function projectShow(projects){
    const projectsDiv=document.querySelector("#projects");

    projects.forEach((project)=>{
      
    // create card div
        const projectCard=document.createElement('div');

        projectCard.classList.add("projectCard");

    // cardDiv elements
      // first ele
        const projectTitle= document.createElement("div");
        projectTitle.classList.add("projectTitle");

        projectTitle.textContent=project.title;
      // second ele
        const projectImg=document.createElement("img");
        projectImg.classList.add("projectImg");
        projectImg.src=project.image;
        
      // third ele
        const description=document.createElement("p");
        description.classList.add("description");
        description.textContent=project.description;

      // fourth ele

        const techStack=document.createElement("p");
        techStack.classList.add("tech");

        const tech1=document.createElement("span");
        tech1.classList.add("techs");
        tech1.textContent=project.techStack[0];

        const tech2=document.createElement("span");
        tech2.classList.add("techs");
        tech2.textContent=project.techStack[1];
        
        const tech3=document.createElement("span");
        tech3.classList.add("techs");
        tech3.textContent=project.techStack[2];
        techStack.appendChild(tech1);
        techStack.appendChild(tech2);
        techStack.appendChild(tech3);

    // fifth ele
        const actionBtn=document.createElement("div");
        actionBtn.classList.add("actionBtn");

        const srcBtn=document.createElement("a");
        srcBtn.classList.add("srcBtn");
        srcBtn.textContent="Src Code";
        
        srcBtn.href=project.githubLink;
        srcBtn.target="_blank";
        
        // const liveBtn=document.createElement("a");
        // liveBtn.className="liveBtn hidden";
        // liveBtn.textContent="Live";
        


        

        // const demoBtn = document.createElement("a");

        // demoBtn.classList.add("demoBtn");
        // demoBtn.classList.add("hidden");

        // demoBtn.textContent = "Demo Video";
        // demoBtn.href = project.demo;
        // demoBtn.target = "_blank";

        actionBtn.appendChild(srcBtn);
        // actionBtn.appendChild(liveBtn);
        // actionBtn.appendChild(demoBtn);

    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectImg);
    projectCard.appendChild(description);
    projectCard.appendChild(techStack);
    projectCard.appendChild(actionBtn);

    projectsDiv.appendChild(projectCard);
        


    });
}

projectShow(projectsData);