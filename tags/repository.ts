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

const destroy = async (id: string) => {
  return await Tag.findOneAndDelete({ id });
};

const update = async (id: string, data: ITag) => {
  const oldDate = Tag.findOne({ id });
  return await Tag.findOneAndUpdate(oldDate, data, { new: true });
};

export default {
  list,
  store,
  getOne,
  delete: destroy,
  update,
};
