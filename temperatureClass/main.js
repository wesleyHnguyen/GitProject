let temp = Number(prompt("Enter a value in C temperature"));

let temperature = new Temperature(temp);

alert("Nhiet do 25 do C o nhiet do F co gia tri la: " +  temperature.cToFConverter());
alert("Nhiet do 25 do C o nhiet do K co gia tri la: " +  temperature.cToKConverter());