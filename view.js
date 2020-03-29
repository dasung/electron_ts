var greeter = document.getElementById("greeter");
var countText = document.getElementById("click-counter");
greeter.innerText = "Hello world!";
var button = document.getElementById("countbtn");
var count = 0;
button.onclick = function () {
    countText.innerText = count.toString();
    count++;
};
