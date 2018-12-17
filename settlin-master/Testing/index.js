var arr = [];
document.querySelector('#count1').onclick = call;
var count = 0;
var kl = 0;
function call() {
    kl++;
    if (kl == 3) {
        document.getElementById("count1").style.display = "none";
        document.getElementById("count2").style.display = "none";
    }
    console.log(count);
    var name1 = document.getElementById("name").value;

    var date1 = new Date();

    var date2 = document.getElementById("date").value;

    var date3 = new Date(date2);

    var fage = date1.getFullYear() - date3.getFullYear();

    document.getElementById("age").value = fage;

    var x = document.getElementById("hobbies");
    var ay = [];
    for (var i = 0; i < x.options.length; i++) {
        if (x.options[i].selected == true) {

            ay.push(x.options[i].value);
        }
    }
    var obj1 = { name1, date2, fage, ay };
    count++;
    for (j = count - 1; j < count; j++) {
        arr.push(obj1);
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = arr[j].name1;
        cell2.innerHTML = arr[j].date2;
        cell3.innerHTML = arr[j].fage;
        cell4.innerHTML = arr[j].ay.toString();
    }

}
function myChange() {
    var date1 = new Date();
    var date2 = document.getElementById("date").value;
    var date3 = new Date(date2);
    var fage = date1.getFullYear() - date3.getFullYear();
    document.getElementById("age").value = fage;
}