const currRegs = localStorage["registrations"];
let numbers = [];
if(currRegs){
	numbers = JSON.parse(currRegs)
}
const theRegFunction = TheRegistrations(numbers);
const reg = document.querySelector(".regString");
const btn = document.getElementById("displayBtn");
const display = document.getElementById("regDisplay");
const itemType = document.getElementById("buttons");
const filterBtn = document.getElementById("filterBtn");
const theList = document.getElementById("theList");

window.addEventListener("load", function(){
	displaying(theRegFunction.allTheRegs());
})
	//function that displays regs added in input field
function getRegistrations(){
var regVal = (reg.value).toUpperCase();
theRegFunction.addingRegs(regVal);
	if(regVal !== "" ){
		if(regVal.startsWith("CA") || regVal.startsWith("CJ") || regVal.startsWith("CL")){
			var li = document.createElement("li");
			theList.appendChild(li);
			li.innerHTML =  regVal;
			li.classList.add("color")
		}
		else{
			display.innerHTML = "enter a valid registration number";
			display.classList.add("red")
		}
	}
	 else {

			display.innerHTML = "enter a registration number";
			display.classList.add("red");


		} 
		setTimeout(function(){
		display.innerHTML = "";
		}, 4000)

	localStorage["registrations"] = JSON.stringify(theRegFunction.allTheRegs());
	reg.value = "";
}
	// function that displays items according to radio button selected
function filter(){

var checkedRadioBtn = document.querySelector("input[name='place']:checked");
var buttonType = checkedRadioBtn.value;
var radio = theRegFunction.radioSelected(buttonType);
console.log(radio.length)
console.log(buttonType)
if(radio){
	theList.innerHTML = "";
		displaying(radio);
	}
}


function displaying(list){
	for( var i=0; i< list.length; i++){
		showReg(list[i])
	}
}
function showReg(item){
	var li = document.createElement("li");
			theList.appendChild(li);
			li.innerHTML =  item;
			li.classList.add("color")
}

btn.addEventListener("click", getRegistrations);
filterBtn.addEventListener("click", filter)
