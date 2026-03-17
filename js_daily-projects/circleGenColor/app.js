document.body.addEventListener("click", (event)=>{
  
  const circle = document.createElement('div');
  circle.className = 'circle';
  
  
  const x = event.clientX;
  const y = event.clientY;

  circle.style.left = `${x-25}px`
  circle.style.top= `${y-25}px`


  const color = ["red", "blue", "orange", "green","purple", "white","yellow", "wheat"];
  
  let idx=Math.floor(Math.random()*color.length)
  circle.style.backgroundColor = color[idx];
  circle.textContent=`${color[idx]}`;
  document.body.appendChild(circle);

  setTimeout(()=>{
    circle.remove();
  } ,5000)
});
