const express = require('express');
const app = express();
const port = 3000;


app.get('/buah', (req, res) => {
    const buah = [
        { id: 1, name: "Apel", price: 10000, quantity: 10 },
        { id: 2, name: "Jeruk", price: 8000, quantity: 20 },
        { id: 3, name: "Mangga", price: 15000, quantity: 15 },
        { id: 4, name: "Pisang", price: 5000, quantity: 25 },
        { id: 5, name: "Duren", price: 30000, quantity: 8 },
        { id: 6, name: "Nangka", price: 12000, quantity: 10 },
        { id: 7, name: "Salak", price: 9000, quantity: 18 },
        { id: 8, name: "Papaya", price: 11000, quantity: 12 },
        { id: 9, name: "Alpukat", price: 14000, quantity: 14 },
        { id: 10, name: "Sawo", price: 6000, quantity: 20 }
    ];
    res.json({ message: "Daftar Buah", buah });
});


app.get('/orang', (req, res) => {
    const orang = [
        { id: 1, name: "Hanafi", age: 28, address: "Surabaya" },
        { id: 2, name: "Faisal", age: 34, address: "Malang" },
        { id: 3, name: "Dina", age: 25, address: "Kediri" },
        { id: 4, name: "Riko", age: 30, address: "Probolinggo" },
        { id: 5, name: "Siti", age: 27, address: "Bojonegoro" },
        { id: 6, name: "Joko", age: 35, address: "Blitar" },
        { id: 7, name: "Rina", age: 29, address: "Pasuruan" },
        { id: 8, name: "Tono", age: 32, address: "Lumajang" },
        { id: 9, name: "Mira", age: 24, address: "Jember" },
        { id: 10, name: "Budi", age: 33, address: "Banyuwangi" }
    ];
    res.json({ message: "Daftar Orang", orang });
});


app.get('/', (req, res) => {
    res.send(`
        <h1>API Data JSON</h1>
        <p><a href="/buah">Daftar Buah</a></p>
        <p><a href="/orang">Daftar Orang</a></p>
    `);
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
