// Day 4: Functions
// Блок 1
// 1
// let name = 'Ron'
// function greet(name) {
// 	console.log('Hello, ' + name + '!')
// }
// greet(name)

// 2
// let name = 'Ron'
// const greet = name => {
// 	return `Hello ${name}`
// }
// console.log(greet(name))

// 3
// let name = 'Ron'
// const greet = name => `Hello ${name}`
// console.log(greet(name))

// Задание 1
// 1
// function add(a, b) {
// 	return a + b
// }
// console.log(add(5, 10))

// 2
// function subtract(a, b) {
// 	return a - b
// }
// console.log(subtract(10, 5))

// 3
// function multiply(a, b) {
// 	return a * b
// }
// console.log(multiply(5, 10))

// 4
// function divide(a, b) {
// 	if (b === 0) {
// 		return 'Error: Division by zero is not allowed.'
// 	}
// 	return a / b
// }
// console.log(divide(10, 5))
// console.log(divide(10, 0))

// Задание 2
// let age = 12
// function checkAge(age) {
// 	if (age >= 18) {
// 		console.log('Access granted')
// 	} else {
// 		console.log('Access denied')
// 	}
// }
// checkAge(age)

// Задание 3
// let age = 21
// let name = 'Ron'
// function formatUser(name, age) {
// 	return `User ${name}, is ${age} years old.`
// }
// console.log(formatUser(name, age))

// Блок 2
// Задание 1
// const products = [
// 	{ id: 1, title: 'iPhone', price: 1300 },
// 	{ id: 2, title: 'Samsung', price: 1200 },
// 	{ id: 3, title: 'Xiaomi', price: 400 },
// 	{ id: 4, title: 'Redmi', price: 300 },
// 	{ id: 5, title: 'POCO', price: 700 },
// 	{ id: 6, title: 'BLACKBERRY', price: 900 },
// ]
// function filterProductions(products, minPrice) {
// 	return products.filter(product => product.price >= minPrice)
// }
// console.log(filterProductions(products, 800))

// Задание 2
// function findPruductionById(productions, id) {
// 	return productions.find(production => production.id === id)
// }
// console.log(findPruductionById(products, 2))

// Задание 3
// function getProductionTitles(products) {
// 	return products.map(product => product.title)
// }
// console.log(getProductionTitles(products))

// Задание 4
// function someProductionExpensive(productions, price) {
// 	return productions.some(production => production.price > price)
// }
// console.log(someProductionExpensive(products, 1000))

// Задание 5
// function everyProductionAffordable(productions, price) {
// 	return productions.every(production => production.price < price)
// }
// console.log(everyProductionAffordable(products, 300))
