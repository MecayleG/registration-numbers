describe("The registration numbers exercise", function(){
	describe("The addingRegs function", function(){
		it("should add  registrations that start with CA local storage", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555"])
			var input = "CA 79247";
			theRegFunction.addingRegs(input);
			assert.deepEqual(theRegFunction.allTheRegs(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247"]);
		});
		it("should add  registrations that start with CJ local storage", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555", "CA 79247"])
			var input = "CJ 888-256";
			theRegFunction.addingRegs(input);
			assert.deepEqual(theRegFunction.allTheRegs(), ["CA 888", "CJ 90909", "CL 760-555","CA 79247", "CJ 888-256"]);
		});
		it("should add  registrations that start with CL local storage", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"])
			var input = "CL 10101";
			theRegFunction.addingRegs(input);
			assert.deepEqual(theRegFunction.allTheRegs(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101"]);
		});
		describe("The radioSelected function should filter registrations for area selected", function(){
		it("should display all registrations starting with CA for Cape Town", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101"]);
			var buttonType = "CA";
	
			assert.deepEqual(theRegFunction.radioSelected(buttonType), ["CA 888",  "CA 79247"]);
		});
		
		it("should display all registrations starting with CJ for Paarl", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101", "CJ 6743"]);
			var buttonType = "CJ";
		
			assert.deepEqual(theRegFunction.radioSelected(buttonType), ["CJ 90909",  "CJ 888-256", "CJ 6743"]);
		});
		it("should display all registrations starting with CL for Stellenbosch", function(){
			let theRegFunction = TheRegistrations(["CL 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101", "CJ 6743", "CL 666"]);
			var buttonType = "CL";
			assert.deepEqual(theRegFunction.radioSelected(buttonType), ["CL 888",  "CL 760-555", "CL 10101", "CL 666"]);
		});
	});
	});
});