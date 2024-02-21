// Initializes a variable count with an initial value of 0. This variable will be used to keep track of the counter value.
let count = 0;

// select value and buttons
// Selects an HTML element with the id "value" and assigns it to the variable value. This element is presumably where the counter value will be displayed on the webpage.
const value = document.querySelector("#value");
// Selects all HTML elements with the class "btn" and assigns them to the variable btns. These elements are assumed to be the buttons that the user can click to interact with the counter.
const btns = document.querySelectorAll(".btn");
// console.log(btns);

//  Iterates over each button in the btns collection using the forEach method.
btns.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "white";
        }
        value.textContent = count;
    })
});