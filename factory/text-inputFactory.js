function textFactory() {
var totalOne =  0;
 
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

function allTogether() {
  return  totalOne =  callTotalOne + smsTotalOne
} 

function getSmsTotal() {
    return smsTotalOne;
};

function getCallTotal() {
    return callTotalOne;
};

//function total() {
  //  return totalOne;
//};

return {
    totalPhoneBill,
    allTogether,
getSmsTotal,
getCallTotal,
//total

}
};












