import { products } from "../db";
import repository from "./repository";
import { Tag as ITag } from "./interfaces";

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
const update = async (id: string, data: ITag) => {
  const tag = await repository.update(id, data);
  if (!tag) throw new Error("Product not found");
  return tag;
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
