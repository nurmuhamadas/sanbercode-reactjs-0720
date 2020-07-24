// Soal 1
console.log('Soal 1\n');

const halo = () => '"Halo Sanbers!"';

console.log(halo());


// Soal 2
console.log('\n\nSoal 2\n');

const kalikan = (num1, num2) => num1 * num2;

const num1 = 12;
const num2 = 4;
const hasilKali = kalikan(num1, num2);
console.log(hasilKali);


// Soal 3
console.log('\n\nSoal 3\n');

const introduce = (name, age, address, hobby) => `Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;

const name = "John";
const age = 30;
const address = "Jalan belum jadi";
const hobby = "Gamming";

const perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);