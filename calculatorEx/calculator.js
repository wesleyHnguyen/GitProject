


function  display(e) {
    document.getElementById("expression").value = document.getElementById("expression").value +
        "" + document.getElementById(e.id).value;
}


function result() {
    let expressionString = document.getElementById("expression").value;
    let expressionVal = eval(expressionString);
    document.getElementById("expression").value = expressionVal;
}

function clearAll() {

    document.getElementById("expression").value = '';
}
