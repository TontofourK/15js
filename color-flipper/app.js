const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //get random number between 0-3 for flipping background color
    const randomNumber = Math.floor(Math.random() * colors.length); 
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = color[randomNumber];
});