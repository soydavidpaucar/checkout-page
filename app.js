// document.addEventListener('click', function (event) {
//
// 	// If the clicked element does not have the .click-me class, ignore it
// 	if (!event.target.matches('.button')) return;
//
// 	// Otherwise, do something...
// 	console.log('Hola Mundo');
//
// });
let incrementButton = document.getElementsByClassName('increment');
let decrementButton = document.getElementsByClassName('decrement');
// console.log(incrementButton);
// console.log(decrementButton);

for (let i = 0; i < incrementButton.length; i++) {
	let button = incrementButton[i];
	button.addEventListener('click', function (event) {
		event.preventDefault();
		let buttonClicked = event.target;
		// console.log(buttonClicked);
		let input = buttonClicked.parentElement.children[1];
		// console.log(input);
		let inputValue = input.value;
		// console.log(inputValue);
		let newValue = parseInt(input.value) + 1;
		// console.log(newValue);
		input.value = newValue;
	});
}

for (let i = 0; i < decrementButton.length; i++) {
	let button = decrementButton[i];
	button.addEventListener('click', function (event) {
		event.preventDefault();
		let buttonClicked = event.target;
		// console.log(buttonClicked);
		let input = buttonClicked.parentElement.children[1];
		// console.log(input);
		let inputValue = input.value;
		// console.log(inputValue);
		let newValue = parseInt(inputValue) - 1;
		// console.log(newValue);
		if (newValue >= 0) {
			input.value = newValue;
		} else {
			input.value = 0;
		}
	});
}