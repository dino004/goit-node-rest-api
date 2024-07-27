import Contact from "../models/Contact.js";

import { ctrlWrapper } from "../helpers/index.js";

import { HttpError } from "../helpers/index.js";

const getAllContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getOneContact = async (req, res) => {
//   const { id } = req.params;
//   const result = await contactsService.getContactById(id);
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.json(result);
// };

// const createContact = async (req, res) => {
//   const { name, email, phone } = req.body;
//   const result = await contactsService.addContact(name, email, phone);

//   res.status(201).json(result);
// };

// const updateContact = async (req, res) => {
//   const { id } = req.params;
//   const result = await contactsService.updateContactById(id, req.body);
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.json(result);
// };

// const deleteContact = async (req, res) => {
//   const { id } = req.params;
//   const result = await contactsService.removeContact(id);
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.json(result);
// };

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  // getOneContact: ctrlWrapper(getOneContact),
  // deleteContact: ctrlWrapper(deleteContact),
  // createContact: ctrlWrapper(createContact),
  // updateContact: ctrlWrapper(updateContact),
};
