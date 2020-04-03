var MyClass = /** @class */ (function () {
    function MyClass() {
        // Here we import the File System module of node
        this.node_module_fs = require('fs');
    }
    MyClass.prototype.getArray = function () {
        var multi_arr = [["Jhon", "jhon@oliv.lk"],
            ["Kasun", "kasun@oliv.lk"],
            ["Sumith", "sumith@oliv.lk"],
            ["Susan", "susan@oliv.lk"],
            ["Jadth", "jadth@oliv.lk"],
            ["Klera", "klera@oliv.lk"],
        ];
        return multi_arr;
    };
    MyClass.prototype.createFile = function () {
        this.node_module_fs.writeFile('file.txt', 'I am cool!', function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    };
    MyClass.prototype.showFile = function () {
        this.node_module_fs.readFile('file.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
        });
    };
    return MyClass;
}());
var greeter = document.getElementById("greeter");
greeter.innerText = "Hello world!";
var button1 = document.getElementById("countbtn");
var count = 0;
button1.onclick = function () {
    var countText = document.getElementById("click-counter");
    countText.innerText = count.toString();
    count++;
};
var button2 = document.getElementById("add-to-list");
button2.onclick = function () {
    var name2 = String(document.getElementById("Name").value);
    var E_mail = String(document.getElementById("Email").value);
    var obj = new MyClass();
    obj.createFile();
    obj.showFile();
    var myarr = obj.getArray();
    var table = document.getElementById("contact-table");
    var rowid = 0;
    for (var _i = 0, myarr_1 = myarr; _i < myarr_1.length; _i++) {
        var i = myarr_1[_i];
        var newRow = table.tBodies[0].insertRow(-1);
        var s_no = newRow.insertCell(0);
        var name_1 = newRow.insertCell(1);
        var e_mail = newRow.insertCell(2);
        s_no.appendChild(document.createTextNode(rowid.toString()));
        name_1.appendChild(document.createTextNode(i[0]));
        e_mail.appendChild(document.createTextNode(i[1]));
        /*var rowString = document.createTextNode("<tr><td>"+ rowid.toString()+"</td><td>"+ i[0] +"</td><td>"+ i[1]+"</td></tr>");
        table.tBodies[0].appendChild(rowString);*/
        ++rowid;
        console.log(i[0]);
    }
};
