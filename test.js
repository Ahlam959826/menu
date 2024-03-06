//   global scope 

var greeter = "hey hi";
// declaration
    
function newFunction() {
    // local scope
    var hello = "hello";
}


console.log("accessing  global scope",greeter)
console.log("accessing  local scope",hello)

