const { nanoid } = require("nanoid");
const fs = require("fs").promises;
const contactsPath = "./db/contacts.json";
require('colors');

const listContacts =  async () => {
  // ...твій код
  return JSON.parse(await fs.readFile(contactsPath));
};

const getContactById = async (contactId) => {
  // ...твій код
  const contactsArray = await listContacts();
  const user = contactsArray.find(item => item.id === contactId);
  console.log(`Done, we searched user ${user.name}`.green);
  console.log(user);
};

const removeContact = async (contactId) => {
  // ...твій код
  const contactsArray = await listContacts();
  const filteredArray = contactsArray.filter(item => item.id !== contactId);
  const deletedContact = contactsArray.find(item => item.id === contactId);
  fs.writeFile(contactsPath, JSON.stringify(filteredArray));
  console.log(`Well done delete user ${deletedContact.name}`.green);
  console.log(deletedContact);
};

const addContact = async (name, email, phone) => {
  // ...твій код
  const contactObj = {
      name,
      email,
      phone,
      id: nanoid()
  };
  const contactsArray = await listContacts();
  contactsArray.push(contactObj);
  fs.writeFile(contactsPath, JSON.stringify(contactsArray));
  console.log(`Done, we wrote your user ${name}`.green);
  console.log(contactObj);
};

module.exports = {
    listContacts,
    removeContact,
    getContactById,
    addContact
};