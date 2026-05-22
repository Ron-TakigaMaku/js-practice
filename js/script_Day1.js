// // Задача 1
// const city = 'Kyiv'
// console.log(city)

// // Задача 2
// const name = 'Ron'
// let age = 22
// const currentYear = 2026
// const birthYear = currentYear - age
// console.log(name, 'was born in', birthYear)

// // Задача 3
// let a = 5
// let b = 10

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)

// // Задача 4
// const profession = 'Frontend Developer'
// console.log(profession.length)

// Задача 5
// const name = 'Ron'
// let age = 22
// console.log(`My name is ${name} and my age is ${age}`)

// Задача 6
// Используй template literal (обратные кавычки  ), чтобы вывести ту же фразу.
// const name = 'Ron'
// let age = 22
// console.log(`My name is ${name} and my age is ${age}`)

// Задача 7
// const price = 1000
// const discount = 15
// const discountedPrice = price - (price * discount) / 100
// console.log(`Discounted price: ${discountedPrice}`)

// Задача 8
// const strNumber = '25'
// const number = parseInt(strNumber)
// const results = number + 10
// console.log(results)

// Задача 9
// console.log(17 % 3)

// Задача 10
// let age = 21
// if (age >= 18) {
// 	console.log('You are an adult')
// } else {
// 	console.log('You are under 18')
// }

// Задача 11
// Проверка возраста
// Создай переменную age = 20 (или свой возраст).
// Если age >= 18 — выведи "Доступ разрешен", иначе "Доступ запрещен".
// let age = 21
// if (age >= 18) {
// 	console.log('You are an Adult')
// } else {
// 	console.log('You are under 18')
// }

// Задача 12
// Оценка по баллам
// Создай переменную score = 85.
// ≥ 90 → "Отлично"
// ≥ 70 → "Хорошо"
// ≥ 50 → "Удовлетворительно"
// иначе → "Неудовлетворительно"
// let score = 85
// if (score >= 90) {
// 	console.log('Grade: A')
// } else if (score >= 80) {
// 	console.log('Grade: B')
// } else if (score >= 70) {
// 	console.log('Grade: C')
// } else if (score >= 60) {
// 	console.log('Grade: D')
// } else {
// 	console.log('Grade: F')
// }

// Задача 13
// Чётное или нечётное число
// Создай переменную num = 7. Выведи "Чётное" или "Нечётное".
// let num = 7
// if (num % 2 === 0) {
// 	console.log('Even')
// } else {
// 	console.log('Odd')
// }

// Задача 14
// Температура
// Создай переменную temperature = 18.
// < 0 → "Холодно"
// 0–15 → "Прохладно"
// 16–25 → "Тепло"
// 25 → "Жарко"
// let temperature = 18
// if (temperature <= 0) {
// 	console.log('Freezing')
// } else if (temperature <= 15) {
// 	console.log('Cold')
// } else if (temperature <= 25) {
// 	console.log('Warm')
// } else {
// 	console.log('Hot')
// }

// Задача 15
// Покупка товара (&&)
// hasMoney = true, inStock = false.
// Если есть деньги И товар в наличии — "Покупка прошла успешно", иначе "Покупка невозможна".
// let hasMoney = true
// let inStock = false
// if (hasMoney && inStock) {
// 	console.log('You can buy the item')
// } else {
// 	console.log('You cannot buy the item')
// }

// // Задача 16
// Вход в клуб (||)
// age = 17, hasVIP = true.
// Если возраст ≥ 18 ИЛИ есть VIP — "Вход разрешен", иначе "Вход запрещен".
// let age = 17
// let hasVIP = true
// if (age >= 18 || hasVIP) {
// 	console.log('Access Granted')
// } else {
// 	console.log('Access Denied')
// }

// Задача 17
// Роли пользователя
// Создай переменную role = "admin".
// "admin" → "Полный доступ"
// "moderator" → "Доступ к модерации"
// иначе → "Обычный пользователь"
// role = 'admin'
// switch (role) {
// 	case 'admin':
// 		console.log('You have full access')
// 		break
// 	case 'moderator':
// 		console.log('You have moderator access')
// 		break
// 	default:
// 		console.log('You have no access')
// }

// Задача 18
// Функция максимального числа
// Напиши функцию getMax(a, b), которая возвращает большее из двух чисел.
// function getMax(a, b) {
// 	if (a > b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }
// getMax(5, 10)
