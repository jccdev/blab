export interface ClientState {
  isAuthenticated: boolean;
  authUser: AuthUser;
}

export interface AuthUser {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
}