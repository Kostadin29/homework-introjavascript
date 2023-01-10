console.log("it works");

function Animal(name, kind) {
    this.name = name;
    this.kind = kind;
    this.speak = function (message) {
        console.log(`${this.kind} says: '${message}'`);
    }
}

const dog = new Animal("Dan", "Dog");
dog.speak("Hey bro!!!");


