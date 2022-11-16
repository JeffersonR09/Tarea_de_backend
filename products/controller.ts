import { products } from "../db";
import repository from "./repository";
import { Product as IProduct } from "./interfaces";

const list = async () => {
  return await repository.list();
};

const store = async (data: any) => {
  if (!data.name) throw new Error("Property name is missing");
  const product = await repository.store(data);
  return product;
};

const getOne = async (id: string) => {
  const product = await repository.getOne(id);
  if (!product) throw new Error("Product not found");

  return product;
};
const update = async (id: string, data: IProduct) => {
  const product = await repository.update(id, data);
  if (!product) throw new Error("Product not found");
  return product;
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
