// var emitter = require('events');
// var elevator = emitter.eventEmitter();




var floor = 1;

var up = function(floor){
	setTimeout(floor++, 1000)
}

var down = function(floor){
	setTimeout(floor--, 1000)
}

function people(){
var passengers = [
	{name: 'Marcus', destination: 3},
	{name: 'Vincent', destination: 7},
	{name: 'Lena', destination: 10}
	]

	for(var sum in passengers){
		console.log(sum, passengers[sum].destination);
	}
}


elevator.on('levels', function(passengers){
	
})



// function test(){
// 	for(var i = 0; i < passengers.length; i++){
// 		passengers[i].destination
// 	}
// }



// var total = 0;
// for(var i = 0; i < 10; i++){
// 	console.log(i);
// 	total += i;
// }

// var fruits = ['mango', 'pineapple', 'orange', 'pear'];

// for(var i = 0; i < fruits.length; i++){
// 	console.log(fruits[i]);
// }

// //LOOPING THROUGH OBJECTS
// var data = [
// 	{name: 'Carlos', age: 34},
// 	{name: 'John', age: 23},
// 	{name: 'Lenny', age: 56}
// ]

// for(var element in data){
// 	console.log(element)
// }

// //GETTING THE VALUES AS WELL

// for(var element in data){
// 	console.log(element, data[element]);
// }





