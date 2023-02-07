const fs = require('fs');

// Function untuk menambahkan kontak
const saveContact = (name, phone, email) => {
    // Membuat variable untuk path folder
    const dirPath = './data';

    // Cek path folder
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    // Membuat variable untuk path file contacts.json
    const dataPath = 'data/contacts.json';

    // Cek path file contacts.json
    if (!fs.existsSync(dataPath)) {
        fs.writeFileSync(dataPath, '[]', 'utf-8');
    }

    // Parsing file contacts.json menjadi sebuah array
    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

    // Membuat object contact berdasarkan name, phone, dan email
    const contact = {
        name,
        phone,
        email
    };

    // Menambahkan object contact kedalam array contacts
    contacts.push(contact);

    // Mengoverwrite file contacts.json
    const jsonString = JSON.stringify(contacts);
    fs.writeFileSync(dataPath, jsonString);

    console.log('Kontak berhasil ditambahkan!');
};

module.exports = { saveContact }