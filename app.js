let value=document.getElementById("value");
let slider=document.getElementById("Rate");
value.textContent=slider.value+"%";
slider.oninput=function(){
    value.textContent=this.value+"%";
}
function compute(){
    let amount=document.getElementById("Amount").value;
    let year=document.getElementById("Year").value;
    let rate=document.getElementById("Rate").value;
    let resultdeposite=document.getElementById("resultdeposite");
    let resultrate=document.getElementById("resultrate");
    let resultyear=document.getElementById("resultyear");
    let resultreceive=document.getElementById("resultreceive");
    let finalamount = document.getElementById("finalamount");
    let finalrate = document.getElementById("finalrate");
    let finalreceive = document.getElementById("finalreceive");
    let finalyear = document.getElementById("finalyear");
    if(amount<=0)
    alert("pls enter the position value");
    else{
    let calculate=(amount*year*rate)/100;
    var year1 = new Date().getFullYear()+parseInt(year);
    resultdeposite.innerHTML="if you deposite :";
    resultrate.innerHTML="at an interest rate of : ";
    resultreceive.innerHTML="you will receive an amount of :";
    resultyear.innerHTML="in the year :";
    finalamount.innerHTML = amount;
    finalrate.innerHTML=rate;
    finalreceive.innerHTML=calculate;
    finalyear.innerHTML=year1;
    finalamount.style.backgroundColor = "yellow";
    finalrate.style.backgroundColor = "yellow";
    finalreceive.style.backgroundColor = "yellow";
    finalyear.style.backgroundColor = "yellow";
    }
}