import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from '@genql/runtime'
import types from './types.esm'
var typeMap = linkTypeMap(types)
export * from './guards.esm'

export var version = '2.10.0'
assertSameVersion(version)

export var createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'https://api.fly.io/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

export const enumAppState = {
  PENDING: 'PENDING',
  DEPLOYED: 'DEPLOYED',
  SUSPENDED: 'SUSPENDED',
}

export const enumAutoscaleStrategy = {
  NONE: 'NONE',
  PREFERRED_REGIONS: 'PREFERRED_REGIONS',
  CONNECTION_SOURCES: 'CONNECTION_SOURCES',
}

export const enumBillingStatus = {
  CURRENT: 'CURRENT',
  SOURCE_REQUIRED: 'SOURCE_REQUIRED',
  PAST_DUE: 'PAST_DUE',
}

export const enumCheckHttpVerb = {
  GET: 'GET',
  HEAD: 'HEAD',
}

export const enumCheckType = {
  TCP: 'TCP',
  HTTP: 'HTTP',
  SCRIPT: 'SCRIPT',
}

export const enumDnsRecordChangeAction = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
}

export const enumDnsRecordType = {
  A: 'A',
  AAAA: 'AAAA',
  ALIAS: 'ALIAS',
  CNAME: 'CNAME',
  MX: 'MX',
  NS: 'NS',
  SOA: 'SOA',
  TXT: 'TXT',
  SRV: 'SRV',
}

export const enumDeploymentStrategy = {
  IMMEDIATE: 'IMMEDIATE',
  SIMPLE: 'SIMPLE',
  ROLLING: 'ROLLING',
  CANARY: 'CANARY',
  BLUEGREEN: 'BLUEGREEN',
}

export const enumDomainDnsStatus = {
  PENDING: 'PENDING',
  UPDATING: 'UPDATING',
  READY: 'READY',
}

export const enumDomainRegistrationStatus = {
  UNMANAGED: 'UNMANAGED',
  REGISTERING: 'REGISTERING',
  REGISTERED: 'REGISTERED',
  TRANSFERRING: 'TRANSFERRING',
  EXPIRED: 'EXPIRED',
}

export const enumHttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  HEAD: 'HEAD',
  DELETE: 'DELETE',
}

export const enumHttpProtocol = {
  HTTP: 'HTTP',
  HTTPS: 'HTTPS',
}

export const enumIpAddressType = {
  v4: 'v4',
  v6: 'v6',
}

export const enumOrganizationMemberRole = {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
}

export const enumOrganizationTrust = {
  BANNED: 'BANNED',
  LOW: 'LOW',
  HIGH: 'HIGH',
}

export const enumOrganizationType = {
  PERSONAL: 'PERSONAL',
  SHARED: 'SHARED',
}

export const enumPlatformVersionEnum = {
  nomad: 'nomad',
  machines: 'machines',
}

export const enumRegionEnum = {
  AMS: 'AMS',
  ATL: 'ATL',
  DFW: 'DFW',
  EWR: 'EWR',
  FRA: 'FRA',
  HKG: 'HKG',
  IAD: 'IAD',
  LAX: 'LAX',
  NRT: 'NRT',
  ORD: 'ORD',
  SEA: 'SEA',
  SIN: 'SIN',
  SJC: 'SJC',
  SYD: 'SYD',
  YYZ: 'YYZ',
}

export const enumRuntimeType = {
  FIRECRACKER: 'FIRECRACKER',
  NODEPROXY: 'NODEPROXY',
}

export const enumSchedulingEnum = {
  PERMANENT: 'PERMANENT',
  EPHEMERAL: 'EPHEMERAL',
}

export const enumServiceHandlerType = {
  TLS: 'TLS',
  HTTP: 'HTTP',
  EDGE_HTTP: 'EDGE_HTTP',
  PROXY_PROTO: 'PROXY_PROTO',
}

export const enumServiceProtocolType = {
  TCP: 'TCP',
  UDP: 'UDP',
}

export const enumVmSizeEnum = {
  SHARED_CPU_1X: 'SHARED_CPU_1X',
  DEDICATED_CPU_1X: 'DEDICATED_CPU_1X',
  DEDICATED_CPU_2X: 'DEDICATED_CPU_2X',
  DEDICATED_CPU_4X: 'DEDICATED_CPU_4X',
  DEDICATED_CPU_8X: 'DEDICATED_CPU_8X',
}

export var generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
export var generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
export var generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
export var everything = {
  __scalar: true,
}
