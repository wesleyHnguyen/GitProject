function  ElectricLamp() {

    this.turnOn = function () {
        this.status = true;
    };

    this.turnOff = function () {
        this.status = false;
    }
}

function SwitchButton() {
    this.connectToLamp = function(lamp){
        this.lamp = lamp;
    };

    this.switchOn = function () {
        this.lamp.turnOn();
        this.status = this.lamp.status;
    };

    this.switchOff = function(){
        this.lamp.turnOff();
        this.status = this.lamp.status;
    }
}