import mongoose from "mongoose";

const facturesSchema = new mongoose.Schema({
  id: String,
  client: String,
  product: String,
  price: Number,
});

export const Factures = mongoose.model("Factures", facturesSchema);
