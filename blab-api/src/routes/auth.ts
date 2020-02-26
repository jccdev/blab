import express from 'express';
import { asyncHandler } from "../async-handler";
const baseRoute = "/auth"

const router = express.Router();

router.post(`${baseRoute}/`, asyncHandler(async(req, res) => {
  const flowDefinitionId = req.params.userName as string;
}));

export default router;