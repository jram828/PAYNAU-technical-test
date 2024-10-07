import { Router } from "express";

import personRouter from "./personRoutes.js";
const router = Router();

router.use("/person", personRouter);


export default router;
