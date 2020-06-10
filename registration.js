const currRegs = localStorage["registrations"];
let regs = [];
if(currRegs){
	regs = JSON.parse(currRegs)
}
const theRegFunction = TheRegistrations(regs);
//get referance to elements
const reg = document.querySelector(".regString");
const btn = document.getElementById("displayBtn");
const display = document.getElementById("regDisplay");

function getRegistrations(){
	var regVal = reg.value
	var constant = theRegFunction.addingRegs(regVal);
		display.innerHTML += "<li>" + regVal + "</li>";
		
	// if(regVal !== ""){
	// 	display.innerHTML += '<li>' + regVal + '</li>';
	// }
	localStorage["registrations"] = JSON.stringify(theRegFunction.allTheRegs());
	reg.value = "";
}
btn.addEventListener("click", getRegistrations);