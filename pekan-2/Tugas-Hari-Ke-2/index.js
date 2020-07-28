var readBooks = require('./callback.js');

var books = [{
        name: 'LOTR',
        timeSpent: 3000
    },
    {
        name: 'Fidas',
        timeSpent: 2000
    },
    {
        name: 'Kalkulus',
        timeSpent: 4000
    }
];

readBooks(10000, books[0], time => {
    readBooks(time, books[1], time => {
        readBooks(time, books[2], time => {
            console.log('Sisa waktu: ' + time);
        })
    })
});