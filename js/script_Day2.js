// Задача 1
// Калькулятор скидки
// Создай переменные price и age.
// Если возраст < 18 или > 65 → скидка 20%
// Если цена > 10000 → дополнительная скидка 10%
// Выведи итоговую цену.
// let price = 10000
// let age = 17
// if (age < 18 || age > 65) {
// 	price = price * 0.8
// }
// if (price > 10000) {
// 	price = price * 0.9
// }
// console.log(price)

// Задача 2
// Время суток
// Создай переменную hour (от 0 до 23).
// 6–11 → "Доброе утро"
// 12–17 → "Добрый день"
// 18–22 → "Добрый вечер"
// иначе → "Доброй ночи"
// let hour = 6
// if (hour >= 6 && hour <= 11) {
// 	console.log('Доброе утро')
// } else if (hour >= 12 && hour <= 17) {
// 	console.log('Добрый день')
// } else if (hour >= 18 && hour <= 22) {
// 	console.log('Добрый вечер')
// } else {
// 	console.log('Доброй ночи')
// }

// Задача 3
// Проверка пароля
// Создай переменную password.
// Если длина пароля меньше 8 символов → "Пароль слишком короткий"
// Если пароль содержит слово "admin" → "Небезопасный пароль"
// Иначе → "Пароль принят"
// let password = 'asdfgsd5r3456'
// if (password.length < 8) {
// 	console.log('Пароль слишком короткий')
// } else if (password.includes('admin')) {
// 	console.log('Небезопасный пароль')
// } else {
// 	console.log('Пароль принят')
// }

// Задача 4
// Оценка фильма
// Создай переменную rating (от 1 до 10).
// 9–10 → "Отличный фильм"
// 7–8 → "Хороший фильм"
// 5–6 → "Средний фильм"
// меньше 5 → "Не рекомендую"
// let rairing = 8
// if (rairing >= 9 && rairing <= 10) {
// 	console.log('Отличный фильм')
// } else if (rairing >= 7 && rairing <= 8) {
// 	console.log('Хороший фильм')
// } else if (rairing >= 5 && rairing <= 6) {
// 	console.log('Плохой фильм')
// } else {
// 	console.log('Не рекомендую')
// }

// Задача 5
// I dont know

// Задача 6
// Функция canDrive
// Напиши функцию canDrive(age, hasLicense), которая возвращает true или false:
// Человек может водить, если ему >= 18 и есть права (hasLicense = true)
// function canDrive(age, hasLicense) {
// 	if (age >= 18 && hasLicense) {
// 		return true
// 	} else {
// 		return false
// 	}
// }
// console.log(canDrive(21, true))

// Задача 7
// Проверка возраста
// Создай переменную age = 20 (или свой возраст).
// Если age >= 18 — выведи "Доступ разрешен", иначе "Доступ запрещен".
// let age = 21
// if (age >= 18) {
// 	console.log('You are an Adult')
// } else {
// 	console.log('You are under 18')
// }

// Задача 8
// Оценка по баллам
// Создай переменную score = 85.
// ≥ 90 → "Отлично"
// ≥ 70 → "Хорошо"
// ≥ 50 → "Удовлетворительно"
// иначе → "Неудовлетворительно"
// if (score >= 90) {
// 	console.log('Отлично')
// } else if (score >= 70) {
// 	console.log('Хорошо')
// } else if (score >= 50) {
// 	console.log('Удовлетворительно')
// } else {
// 	console.log('Неудовлетворительно')
// }

// Задача 9
// Чётное или нечётное число
// Создай переменную num = 7. Выведи "Чётное" или "Нечётное".
// let num = 7
// if (num % 2 === 0) {
// 	console.log('Even')
// } else {
// 	console.log('Odd')
// }

// Задача 10
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

// Задача 11
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

// // Задача 12
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

// Задача 13
// Роли пользователя
// Создай переменную role = "admin".
// "admin" → "Полный доступ"
// "moderator" → "Доступ к модерации"
// иначе → "Обычный пользователь"
// let role = 'admin'
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

// Задача 14
// Функция максимального числа
// Напиши функцию getMax(a, b), которая возвращает большее из двух чисел.
// function getMax(a, b) {
// 	if (a > b) {
// 		console.log(a)
// 	} else {
// 		console.log(b)
// 	}
// }
// getMax(5, 10)
