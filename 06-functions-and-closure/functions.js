/* eslint-disable no-unused-vars */

function concatString() {
	return Array.from(arguments).join("")
}






// function yourFunctionRunner() {
// 	return function callThisFunction () {
// 		return "Called Value"
// 	}
// 	return function andThisFunction () {
// 		return ' and Other Value'
// 	}
// 	return 
// }

function yourFunctionRunner() {
	let out = "";
	for (let i = 0; i < arguments.length; i++) {
		out += arguments[i]()
	}
	return out
}






function makeAdder(num) {
	return function returnValue(num2) {
		return num + num2
	}
}





const once = (func) => {
	let notCalled = true;
	return () => {
		if (notCalled) { //I need explanation
			notCalled = false;
			return func();
		}
		return 'the function has already been called...'
	}
}



function createObjectWithClosures() {
	let total = 0
	return {
		oneIncrementer() {
			total += 1
		},
		tensIncrementer() {
			total += 10
		},
		getValue() {
			return total
		},
		setValue(value) {
			total = value
		}
	}
}




function dontSpillTheBeans(secret) {
	return {
		getSecret() {
			return secret
		},
		setSecret(val) {
			secret = val
		}
	}
}
