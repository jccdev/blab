import { AuthUser } from "./auth-user";
import { SignUpResponse } from "./sign-up-response";
import { Channel } from "./channel";
import { ChannelFolder } from "./channel-folder";

export interface ClientState {
  isAuthenticated: boolean;
  authUser: AuthUser;
  signUpResponse: SignUpResponse;
  channel_detail: (Channel | ChannelFolder)[];
}
