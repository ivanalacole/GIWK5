class Person {
    // Properties
    constructor(name, age, job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.language=language;
    this.busy=true;
    }
    // Method
    exercise () {
    console.log("Whatever we want");
    }
    fetchJobOf(){
    console.log(`This is ${this.name} and their job is ${this.job}`)
    }
}
    let person1 = new Person ("Jordon", 23, "Coding Instructor")
    person1.exercise();
    person1. fetchJob();