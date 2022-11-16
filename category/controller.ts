import { products } from "../db";
import repository from "./repository";
import { Categorie as ICategorie } from "./interfaces";

const list = async () => {
  return await repository.list();
};

const store = async (data: any) => {
  if (!data.name) throw new Error("Property name is missing");
  const categorie = await repository.store(data);
  return categorie;
};

const getOne = async (id: string) => {
  const categorie = await repository.getOne(id);
  if (!categorie) throw new Error("Product not found");

  return categorie;
};
const update = async (id: string, data: ICategorie) => {
  const categorie = await repository.update(id, data);
  if (!categorie) throw new Error("Product not found");
  return categorie;
};

const destroy = async (id: string) => {
  return await repository.delete(id);
};

export default {
  list,
  store,
  update,
  getOne,
  delete: destroy,
};
