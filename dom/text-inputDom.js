const billTypeInput = document.querySelector(".billTypeText");

const calculateAddBtn = document.querySelector(".addToBillBtn");

 const callSpanTotalElement = document.querySelector(".callTotalOne");

 const smsSpanTotalElement = document.querySelector(".smsTotalOne");

const globalTotalSpanElement = document.querySelector(".totalOne");


var textInputInstance = textFactory();

function calculateBtnClicked() {

    var billItem = billTypeInput.value;
    
  //  totalone = callTotalOne + smsTotalOne 
  //    var roundedTotalOne =  textInputInstance.totalPhoneBill(billItem);
     // styleTotalColor(roundedTotalOne);
    
   
    
 





 
    callSpanTotalElement.innerHTML = textInputInstance.getCallTotal().toFixed(2);  
    
    smsSpanTotalElement.innerHTML = textInputInstance. getSmsTotal().toFixed(2);
    
    globalTotalSpanElement.innerHTML = textInputInstance.allTogether().toFixed(2);
    
        
        styleTotalColor();
       
    
    };

calculateAddBtn.addEventListener("click", calculateBtnClicked);



function styleTotalColor()  {

    //const currentTotal = Number(roundedTotalOne);
    
    
    globalTotalSpanElement.classList.remove("danger");
    globalTotalSpanElement.classList.remove("warning");
    
    //color the total based on the criteria
        if (textInputInstance.allTogether()  > 50){
            // adding the danger class will make the text red
           globalTotalSpanElement.classList.add("danger");
        }
        else if (textInputInstance.allTogether() > 30 && textInputInstance.allTogether()< 50 ){
           globalTotalSpanElement.classList.add("warning");
        
    
    
    } 
    
    };
    