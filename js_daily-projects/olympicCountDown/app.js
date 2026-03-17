function timeShow(){
    const displayTime= document.querySelector('h2');
    let date1= new Date();
    console.log(date1);
    let date2=new Date("2028-07-14T00:00:00");
    // console.log(date2);

    const date = date2-date1;

    const days = Math.floor(date/(1000*60*60*24));
    // console.log(days)

    const hour = Math.floor((date/(1000*60*60))%24);
    // console.log(hour);

    const minute = Math.floor((date/(1000*60))%60);
    // console.log(minute);
    const second = Math.floor((date/(1000))%60);
    // console.log(second);

    displayTime.innerText=`${days} : ${hour} : ${minute} : ${second}`
}

function birthday(){
    let birthdayShow= document.querySelector("#birthShow");
    const current= new Date();
    const birthday = new Date("2026-07-15T00:00:00");
    const date=birthday-current;
    // console.log(date)

    const days = Math.floor(date/(1000*60*60*24));
    const hour = Math.floor((date/(1000*60*60))%24);
    const minute = Math.floor((date/(1000*60))%60);
    const second = Math.floor((date/(1000))%60);

    birthdayShow.innerText=`${days} : ${hour} : ${minute} : ${second}`;
}
setInterval(birthday,1000);
setInterval(timeShow,1000);