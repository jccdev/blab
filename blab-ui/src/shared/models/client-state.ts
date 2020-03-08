import { AuthUser } from './auth-user';
import { SignUpResponse } from './sign-up-response';

export interface ClientState {
  isAuthenticated: boolean;
  authUser: AuthUser;
  signUpResponse: SignUpResponse;
}
