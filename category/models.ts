import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  password: String,
});

export const Category = mongoose.model("Category", categorySchema);
