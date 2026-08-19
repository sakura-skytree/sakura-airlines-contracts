import { PROTO_PATCH } from './paths'

export const GRPC_SERVICES = {
	AUTH_PACKAGE: {
		package: 'auth.v1',
		protoPath: PROTO_PATCH.AUTH,
		url: 'GRPC_USER',
	},
} as const

export type GrpcServiceNames = keyof typeof GRPC_SERVICES
