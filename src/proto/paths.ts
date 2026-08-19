import {join} from "path";

export const PROTO_PATCH = {
  AUTH: join(__dirname, "../../proto/user/v1/auth.proto")
} as const  