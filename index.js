const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector("color");

btn.addEventListener("click", function () {
    const no = getRandomNumber();
    document.body.style.backgroundColor = colors[no];
    let h = "#";
    for (let i = 0; i < 6; i++) {
        h += hex[getRandomNumber()];
    }
    color.content = h;
    document.body.style.borderColor = h;

});
function getRandomNumber() {
    return Math.floor(Math.random * colors.length)
}