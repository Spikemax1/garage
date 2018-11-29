
function Car(carName){
    this.carName = carName || 'unknown name';
}

Car.prototype.logName = function(){
    console.log('Car name is: ', this.carName);
};

function callConsole(argum){
    console.log(argum);
};
var lego = 'lego';

module.exports.CarClass =Car;
module.exports.callConsole =callConsole;
module.exports.lego =lego; 