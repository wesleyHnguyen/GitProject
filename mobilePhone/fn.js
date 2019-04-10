function Mobile() {
    this.deviceName = "";
    this.battery = 100;
    this.inboxMessg = [];
    this.sentMessg = [];

    this.chargeBattery = function () {
        if (this.battery < 100)
            this.battery++;
    };

    this.switchOn = function(){
       if(this.battery > 0)
           this.status = true;
       else {
           this.status = false;
           alert("The battery is run out. Can not turn the mobile on");
       }
    };

    this.switchOff = function () {
        this.status = false;
    };

    this.isOn = function () {
      return this.status;
    };


    this.decrease = function () {
        if(this.battery > 0)
            this.battery--;
        else
            alert("The battery is run out. Please, charge it!!!");
    };

    this.editMessg = function (draftMssg) {
        if(this.isOn()) {
            this.draftMssg = draftMssg;
            this.decrease();
        }
    };


    this.sendMessg = function (receiver) {
        if(this.isOn()) {
            receiver.receiveMessg(this);
            this.sentMessg.push(this.draftMssg);
            this.decrease();
        } else {
            alert("The " + this.deviceName + " is turnoff");
        }

    };

    this.receiveMessg = function (sender) {
        if(this.isOn()) {
            this.inboxMessg.push(sender.draftMssg);
            this.decrease();
        }else {
            alert("The " + this.deviceName + " is turnoff");
        }
    };

    this.browseInboxMssg = function () {
        if(this.isOn()) {
            alert(this.inboxMessg);
            this.decrease();
        }else {
            alert("The " + this.deviceName + " is turnoff");
        }
    };

    this.browseSentMessg = function () {
        if(this.isOn()) {
            alert(this.sentMessg);
            this.decrease();
        }else {
            alert("The " + this.deviceName + " is turnoff");
        }
    }

}