let onebox = document.getElementById("horns");
let threebox = document.getElementById("scales");
let container = document.getElementById("container");
onebox.addEventListener("change",changed);
threebox.addEventListener("change",changed);

function changed(event) {
console.log(this.dataset.number);
container.childNodes[this.dataset.number].style.visibility="hidden";
}