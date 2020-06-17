function TheRegistrations(allRegs){
	const numberPlates = allRegs || [];


	//function that does not add empty input and adds all registrations to array
	function addingRegs(input){
		if(input !== ""){
			if(input.startsWith("CA") || input.startsWith("CJ") || input.startsWith("CL")){
				numberPlates.push(input)
			}
		} 
	}
	
	// function displaying registrations according to radio button selected
	// function radioSelected(buttonType){
	// 	if(buttonType === "CA"){
	// 		// display all items starting with ca from ls
	// 		return(numberPlates.startsWith("CA"))
	// 	} 
	// 	else if( buttonType === "CL"){
	// 		// display all items starting with cl from ls
	// 		return(numberPlates.startsWith("CL"))
	// 	}
	// 	else if( buttonType === "CJ"){
	// 		// display all items starting with cj from ls
	// 		return(numberPlates.startsWith("CJ"))
	// 	}
	// }

	//function returning theRegs
	function allTheRegs(){
		console.log(numberPlates)
		return numberPlates;
	}
	return{
		addingRegs,
		// radioSelected,
		allTheRegs
	}
}