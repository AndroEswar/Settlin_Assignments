
function sum() {
	var i = parseInt(document.getElementById('x').value);
	var j = parseInt(document.getElementById('y').value);

	return document.getElementById('result').innerHTML = "Result is: " + (i + j);
}

function sub() {
	var i = document.getElementById('x').value;
	var j = document.getElementById('y').value;
	return document.getElementById('result').innerHTML = "Result is: " + eval("i - j");
}

function mul() {
	var i = document.getElementById('x').value;
	var j = document.getElementById('y').value;
	return document.getElementById('result').innerHTML = "Result is: "+eval("i * j");
}

function div() {
	var i = document.getElementById('x').value;
	var j = document.getElementById('y').value;
	return document.getElementById('result').innerHTML = "Result is: "+eval("i / j");
}

function ageCalculate() {
	var today = new Date();
	var dobtxt = new Date(document.getElementById("dob").value);
	var age = today.getFullYear() - dobtxt.getFullYear();
	var month = today.getMonth() - dobtxt.getMonth();
	if (month < 0 || month === 0 & today.getDate() < dobtxt.getDate()) {
		age--;
	}
	console.log(document.getElementById("yourage"));
	document.getElementById("yourage").value = age;
	if(age < 18) {
		document.getElementById("major_minor").value = "Minor";
	} else {
		document.getElementById("major_minor").value = "Major";
	}
}

function personalDetails() {
	var today = new Date();
	var dobtxt = new Date(document.getElementById("dob").value);
	var age = today.getFullYear() - dobtxt.getFullYear();
	var month = today.getMonth() - dobtxt.getMonth();
	if(month < 0 || month === 0 & today.getDate() < dobtxt.getDate()) {
		age--;
	}
	/* console.log(age); */
	var name = document.getElementById("name").value;
	var hobbies = document.getElementById("hobbies").value;
	/* console.log(name);
	console.log(hobbies); */
	var major_minor = "";

	if(age < 18) {
		major_minor = "Minor";
	} else {
		major_minor = "Major";
	}

	var born = document.getElementById("dob").value;
	/* Object Creating */
	var personalDetails = {
		name : name,
		dob : born,
		age : age,
		major_minor : major_minor,
		hobbies : hobbies
	}
/* 
	console.log(personalDetails); */

	if(personalDetails.name != null 
		&& personalDetails.dob != null 
		&& personalDetails.age != null 
		&& personalDetails.major_minor != null 
		&& personalDetails.hobbies != ""
		&& personalDetails.name != ""
		&& personalDetails.dob != "") {
			/* document.getElementById("submit-btn").style.display = "none;" */
		document.getElementById("persondetails_div").style.display = "block";
	}

}

function displayDetails() {
	var today = new Date();
	var dobtxt = new Date(document.getElementById("dob").value);
	var age = today.getFullYear() - dobtxt.getFullYear();
	var month = today.getMonth() - dobtxt.getMonth();
	if (month < 0 || month === 0 & today.getDate() < dobtxt.getDate()) {
		age--;
	}
	/* console.log(age); */
	var name = document.getElementById("name").value;
	var hobbies = document.getElementById("hobbies").value;
	/* console.log(name);
	console.log(hobbies); */
	var major_minor = "";

	if (age < 18) {
		major_minor = "Minor";
	} else {
		major_minor = "Major";
	}

	var born = document.getElementById("dob").value;
	/* Object Creating */
	var personalDetails = {
		name: name,
		dob: born,
		age: age,
		major_minor: major_minor,
		hobbies: hobbies
	}
/* 	console.log(personalDetails); */
	document.getElementById("personDetailsDisplay").style.display = "block";
/* 
	console.log(document.getElementById("display_name"));
	console.log(document.getElementById("display_dob"));
	console.log(document.getElementById("display_age"));
	console.log(document.getElementById("display_his"));
	console.log(document.getElementById("display_hobbies")); */
	
	document.getElementById("display_name").innerHTML = personalDetails.name;
	document.getElementById("display_dob").innerHTML = personalDetails.dob;
	document.getElementById("display_age").innerHTML = personalDetails.age;
	document.getElementById("display_his").innerHTML = personalDetails.major_minor;
	document.getElementById("display_hobbies").innerHTML = personalDetails.hobbies;

}