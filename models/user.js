import { models, model, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "duplicate email is not allowed"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;
