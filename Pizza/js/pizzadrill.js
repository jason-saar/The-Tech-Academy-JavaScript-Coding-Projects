function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].nodeValue;
            text1 = text1+selectedSize+"<br>";
        }
    }

    if (selectedSize == "Personal Pizza"){
        sizeTotal = 6;
    } else if (selectedSize == "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize == "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize == "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;
    console.log(slectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal+".00");
    getMeat(runningTotal, text1); // All three of these variables will be passed on to each function
}

function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");

    for (var i = 0; j < meatArray.length; j++) {
        if(meatArray[i].checked){
            selectedMeat.push(meatArray[i].value);
            console.log("Selected meat item: ("+meatArray[i].value+")");
            text1 = text1+meatArray[i].value+"<br>";
        }
    }

    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
}


