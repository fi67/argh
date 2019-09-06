let onebox = document.getElementById("horns");
let threebox = document.getElementById("scales");
let container = document.getElementById("container");
onebox.addEventListener("change",changed);
threebox.addEventListener("change",changed);

function changed(event) {
console.log(this.dataset.number);
console.log(this);
console.log(container.children.length);
container.children[this.dataset.number].style.visibility="hidden";
}