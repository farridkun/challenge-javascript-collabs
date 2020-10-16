// !Informations Attributes
// ?dob = Date Of Birth
// ?sid = Student ID

class Student {
  constructor(name, age, dob, sid) {
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.sid = sid;
    this.gender = "";
    this.hobbies = []
  }

  //set name
  set studentName(newName){
    this.name = newName
  }

  //set age
  set studentAge(newAge){
    this.age = newAge
  }

  //set date of birth
  set studentDOB(newDOB){
    this.dob = newDOB
  }

  //set gender
  set studentGender(newGender){
    switch(newGender){
      case "Female":
        this.gender = newGender
        break;
      case "Male":
        this.gender = newGender
        break;
      default:
        this.gender = "Not a Gender"
    }
  }

  //set Hobbies
  set studentHobbies(newHobbies){
    this.hobbies.push(newHobbies)
  }

  //set Remove hobbies
  set removeStudentHobbies(newHobbies){
    let hobbiesArray = [];
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] !== newHobbies){
        hobbiesArray.push(this.hobbies[i]);
      }
    }
    this.hobbies = hobbiesArray
  }

  //get hobbies
  get hobbiesList(){
    return this.hobbies
  }

  //get student data info
  get studentInfo(){
    return `Hello, my name is ${this.name} my age is ${this.age} years old because i birth on ${this.dob} and my hobbies is ${this.hobbies}`
  }
}


//sample declaration a student

const student1 = new Student({
  name: "Joni Dave",
  age: 30,
  dob: "12 Juli 1990",
  sid: 101097
});

const student2 = new Student({
  name: "Somadin",
  age: 30,
  dob: "23 February 1990",
  sid: 101099
})

student1.studentName = " Ari Darsan";
student1.studentAge = 23;
student1.studentDOB = "09 May 1997";
student1.studentGender = "Male";
student1.studentHobbies = "Play Footbal";
student1.studentHobbies = "Chess";
student1.studentHobbies = "Playing Game";
console.log(student1.studentInfo);
console.log("Hobbies: ")
for(let i = 0; i < student1.hobbiesList.length; i++){
  console.log(`${i+1}. ${student1.hobbiesList[i]}`)
}
student1.removeStudentHobbies = "Playing Game"

console.log("Hobbies was deleted!")
console.log("Hobbies: ")
for(let i = 0; i < student1.hobbiesList.length; i++){
  console.log(`${i+1}. ${student1.hobbiesList[i]}`)
}
