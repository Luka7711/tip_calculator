function tipCalc(){
    var billAmount = document.getElementById("bill__amount").value;
    var tipAmount = document.getElementById("tip__amount").value;
    var numOfPeople = document.getElementById("people").value;
  

    if(billAmount === "" || tipAmount === 0){
        alert("Please enter value");
      
    }

    if(numOfPeople === "" || numOfPeople <=1){
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }

    var total = (billAmount*tipAmount)/numOfPeople;
    total = Math.floor(total);
    document.getElementById("summary").style.display = "block";
    document.getElementById("tip").innerHTML = total + "$";
}

 

    document.getElementById("summary").style.display ="none";
    document.getElementById("each").style.display = "none";

    document.getElementById("btn").addEventListener("click", function(){
        tipCalc();
    });
 

