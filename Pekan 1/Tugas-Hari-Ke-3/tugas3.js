// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

kataKedua = kataKedua[0].toUpperCase() + kataKedua.slice(1);

var kalimat = kataPertama + " " + kataKedua + " " + kataKetiga + " " + kataKeempat.toUpperCase();
console.log(kalimat);



// Soal 2
// karena nama variabel sama, tidak saya lakukan deklrasari lagi
kataPertama = "1";
kataKedua = "2";
kataKetiga = "3";
kataKeempat = "4";

const angkaPertama = Number(kataPertama);
const angkaKedua = Number(kataKedua);
const angkaKetiga = Number(kataKetiga);
const angkaKeempat = Number(kataKeempat);

console.log("Jumlah = " + angkaPertama + angkaKedua + angkaKetiga + angkaKeempat);




// soal 3
var kalimat = 'wah javascript itu keren sekali';

// karena nama variabel sama, tidak saya lakukan deklrasari lagi
kataPertama = kalimat.substring(0, 3);
kataKedua = kalimat.substring(4, 14);
kataKetiga = kalimat.substring(15, 18);
kataKeempat = kalimat.substring(19, 24);
kataKelima = kalimat.substring(25);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);


// soal 4
var nilai = 86;

if (nilai >= 80) console.log('indeksnya A');
else if (nilai >= 70) console.log('indeksya B');
else if (nilai >= 60) console.log('indeksya B');
else if (nilai >= 50) console.log('indeksya B');
else console.log('indeksnya E');



// soal 5
var tanggal = 12;
var bulan = 2;
var tahun = 2000;

switch (bulan) {
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        break;
    case 7:
        bulan = "Juli";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        bulan = "September";
        break;
    case 10:
        bulan = "Oktober";
        break;
    case 11:
        bulan = "November";
        break;
    case 12:
        bulan = "Desember";
        break;

    default:
        console.log('invalid input');
        break;
}

console.log(tanggal + " " + bulan + " " + tahun);