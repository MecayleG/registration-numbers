function TheRegistrations(allRegs){
	const theRegs = allRegs || [];


	//function that does not add empty input and adds all registrations to array
	function addingRegs(input){
		if(input !== null){
			theRegs.push(input)
		}
	}
	// function displaying registrations according to drop down selected
	// function displayReg(regNum){
	// 	if(regNum.startsWith("CA")){

	// 	}
	// }
	//function returning theRegs
	function allTheRegs(){
		console.log(theRegs)
		return theRegs
	}
	return{
		addingRegs,
		// displayReg,
		allTheRegs
	}
}