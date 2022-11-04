import { ulid } from "ulid";
import { Category } from "./models";
import { Category as ICategory } from "./interfaces";

const list = async () => {
  return await Category.find();
};

const store = async (data: ICategory) => {
  const id = ulid();

  const product = new Category({ name: data.name, price: data.price, id });

  await product.save();

  return product;
};

const getOne = async (id: string) => {
  return await Category.findOne({ id });
};

const destroy = async () => {
  return {};
};

export default {
  list,
  store,
  getOne,
  delete: destroy,
};
