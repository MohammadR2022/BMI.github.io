let $ = document;
let weight = $.querySelector("#weight");
let height = $.querySelector("#height");
let spanWeigh = $.querySelector("#weight-val");
let spanheight = $.querySelector("#height-val");
let pElem = $.querySelector("#result");
let category = $.querySelector("#category");

function bmi() {
    spanWeigh.innerHTML = weight.value;
    spanheight.innerHTML = height.value;
    let x = weight.value;
    let y = height.value / 100;
    let result = x / (y * y);
    result = result.toFixed(2);
    pElem.innerHTML = result;
    if (result < 24.9 && result > 18.5) {
        pElem.style.color = "green";
        category.innerHTML = "Normal Weight";
    } else if (result > 25 && result < 29.9) {
        pElem.style.color = "red";
        category.innerHTML = "Over Weight";
    } else if (result > 29.9) {
        pElem.style.color = "red";
        category.innerHTML = "obese";
    }
}
weight.addEventListener("input", bmi);
height.addEventListener("input", bmi);