const ageSelect = document.querySelector("#age");

for (let i = 18; i <= 60; i++) {

    const option = document.createElement("option");

    if (i < 30) {
        option.value = 65000;
    } 
    else if (i < 40) {
        option.value = 100000;
    } 
    else {
        option.value = 50000;
    }

    option.textContent = i;

    ageSelect.appendChild(option);
}

let calculateBtn = document.querySelector("#calculate");

calculateBtn.addEventListener("click", function(e) {

    e.preventDefault();  

    const ageValue = Number(document.querySelector("#age")?.value || 0);
    const professionValue = Number(document.querySelector("#profession")?.value || 0);
    const salaryValue = Number(document.querySelector("#salary").value);

    const educationValue = Number(document.querySelector("#education")?.value || 0);
    const expenseValue = Number(document.querySelector("#expense").value);

    const maritalValue =
    Number(document.querySelector('input[name="marital"]:checked')?.value || 0);

    const homeValue =
    Number(document.querySelector('input[name="home"]:checked')?.value || 0);

    const carValue =
    Number(document.querySelector('input[name="car"]:checked')?.value || 0);

    const locationValue=Number(document.querySelector('input[name="location"]:checked')?.value || 0);

    // console.log("Age:", ageValue);
    // console.log("Profession:", professionValue);
    // console.log("Salary:", salaryValue);
    // console.log("Education:", educationValue);
    // console.log("Expense:", expenseValue);
    // console.log("Marital:", maritalValue);
    // console.log("Home:", homeValue);
    // console.log("Car:", carValue);
    // console.log("location",locationValue);

    const calDowry=ageValue+professionValue+ (salaryValue * 12 * 0.2) + educationValue + (expenseValue * 1.5)+ maritalValue+ homeValue+ carValue+ locationValue;
    console.log(calDowry);

    let showDowryResult=document.querySelector(".dowryCal");
    showDowryResult.hidden= false;
    const result=document.querySelector(".result");
    result.innerHTML=`&#8377;`+calDowry; 
});

