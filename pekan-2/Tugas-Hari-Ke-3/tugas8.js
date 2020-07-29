// Soal 1
const lingkaran = (operasi, jariJari = 0) => {
    if (operasi === "luas")
        console.log(`Luas lingkaran = ${Math.PI * jariJari * jariJari}`);
    else if (operasi === "keliling")
        console.log(`Keliling lingkaran = ${Math.PI * 2 * jariJari}`);
    else
        console.log('Invalid operator');
}

console.log('soal 1');
lingkaran("keliling", 7);

// Soal 2
let kalimat = "";

const addString = (sentence) => {
    kalimat += ` ${sentence}`;
}

addString("saya");
addString("adalah");
addString("seorang");
addString("frontend");
addString("developer");

console.log('\n\nSoal 2');
console.log(kalimat);


// Soal 3

class Book {
    constructor(name, totalPages, price) {
        this._name = name;
        this._totalPages = totalPages;
        this._price = price;
    }
}

class komik extends Book {
    constructor(name, totalPages, price, isColorFull) {
        super(name, totalPages, price);
        this._isColorFull = isColorFull;
    }

    get data() {
        return `Comic name = ${this._name}, Pages = ${this._totalPages} pages, Price = Rp${this._price}. This comic is ${!this._isColorFull? "not ": ""}colorfull`;
    }
}

const naruto = new komik("naruto", 123, 100000, false);
console.log('\n\nSoal 3');
console.log(naruto.data);