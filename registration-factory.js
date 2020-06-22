function TheRegistrations(allRegs){
	var numberPlates = allRegs || [];


	//function that does not add empty input and adds all registrations to array
	function addingRegs(input){
		if(input !== ""){
				numberPlates.push(input)
			} 
	}
	
	// function displaying registrations according to radio button selected
	function radioSelected(buttonType){
		var list = [];
		for(var i = 0; i<numberPlates.length; i++){
		
		if(numberPlates[i].startsWith(buttonType)){
			// display all items starting with ca from ls
			list.push(numberPlates[i])
		} 
		if( buttonType === "all"){
			// display all items starting with cj from ls
			list.push(numberPlates[i])
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