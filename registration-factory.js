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
		if( buttonType == "all"){
			return numberPlates;
		}
		else{
			var list = [];
			for(var i = 0; i<numberPlates.length; i++){

				if(numberPlates[i].startsWith(buttonType)){

					list.push(numberPlates[i])
				} 
			}
			return list;
		}
	}


	//function returning theRegs
	function allTheRegs(){
		return numberPlates;
	}
	return{
		addingRegs,
		radioSelected,
		allTheRegs
	}
}