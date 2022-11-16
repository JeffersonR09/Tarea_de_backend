import mongoose from "mongoose";

const categorieSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  password: String,
});

export const Categorie = mongoose.model("Categorie", categorieSchema);
