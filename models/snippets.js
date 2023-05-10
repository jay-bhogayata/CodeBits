import { Schema, model, models } from "mongoose";

const snippetsSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    maxLength: [20, "snippet name can not be more then 20 ch. long."],
  },
  description: {
    type: String,
    maxLength: [
      1000,
      "snippet description can not be more then 1000 ch. long.",
    ],
  },
  code: {
    type: String,
    maxLength: [5000, "snippet content can not be more then 5000 ch. long."],
  },
});

const Snippet = models.Snippet || model("Snippet", snippetsSchema);

export default Snippet;
