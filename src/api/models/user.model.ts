import mongoose, { Schema, Document } from "mongoose";

 interface IUser {
  username: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps:true
  }
);
const User = mongoose.model("users", UserSchema);
export {
    User,IUser
};
