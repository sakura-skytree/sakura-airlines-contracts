import { join } from 'path'

export const PROTO_PATCH = {
	AUTH: join(__dirname, '../../proto/auth/v1/auth.proto'),
	SESSION: join(__dirname, '../../proto/session/v1/session.proto'),
	USER: join(__dirname, '../../proto/user/v1/user.proto'),
} as const
