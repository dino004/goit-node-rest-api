import express from "express";

import contactsControllers from "../controllers/contactsControllers.js";

import {isEmptyBody} from "../middlewares/index.js"

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", contactsControllers.getOneContact);

// contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", isEmptyBody, contactsControllers.createContact);

// contactsRouter.put("/:id", updateContact);

export default contactsRouter;
