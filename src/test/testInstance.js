class myObj {
    constructor() {
        this.att1 = 10;
    }

    updateMethod() {
        this.att1 = 20;
        return this;
    }

    setAtt2() {
        this.att2 = 5;
    }
}

let obj1 = new myObj();
obj1.setAtt2();
console.log(obj1.att1);
console.log(obj1.att2);
obj1 = obj1.updateMethod();
console.log(obj1.att1);
console.log(obj1.att2);