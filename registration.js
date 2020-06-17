const currRegs = localStorage["registrations"];
let numbers = [];
if(currRegs){
	numbers = JSON.parse(currRegs)
}
const theRegFunction = TheRegistrations(numbers);
//get referance to elements
const reg = document.querySelector(".regString");
const btn = document.getElementById("displayBtn");
const display = document.getElementById("regDisplay");
const itemType = document.getElementById("buttons");
const filterBtn = document.getElementById("filterBtn");

function getRegistrations(){
	var regVal = reg.value
	theRegFunction.addingRegs(regVal);
	theRegFunction.allTheRegs();

	if(regVal !== ""){
	var test = document.createElement('section');
	test.setAttribute('id','test');
	var ul = document.createElement('ul');
	document.body.appendChild(test);
	test.appendChild(ul);
		var li = document.createElement('li');
		ul.appendChild(li);
		li.innerHTML = display.innerHTML + regVal.toUpperCase();
		li.classList.add("color");
} 
// else {
// 	display.innerHTML = "enter valid registration"
// }

localStorage["registrations"] = JSON.stringify(theRegFunction.allTheRegs());
	reg.value = "";
}
// function filter(){
// var checkedRadioBtn = document.querySelector("input[name='place']:checked");
// var buttonType = checkedRadioBtn.value
// theRegFunction.radioSelected(buttonType);
// }

btn.addEventListener("click", getRegistrations);
