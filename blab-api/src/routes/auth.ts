import { AuthForm } from 'shared/models/auth-form';
import { SignUpForm } from 'shared/models/sign-up-form';
import express from 'express';
import { asyncHandler } from "../async-handler";
import { AuthService } from '../services/auth-service';
const baseRoute = "/auth"

const router = express.Router();

router.post(`${baseRoute}/`, asyncHandler(async(req, res) => {
  const form = req.body as AuthForm;
  const authService = new AuthService();
  const authUser = await authService.authenticate(form);
  res.send(authUser);
}));

router.post(`${baseRoute}/sign-up`, asyncHandler(async(req, res) => {
  const form = req.body as SignUpForm;
  const authService = new AuthService();
  const authUser = await authService.signUp(form);
  res.send(authUser);
}));


export default router;