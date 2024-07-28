import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleSaveError } from "./hooks.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleSaveError);

export const createContactSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `name must be exist`,
    "string.base": `name should be a type of text`,
    "string.empty": `name cannot be an empty field`,
  }),
  email: Joi.string().required().messages({
    "any.required": `email must be exist`,
    "string.base": `email should be a type of text`,
    "string.empty": `email cannot be an empty field`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `phone must be exist`,
    "string.base": `phone should be a type of text`,
    "string.empty": `phone cannot be an empty field`,
  }),
  favorite: Joi.boolean(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const Contact = model("Contact", contactSchema);

export default Contact;
