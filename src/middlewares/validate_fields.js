const { validationResult } = require("express-validator");

const validateFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ data: "", error: errors, status: 500 });
  }

  next();
};

module.exports = {
  validateFields,
};
