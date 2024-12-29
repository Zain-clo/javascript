
class student {
    constructor (name , age, hobbies, color ){
        this.name = name
        this.age = age
        this.hobbies = hobbies
        this.color= color
    }
}
let student2 = new student ("Shina",23,"reading","red")
 let student3 = new student("Omen", 31, "coding","green")
 console.log(  "My name is",student3.name,"and i am",student3.age,"years old. I love",student3.hobbies,"My favourite color is " , student3.color
 )
 console.log("My name is",student2.name,"and i am",student2.age,"years old. I love",student2.hobbies,"My favourite color is " , student2.color)
 class car {
    constructor(brand , color, YCM ){
        this.brand=brand
        this.color=color
        this.YCM=YCM
    }
 }
 let car1 = new car ("corrola", "red",2021)
 console.log("The brand of car most people use is",car1.brand,".My favourite one is the",car1.color,".It was buit in the year",car1.YCM)