function TheRegistrations(allRegs){
	var numberPlates = allRegs || [];


	//function that does not add empty input and adds all registrations to array
	function addingRegs(input){
		if(input !== ""){
			if(input.startsWith("CA") || input.startsWith("CJ") || input.startsWith("CL")){
				numberPlates.push(input)
			}
		} 
	}
	
	// function displaying registrations according to radio button selected
	function radioSelected(buttonType, plates){
		var list = [];
		for(var i = 0; i<plates.length; i++){
		
		if(buttonType === "CA" && plates[i].startsWith("CA")){
			// display all items starting with ca from ls
			list.push(plates[i])
		} 
		 if( buttonType === "CL" && plates[i].startsWith("CL")){
			// display all items starting with cl from ls
			list.push(plates[i])
		}
		if( buttonType === "CJ" && plates[i].startsWith("CJ")){
			// display all items starting with cj from ls
			list.push(plates[i])
		}
	}
	return list;
}


	//function returning theRegs
	function allTheRegs(){
		console.log(numberPlates)
		return numberPlates;
	}
	return{
		addingRegs,
		radioSelected,
		allTheRegs
	}
}