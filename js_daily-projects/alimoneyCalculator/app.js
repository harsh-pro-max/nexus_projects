const calculateBtn=document.querySelector(".calBtn");
calculateBtn.addEventListener("click",function(event){
    event.preventDefault();
    const husbandSalary=Number(document.querySelector("#monSalry")?.value || 0);
    
    
    const wifeSalry=Number( document.querySelector("#wifeSalry")?.value || 0);

    
    const husbandLibility=Number( document.querySelector("#liability")?.value || 0);

    
    const wifeLiability=Number( document.querySelector("#wifeliablity")?.value || 0);

    const durationYear=Number( document.querySelector("#durationYear")?.value || 0);

    const chidrenCount=Number(document.querySelector("#noOfChild")?.value || 0);

    const childCustudy=Number(document.querySelector("#custudy")?.value || 0);

    const wifeContrubution=Number(document.querySelector("#wifeFactor")?.value || 0);
    
    const prospectorFactor=Number(document.querySelector("#prosectorFactor")?.value || 0);

    const livingStandard=Number(document.querySelector("#livingStandard")?.value || 0);

    const specialNeedMoney=Number(document.querySelector("#otherNeeds")?.value || 0);


    const netIncome= husbandSalary - husbandLibility;
    const baseMaintenance =netIncome * 0.30;

    let adjustedBase =baseMaintenance - wifeSalry;

    if(adjustedBase < 0){
        adjustedBase = 0;
    }
    const childrenCost= chidrenCount* 3000;

    let durationFactor = 0;

    if(durationYear < 3){
        durationFactor = 2000;
    }
    else if(durationYear < 7){
        durationFactor = 4000;
    }
    else if(durationYear < 15){
        durationFactor = 7000;
    }
    else{
        durationFactor = 10000;
    }
    const finalMaintenance = 
    adjustedBase + childrenCost+ 
    durationFactor + childCustudy+ 
    wifeContrubution+ prospectorFactor+
    livingStandard+specialNeedMoney;

    console.log("final value",finalMaintenance);
    const resultBox= document.querySelector(".result");
    resultBox.hidden= false;
    let resultShow= document.querySelector(".showResult");
    resultShow.innerHTML=`Predicted Alimony Amount by Men Helpline: ₹${finalMaintenance}`

});