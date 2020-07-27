// Soal 1
const arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];

const objekDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
}

console.log('Soal 1\n');
console.log(objekDaftarPeserta);



// Soal 2
const buah = [{
        nama: "strawberry",
        warna: "merah",
        adaBijinya: "tidak",
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "oranye",
        adaBijinya: "ada",
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: "ada",
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: "tidak",
        harga: 5000
    }
];

console.log('\n\nSoal 2\n');
console.log(buah[0]);


// Soal 3
let dataFilm = [];

function addDataFilm(nama, durasi, genre, tahun) {
    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    })
}
addDataFilm("Naruto", "1 jam", "fiksi", 2000);

console.log('\n\nSoal 3\n');
console.log(dataFilm);


// Soal 4
class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name() {
        return this._name;
    }

    get legs() {
        return this._legs;
    }

    get cold_blooded() {
        return this._cold_blooded;
    }
}

// release 0
var sheep = new Animal("shaun");

console.log('\n\nSoal 4 - Release 0\n');
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);


// release 1

class Ape extends Animal {
    constructor(name) {
        super(name);
        this._legs = 2;
    }

    yell() {
        console.log('Auooo');
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
    }

    jump() {
        console.log('hop hop');
    }
}


console.log('\n\nSoal 4 - Release 1\n');
var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"


// Soal 5
class Clock {
    constructor({
        template
    }) {
        this.timer;
        this._template = template;
    }

    render(template) {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(timer);
    }

    start() {
        this.render(this._template);
        this.timer = setInterval(() => this.render(this._template), 1000);
    }

}

var clock = new Clock({
    template: 'h:m:s'
});

console.log('\n\nSoal 5\n');
clock.start();