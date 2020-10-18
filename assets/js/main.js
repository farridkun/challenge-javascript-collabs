// !Informations Attributes
// ?dob = Date Of Birth
// ?sid = Student ID

// ?Student Class : Main Class Task
class Student {
    constructor(name, age, dob, sid, gender, hobbies) {
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.sid = sid;
        this.gender = gender;
        this.hobbies = hobbies;
    }
}

// ?studentInterface Class : Interfacing data from Modal to Users 
class studentInterface {
    static displayStudents() {
        const students = localStore.getStudents();

        students.forEach((student) => studentInterface.addStudentToList(student));
    }

    static addStudentToList(student) {
        const list = document.querySelector('#student-list');

        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.dob}</td>
      <td>${student.sid}</td>
      <td>${student.gender}</td>
      <td>${student.hobbies}</td>
      <td><a href="#" class="btn btn-primary-1 btn-sm edit" onclick="alert('STATUS ❌')">Edit 🧾</a>
      <a href="#" class="btn btn-secondary-1 btn-sm delete">Remove 🔌</a></td>
    `;

        list.appendChild(row);
    }

    static deleteStudent(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#age').value = '';
        document.querySelector('#dob').value = '';
        document.querySelector('#sid').value = '';
        document.querySelector('#gender').value = '';
        document.querySelector('#hobbies').value = '';
    }
}

// localStore Class: Handles Storage
class localStore {
    static getStudents() {
        let students;
        if (localStorage.getItem('students') === null) {
            students = [];
        } else {
            students = JSON.parse(localStorage.getItem('students'));
        }

        return students;
    }

    static addStudent(student) {
        const students = localStore.getStudents();
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
    }

    static removeStudent(hobbies) {
        const students = localStore.getStudents();

        students.forEach((student, index) => {
            if (student.hobbies === hobbies) {
                students.splice(index, 1);
            }
        });

        localStorage.setItem('students', JSON.stringify(students));
    }
}

// ?Displaying All Data Student
document.addEventListener('DOMContentLoaded', studentInterface.displayStudents);

// ?Adding Data Student
document.querySelector('#student-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;
    const dob = document.querySelector('#dob').value;
    const gender = document.querySelector('#gender').value;
    const sid = document.querySelector('#sid').value;
    const hobbies = document.querySelector('#hobbies').value;

    // Data Validation
    if (name === '' || age === '' || dob === '' || gender === '' || sid === '' || hobbies === '') {
        alert('Please fill in all fields 😱😱');
    } else {
        const student = new Student(name, age, dob, gender, sid, hobbies);
        studentInterface.addStudentToList(student);
        localStore.addStudent(student);
        alert('Student Has Been Added 🆗✅');
        studentInterface.clearFields();
    }
});

// ?Removing a Student
document.querySelector('#student-list').addEventListener('click', (e) => {
    studentInterface.deleteStudent(e.target);
    localStore.removeStudent(e.target.parentElement.previousElementSibling.textContent);
    alert('Student Has Been Removed 🔌❌');
});