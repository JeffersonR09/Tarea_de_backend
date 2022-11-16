import { Express } from "express";
import productRouter from "./products/router";
import authRouter from "./auth/router";
import categoryRouter from "./category/router";
import tagsRouter from "./tags/router";
import clientRouter from "./clients/router";
import facturesRouter from "./factures/router";

const router = (app: Express) => {
  app.use("/auth", authRouter);
  app.use("/products", productRouter);
  app.use("/category", categoryRouter);
  app.use("/tags", tagsRouter);
  app.use("/clients", clientRouter);
  app.use("/factures", facturesRouter);
};

export default router;
