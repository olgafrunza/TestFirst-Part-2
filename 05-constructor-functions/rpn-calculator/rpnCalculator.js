/* eslint-disable no-unused-vars, no-throw-literal*/

// function RPNCalculator() {
//     this.stack = []
// }
 
 
// RPNCalculator.prototype.push = function(num) {
//     this.stack.push(num)
// } 
 
//  RPNCalculator.prototype.pop = function(reuse) {
//      if(this.stack.length < 2) {
//          throw ('rpnCalculatorInstance is empty')
//      }else{
//          let val2 = this.stack.pop()
//          let val1 = this.stack.pop()
//          this.push(reuse(val2, val1)) 
//      }
//  }
 
//  RPNCalculator.prototype.plus = function() {
//     this.pop((val2, val1) => val1+val2)
//  }
 
//  RPNCalculator.prototype.value = function() {
//      return this.stack[this.stack.length -1]
//  }
 
//  RPNCalculator.prototype.minus = function() {
//     this.pop((val2, val1) => val1-val2)
//     //  this.stack.push(diff)
//  }
 
//  RPNCalculator.prototype.times = function() {
//      this.pop((val2, val1) => val1 * val2)
//  }
 
//  RPNCalculator.prototype.divide = function() {
//      this.pop((val2, val1) => val1 / val2)
//  }

 
 
 
 function RPNCalculator () {
     this.stack = []
     }
 
 RPNCalculator.prototype.pushNum = function (num){
     this.stack.push(num)
 }
 
 RPNCalculator.prototype.popNum = function(reuse) {
     if (this.stack.length < 2){
     throw "rpnCalculatorInstance is empty"
    } else {
     let value2 = this.pop()
     let value1 = this.pop()
     this.pushNum(reuse(value2, value1))
        
    }
 }
 
  RPNCalculator.prototype.value = function() {
      return this.stack[this.stack.length - 1]
  }
  
  RPNCalculator.prototype.add = function() {
      this.popNum((value2, value1) => value2 + value1)
  }
 
  RPNCalculator.prototype.minus = function() {
      this.popNum((value2, value1) => value1-value2)
  }
 
  RPNCalculator.prototype.taken = function() {
      this.popNum((value2, value1) => value1*value2)
  }
 
  RPNCalculator.prototype.div = function() {
      this.popNum((value2, value1) => value1/value2)
  }
 
 
 
 
 
 
 
 
 
