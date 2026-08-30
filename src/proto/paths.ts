import { join } from 'path'

export const PROTO_PATCH = {
	AUTH: join(__dirname, '../../proto/auth/v1/auth.proto'),
	SESSION: join(__dirname, '../../proto/session/v1/session.proto'),
	USER: join(__dirname, '../../proto/user/v1/user.proto'),
	PASSENGER: join(__dirname, '../../proto/passenger/v1/passenger.proto'),
	AIRPORT: join(__dirname, '../../proto/airport/v1/airport.proto'),
} as const
