const computer = {
    // {
        laptop: 'macbook-pro',
        system: 'unix',
        price: 160000,
    
        // myDesktop: () => {return  `Price of ${this.laptop} is ${this.price}`}     This will not work on object
        myDesktop(){return  `Price of ${this.laptop} is ${this.price}`}   //But this will    
    // }
    }

console.log(computer.myDesktop())