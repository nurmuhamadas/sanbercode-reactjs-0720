// Soal 1
console.log('SOAL 1\n');

let i = 2;

console.log('LOOPING PERTAMA');
while (i <= 20) {
    console.log(`${i} - I love coding`);
    i += 2;
}

console.log('LOOPING KEDUA');
while (i >= 2) {
    console.log(`${i} - I love coding`);
    i -= 2;
}


// Soal 2
console.log('\n\n\nsoal 2\n');

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        if (i % 3 == 0) console.log(`${i} - I Love Coding`);
        else console.log(`${i} - Santai`);
    } else {
        console.log(`${i} - Berkualitas`);
    }
}


// Soal 3
console.log('\n\n\nsoal 3\n');

let variable = "";
for (let i = 0; i < 7; i++) {
    variable += "#"
    console.log(variable);
}


// Soal 4
console.log('\n\n\nsoal 4\n');

var kalimat = "saya sangat senang belajar javascript"

console.log(kalimat.split(" "));


// Soal 5
console.log('\n\n\nsoal 5\n');

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

daftarBuah.sort().forEach(buah => {
    console.log(buah);
})