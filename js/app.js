// Definición de los signos del zodiaco
const zodiacSigns = [
    { sign: "Capricornio", month: 0, day: 20 },
    { sign: "Acuario", month: 1, day: 19 },
    { sign: "Piscis", month: 2, day: 21 },
    { sign: "Aries", month: 3, day: 20 },
    { sign: "Tauro", month: 4, day: 21 },
    { sign: "Géminis", month: 5, day: 21 },
    { sign: "Cáncer", month: 6, day: 23 },
    { sign: "Leo", month: 7, day: 23 },
    { sign: "Virgo", month: 8, day: 23 },
    { sign: "Libra", month: 9, day: 23 },
    { sign: "Escorpio", month: 10, day: 22 },
    { sign: "Sagitario", month: 11, day: 22 },
    { sign: "Capricornio", month: 12, day: 31 }
];

// Función para calcular el signo del zodiaco
function getZodiacSign(month, day) {
    let sign = zodiacSigns.find(zodiacSign => (month < zodiacSign.month) || (month === zodiacSign.month && day <= zodiacSign.day));
    return sign ? sign.sign : "Capricornio";
}

// Función para validar la entrada del usuario
function validateInput(input, type) {
    if (type === "name") {
        return /^[a-zA-Z\s]+$/.test(input);
    } else if (type === "age" || type === "day") {
        return /^[1-9][0-9]*$/.test(input);
    } else if (type === "month") {
        return /^[1-9]$|^1[0-2]$/.test(input);
    }
    return false;
}

// Solicitar datos al usuario
let nombre, age, birthMonth, birthDay;
do {
    nombre = prompt("Por favor, introduce tu nombre:");
} while (!validateInput(nombre, "name"));

do {
    age = prompt("Por favor, introduce tu edad:");
} while (!validateInput(age, "age"));

do {
    birthMonth = prompt("Por favor, introduce tu mes de nacimiento (1-12):");
} while (!validateInput(birthMonth, "month"));

do {
    birthDay = prompt("Por favor, introduce tu día de nacimiento (1-31):");
} while (!validateInput(birthDay, "day"));

// Calcular el año de nacimiento
let birthYear = new Date().getFullYear() - age;

// Determinar el signo del zodiaco
let zodiacSign = getZodiacSign(birthMonth - 1, birthDay);

// Mostrar los resultados
alert(`Hola ${nombre}, naciste en el año ${birthYear} y tu signo del zodiaco es ${zodiacSign}.`);
//sube