import { products } from "../db";
import repository from "./repository";

const list = async () => {
  return await repository.list();
};

const store = async (data: any) => {
  if (!data.name) throw new Error("Property name is missing");
  const tag = await repository.store(data);
  return tag;
};

const getOne = async (id: string) => {
  const tag = await repository.getOne(id);
  if (!tag) throw new Error("Product not found");

  return tag;
};

export default {
  list,
  store,
  getOne,
};
