//creating object using prototype without constructor
let Stuff = {
	name:			"",
	amount:			0,
	isPurchased:	false,
	price:			0,
	set addToCart(howMany) {
		this.amount += howMany;
	},
	set purchase(val = true) {
		this.isPurchased = true;
	}
};

let shoppingList = [];
let bill = [];

function addStuff() {
	do {
		const newStuff = Object.create(Stuff);
		newStuff.name = prompt('Type stuff name please');
		newStuff.addToCart = +prompt('How many items do you wish to buy?');
		if (shoppingList.some(elem => elem.name === newStuff.name)) {
			shoppingList[
				shoppingList.findIndex(elem => elem.name === newStuff.name)
			].addToCart = newStuff.amount;
		} else {
			shoppingList.push(newStuff);
		}
	} while (confirm('Wish to add another stuff to the shopping list?'));
}

function payForStuff() {
	const stuffName = prompt('Type stuff name which you paying for:');
	if (shoppingList.some(elem => elem.name === stuffName)) {
		stuffPrice = +prompt('Type price for stuff unit:');
		positionIndex = shoppingList.findIndex(elem => elem.name === stuffName);
		shoppingList[positionIndex].purchase = true;
		shoppingList[positionIndex].price = stuffPrice;
		bill.push(...shoppingList.splice(positionIndex, 1));
		alert('Don\'t forget your bill please!');
	} else {
		alert('You haven\'t such stuff in your cart!');
	}
}

function viewShoppingList() {
	console.log('=========NOT PURCHASED YET==========');
	shoppingList.forEach(
		element => console.log(`Name: ${element.name}, Amount: ${element.amount}`)
	);
	console.log('=========PURCHASED ALREADY==========');
	bill.forEach(
		element => console.log(`Name: ${element.name}, Amount: ${element.amount}`)
	);
	alert('You can view shopping list in console!');
}

function printTheBill() {
	console.log('===THANKS FOR VISITING US======');
	bill.forEach(
		element => console.log(`Name: ${element.name}, Amount: ${element.amount}, Price: ${element.price}`)
	);
	alert('You can view shopping list in console!');
}

function getTotalPayment() {
	let totalFee = 0;
	bill.forEach(
		element => totalFee += element.price * element.amount
	);
	return totalFee;
}

function getPositionsAmount() {
	let positionsAmount = 0;
	bill.forEach(
		element => positionsAmount += element.amount
	);
	return positionsAmount;
}

function totalPayment() {
	total = getTotalPayment();
	alert(`Total charge of the bill is ${total}`);
}

function averagePrice() {
	alert(`Average price is ${getTotalPayment() / getPositionsAmount()}`);
}

function mostExpensive() {
	let mostExpensiv = Object.create(Stuff);
	bill.forEach(
		(element) => {
			if ((element.amount * element.price) > (mostExpensiv.amount * mostExpensiv.price)) {
				mostExpensiv.amount = element.amount;
				mostExpensiv.price = element.price;
				mostExpensiv.name = element.name;
			}
		}
	);
	alert(`Most expensive is ${mostExpensiv.name} quantity ${mostExpensiv.amount} price ${mostExpensiv.price}`);
}

//-------------------------------
let Time = {
	hours: 			0,
	minutes:		0,
	seconds:		0,

	display: () => {
		alert(`Current time is ${this.hours} : ${this.minutes} : ${this.seconds}`);
	},

	addSeconds: (secondsAmount) => {
		if (Math.abs(secondsAmount) > 60) {
			this.addMinutes(
				Math.trunc(secondsAmount / 60)
			);
			this.seconds += secondsAmount % 60;
		} else {
			this.seconds += secondsAmount;
		};
		if (this.seconds >= 60) {
			this.minutes++;
			this.seconds = this.seconds - 60;
		};
	},

	addMinutes: (minutesAmount) => {
		if (Math.abs(minutesAmount) > 60) {
			this.addHours(
				Math.trunc(minutesAmount / 60)
			);
			this.minutes += minutesAmount % 60;
		} else {
			this.minutes += minutesAmount;
		};
		if (this.minutes >= 60) {
			this.addHours(1);
			this.minutes = this.minutes - 60;
		};
	},

	addHours: (hoursAmount) => {
		if (Math.abs(hoursAmount) > 24) {
			if (Math.trunc(hoursAmount / 24) > 1) {
				this.hours += hoursAmount % 24;
			} else {
				this.hours += Math.sign(Math.abs(hoursAmount) - 24);
			}
			
		} else {
			this.hours = this.hours + hoursAmount;
		};
		if (this.hours >= 24) {
			this.hours = this.hours - 24;
		};
	},
}

let timeStamp = Object.create(Time);
function initTime() {
	const hr = +prompt('Type hours, please');
	const min = +prompt('Type minutes, please');
	const sec = +prompt('Type seconds, please')
	
	timeStamp.addHours(hr);
	timeStamp.addMinutes(min);
	timeStamp.addSeconds = sec;
	timeStamp.display();
}

function adjustSeconds() {
	timeStamp.addSeconds(+prompt('Type seconds to adjust, please'));
	timeStamp.display();
}

function adjustMinutes() {
	timeStamp.addMinutes(+prompt('Type minutes to adjust, please'));
	timeStamp.display();
}

function adjustHours() {
	timeStamp.addHours(+prompt('Type hours to adjust, please'));
	timeStamp.display();
}