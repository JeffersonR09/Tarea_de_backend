import { products } from "../db";
import repository from "./repository";

const list = async () => {
  return await repository.list();
};

const store = async (data: any) => {
  if (!data.name) throw new Error("Property name is missing");
  const category = await repository.store(data);
  return category;
};

const getOne = async (id: string) => {
  const category = await repository.getOne(id);
  if (!category) throw new Error("Products not found");

  return category;
};

export default {
  list,
  store,
  getOne,
};
