import { Router, Request, Response, NextFunction } from "express";
import { requireAuth } from "../auth/middlewares";
import controller from "./controller";

const router = Router();

router.get(
  "/",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const tags = await controller.list();
    res.json(tags);
  }
);

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tag = await controller.store(req.body);
    res.status(201).json(tag);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.get(
  "/:id",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const tag = await controller.getOne(id);
      res.json(tag);
    } catch (error: any) {
      res.json({
        message: error.message,
      });
    }
  }
);

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  // let mytags = tag.filter(item => item.id !== id);
  res.json({});
});

export default router;
