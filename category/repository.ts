import { ulid } from "ulid";
import { Categorie } from "./models";
import { Categorie as ICategorie } from "./interfaces";

const list = async () => {
  return await Categorie.find();
};

const store = async (data: ICategorie) => {
  const id = ulid();

  const categorie = new Categorie({ name: data.name, price: data.price, id });

  await categorie.save();

  return categorie;
};

const getOne = async (id: string) => {
  return await Categorie.findOne({ id });
};

const destroy = async (id: string) => {
  return await Categorie.findOneAndDelete({ id });
};

const update = async (id: string, data: ICategorie) => {
  const oldDate = Categorie.findOne({ id });
  return await Categorie.findOneAndUpdate(oldDate, data, { new: true });
};

export default {
  list,
  store,
  getOne,
  delete: destroy,
  update,
};
