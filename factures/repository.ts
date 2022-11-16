import { ulid } from "ulid";
import { Factures } from "./models";
import { Factures as IFactures } from "./interfaces";

const list = async () => {
  return await Factures.find();
};

const store = async (data: IFactures) => {
  const id = ulid();

  const facture = new Factures({ ...data, id });

  await facture.save();

  return facture;
};

const getOne = async (id: string) => {
  return await Factures.findOne({ id });
};

const destroy = async (id: string) => {
  return await Factures.findOneAndDelete({ id });
};

const update = async (id: string, data: IFactures) => {
  const oldDate = Factures.findOne({ id });
  return await Factures.findOneAndUpdate(oldDate, data, { new: true });
};

export default {
  list,
  store,
  getOne,
  delete: destroy,
  update,
};
