// let obj = {
//     name: "shahzain",
//     fname: "Sohaib",
//     mname: "Vaniya",
//     bname: "abdul Wasay",
//     sname: "Hoorains"
// }
// // add properties
// obj.add = "korangi, karachi."
// obj.age = 120
// obj.fun = function add(a, b) {
//     return (a + b)
// }
// // update properties
// obj.mname = "Vaniya Iqbal"
// // delete properties
// delete obj.name
// let result = obj.fun(8, 7)
// console.log(result);
// console.log(obj);

// let arr = ["Abdul Rafay", "shahzain", "abdul wasay", 60, 58, 70, "M. Rayan"]
// push method in which we add element at the end of the array

// arr.push("Rizwan ul haq")

// pop method in which we delete element at the end of the array

// arr.pop()

// unshift method in which we add element beginning of the array

// arr.unshift("Sohaib")

// shift method in which we delete element beginning of the array

// arr.shift()

// splice method in which we can update, add, delete element specific position of the array

// arr.splice(3, 3, "Abdul", "Hello", "world")

// The slice() method slices out a piece of an array into a new array:

// console.log(arr.slice(3, 6));
// console.log(arr);

// arr.forEach((element) => {
//     console.log(element);
// })

// Basic Object Manipulation:
// create an object to represent a person (e.g., name, age, profession).
// Add a new property dynamically.
// Update the age property.
// Delete the profession property.

// let person = {
//     name: "Abdul Rafay",
//     age: 18,
//     profession: "Developer",
// }
// person.course = "Web Dev"
// person.age = 20
// delete person.profession
// console.log(person);

// Array Basics:
// Create an array of 5 numbers.
// Add two numbers to the end of the array using push().
// Remove the first number using shift().
// Find the index of a specific number in the array using indexOf().

// const arr = [1, 5, "2", 6, 8]
// // arr.push(10)
// // arr.push(20)
// // arr.shift()
// console.log(arr.indexOf());

// console.log(arr);

// Combining Objects and Arrays:

// Create an array of objects where each object represents a student (name, age, grade).
// Loop through the array and log each student’s name and grade.

// let students = [
//     {
//         student: { name: "Abdul Rafay", age: 25, grade: "A+1" }
//     },
//     {
//         student: { name: "Abdul Wasay", age: 35, grade: "A" }
//     },
//     {
//         student: { name: "Shahzain", age: 18, grade: "B" }
//     },
//     {
//         student: { name: "Rayan", age: 10, grade: "A+" }
//     },
//     {
//         student: { name: "Sohaib", age: 40, grade: "C" }
//     },
//     {
//         student: { name: "Hoor", age: 20, grade: "A+1" }
//     },
// ]
// students.map((element) => {
//     let { name, grade } = element.student
//     console.log(name, ":", grade);
// })
let task_name = document.getElementById("input_value")
let priority_level = document.getElementById("priority_level")
let submit_btn = document.getElementById("Submit_task")


let To_Do_list = {
    task: [

    ]
}

function addTask(taskname, priority) {
    To_Do_list.task.push({ TaskName: taskname, status: false ? "Done" : "Not Done", priority: priority })
}
submit_btn.addEventListener('click', () => {
    if (task_name.value.length > 1 && priority_level.value.length > 1) {
        addTask(task_name.value, priority_level.value);
        task_name.value = null
        priority_level.value = null
    } else {
        alert("Please Enter Required Fields")
    }
    Retrive_data()
})

function Retrive_data() {
    document.getElementById("table_Add").innerHTML =
        `<tr>
    <th>Check status</th>
    <th>Name</th>
    <th>Status</th>
    <th>Priority</th>
    </tr>`

    To_Do_list.task.map((e, index) => {
        // console.log(index);
        let data;
        let { TaskName, status, priority } = e
        data =
            `
        <tr>
        <td><input type="checkbox" id="${index}" onchange="check_Status(${index})" /></td>
        <td>${TaskName}</td>
        <td>${status}</td>
        <td>${priority}</td>
        </tr>
        `
        document.getElementById("table_Add").innerHTML += data
    });

}

function check_Status(id) {
    console.log(id);

}