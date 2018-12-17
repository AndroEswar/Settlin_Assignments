function myFunction() {
    /* Reading Data to variables form1*/
    var name1 = document.getElementById("name1").value;
    var dob1 = document.getElementById("dob1").value;
    var hobbies1 = document.getElementById("hobbies1");
    for (var i = 0; i < hobbies1.options.length; i++) {
        if(hobbies1.options[i].selected ==true){
            console.log(hobbies1.options[i].value);
        }
    }

    /* Reading Data to variables form2*/
    var name2 = document.getElementById("name2").value;
    var dob2 = document.getElementById("dob2").value;
    var hobbies2 = document.getElementById("hobbies2");
    for (var i = 0; i < hobbies2.options.length; i++) {
        if(hobbies2.options[i].selected ==true){
            console.log(hobbies2.options[i].value);
        }
    }

    /* Reading Data to variables form3*/
    var name3 = document.getElementById("name3").value;
    var dob3 = document.getElementById("dob3").value;
    var hobbies3 = document.getElementById("hobbies3");
    for (var i = 0; i < hobbies3.options.length; i++) {
        if(hobbies3.options[i].selected ==true){
            console.log(hobbies3.options[i].value);
        }
    }

    console.log(hobbies1);

    var obj1 = {
        name : name1,
        dob : dob1,
        hobbies : hobbies1
    }
    
    var obj2 = {
        name : name2,
        dob : dob2,
        hobbies : hobbies2
    }

    var obj3 = {
        name : name3,
        dob : dob3,
        hobbies : hobbies3
    }
}