import express from "express";

import contactsControllers from "../controllers/contactsControllers.js";

import { isEmptyBody } from "../middlewares/index.js";

import { validateBody } from "../helpers/index.js";

import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contacts-schemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

// contactsRouter.get("/:id", contactsControllers.getOneContact);

// contactsRouter.delete("/:id", contactsControllers.deleteContact);

// contactsRouter.post(
//   "/",
//   isEmptyBody,
//   validateBody(createContactSchema),
//   contactsControllers.createContact
// );

// contactsRouter.put(
//   "/:id",
//   isEmptyBody,
//   validateBody(updateContactSchema),
//   contactsControllers.updateContact
// );

export default contactsRouter;
