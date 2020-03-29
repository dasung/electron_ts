let greeter:HTMLHeadingElement = document.getElementById("greeter") as HTMLHeadingElement;

greeter.innerText = "Hello world!";

var button =  document.getElementById("countbtn");
var count:number = 0;


button.onclick = function() {  
    let countText:HTMLHeadingElement = document.getElementById("click-counter") as HTMLHeadingElement;
    countText.innerText = count.toString();
    count++;
}