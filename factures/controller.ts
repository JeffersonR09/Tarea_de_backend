import { products } from "../db";
import repository from "./repository";
import { Factures as IFactures } from "./interfaces";

const list = async () => {
  return await repository.list();
};

const store = async (data: IFactures) => {
  if (!data.client) throw new Error("Property name is missing");
  const factures = await repository.store(data);
  return factures;
};

const getOne = async (id: string) => {
  const factures = await repository.getOne(id);
  if (!factures) throw new Error("Product not found");

  return factures;
};
const update = async (id: string, data: IFactures) => {
  const factures = await repository.update(id, data);
  if (!factures) throw new Error("Product not found");
  return factures;
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
