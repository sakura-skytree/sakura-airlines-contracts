import { PROTO_PATCH } from './paths'

export const GRPC_SERVICES = {
	AUTH_PACKAGE: {
		package: 'auth.v1',
		protoPath: PROTO_PATCH.AUTH,
		url: 'GRPC_USER',
	},
	SESSION_PACKAGE: {
		package: 'session.v1',
		protoPath: PROTO_PATCH.SESSION,
		url: 'GRPC_USER',
	},
	USER_PACKAGE: {
		package: 'user.v1',
		protoPath: PROTO_PATCH.USER,
		url: 'GRPC_USER',
	},
	PASSENGER_PACKAGE: {
		package: 'passenger.v1',
		protoPath: PROTO_PATCH.PASSENGER,
		url: 'GRPC_USER',
	},
	AIRPORT_PACKAGE: {
		package: 'airport.v1',
		protoPath: PROTO_PATCH.AIRPORT,
		url: 'GRPC_AIRPORT',
	},
} as const

export type GrpcServiceNames = keyof typeof GRPC_SERVICES
