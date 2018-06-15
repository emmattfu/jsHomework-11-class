// Задача № 1

function Car(carName, years) {
    const date = new Date();

    this.name = carName;
    this.years = years;
    this.getCarName = function () {
        if (!carName || !isNaN(carName)) return new Error ('Give us some car name');
        return this.name[0].toUpperCase() + this.name.slice(1);
    };
    this.getYearOfIssue = function () {
        if (!years) return Error ('So how old is your car?');
        if (typeof years !== 'number') return new Error ('Give us a number');
        return (date.getFullYear() - this.years);
    };
}

var lexus = new Car('lexus', 2);



// Задача № 2

function StringChanger(string) {
    let pureString = string;
    this.getString = function () {
        if (!string || !isNaN(string)) return new Error ('Give us a string');
        return pureString;
    };
    this.getChangedString = function () {
        if (!string || !isNaN(string)) return new Error ('Give us a string');
        let stringChanger = '';
        for (let i = 0; i < string.length; i++) {
          stringChanger += string.charCodeAt(i);
        }
        return stringChanger;
    };
    this.clearString = function () {
        return pureString = '';
    }
}

let alice = new StringChanger('Алиса');

// Задача № 3

function ClassString(string) {
    this.string = string;
    this.getString = function () {
        if (!string || !isNaN(string)) return new Error ('Give us a string');
        return this.string;
    };
    this.changeString = function (value) {
        if (!string || !isNaN(string)) return new Error ('Give us a string');
        return this.string = value;
    };
    this.getStrignLength = function () {
        if (!string || !isNaN(string)) return new Error ('Give us a string');
        return this.string.length;
    };
    this.valueOf = function () {
        if (!string || !isNaN(string)) return new Error ('Give us a string');
        return this.string.length;
    };
    this.toString = function () {
        if (!string || !isNaN(string)) return new Error ('Give us a string');
        return this.string;
    }
}

var str = new ClassString('test');