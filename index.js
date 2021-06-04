// function User (name, email, username) {
//   this.name = name
//   this.email = email
//   this.username = username
//   this.doSomething = function () {
//     console.log('Look what I can do!')
//   }
// }

// function Student (name, email, username, gpa, grade) {
//   User.call(this, name, email, username)
//   this.gpa = gpa
//   this.grade = grade
// }

// function Teacher (name, email, username, subject) {
//   User.call(this, name, email, username)
//   this.subject = subject
// }

// const student1 = new Student('Jimmy Doe', 'jimmydoe@gmail.com', 'jimmydoe', 4, 12)
// const teacher1 = new Teacher('John Doe', 'johndoe@gmail.com', 'johndoe', 'Math')

// console.log(student1)
// console.log(teacher1)

class User {
  constructor (name, email, username) {
    this.name = name
    this.email = email
    this.username = username
  }
}

class Student extends User {
  constructor (name, email, username, gpa, grade) {
    super(name, email, username)
    this.gpa = gpa
    this.grade = grade
  }
}

class Teacher extends User {
  constructor (name, email, username, subject) {
    super(name, email, username)
    this.subject = subject
  }
}

const student1 = new Student('Jimmy Doe', 'jimmydoe@gmail.com', 'jimmydoe', 4, 12)
const teacher1 = new Teacher('John Doe', 'johndoe@gmail.com', 'johndoe', 'Math')

console.log(student1)
console.log(teacher1)