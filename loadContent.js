document.addEventListener("DOMContentLoaded", function () {
    // Header ve footer HTML parçalarını yükle
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');

    // Menü butonunun işlev
    setTimeout(() => {  // HTML parçalarının yüklenmesini 
        const menuBtn = document.querySelector('#menu-btn');
        const navbar = document.querySelector('.header .navbar');

        if (menuBtn && navbar) {
            menuBtn.addEventListener('click', function () {
                navbar.classList.toggle('active');
            });
        } else {
            console.error('Menu button or navbar not found');
        }
    }, 100);  // Kısa bir bekleme süresi 
});

function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading the HTML:', error));
}
const express = require('express');
const sql = require('mssql');

const app = express();
const port = 3000;

// SQL Server bağlantı ayarları
const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'localhost',
    database: 'your_database'
};

// Veritabanına bağlanma
sql.connect(config, err => {
    if (err) console.log(err);
    else console.log('SQL Server bağlantısı başarılı');
});

// API Endpoint
app.get('/api/data', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM your_table');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});

