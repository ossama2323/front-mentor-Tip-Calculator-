function calculer_tip_amount(element){
    let bill = document.getElementById("bill").value;
    let perssones = document.getElementById("perssones").value;
    let tip_resultat = document.getElementById('tip_resultat');
    let total_resultat = document.getElementById('total_resultat');
    if(bill == NaN){
        alert("please enter a number");
    }else if(perssones == NaN){
        alert("please enter a number");
    }else if(perssones == 0){
        document.querySelector(".number-people").classList.remove("d-none");
        document.querySelector("#perssones").classList.add("number-people-err");
    }else{
        let tip = (bill * (parseInt(element.textContent)/100)) / perssones;
        tip_resultat.innerText = tip.toFixed(2);
    
        let total = (bill / perssones) + tip;
        total_resultat.innerText = total.toFixed(2)
        document.querySelector(".number-people").classList.add("d-none");
        document.querySelector("#perssones").classList.remove("number-people-err");
    }
}


function input_tip(element){
    let bill = document.getElementById("bill").value;
    let perssones = document.getElementById("perssones").value;
    let tip_resultat = document.getElementById('tip_resultat');
    let total_resultat = document.getElementById('total_resultat');
    if(bill == NaN){
        alert("please enter a number");
    }else if(perssones == NaN){
        alert("please enter a number");
    }else if(perssones == 0){
        document.querySelector(".number-people").classList.remove("d-none");
        document.querySelector("#perssones").classList.add("number-people-err");
    }else{
        let tip = (bill * (parseInt(element.value)/100)) / perssones;
        tip_resultat.innerText = tip.toFixed(2);
    
        let total = (bill / perssones) + tip;
        total_resultat.innerText = total.toFixed(2);
        document.querySelector(".number-people").classList.add("d-none");
        document.querySelector("#perssones").classList.remove("number-people-err");
    }

}

function reset(){
    let bill = document.getElementById("bill");
    let perssones = document.getElementById("perssones");
    let tip_resultat = document.getElementById('tip_resultat');
    let total_resultat = document.getElementById('total_resultat');
    let tipc = document.getElementById("tipc");

    tip_resultat.innerText = "0.00";
    total_resultat.innerText = "0.00";
    tipc.value = "";
    bill.value = "";
    perssones.value = "";
    document.querySelector(".number-people").classList.add("d-none");
    document.querySelector("#perssones").classList.remove("number-people-err");
}
