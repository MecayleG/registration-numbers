describe("The registration numbers exercise", function(){
	describe("The addingRegs function", function(){
		it("should not add to local storage if input is empty", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555"])
			var input = "CA 79247";
			theRegFunction.addingRegs(input);
			assert.deepEqual(theRegFunction.allTheRegs(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247"]);
		});
		it("should add  the registration number CA 79247 to local storage", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555"])
			var input = "CA 79247";
			theRegFunction.addingRegs(input);
			assert.deepEqual(theRegFunction.allTheRegs(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247"]);
		});
		it("should add  the registration number CL 792 476 to local storage", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555", "CA 79247"])
			var input = "CL 792 476";
			theRegFunction.addingRegs(input);
			assert.deepEqual(theRegFunction.allTheRegs(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CL 792 476"]);
		});
		it("should add  the registration number CJ 888-256 to local storage", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555", "CA 79247"])
			var input = "CJ 888-256";
			theRegFunction.addingRegs(input);
			assert.deepEqual(theRegFunction.allTheRegs(), ["CA 888", "CJ 90909", "CL 760-555","CA 79247", "CJ 888-256"]);
		});
		it("should add  the registration number CL 1010 to local storage", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"])
			var input = "CL 1010";
			theRegFunction.addingRegs(input);
			assert.deepEqual(theRegFunction.allTheRegs(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 1010"]);
		});
		it("should not add  the registration number CK 5556 to local storage", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"])
			var input = "CK 5556";
			theRegFunction.addingRegs(input);
			assert.deepEqual(theRegFunction.allTheRegs(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"]);
		});
		it("should not add  the registration number WP 457  to local storage", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"])
			var input = "WP 457 ";
			theRegFunction.addingRegs(input);
			assert.deepEqual(theRegFunction.allTheRegs(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"]);
		});
		it("should not add  the registration number CY 900-123 to local storage", function(){
			let theRegFunction = TheRegistrations(["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"])
			var input = "CY 900 123";
			theRegFunction.addingRegs(input);
			assert.deepEqual(theRegFunction.allTheRegs(), ["CA 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256"]);
		});
		describe("the validate function", function(){
			it("should print out valid reg format CA 7689", function(){
			let theRegFunction = TheRegistrations()
			var reg = "CA 7689";
			assert.deepEqual(theRegFunction.validate(reg), "CA 7689");
		});
			it("should print out valid reg format CL 76220", function(){
			let theRegFunction = TheRegistrations()
			var reg = "CL 76220";
			assert.deepEqual(theRegFunction.validate(reg), "CL 76220");
		});
			it("should print out valid reg format CJ 560-733", function(){
			let theRegFunction = TheRegistrations()
			var reg = "CJ 560-733";
			assert.deepEqual(theRegFunction.validate(reg), "CJ 560-733");
		});
			it("should return false for invalid reg format CK 5087", function(){
			let theRegFunction = TheRegistrations()
			var reg = "CK 5087";
			assert.deepEqual(theRegFunction.validate(reg), false);
		});
			it("should return false for invalid reg format CY 098-543", function(){
			let theRegFunction = TheRegistrations()
			var reg = "CY 098 543";
			assert.deepEqual(theRegFunction.validate(reg), false);
		});
		});
		describe("the noRepeat function", function(){
			it("should not add a registration number again if it has already been entered", function(){
				let theRegFunction = TheRegistrations(["CA 123", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101", "CJ 6743", "CL 666"])
				var entered = "CA 123";
				assert.deepEqual(theRegFunction.noRepeat(entered), false)
			});
			it("should not add a registration number again if it has already been entered", function(){
				let theRegFunction = TheRegistrations(["CJ 457 000", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101", "CJ 6743", "CL 666"])
				var entered = "CJ 457 000";
				assert.deepEqual(theRegFunction.noRepeat(entered), false)
			})
		});
		describe("The radioSelected function should filter registrations for area selected", function(){
		it("should display all registration numbers", function(){
			let theRegFunction = TheRegistrations(["CL 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101", "CJ 6743", "CL 666"]);
			var buttonType = "all";
			assert.deepEqual(theRegFunction.radioSelected(buttonType), ["CL 888", "CJ 90909", "CL 760-555", "CA 79247", "CJ 888-256", "CL 10101", "CJ 6743", "CL 666"]);
		});
			
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