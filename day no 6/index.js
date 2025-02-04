// we created custum Promises
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ name: "Abdul Rafay", age: 20, Fname: "Riz" })
//     }, 2000);
// }).then((e) => {
//     for (const key in e) {
//         console.log(key);
//     }
// }).catch((err) => {
//     console.log("some Error occurred", err);
// }).finally(() => console.log("Finished"))

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({ name: "Abdul Rafay", age: 20, Fname: "Riz" })
//         } else {
//             reject("Your Promise didn't resolved")
//         }
//     }, 2000);
// }).then((userinfo) => {
//     console.log(userinfo);
//     return userinfo.name
// }).then((username) => {
//     console.log(username);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Finished");
// })
// // with async await function
// let consume = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data_response = await response.json()
//         data_response.forEach(e => {
//             let { id, name, username, email, address, phone, website, company } = e
//             let { street, suite, city, zipcode, geo } = address
//             let { catchPhrase, bs } = company
//             console.log(id, name, username, email, phone, website);
//             console.log(street, suite, city, zipcode, geo);
//             console.log(catchPhrase, bs);
//         });


//     } catch (error) {
//         console.log(error);
//     }
// }
// consume()
// // without async await function
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(data => data.json())
//     .then((response) => {
//         response.forEach(e => {
//             let { id, name, username, email, address, phone, website, company } = e
//             let { street, suite, city, zipcode, geo } = address
//             let { catchPhrase, bs } = company
//             console.log(id, name, username, email, phone, website);
//             console.log(street, suite, city, zipcode, geo);
//             console.log(catchPhrase, bs);
//         });
//     }
//     ).catch((err) => {
//         console.log("Error", err)
//     })

// practice no 1
// Write a function that returns a Promise.
// Resolve the Promise with some data after 2 seconds.
// Use .then() to log the resolved data.

// let customPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("I am a promise and I have been fulfilled")
//         reject("I am a promise and I have been Rejected Promises")
//     }, 2000);
// })
// customPromise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);

// })

// async (customPromise) => {
//     try {
//         let response = await customPromise
//         console.log(response);
//     } catch (error) {
//         console.log("HEllo", error);
//     }
// }
let Show_Data = document.getElementById("Show_Data");
let fetchFunction = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos")
        let data = await response.json()
        data.map((e) => {
            const { userId, id, title, completed } = e
            Show_Data.innerHTML +=
                ` 
            <tr>
            <td>${userId}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${completed}</td>
            </tr>
            `



        })
    } catch (error) {
        console.log("Some Error Occurred", error);
    }
}
fetchFunction()