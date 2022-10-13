const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate_fields");

const {
  getContacts,
  getContact,
  addContact,
  updateContact,
  deleteContact,
} = require("../controllers/contact.controller");

/* A router that is used to create the routes for the API. */
// GET http://localhost:5000/api/Contacts/
router.get("/", getContacts);
// GET http://localhost:5000/api/Contacts/:id
router.get(
  "/:id",
  [check("id", "Invalid Id").isMongoId(), validateFields],
  getContact
);
// POST http://localhost:5000/api/Contacts/
router.post(
  "/",
  [
    check("name", "Required name").not().isEmpty(),
    check("phone", "Required phone").not().isEmpty(),
    check("email", "Required email").not().isEmpty(),
    validateFields,
  ],
  addContact
);
// PUT http://localhost:5000/api/Contacts/:id
router.put(
  "/:id",
  [check("id", "Invalid Id").isMongoId(), validateFields],
  updateContact
);
// DELETE http://localhost:5000/api/products/:sku
router.delete(
  "/:id",
  [check("id", "Invalid Id").isMongoId(), validateFields],
  deleteContact
);

module.exports = router;
