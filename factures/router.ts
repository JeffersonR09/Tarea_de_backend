import { Router, Request, Response, NextFunction } from "express";
import { requireAuth } from "../auth/middlewares";
import controller from "./controller";

const router = Router();

router.get(
  "/",
  requireAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const facturas = await controller.list();
    res.json(facturas);
  }
);

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const factures = await controller.store(req.body);
    res.status(201).json(factures);
  } catch (error) {
    res.json({
      message: "detectamos un error",
    });
  }
});

router.patch("/:id", requireAuth, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const factures = await controller.update(id, data);
    res.json(factures);
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
      const factures = await controller.getOne(id);
      res.json(factures);
    } catch (error: any) {
      res.json({
        message: error.message,
      });
    }
  }
);

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await controller.delete(id);
  res.json({ message: "la factura ha sido eliminada" });
});

export default router;
