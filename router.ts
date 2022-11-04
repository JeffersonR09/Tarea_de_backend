import { Express } from "express";
import productRouter from "./products/router";
import authRouter from "./auth/router";
import categoryRouter from "./category/router";
import tagsRouter from "./tags/router";

const router = (app: Express) => {
  app.use("/auth", authRouter);
  app.use("/products", productRouter);
  app.use("/categorys", categoryRouter);
  app.use("/tags", tagsRouter);
};

export default router;
