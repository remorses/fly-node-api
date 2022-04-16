import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  QueriesRequest,
  QueriesPromiseChain,
  Queries,
  MutationsRequest,
  MutationsPromiseChain,
  Mutations,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends QueriesRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Queries, R>>

  mutation<R extends MutationsRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Mutations, R>>

  chain: {
    query: QueriesPromiseChain

    mutation: MutationsPromiseChain
  }
}

export type QueryResult<fields extends QueriesRequest> = FieldsSelection<
  Queries,
  fields
>

export declare const generateQueryOp: (
  fields: QueriesRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<fields extends MutationsRequest> = FieldsSelection<
  Mutations,
  fields
>

export declare const generateMutationOp: (
  fields: MutationsRequest & { __name?: string },
) => GraphqlOperation

export declare const enumAppState: {
  readonly PENDING: 'PENDING'
  readonly DEPLOYED: 'DEPLOYED'
  readonly SUSPENDED: 'SUSPENDED'
}

export declare const enumAutoscaleStrategy: {
  readonly NONE: 'NONE'
  readonly PREFERRED_REGIONS: 'PREFERRED_REGIONS'
  readonly CONNECTION_SOURCES: 'CONNECTION_SOURCES'
}

export declare const enumBillingStatus: {
  readonly CURRENT: 'CURRENT'
  readonly SOURCE_REQUIRED: 'SOURCE_REQUIRED'
  readonly PAST_DUE: 'PAST_DUE'
}

export declare const enumCheckHttpVerb: {
  readonly GET: 'GET'
  readonly HEAD: 'HEAD'
}

export declare const enumCheckType: {
  readonly TCP: 'TCP'
  readonly HTTP: 'HTTP'
  readonly SCRIPT: 'SCRIPT'
}

export declare const enumDnsRecordChangeAction: {
  readonly CREATE: 'CREATE'
  readonly UPDATE: 'UPDATE'
  readonly DELETE: 'DELETE'
}

export declare const enumDnsRecordType: {
  readonly A: 'A'
  readonly AAAA: 'AAAA'
  readonly ALIAS: 'ALIAS'
  readonly CNAME: 'CNAME'
  readonly MX: 'MX'
  readonly NS: 'NS'
  readonly SOA: 'SOA'
  readonly TXT: 'TXT'
  readonly SRV: 'SRV'
}

export declare const enumDeploymentStrategy: {
  readonly IMMEDIATE: 'IMMEDIATE'
  readonly SIMPLE: 'SIMPLE'
  readonly ROLLING: 'ROLLING'
  readonly CANARY: 'CANARY'
  readonly BLUEGREEN: 'BLUEGREEN'
}

export declare const enumDomainDnsStatus: {
  readonly PENDING: 'PENDING'
  readonly UPDATING: 'UPDATING'
  readonly READY: 'READY'
}

export declare const enumDomainRegistrationStatus: {
  readonly UNMANAGED: 'UNMANAGED'
  readonly REGISTERING: 'REGISTERING'
  readonly REGISTERED: 'REGISTERED'
  readonly TRANSFERRING: 'TRANSFERRING'
  readonly EXPIRED: 'EXPIRED'
}

export declare const enumHttpMethod: {
  readonly GET: 'GET'
  readonly POST: 'POST'
  readonly PUT: 'PUT'
  readonly PATCH: 'PATCH'
  readonly HEAD: 'HEAD'
  readonly DELETE: 'DELETE'
}

export declare const enumHttpProtocol: {
  readonly HTTP: 'HTTP'
  readonly HTTPS: 'HTTPS'
}

export declare const enumIpAddressType: {
  readonly v4: 'v4'
  readonly v6: 'v6'
}

export declare const enumOrganizationMemberRole: {
  readonly ADMIN: 'ADMIN'
  readonly MEMBER: 'MEMBER'
}

export declare const enumOrganizationTrust: {
  readonly BANNED: 'BANNED'
  readonly LOW: 'LOW'
  readonly HIGH: 'HIGH'
}

export declare const enumOrganizationType: {
  readonly PERSONAL: 'PERSONAL'
  readonly SHARED: 'SHARED'
}

export declare const enumPlatformVersionEnum: {
  readonly nomad: 'nomad'
  readonly machines: 'machines'
}

export declare const enumRegionEnum: {
  readonly AMS: 'AMS'
  readonly ATL: 'ATL'
  readonly DFW: 'DFW'
  readonly EWR: 'EWR'
  readonly FRA: 'FRA'
  readonly HKG: 'HKG'
  readonly IAD: 'IAD'
  readonly LAX: 'LAX'
  readonly NRT: 'NRT'
  readonly ORD: 'ORD'
  readonly SEA: 'SEA'
  readonly SIN: 'SIN'
  readonly SJC: 'SJC'
  readonly SYD: 'SYD'
  readonly YYZ: 'YYZ'
}

export declare const enumRuntimeType: {
  readonly FIRECRACKER: 'FIRECRACKER'
  readonly NODEPROXY: 'NODEPROXY'
}

export declare const enumSchedulingEnum: {
  readonly PERMANENT: 'PERMANENT'
  readonly EPHEMERAL: 'EPHEMERAL'
}

export declare const enumServiceHandlerType: {
  readonly TLS: 'TLS'
  readonly HTTP: 'HTTP'
  readonly EDGE_HTTP: 'EDGE_HTTP'
  readonly PROXY_PROTO: 'PROXY_PROTO'
}

export declare const enumServiceProtocolType: {
  readonly TCP: 'TCP'
  readonly UDP: 'UDP'
}

export declare const enumVmSizeEnum: {
  readonly SHARED_CPU_1X: 'SHARED_CPU_1X'
  readonly DEDICATED_CPU_1X: 'DEDICATED_CPU_1X'
  readonly DEDICATED_CPU_2X: 'DEDICATED_CPU_2X'
  readonly DEDICATED_CPU_4X: 'DEDICATED_CPU_4X'
  readonly DEDICATED_CPU_8X: 'DEDICATED_CPU_8X'
}
