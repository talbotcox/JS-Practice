console.log("\n 1. \n")

function one(arg){
var counter = 0
	for(var i = 0; i < arg+1; i++){
		console.log(counter)
		counter = counter + 100
	}
}

one(5)

console.log("\n 2. \n")

function two(arg){
var counter = 1
	for(var i = 0; i < arg; i++){
		console.log(counter)
		counter = counter + counter
	}
}

two(7)


console.log("\n 3. \n")

function three(arg){
var counter = 1
	for(var i = 0; i < arg; i++){
		console.log(counter)
		console.log(counter)
		console.log(counter)
		counter = counter + 1
		
	}
}

three(3)



console.log("\n 4. \n")
function four(arg){
var counter = 0
	for(var i = 0; i < arg; i++){
		console.log(counter)
		counter = counter + 2
		
	}
}

four(6)

console.log("\n 5. \n")
function five(arg){
var counter = 3
	for(var i = 0; i < arg; i++){
		console.log(counter)
		counter = counter + 3
		
	}
}

five(5)

console.log("\n 6. \n")
function six(arg){
var counter = 9
	for(var i = 0; i < arg; i++){
		console.log(counter)
		counter = counter -1
		
	}
}

six(10)

console.log("\n 7. \n")
function seven(arg){
var counter = 0
	for(var i = 0; i < arg; i++){
		console.log(counter)
		counter = counter + 1
		if(counter === 4){
			counter = 0
		}
	}
}

seven(12)
