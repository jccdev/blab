import { AuthForm } from 'shared/models/auth-form';
import express from 'express';
import { asyncHandler } from "../async-handler";
import { AuthService } from '../services/auth-service';
const baseRoute = "/auth"

const router = express.Router();

router.post(`${baseRoute}/`, asyncHandler(async(req, res) => {
  const form = req.body as AuthForm;
  const authService = new AuthService();
  await authService.authenticate(form);

}));

export default router;