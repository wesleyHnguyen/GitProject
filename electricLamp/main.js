let electricLamp = new ElectricLamp();

let switchButton = new SwitchButton();

alert("Connect the switch button to the electric lamp");
switchButton.connectToLamp(electricLamp);


for(let i = 0; i < 10; i++) {
    alert("Switch On The button");
    switchButton.switchOn();

    if (electricLamp.status) {
        alert("The lamp is turned on");
    } else
        alert("The lamp is turned off");

    alert("Switch off The button");
    switchButton.switchOff();

    if (electricLamp.status) {
        alert("The lamp is turned on");
    } else
        alert("The lamp is turned off");

}