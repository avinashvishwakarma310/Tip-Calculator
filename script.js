let calc = document.querySelector("#calculate");

calc.addEventListener("click", () => {

    let totalBill = document.querySelector("#totalBill").value;
    let tipPercent = document.querySelector("#inputGroupSelect01").value;
    let split = document.querySelector("#split").value;


    //validate
    if(totalBill === "" || tipPercent== 0 || split== 0){
        alert("Please enter valid values!");
        return;
    }


    //calculate
    let total = (totalBill* tipPercent)  / split;
    total = total.toFixed(2); // tofixed küsurat yuvarlar, (2) ise noktadan sonra kaç hane göstermek istediğimiz.

    document.querySelector(".totalTip").style.display = "block"; /* totaltip veri girildiğinde görünecek*/
    document.getElementById("tip").innerHTML = total;
    
});