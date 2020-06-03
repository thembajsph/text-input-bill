const billTypeInput = document.querySelector(".billTypeText");

const calculateAddBtn = document.querySelector(".addToBillBtn");

 const callSpanTotalElement = document.querySelector(".callTotalOne");

 const smsSpanTotalElement = document.querySelector(".smsTotalOne");

const globalTotalSpanElement = document.querySelector(".totalOne");

var totalOne = 0;
var smsTotalOne = 0;

var callTotalOne = 0;



function totalPhoneBill(billItem) {


var billStringItem = billItem;

if ( billStringItem === "sms") {
smsTotalOne += 0.75;

} 

else if (billStringItem === "call") {

 callTotalOne += 2.75;


} 


};


function styleTotalColor(roundedTotalOne)  {

const currentTotal = Number(roundedTotalOne);


globalTotalSpanElement.classList.remove("danger");
globalTotalSpanElement.classList.remove("warning");

//color the total based on the criteria
    if (currentTotal  > 50){
        // adding the danger class will make the text red
       globalTotalSpanElement.classList.add("danger");
    }
    else if (currentTotal > 30 && currentTotal < 50 ){
       globalTotalSpanElement.classList.add("warning");
    


} 

};


function calculateBtnClicked () {

var billItem = billTypeInput.value;


  const roundedBillTotal = totalPhoneBill(billItem);


var totalOne = callTotalOne + smsTotalOne;

//round to two decimals
var roundedTotalOne = totalOne.toFixed(2);

console.log(roundedTotalOne);


callSpanTotalElement.innerHTML = callTotalOne;  

smsSpanTotalElement.innerHTML = smsTotalOne;

//globalTotalSpanElement.innerHTML = totalOne;

    globalTotalSpanElement.innerHTML = roundedTotalOne;

    styleTotalColor(roundedTotalOne);

};

calculateAddBtn.addEventListener("click", calculateBtnClicked);





















