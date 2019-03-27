
let year = parseInt(prompt("Enter a Year: "));

/*
if (year % 4 === 0)
    if (year % 100 === 0)
        if(year % 400 === 0)
                alert("this is a leap year");
            else
                alert("this is not a leap year");
        else
            alert("this is a leap year");
        else
            alert("this is not a leap year");

 */

/****coding improvement first *******/

/*
let isLeapYear = false;

if(year % 4 === 0)
    if(year % 100 === 0) {
        if (year % 400 === 0)
            isLeapYear = true;
    }   else
            isLeapYear = true;

    if (isLeapYear)
        alert("This is a leap year");
    else
        alert("this is not a leap year");
*/


/******coding improvement second**********/
let isLeapYear = false;

let isDivisibleBy4 = year % 4 === 0;

if (isDivisibleBy4) {
    let isDivisibleBy100 = year % 100 === 0;
    if (isDivisibleBy100) {
        let isDivisibleBy400 = year % 400 ===0;
        if(isDivisibleBy400){
            isLeapYear = true;
        }

    }else  {
        isLeapYear = true;
    }
}

if (isLeapYear)
    alert("This is a leap year");
else
    alert("this is not a leap year");















