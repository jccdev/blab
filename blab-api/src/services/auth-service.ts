import { UserCommands } from './../data-access/user-commands';
import { SignUpResponse } from '../shared/models/sign-up-response';
import { SignUpForm } from '../shared/models/sign-up-form';
import { UserQueries } from './../data-access/user-queries';
import { User } from "../shared/models/user";
import { AuthForm } from '../shared/models/auth-form';
import { AuthUser } from '../shared/models/auth-user';
import crypto from 'crypto';

export class AuthError extends Error {

}

export class AuthService {
  async authenticate(form: AuthForm): Promise<AuthUser> {
    const userQueries = new UserQueries();
    const user = await userQueries.getUser(form?.userName);
    if (user) {
      const authUser = new AuthUser();
      authUser.userName = user.userName;
      authUser.email = user.email;
      return authUser;
    }
    throw new AuthError('Authentication Failed.')
  }

  async signUp(form: SignUpForm): Promise<SignUpResponse> {
    const user = new User();
    user.email = form.email;
    user.userName = form.userName;
    const salt = crypto.randomBytes(16);
    user.salt = salt.toString('hex');
    const hash = crypto.createHmac('sha512', salt);
    hash.update(form.password);
    const value = hash.digest('hex');
    user.passwordHash = value;
    const userCommands = new UserCommands();
    await userCommands.saveUser(user);
    const res = new SignUpResponse();
    res.message = "success";
    return res;
  }
}
