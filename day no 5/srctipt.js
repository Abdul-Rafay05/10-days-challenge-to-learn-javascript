// let paragraph = document.getElementById("para")
// document.getElementById("Change_text").addEventListener("click", () => {
//     paragraph.innerHTML = "Welcome to JavaScript!"
// })
// document.getElementById("add_style").addEventListener("click", () => {
//     paragraph.style.background = "red";
//     paragraph.style.color = "white";
// })
// document.getElementById("reset_style").addEventListener("click", () => {
//     paragraph.style.background = "none";
//     paragraph.style.color = "black";
// })

// document.getElementById("tast_add").addEventListener("click", () => {
//     let li = document.createElement("li")
//     li.innerHTML = document.getElementById("input_field").value
//     document.getElementById("Parent_add_box").appendChild(li)

//     document.getElementById("input_field").value = null

// })

// document.getElementById("event_listner").addEventListener('click', (e) => {
//     if (e.target.tagName === "LI") {
//         e.target.style.color = "red"
//     } else {
//         e.target.style.color = "black";
//     }
// })

// Toggle


// function toggle_func() {
//     if (document.getElementById("toggle").checked) {
//         document.querySelector(".white").style.background = "white"
//         document.querySelector(".white").style.color = "black"
//     } else {
//         document.querySelector(".white").style.background = "black"
//         document.querySelector(".white").style.color = "white"
//     }
// }
counter = 0;

function increase_fun() {
    document.getElementById("counter").innerHTML = counter += 1
}
function decrease_fun() {
    if (counter > 0) {s
        document.getElementById("counter").innerHTML = counter -= 1
    }
}