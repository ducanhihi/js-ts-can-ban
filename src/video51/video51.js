console.log("video 51");

const element = document.getElementById("myBtn");

const handleClickBtn = () => {
    console.log("You clicked me!");
}
element.addEventListener("click", handleClickBtn)
console.log(element);
