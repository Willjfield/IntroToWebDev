/*class Animal{
    constructor(name){
        console.log(`I am a new ${name}!`);
        
        this.name = name;
        this.createButton();
    }

    createButton(){
        const container = document.getElementById('animal-container');
        this.button = document.createElement("button");
        this.button.appendChild(document.createTextNode(this.name));
        container.appendChild(this.button);

        this.button.addEventListener('click', this.sayName.bind(this))
    }

   // sayName = function(){
    sayName(){    
        console.log(`I am a ${this.name}`);
    }
}

class Pet extends Animal{
    constructor(name){
        super(name);
        console.log('...and I am a pet.')
    }
}*/