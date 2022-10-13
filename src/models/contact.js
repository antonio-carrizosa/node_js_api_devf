const { Schema, model } = require("mongoose");

const ContactSchema = Schema({
  name: {
    type: String,
    required: [true, "Required name"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Required phone"],
  },
  email: {
    type: String,
    required: [true, "Required E-mail"],
  },
  relationship: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
});

ContactSchema.methods.toJSON = function () {
  const { __v, status, _id: id, ...data } = this.toObject();
  return { id, ...data };
};

module.exports = model("Contact", ContactSchema);
