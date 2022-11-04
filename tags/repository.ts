import { ulid } from "ulid";
import { Tag } from "./models";
import { Tag as ITag } from "./interfaces";

const list = async () => {
  return await Tag.find();
};

const store = async (data: ITag) => {
  const id = ulid();

  const tag = new Tag({ name: data.name, price: data.price, id });

  await tag.save();

  return tag;
};

const getOne = async (id: string) => {
  return await Tag.findOne({ id });
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
