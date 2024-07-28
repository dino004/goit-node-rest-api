import express from "express";

import contactsControllers from "../../controllers/contactsControllers.js";

import { isEmptyBody, isValidId } from "../../middlewares/index.js";

import { validateBody } from "../../helpers/index.js";

import {
  createContactSchema,
  updateContactSchema,
  contactFavoriteSchema,
} from "../../models/Contact.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", isValidId, contactsControllers.getOneContact);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(createContactSchema),
  contactsControllers.createContact
);

contactsRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(updateContactSchema),
  contactsControllers.updateContact
);

contactsRouter.delete("/:id", isValidId, contactsControllers.deleteContact);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  validateBody(contactFavoriteSchema),
  contactsControllers.updateStatusContact
);

export default contactsRouter;
