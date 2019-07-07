// Here we can find why we have to user super function
class First {
    constructor() {
        this.name = 'Ramesh';
    }
    printTheName() {
        console.log(this.name);
    }
}

class Second extends First{
    constructor(){
        super();
        this.surName = "Parajuli"
    }
    printThesurName(){
        console.log(this.surName)
    }
}



const CallFirst = new Second();
// console.log (callFirst.First.printTheName())
CallFirst.printTheName()