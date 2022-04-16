const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.10.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
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

module.exports.enumAppState = {
  PENDING: 'PENDING',
  DEPLOYED: 'DEPLOYED',
  SUSPENDED: 'SUSPENDED',
}

module.exports.enumAutoscaleStrategy = {
  NONE: 'NONE',
  PREFERRED_REGIONS: 'PREFERRED_REGIONS',
  CONNECTION_SOURCES: 'CONNECTION_SOURCES',
}

module.exports.enumBillingStatus = {
  CURRENT: 'CURRENT',
  SOURCE_REQUIRED: 'SOURCE_REQUIRED',
  PAST_DUE: 'PAST_DUE',
}

module.exports.enumCheckHttpVerb = {
  GET: 'GET',
  HEAD: 'HEAD',
}

module.exports.enumCheckType = {
  TCP: 'TCP',
  HTTP: 'HTTP',
  SCRIPT: 'SCRIPT',
}

module.exports.enumDnsRecordChangeAction = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
}

module.exports.enumDnsRecordType = {
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

module.exports.enumDeploymentStrategy = {
  IMMEDIATE: 'IMMEDIATE',
  SIMPLE: 'SIMPLE',
  ROLLING: 'ROLLING',
  CANARY: 'CANARY',
  BLUEGREEN: 'BLUEGREEN',
}

module.exports.enumDomainDnsStatus = {
  PENDING: 'PENDING',
  UPDATING: 'UPDATING',
  READY: 'READY',
}

module.exports.enumDomainRegistrationStatus = {
  UNMANAGED: 'UNMANAGED',
  REGISTERING: 'REGISTERING',
  REGISTERED: 'REGISTERED',
  TRANSFERRING: 'TRANSFERRING',
  EXPIRED: 'EXPIRED',
}

module.exports.enumHttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  HEAD: 'HEAD',
  DELETE: 'DELETE',
}

module.exports.enumHttpProtocol = {
  HTTP: 'HTTP',
  HTTPS: 'HTTPS',
}

module.exports.enumIpAddressType = {
  v4: 'v4',
  v6: 'v6',
}

module.exports.enumOrganizationMemberRole = {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
}

module.exports.enumOrganizationTrust = {
  BANNED: 'BANNED',
  LOW: 'LOW',
  HIGH: 'HIGH',
}

module.exports.enumOrganizationType = {
  PERSONAL: 'PERSONAL',
  SHARED: 'SHARED',
}

module.exports.enumPlatformVersionEnum = {
  nomad: 'nomad',
  machines: 'machines',
}

module.exports.enumRegionEnum = {
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

module.exports.enumRuntimeType = {
  FIRECRACKER: 'FIRECRACKER',
  NODEPROXY: 'NODEPROXY',
}

module.exports.enumSchedulingEnum = {
  PERMANENT: 'PERMANENT',
  EPHEMERAL: 'EPHEMERAL',
}

module.exports.enumServiceHandlerType = {
  TLS: 'TLS',
  HTTP: 'HTTP',
  EDGE_HTTP: 'EDGE_HTTP',
  PROXY_PROTO: 'PROXY_PROTO',
}

module.exports.enumServiceProtocolType = {
  TCP: 'TCP',
  UDP: 'UDP',
}

module.exports.enumVmSizeEnum = {
  SHARED_CPU_1X: 'SHARED_CPU_1X',
  DEDICATED_CPU_1X: 'DEDICATED_CPU_1X',
  DEDICATED_CPU_2X: 'DEDICATED_CPU_2X',
  DEDICATED_CPU_4X: 'DEDICATED_CPU_4X',
  DEDICATED_CPU_8X: 'DEDICATED_CPU_8X',
}

module.exports.generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
module.exports.generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
module.exports.generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
module.exports.everything = {
  __scalar: true,
}

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
