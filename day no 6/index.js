// we created custum Promises
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "Abdul Rafay", age: 20, Fname: "Riz" })
    }, 2000);
}).then((e) => {
    for (const key in e) {
        console.log(key);
    }
}).catch((err) => {
    console.log("some Error occurred", err);
}).finally((e) => {
    console.log("Finished");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ name: "Abdul Rafay", age: 20, Fname: "Riz" })
        } else {
            reject("Your Promise didn't resolved")
        }
    }, 2000);
}).then((userinfo) => {
    console.log(userinfo);
    return userinfo.name
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Finished");
})
// with async await function
let consume = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data_response = await response.json()
        data_response.forEach(e => {
            let { id, name, username, email, address, phone, website, company } = e
            let { street, suite, city, zipcode, geo } = address
            let { catchPhrase, bs } = company
            console.log(id, name, username, email, phone, website);
            console.log(street, suite, city, zipcode, geo);
            console.log(catchPhrase, bs);
        });


    } catch (error) {
        console.log(error);
    }
}
consume()
// without async await function 
fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then((response) => {
        response.forEach(e => {
            let { id, name, username, email, address, phone, website, company } = e
            let { street, suite, city, zipcode, geo } = address
            let { catchPhrase, bs } = company
            console.log(id, name, username, email, phone, website);
            console.log(street, suite, city, zipcode, geo);
            console.log(catchPhrase, bs);
        });
    }
    ).catch((err) => {
        console.log("Error", err)
    })