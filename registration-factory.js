function TheRegistrations(allRegs){
	var numberPlates = allRegs || [];


	//function that does not add empty input and adds all valid registrations to array
	function addingRegs(input){
		if(input !== ""){
			if(/C[ALJ] \d{3,5}$/.test(input) || /C[ALJ] \d+\s|-\d+$/.test(input)){
				numberPlates.push(input)
			} else {
				return false;
			}
		} 
	}
	//function that checks if reg entered is valid according to regEx
	function validate(reg){
		if(/C[ALJ] \d{3,5}$/.test(reg) || /C[ALJ] \d+\s|-\d+$/.test(reg)){
			if(!numberPlates.includes(reg)){
				return reg;
			} else{
				return false
			}
			
		} else{
			return false;
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
		console.log(numberPlates)
		return numberPlates;
	}
	return{
		addingRegs,
		validate,
		radioSelected,
		allTheRegs
	}
}