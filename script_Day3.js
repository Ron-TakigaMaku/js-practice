// Задача 1
// Простой цикл for
// Выведи числа от 1 до 10 (включительно).
// for (let i = 1; i <= 10; i++) {
// 	console.log(i)
// }

// Задача 2
// Чётные числа
// Выведи все чётные числа от 1 до 20.
// for (let i = 1; i <= 20; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i)
// 	}
// }

// Задача 3
// Сумма чисел
// Посчитай сумму всех чисел от 1 до 50. Выведи результат.
// let sum = 0
// for (let i = 1; i <= 50; i++) {
// 	sum += i
// }
// console.log(sum)

// Задача 4
// Таблица умножения
// Выведи таблицу умножения для числа 7 (от 1 до 10).
// Пример: 7 * 1 = 7
// for (let i = 1; i <= 10; i++) {
// 	console.log(`7 * ${i} = ${7 * i}`)
// }

// Задача 5
// While цикл
// С помощью while выведи числа от 10 до 1 (в обратном порядке).
// let i = 10
// while (i >= 1) {
// 	console.log(i)
// 	i--
// }

// Задача 6
// Поиск максимального числа в массиве
// Найди и выведи самое большое число в массиве с помощью цикла.
// const numbers = [12, 45, 67, 23, 89, 34, 56]
// let maxNumber = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] > maxNumber) {
// 		maxNumber = numbers[i]
// 	}
// }
// console.log('Max number', maxNumber)

// Задача 7
// Break
// Выведи числа от 1 до 20, но остановись (break), когда дойдёшь до 12.
// for (let i = 1; i <= 20; i++) {
// 	if (i === 12) {
// 		break
// 	}
// 	console.log(i)
// }

// Задача 8
// Continue
// Выведи все числа от 1 до 15, кроме числа 8 (используй continue).
// for (let i = 1; i <= 15; i++) {
// 	if (i === 8) {
// 		continue
// 	}
// 	console.log(i)
// }

// Задача 9
// Посчитай сумму нечётных чисел от 1 до 100.
// let sum = 0
// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 !== 0) {
// 		sum += i
// 	}
// }
// console.log(sum)

// Задача 10
// Для чисел от 1 до 30:
// Если число делится на 3 → выведи "Fizz"
// Если делится на 5 → выведи "Buzz"
// Если делится и на 3, и на 5 → выведи "FizzBuzz"
// Иначе выведи само число
// for (let i = 1; i <= 30; i++) {
// 	if (i % 15 === 0) {
// 		console.log('FizzBuzz')
// 	} else if (i % 3 === 0) {
// 		console.log('Fizz')
// 	} else if (i % 5 === 0) {
// 		console.log('Buzz')
// 	} else {
// 		console.log(i)
// 	}
// }

// Задача 11
// Подсчёт гласных
// Создай строку "Frontend Developer" и посчитай, сколько в ней гласных букв (a, e, i, o, u, y).
// const str = 'Frontend Developer'
// let vowelCount = 0
// for (let i = 0; i < str.length; i++) {
// 	const char = str[i].toLowerCase()
// 	if (
// 		char === 'a' ||
// 		char === 'e' ||
// 		char === 'i' ||
// 		char === 'o' ||
// 		char === 'u' ||
// 		char === 'y'
// 	) {
// 		vowelCount++
// 	}
// }
// console.log(vowelCount)

// Задача 12
// Простая игра "Угадай число" (с while)
// Загаданное число = 42
// Пользователь "вводит" числа (просто создай переменную)
// Пока не угадает — продолжай цикл
// const secretNumber = 42
// let userGuess = 0
// while (userGuess !== secretNumber) {
// 	userGuess = Math.floor(Math.random() * 100) + 1
// 	console.log('User guess:', userGuess)
// }
