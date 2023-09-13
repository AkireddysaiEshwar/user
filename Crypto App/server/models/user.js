import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  modifiedOn: {
    type: Date,
    required: true,
  },
  users: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
  ],
});

export default mongoose.model("User", userSchema);
