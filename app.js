// import modules yang diperlukan
const contacts = require('./contacts');
const validator = require('validator');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder: {
        name: {
            describe: 'Contact Name',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'contact email',
            demandOption: false,
            type: 'string'
        },
        mobile: {
            describe: 'Contact Mobile Phone Number',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        // Membuat object contact
        const contact = {
            name: argv.name,
            email: argv.email,
            mobile: argv.mobile
        }

        // Validasi mobile
        if (validator.isMobilePhone(contact.mobile, 'id-ID')) {
            // Validasi email
            if (contact.email != null && !validator.isEmail(contact.email)) {
                console.log('Gagal menambahkan kontak! Email invalid!');
                return;
            }
            
            contacts.saveContact(contact.name, contact.mobile, contact.email);
            console.log(contact);
        }else{
            console.log('Gagal menambahkan kontak! Mobile invalid!');
        }
        
    }
});

yargs.parse();