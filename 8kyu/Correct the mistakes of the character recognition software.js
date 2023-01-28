// Ваша задача - исправить ошибки в оцифрованном тексте. Вам нужно только справиться со следующими ошибками:

// S неверно интерпретируется как 5
// O неверно интерпретируется как 0
// I неверно интерпретируется как 1
// Тестовые случаи содержат числа только по ошибке.

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S');

//or

// function correct(string) {
// 	const map = {
// 		0: "O",
// 		1: "I",
// 		5: "S"
// 	};
	
// 	return string
// 		.split("")
// 		.map(c => map.hasOwnProperty(c) ? map[c] : c)
// 		.join("");
// }

//or

// function correct(string) {
// 	return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
// }