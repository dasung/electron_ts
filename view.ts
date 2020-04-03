declare function require(name:string); /* Tell compiler that "require" will be available at runtime */

class MyClass {

    // Here we import the File System module of node
    private node_module_fs = require('fs');

    constructor() { }

    getArray():string[][] {
        var multi_arr:string[][] = [["Jhon","jhon@oliv.lk"],
                                  ["Kasun","kasun@oliv.lk"],
                                  ["Sumith","sumith@oliv.lk"],
                                  ["Susan","susan@oliv.lk"],
                                  ["Jadth","jadth@oliv.lk"],
                                  ["Klera","klera@oliv.lk"],
                                 ];
        return multi_arr;
    }

    createFile() {

        this.node_module_fs.writeFile('file.txt', 'I am cool!',  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    }

    showFile() {

        this.node_module_fs.readFile('file.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
        });
    }
}

let greeter:HTMLHeadingElement = document.getElementById("greeter") as HTMLHeadingElement;

greeter.innerText = "Hello world!";

var button1 =  document.getElementById("countbtn");
var count:number = 0;


button1.onclick = function() {  
    let countText:HTMLHeadingElement = document.getElementById("click-counter") as HTMLHeadingElement;
    countText.innerText = count.toString();
    count++;
}

var button2 =  document.getElementById("add-to-list");

button2.onclick = function() {
    var name2 = String(( < HTMLInputElement > document.getElementById("Name")).value);  
    var E_mail = String(( < HTMLInputElement > document.getElementById("Email")).value);
    
    var obj = new MyClass();
    obj.createFile();
    obj.showFile();
    var myarr = obj.getArray();

    var table:HTMLTableElement = document.getElementById("contact-table") as HTMLTableElement;
    var rowid:number = 0;
    for( var i of myarr )
    {
        let newRow = table.tBodies[0].insertRow(-1);

        let s_no = newRow.insertCell(0);
        let name = newRow.insertCell(1);
        let e_mail = newRow.insertCell(2);

        s_no.appendChild(document.createTextNode(rowid.toString()));
        name.appendChild(document.createTextNode(i[0]));
        e_mail.appendChild(document.createTextNode(i[1]));

        ++rowid;
        console.log( i[0] );
    }
    
}
