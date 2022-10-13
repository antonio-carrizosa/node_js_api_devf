// import { getConnection } from "./../commons/Connection";

const Contact = require("../models/contact");

const buildSuccess = (data, status = 200) => {
  return { status, data, error: "" };
};
const buildError = (e, status = 500) => {
  return { status, data: "", error: e };
};

const getContacts = async (req, res) => {
  try {
    const result = await Contact.find({ status: true });
    res.status(200).json(buildSuccess(result));
  } catch (error) {
    res.status(500).json(buildError(error));
  }
};

const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json(buildError("Contact Not Founded"));
    }
    res.status(200).json(buildSuccess(contact));
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const addContact = async (req, res) => {
  try {
    const data = req.body;
    const contact = new Contact(data);
    await contact.save();
    res.status(200).json(buildSuccess(contact));
  } catch (error) {
    res.status(500).json(buildError(error));
  }
};

const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json(buildError("Contact Not Founded"));
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json(buildError("Contact Not Founded"));
    }
    const deletedContact = await Contact.findByIdAndUpdate(
      id,
      { status: false },
      { new: true }
    );
    res.status(200).json(buildSuccess(deletedContact));
  } catch (error) {
    res.status(500).json(buildError(error.message));
  }
};

module.exports = {
  getContacts,
  getContact,
  addContact,
  updateContact,
  deleteContact,
};
