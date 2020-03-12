const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataEntrySchema = new Schema({
  entry: {
    type: array,
    minItems: 2,
    maxItems: 2,
    items: [
      {
        type: number
      }
    ]
  }
});

module.exports = mongoose.model("dataEntry", dataEntrySchema);
