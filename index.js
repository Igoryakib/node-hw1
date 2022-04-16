const { Command } =  require("commander");
const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const args = program.opts();

require('colors');

const {listContacts, getContactById, removeContact, addContact} = require('./contacts.js');

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
      case 'list':
        // ...
        console.table( await listContacts());
        break;
  
      case 'get':
        // ... id
        getContactById(id);
        break;
  
      case 'add':
        // ... name email phone
        addContact(name, email, phone)
        break;
  
      case 'remove':
        // ... id
        removeContact(id);
        break;
  
      default:
        console.log(`Sorry but our program doesn't support this action ${action}`.red);
    }
  }
  
  invokeAction(args);