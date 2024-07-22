import Joi from "joi";

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
});

export const updateContactSchema = Joi.object({});
