let iPhone = new Mobile();
iPhone.deviceName = "iPhone";

let samsung = new Mobile();
samsung.deviceName = "Samsung";

iPhone.switchOn();
samsung.switchOn();


alert("iphone sends messg to samsung lan 1");
iPhone.editMessg("Hello from iPhone - first time");
iPhone.sendMessg(samsung);


alert("iphone sends messg to samsung lan 2");
iPhone.editMessg("Hello from iPhone - second times");
iPhone.sendMessg(samsung);

alert("Display sent messages in Sent Box from iphone");
iPhone.browseSentMessg();


alert("Display inbox messeges from samsung");
samsung.browseInboxMssg();

alert("Battery level of iphone now is: " + iPhone.battery);
alert("Battery level of samsung now is: " + samsung.battery);


