module.exports = {
    "scalars": [
        21,
        27,
        29,
        33,
        34,
        50,
        68,
        116,
        121,
        154,
        159,
        161,
        172,
        181,
        182,
        193,
        197,
        198,
        204,
        207,
        240,
        243,
        244,
        248,
        260,
        285,
        292,
        296,
        301,
        323,
        346
    ],
    "types": {
        "AccessToken": {
            "createdAt": [
                198
            ],
            "id": [
                193
            ],
            "name": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "AddCertificatePayload": {
            "app": [
                8
            ],
            "certificate": [
                9
            ],
            "check": [
                192
            ],
            "errors": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "AddWireGuardPeerInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "region": [
                323
            ],
            "name": [
                323
            ],
            "pubkey": [
                323
            ],
            "network": [
                323
            ],
            "nats": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "AddWireGuardPeerPayload": {
            "clientMutationId": [
                323
            ],
            "endpointip": [
                323
            ],
            "network": [
                323
            ],
            "peerip": [
                323
            ],
            "pubkey": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "AllocateIPAddressInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "type": [
                197
            ],
            "region": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "AllocateIPAddressPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "ipAddress": [
                194
            ],
            "__typename": [
                323
            ]
        },
        "Allocation": {
            "attachedVolumes": [
                350,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "canary": [
                34
            ],
            "checks": [
                65,
                {
                    "name": [
                        323
                    ]
                }
            ],
            "createdAt": [
                198
            ],
            "criticalCheckCount": [
                204
            ],
            "desiredStatus": [
                323
            ],
            "events": [
                7
            ],
            "failed": [
                34
            ],
            "healthy": [
                34
            ],
            "id": [
                193
            ],
            "idShort": [
                193
            ],
            "latestVersion": [
                34
            ],
            "passingCheckCount": [
                204
            ],
            "privateIP": [
                323
            ],
            "recentLogs": [
                214,
                {
                    "limit": [
                        204
                    ],
                    "range": [
                        204
                    ]
                }
            ],
            "region": [
                323
            ],
            "restarts": [
                204
            ],
            "status": [
                323
            ],
            "taskName": [
                323
            ],
            "totalCheckCount": [
                204
            ],
            "transitioning": [
                34
            ],
            "updatedAt": [
                198
            ],
            "version": [
                204
            ],
            "warningCheckCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "AllocationEvent": {
            "message": [
                323
            ],
            "timestamp": [
                198
            ],
            "type": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "App": {
            "allocation": [
                6,
                {
                    "id": [
                        323,
                        "String!"
                    ]
                }
            ],
            "allocations": [
                6,
                {
                    "showCompleted": [
                        34
                    ]
                }
            ],
            "appUrl": [
                323
            ],
            "autoscaling": [
                28
            ],
            "backupRegions": [
                259
            ],
            "builds": [
                36,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "certificate": [
                9,
                {
                    "hostname": [
                        323,
                        "String!"
                    ]
                }
            ],
            "certificates": [
                10,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ],
                    "filter": [
                        323
                    ],
                    "id": [
                        323
                    ]
                }
            ],
            "changes": [
                15,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "config": [
                17
            ],
            "createdAt": [
                198
            ],
            "currentPlacement": [
                261
            ],
            "currentRelease": [
                264
            ],
            "deployed": [
                34
            ],
            "deploymentSource": [
                152
            ],
            "deploymentStatus": [
                153,
                {
                    "id": [
                        193
                    ],
                    "evaluationId": [
                        323
                    ]
                }
            ],
            "hasDeploymentSource": [
                34
            ],
            "healthChecks": [
                66,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ],
                    "name": [
                        323
                    ]
                }
            ],
            "hostname": [
                323
            ],
            "id": [
                193
            ],
            "image": [
                199,
                {
                    "ref": [
                        323,
                        "String!"
                    ]
                }
            ],
            "imageDetails": [
                200
            ],
            "imageUpgradeAvailable": [
                34
            ],
            "imageVersionTrackingEnabled": [
                34
            ],
            "instrumentsKey": [
                323
            ],
            "internalId": [
                204
            ],
            "internalNumericId": [
                323
            ],
            "ipAddress": [
                194,
                {
                    "address": [
                        323,
                        "String!"
                    ]
                }
            ],
            "ipAddresses": [
                195,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "key": [
                323
            ],
            "latestImageDetails": [
                200
            ],
            "machine": [
                218,
                {
                    "id": [
                        323,
                        "String!"
                    ]
                }
            ],
            "machines": [
                219,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "name": [
                323
            ],
            "network": [
                323
            ],
            "organization": [
                234
            ],
            "parseConfig": [
                17,
                {
                    "definition": [
                        207,
                        "JSON!"
                    ]
                }
            ],
            "platformVersion": [
                248
            ],
            "processGroups": [
                256
            ],
            "regions": [
                259
            ],
            "release": [
                264,
                {
                    "id": [
                        193
                    ],
                    "version": [
                        204
                    ]
                }
            ],
            "releases": [
                266,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "role": [
                20
            ],
            "runtime": [
                285
            ],
            "secrets": [
                293
            ],
            "services": [
                295
            ],
            "sourceBuilds": [
                313,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "state": [
                21
            ],
            "status": [
                323
            ],
            "taskGroupCounts": [
                324
            ],
            "usage": [
                22
            ],
            "version": [
                204
            ],
            "vmSize": [
                345
            ],
            "vms": [
                342,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ],
                    "showCompleted": [
                        34
                    ]
                }
            ],
            "volume": [
                349,
                {
                    "internalId": [
                        323,
                        "String!"
                    ]
                }
            ],
            "volumes": [
                350,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "__typename": [
                323
            ]
        },
        "AppCertificate": {
            "acmeAlpnConfigured": [
                34
            ],
            "acmeDnsConfigured": [
                34
            ],
            "certificateAuthority": [
                323
            ],
            "certificateRequestedAt": [
                198
            ],
            "check": [
                34
            ],
            "clientStatus": [
                323
            ],
            "configured": [
                34
            ],
            "createdAt": [
                198
            ],
            "dnsProvider": [
                323
            ],
            "dnsValidationHostname": [
                323
            ],
            "dnsValidationInstructions": [
                323
            ],
            "dnsValidationTarget": [
                323
            ],
            "domain": [
                323
            ],
            "hostname": [
                323
            ],
            "id": [
                193
            ],
            "isAcmeAlpnConfigured": [
                34
            ],
            "isAcmeDnsConfigured": [
                34
            ],
            "isApex": [
                34
            ],
            "isConfigured": [
                34
            ],
            "isWildcard": [
                34
            ],
            "issued": [
                40,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ],
                    "includeExpired": [
                        34
                    ]
                }
            ],
            "source": [
                323
            ],
            "validationErrors": [
                12
            ],
            "__typename": [
                323
            ]
        },
        "AppCertificateConnection": {
            "edges": [
                11
            ],
            "nodes": [
                9
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "AppCertificateEdge": {
            "cursor": [
                323
            ],
            "node": [
                9
            ],
            "__typename": [
                323
            ]
        },
        "AppCertificateValidationError": {
            "message": [
                323
            ],
            "timestamp": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "AppChange": {
            "actor": [
                14
            ],
            "actorType": [
                323
            ],
            "app": [
                8
            ],
            "createdAt": [
                198
            ],
            "description": [
                323
            ],
            "id": [
                193
            ],
            "status": [
                323
            ],
            "updatedAt": [
                198
            ],
            "user": [
                340
            ],
            "__typename": [
                323
            ]
        },
        "AppChangeActor": {
            "on_Build": [
                35
            ],
            "on_Release": [
                264
            ],
            "on_Secret": [
                293
            ],
            "on_Node": [
                233
            ],
            "__typename": [
                323
            ]
        },
        "AppChangeConnection": {
            "edges": [
                16
            ],
            "nodes": [
                13
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "AppChangeEdge": {
            "cursor": [
                323
            ],
            "node": [
                13
            ],
            "__typename": [
                323
            ]
        },
        "AppConfig": {
            "definition": [
                207
            ],
            "errors": [
                323
            ],
            "services": [
                295
            ],
            "valid": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "AppConnection": {
            "edges": [
                19
            ],
            "nodes": [
                8
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "AppEdge": {
            "cursor": [
                323
            ],
            "node": [
                8
            ],
            "__typename": [
                323
            ]
        },
        "AppRole": {
            "name": [
                323
            ],
            "on_FlyctlMachineHostAppRole": [
                174
            ],
            "on_PostgresClusterAppRole": [
                249
            ],
            "on_RemoteDockerBuilderAppRole": [
                270
            ],
            "__typename": [
                323
            ]
        },
        "AppState": {},
        "AppUsage": {
            "interval": [
                323
            ],
            "requestsCount": [
                204
            ],
            "totalAppExecS": [
                204
            ],
            "totalDataOutGB": [
                172
            ],
            "ts": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "AttachPostgresClusterInput": {
            "clientMutationId": [
                323
            ],
            "postgresClusterAppId": [
                193
            ],
            "appId": [
                193
            ],
            "databaseName": [
                323
            ],
            "databaseUser": [
                323
            ],
            "variableName": [
                323
            ],
            "manualEntry": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "AttachPostgresClusterPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "connectionString": [
                323
            ],
            "environmentVariableName": [
                323
            ],
            "postgresClusterApp": [
                8
            ],
            "__typename": [
                323
            ]
        },
        "AutoscaleRegionConfig": {
            "code": [
                323
            ],
            "minCount": [
                204
            ],
            "weight": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "AutoscaleRegionConfigInput": {
            "code": [
                323
            ],
            "weight": [
                204
            ],
            "minCount": [
                204
            ],
            "reset": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "AutoscaleStrategy": {},
        "AutoscalingConfig": {
            "backupRegions": [
                323
            ],
            "balanceRegions": [
                34
            ],
            "enabled": [
                34
            ],
            "maxCount": [
                204
            ],
            "minCount": [
                204
            ],
            "preferredRegion": [
                323
            ],
            "regions": [
                25
            ],
            "strategy": [
                27
            ],
            "__typename": [
                323
            ]
        },
        "BigInt": {},
        "Billable": {
            "app": [
                8
            ],
            "category": [
                323
            ],
            "product": [
                323
            ],
            "quantity": [
                172
            ],
            "time": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "BillableConnection": {
            "edges": [
                32
            ],
            "nodes": [
                30
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "BillableEdge": {
            "cursor": [
                323
            ],
            "node": [
                30
            ],
            "__typename": [
                323
            ]
        },
        "BillingStatus": {},
        "Boolean": {},
        "Build": {
            "app": [
                8
            ],
            "commitId": [
                323
            ],
            "commitUrl": [
                323
            ],
            "createdAt": [
                198
            ],
            "createdBy": [
                340
            ],
            "failed": [
                34
            ],
            "id": [
                193
            ],
            "image": [
                323
            ],
            "inProgress": [
                34
            ],
            "logs": [
                323
            ],
            "number": [
                204
            ],
            "status": [
                323
            ],
            "succeeded": [
                34
            ],
            "updatedAt": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "BuildConnection": {
            "edges": [
                37
            ],
            "nodes": [
                35
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "BuildEdge": {
            "cursor": [
                323
            ],
            "node": [
                35
            ],
            "__typename": [
                323
            ]
        },
        "CancelBuildPayload": {
            "build": [
                35
            ],
            "__typename": [
                323
            ]
        },
        "Certificate": {
            "expiresAt": [
                198
            ],
            "hostname": [
                323
            ],
            "id": [
                193
            ],
            "type": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CertificateConnection": {
            "edges": [
                41
            ],
            "nodes": [
                39
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "CertificateEdge": {
            "cursor": [
                323
            ],
            "node": [
                39
            ],
            "__typename": [
                323
            ]
        },
        "Check": {
            "httpHeaders": [
                51
            ],
            "httpMethod": [
                323
            ],
            "httpPath": [
                323
            ],
            "httpProtocol": [
                182
            ],
            "httpTlsSkipVerify": [
                34
            ],
            "interval": [
                204
            ],
            "name": [
                323
            ],
            "scriptArgs": [
                323
            ],
            "scriptCommand": [
                323
            ],
            "timeout": [
                204
            ],
            "type": [
                68
            ],
            "__typename": [
                323
            ]
        },
        "CheckCertificateInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "hostname": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CheckCertificatePayload": {
            "app": [
                8
            ],
            "certificate": [
                9
            ],
            "check": [
                192
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CheckDomainInput": {
            "clientMutationId": [
                323
            ],
            "domainName": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CheckDomainPayload": {
            "clientMutationId": [
                323
            ],
            "dnsAvailable": [
                34
            ],
            "domainName": [
                323
            ],
            "registrationAvailable": [
                34
            ],
            "registrationPeriod": [
                204
            ],
            "registrationPrice": [
                204
            ],
            "registrationSupported": [
                34
            ],
            "tld": [
                323
            ],
            "transferAvailable": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "CheckHTTPResponse": {
            "closeTs": [
                323
            ],
            "connectedTs": [
                323
            ],
            "dnsTs": [
                323
            ],
            "firstTs": [
                323
            ],
            "flyioDebug": [
                207
            ],
            "headers": [
                207
            ],
            "id": [
                193
            ],
            "lastTs": [
                323
            ],
            "location": [
                62
            ],
            "rawHeaders": [
                323
            ],
            "rawOutput": [
                323
            ],
            "resolvedIp": [
                323
            ],
            "sentTs": [
                323
            ],
            "startTs": [
                323
            ],
            "statusCode": [
                204
            ],
            "tlsTs": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CheckHTTPResponseConnection": {
            "edges": [
                49
            ],
            "nodes": [
                47
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "CheckHTTPResponseEdge": {
            "cursor": [
                323
            ],
            "node": [
                47
            ],
            "__typename": [
                323
            ]
        },
        "CheckHTTPVerb": {},
        "CheckHeader": {
            "name": [
                323
            ],
            "value": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CheckHeaderInput": {
            "name": [
                323
            ],
            "value": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CheckInput": {
            "type": [
                68
            ],
            "name": [
                323
            ],
            "interval": [
                204
            ],
            "timeout": [
                204
            ],
            "httpMethod": [
                181
            ],
            "httpPath": [
                323
            ],
            "httpProtocol": [
                182
            ],
            "httpTlsSkipVerify": [
                34
            ],
            "httpHeaders": [
                52
            ],
            "scriptCommand": [
                323
            ],
            "scriptArgs": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CheckJob": {
            "httpOptions": [
                57
            ],
            "id": [
                193
            ],
            "locations": [
                63,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "nextRunAt": [
                198
            ],
            "runs": [
                60,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "schedule": [
                323
            ],
            "url": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CheckJobConnection": {
            "edges": [
                56
            ],
            "nodes": [
                54
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "CheckJobEdge": {
            "cursor": [
                323
            ],
            "node": [
                54
            ],
            "__typename": [
                323
            ]
        },
        "CheckJobHTTPOptions": {
            "headers": [
                323
            ],
            "verb": [
                50
            ],
            "__typename": [
                323
            ]
        },
        "CheckJobHTTPOptionsInput": {
            "verb": [
                50
            ],
            "headers": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CheckJobRun": {
            "completedAt": [
                198
            ],
            "createdAt": [
                198
            ],
            "httpOptions": [
                57
            ],
            "httpResponses": [
                48,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "id": [
                193
            ],
            "locations": [
                63,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "state": [
                323
            ],
            "tests": [
                323
            ],
            "url": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CheckJobRunConnection": {
            "edges": [
                61
            ],
            "nodes": [
                59
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "CheckJobRunEdge": {
            "cursor": [
                323
            ],
            "node": [
                59
            ],
            "__typename": [
                323
            ]
        },
        "CheckLocation": {
            "coordinates": [
                172
            ],
            "country": [
                323
            ],
            "locality": [
                323
            ],
            "name": [
                323
            ],
            "state": [
                323
            ],
            "title": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CheckLocationConnection": {
            "edges": [
                64
            ],
            "nodes": [
                62
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "CheckLocationEdge": {
            "cursor": [
                323
            ],
            "node": [
                62
            ],
            "__typename": [
                323
            ]
        },
        "CheckState": {
            "allocation": [
                6
            ],
            "allocationId": [
                323
            ],
            "name": [
                323
            ],
            "output": [
                323,
                {
                    "limit": [
                        204
                    ],
                    "compact": [
                        34
                    ]
                }
            ],
            "serviceName": [
                323
            ],
            "status": [
                323
            ],
            "type": [
                68
            ],
            "updatedAt": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "CheckStateConnection": {
            "edges": [
                67
            ],
            "nodes": [
                65
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "CheckStateEdge": {
            "cursor": [
                323
            ],
            "node": [
                65
            ],
            "__typename": [
                323
            ]
        },
        "CheckType": {},
        "ConfigureRegionsInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "allowRegions": [
                323
            ],
            "denyRegions": [
                323
            ],
            "backupRegions": [
                323
            ],
            "group": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "ConfigureRegionsPayload": {
            "app": [
                8
            ],
            "backupRegions": [
                259
            ],
            "clientMutationId": [
                323
            ],
            "group": [
                323
            ],
            "regions": [
                259
            ],
            "__typename": [
                323
            ]
        },
        "CreateAndRegisterDomainInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "name": [
                323
            ],
            "whoisPrivacy": [
                34
            ],
            "autoRenew": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "CreateAndRegisterDomainPayload": {
            "clientMutationId": [
                323
            ],
            "domain": [
                157
            ],
            "organization": [
                234
            ],
            "__typename": [
                323
            ]
        },
        "CreateAndTransferDomainInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "name": [
                323
            ],
            "authorizationCode": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateAndTransferDomainPayload": {
            "clientMutationId": [
                323
            ],
            "domain": [
                157
            ],
            "organization": [
                234
            ],
            "__typename": [
                323
            ]
        },
        "CreateAppInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "runtime": [
                285
            ],
            "name": [
                323
            ],
            "preferredRegion": [
                323
            ],
            "heroku": [
                34
            ],
            "network": [
                323
            ],
            "appRoleId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateAppPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateCheckJobInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "url": [
                323
            ],
            "locations": [
                323
            ],
            "httpOptions": [
                58
            ],
            "__typename": [
                323
            ]
        },
        "CreateCheckJobPayload": {
            "checkJob": [
                54
            ],
            "checkJobRun": [
                59
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateCheckJobRunInput": {
            "clientMutationId": [
                323
            ],
            "checkJobId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "CreateCheckJobRunPayload": {
            "checkJob": [
                54
            ],
            "checkJobRun": [
                59
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateDNSPortalInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "name": [
                323
            ],
            "title": [
                323
            ],
            "returnUrl": [
                323
            ],
            "returnUrlText": [
                323
            ],
            "supportUrl": [
                323
            ],
            "supportUrlText": [
                323
            ],
            "primaryColor": [
                323
            ],
            "accentColor": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateDNSPortalPayload": {
            "clientMutationId": [
                323
            ],
            "dnsPortal": [
                110
            ],
            "__typename": [
                323
            ]
        },
        "CreateDNSPortalSessionInput": {
            "clientMutationId": [
                323
            ],
            "dnsPortalId": [
                193
            ],
            "domainId": [
                193
            ],
            "title": [
                323
            ],
            "returnUrl": [
                323
            ],
            "returnUrlText": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateDNSPortalSessionPayload": {
            "clientMutationId": [
                323
            ],
            "dnsPortalSession": [
                113
            ],
            "__typename": [
                323
            ]
        },
        "CreateDNSRecordInput": {
            "clientMutationId": [
                323
            ],
            "domainId": [
                193
            ],
            "type": [
                121
            ],
            "name": [
                323
            ],
            "ttl": [
                204
            ],
            "rdata": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateDNSRecordPayload": {
            "clientMutationId": [
                323
            ],
            "record": [
                114
            ],
            "__typename": [
                323
            ]
        },
        "CreateDelegatedWireGuardTokenInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "name": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateDelegatedWireGuardTokenPayload": {
            "clientMutationId": [
                323
            ],
            "token": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateDoctorReportInput": {
            "clientMutationId": [
                323
            ],
            "data": [
                207
            ],
            "__typename": [
                323
            ]
        },
        "CreateDoctorReportPayload": {
            "clientMutationId": [
                323
            ],
            "reportId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "CreateDoctorUrlPayload": {
            "putUrl": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateDomainInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "name": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateDomainPayload": {
            "clientMutationId": [
                323
            ],
            "domain": [
                157
            ],
            "organization": [
                234
            ],
            "__typename": [
                323
            ]
        },
        "CreateOrganizationInput": {
            "clientMutationId": [
                323
            ],
            "name": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateOrganizationInvitationInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "email": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreateOrganizationInvitationPayload": {
            "clientMutationId": [
                323
            ],
            "invitation": [
                237
            ],
            "__typename": [
                323
            ]
        },
        "CreateOrganizationPayload": {
            "clientMutationId": [
                323
            ],
            "organization": [
                234
            ],
            "__typename": [
                323
            ]
        },
        "CreatePostgresClusterDatabaseInput": {
            "clientMutationId": [
                323
            ],
            "appName": [
                323
            ],
            "databaseName": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreatePostgresClusterDatabasePayload": {
            "clientMutationId": [
                323
            ],
            "database": [
                253
            ],
            "postgresClusterRole": [
                249
            ],
            "__typename": [
                323
            ]
        },
        "CreatePostgresClusterInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "name": [
                323
            ],
            "region": [
                323
            ],
            "password": [
                323
            ],
            "vmSize": [
                323
            ],
            "volumeSizeGb": [
                204
            ],
            "count": [
                204
            ],
            "imageRef": [
                323
            ],
            "snapshotId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "CreatePostgresClusterPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "password": [
                323
            ],
            "username": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "CreatePostgresClusterUserInput": {
            "clientMutationId": [
                323
            ],
            "appName": [
                323
            ],
            "username": [
                323
            ],
            "password": [
                323
            ],
            "superuser": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "CreatePostgresClusterUserPayload": {
            "clientMutationId": [
                323
            ],
            "postgresClusterRole": [
                249
            ],
            "user": [
                254
            ],
            "__typename": [
                323
            ]
        },
        "CreateTemplateDeploymentInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "template": [
                207
            ],
            "variables": [
                258
            ],
            "__typename": [
                323
            ]
        },
        "CreateTemplateDeploymentPayload": {
            "clientMutationId": [
                323
            ],
            "templateDeployment": [
                325
            ],
            "__typename": [
                323
            ]
        },
        "CreateVolumeInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "name": [
                323
            ],
            "region": [
                323
            ],
            "sizeGb": [
                204
            ],
            "encrypted": [
                34
            ],
            "requireUniqueZone": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "CreateVolumePayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "volume": [
                349
            ],
            "__typename": [
                323
            ]
        },
        "CreateVolumeSnapshotInput": {
            "clientMutationId": [
                323
            ],
            "volumeId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "CreateVolumeSnapshotPayload": {
            "clientMutationId": [
                323
            ],
            "volume": [
                349
            ],
            "__typename": [
                323
            ]
        },
        "DNSPortal": {
            "accentColor": [
                323
            ],
            "createdAt": [
                198
            ],
            "id": [
                193
            ],
            "name": [
                323
            ],
            "organiztion": [
                234
            ],
            "primaryColor": [
                323
            ],
            "returnUrl": [
                323
            ],
            "returnUrlText": [
                323
            ],
            "supportUrl": [
                323
            ],
            "supportUrlText": [
                323
            ],
            "title": [
                323
            ],
            "updatedAt": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "DNSPortalConnection": {
            "edges": [
                112
            ],
            "nodes": [
                110
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "DNSPortalEdge": {
            "cursor": [
                323
            ],
            "node": [
                110
            ],
            "__typename": [
                323
            ]
        },
        "DNSPortalSession": {
            "createdAt": [
                198
            ],
            "dnsPortal": [
                110
            ],
            "expiresAt": [
                198
            ],
            "id": [
                193
            ],
            "isExpired": [
                34
            ],
            "returnUrl": [
                323
            ],
            "returnUrlText": [
                323
            ],
            "title": [
                323
            ],
            "url": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DNSRecord": {
            "createdAt": [
                198
            ],
            "domain": [
                157
            ],
            "fqdn": [
                323
            ],
            "id": [
                193
            ],
            "isApex": [
                34
            ],
            "isSystem": [
                34
            ],
            "isWildcard": [
                34
            ],
            "name": [
                323
            ],
            "rdata": [
                323
            ],
            "ttl": [
                204
            ],
            "type": [
                121
            ],
            "updatedAt": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "DNSRecordAttributes": {
            "name": [
                323
            ],
            "rdata": [
                323
            ],
            "ttl": [
                204
            ],
            "type": [
                121
            ],
            "__typename": [
                323
            ]
        },
        "DNSRecordChangeAction": {},
        "DNSRecordChangeInput": {
            "action": [
                116
            ],
            "recordId": [
                193
            ],
            "type": [
                121
            ],
            "name": [
                323
            ],
            "ttl": [
                204
            ],
            "rdata": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DNSRecordConnection": {
            "edges": [
                120
            ],
            "nodes": [
                114
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "DNSRecordDiff": {
            "action": [
                116
            ],
            "newAttributes": [
                115
            ],
            "newText": [
                323
            ],
            "oldAttributes": [
                115
            ],
            "oldText": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DNSRecordEdge": {
            "cursor": [
                323
            ],
            "node": [
                114
            ],
            "__typename": [
                323
            ]
        },
        "DNSRecordType": {},
        "DNSRecordWarning": {
            "action": [
                116
            ],
            "attributes": [
                115
            ],
            "message": [
                323
            ],
            "record": [
                114
            ],
            "__typename": [
                323
            ]
        },
        "DelegatedWireGuardToken": {
            "id": [
                193
            ],
            "name": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DelegatedWireGuardTokenConnection": {
            "edges": [
                125
            ],
            "nodes": [
                123
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "DelegatedWireGuardTokenEdge": {
            "cursor": [
                323
            ],
            "node": [
                123
            ],
            "__typename": [
                323
            ]
        },
        "DeleteAppPayload": {
            "organization": [
                234
            ],
            "__typename": [
                323
            ]
        },
        "DeleteCertificatePayload": {
            "app": [
                8
            ],
            "certificate": [
                9
            ],
            "errors": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDNSPortalInput": {
            "clientMutationId": [
                323
            ],
            "dnsPortalId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDNSPortalPayload": {
            "clientMutationId": [
                323
            ],
            "organization": [
                234
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDNSPortalSessionInput": {
            "clientMutationId": [
                323
            ],
            "dnsPortalSessionId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDNSPortalSessionPayload": {
            "clientMutationId": [
                323
            ],
            "dnsPortal": [
                110
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDNSRecordInput": {
            "clientMutationId": [
                323
            ],
            "recordId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDNSRecordPayload": {
            "clientMutationId": [
                323
            ],
            "domain": [
                157
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDelegatedWireGuardTokenInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "token": [
                323
            ],
            "name": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDelegatedWireGuardTokenPayload": {
            "clientMutationId": [
                323
            ],
            "token": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDeploymentSourceInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDeploymentSourcePayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDomainInput": {
            "clientMutationId": [
                323
            ],
            "domainId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "DeleteDomainPayload": {
            "clientMutationId": [
                323
            ],
            "organization": [
                234
            ],
            "__typename": [
                323
            ]
        },
        "DeleteHealthCheckHandlerInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "name": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DeleteHealthCheckHandlerPayload": {
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DeleteOrganizationInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "DeleteOrganizationInvitationInput": {
            "clientMutationId": [
                323
            ],
            "invitationId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "DeleteOrganizationInvitationPayload": {
            "clientMutationId": [
                323
            ],
            "organization": [
                234
            ],
            "__typename": [
                323
            ]
        },
        "DeleteOrganizationMembershipInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "userId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "DeleteOrganizationMembershipPayload": {
            "clientMutationId": [
                323
            ],
            "organization": [
                234
            ],
            "user": [
                340
            ],
            "__typename": [
                323
            ]
        },
        "DeleteOrganizationPayload": {
            "clientMutationId": [
                323
            ],
            "deletedOrganizationId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "DeleteVolumeInput": {
            "clientMutationId": [
                323
            ],
            "volumeId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "DeleteVolumePayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DeployImageInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "image": [
                323
            ],
            "services": [
                297
            ],
            "definition": [
                207
            ],
            "strategy": [
                154
            ],
            "__typename": [
                323
            ]
        },
        "DeployImagePayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "release": [
                264
            ],
            "releaseCommand": [
                265
            ],
            "__typename": [
                323
            ]
        },
        "DeploymentSource": {
            "backend": [
                207
            ],
            "baseDir": [
                323
            ],
            "connected": [
                34
            ],
            "id": [
                193
            ],
            "provider": [
                323
            ],
            "ref": [
                323
            ],
            "repositoryId": [
                323
            ],
            "repositoryUrl": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DeploymentStatus": {
            "allocations": [
                6
            ],
            "description": [
                323
            ],
            "desiredCount": [
                204
            ],
            "healthyCount": [
                204
            ],
            "id": [
                193
            ],
            "inProgress": [
                34
            ],
            "placedCount": [
                204
            ],
            "promoted": [
                34
            ],
            "status": [
                323
            ],
            "successful": [
                34
            ],
            "unhealthyCount": [
                204
            ],
            "version": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "DeploymentStrategy": {},
        "DetachPostgresClusterInput": {
            "clientMutationId": [
                323
            ],
            "postgresClusterAppId": [
                193
            ],
            "appId": [
                193
            ],
            "postgresClusterAttachmentId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "DetachPostgresClusterPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "postgresClusterApp": [
                8
            ],
            "__typename": [
                323
            ]
        },
        "Domain": {
            "autoRenew": [
                34
            ],
            "createdAt": [
                198
            ],
            "delegatedNameservers": [
                323
            ],
            "dnsRecords": [
                118,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "dnsStatus": [
                159
            ],
            "expiresAt": [
                198
            ],
            "id": [
                193
            ],
            "name": [
                323
            ],
            "organization": [
                234
            ],
            "registrationStatus": [
                161
            ],
            "updatedAt": [
                198
            ],
            "zoneNameservers": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DomainConnection": {
            "edges": [
                160
            ],
            "nodes": [
                157
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "DomainDNSStatus": {},
        "DomainEdge": {
            "cursor": [
                323
            ],
            "node": [
                157
            ],
            "__typename": [
                323
            ]
        },
        "DomainRegistrationStatus": {},
        "DummyWireGuardPeerInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "region": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "DummyWireGuardPeerPayload": {
            "clientMutationId": [
                323
            ],
            "endpointip": [
                323
            ],
            "localpub": [
                323
            ],
            "peerip": [
                323
            ],
            "privkey": [
                323
            ],
            "pubkey": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "EnablePostgresConsulInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "EnablePostgresConsulPayload": {
            "clientMutationId": [
                323
            ],
            "consulUrl": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "EnsureMachineRemoteBuilderInput": {
            "clientMutationId": [
                323
            ],
            "appName": [
                323
            ],
            "organizationId": [
                193
            ],
            "region": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "EnsureMachineRemoteBuilderPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "machine": [
                218
            ],
            "__typename": [
                323
            ]
        },
        "EstablishSSHKeyInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "override": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "EstablishSSHKeyPayload": {
            "certificate": [
                323
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "ExportDNSZoneInput": {
            "clientMutationId": [
                323
            ],
            "domainId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "ExportDNSZonePayload": {
            "clientMutationId": [
                323
            ],
            "contents": [
                323
            ],
            "domain": [
                157
            ],
            "__typename": [
                323
            ]
        },
        "Float": {},
        "FlyPlatform": {
            "flyctl": [
                175
            ],
            "regions": [
                259
            ],
            "requestRegion": [
                323
            ],
            "vmSizes": [
                345
            ],
            "__typename": [
                323
            ]
        },
        "FlyctlMachineHostAppRole": {
            "name": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "FlyctlRelease": {
            "timestamp": [
                198
            ],
            "version": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "GithubAppInstallation": {
            "editUrl": [
                323
            ],
            "id": [
                193
            ],
            "owner": [
                323
            ],
            "repositories": [
                178
            ],
            "__typename": [
                323
            ]
        },
        "GithubIntegration": {
            "installationUrl": [
                323
            ],
            "installations": [
                176
            ],
            "viewerAuthenticated": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "GithubRepository": {
            "fork": [
                34
            ],
            "fullName": [
                323
            ],
            "id": [
                323
            ],
            "name": [
                323
            ],
            "private": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "GrantPostgresClusterUserAccessInput": {
            "clientMutationId": [
                323
            ],
            "appName": [
                323
            ],
            "username": [
                323
            ],
            "databaseName": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "GrantPostgresClusterUserAccessPayload": {
            "clientMutationId": [
                323
            ],
            "database": [
                253
            ],
            "postgresClusterRole": [
                249
            ],
            "user": [
                254
            ],
            "__typename": [
                323
            ]
        },
        "HTTPMethod": {},
        "HTTPProtocol": {},
        "HealthCheck": {
            "entity": [
                323
            ],
            "lastPassing": [
                198
            ],
            "name": [
                323
            ],
            "output": [
                323
            ],
            "state": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "HealthCheckConnection": {
            "edges": [
                185
            ],
            "nodes": [
                183
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "HealthCheckEdge": {
            "cursor": [
                323
            ],
            "node": [
                183
            ],
            "__typename": [
                323
            ]
        },
        "HealthCheckHandler": {
            "name": [
                323
            ],
            "type": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "HealthCheckHandlerConnection": {
            "edges": [
                188
            ],
            "nodes": [
                186
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "HealthCheckHandlerEdge": {
            "cursor": [
                323
            ],
            "node": [
                186
            ],
            "__typename": [
                323
            ]
        },
        "HerokuApp": {
            "id": [
                323
            ],
            "name": [
                323
            ],
            "region": [
                323
            ],
            "releasedAt": [
                198
            ],
            "stack": [
                323
            ],
            "teamName": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "HerokuIntegration": {
            "herokuApps": [
                189
            ],
            "viewerAuthenticated": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "Host": {
            "id": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "HostnameCheck": {
            "aRecords": [
                323
            ],
            "aaaaRecords": [
                323
            ],
            "acmeDnsConfigured": [
                34
            ],
            "caaRecords": [
                323
            ],
            "cnameRecords": [
                323
            ],
            "dnsConfigured": [
                34
            ],
            "dnsProvider": [
                323
            ],
            "dnsVerificationRecord": [
                323
            ],
            "errors": [
                323
            ],
            "id": [
                193
            ],
            "isProxied": [
                34
            ],
            "resolvedAddresses": [
                323
            ],
            "soa": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "ID": {},
        "IPAddress": {
            "address": [
                323
            ],
            "createdAt": [
                198
            ],
            "id": [
                193
            ],
            "region": [
                323
            ],
            "type": [
                197
            ],
            "__typename": [
                323
            ]
        },
        "IPAddressConnection": {
            "edges": [
                196
            ],
            "nodes": [
                194
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "IPAddressEdge": {
            "cursor": [
                323
            ],
            "node": [
                194
            ],
            "__typename": [
                323
            ]
        },
        "IPAddressType": {},
        "ISO8601DateTime": {},
        "Image": {
            "absoluteRef": [
                323
            ],
            "compressedSize": [
                204
            ],
            "config": [
                207
            ],
            "configDigest": [
                207
            ],
            "createdAt": [
                198
            ],
            "digest": [
                323
            ],
            "id": [
                193
            ],
            "label": [
                323
            ],
            "manifest": [
                207
            ],
            "ref": [
                323
            ],
            "registry": [
                323
            ],
            "repository": [
                323
            ],
            "tag": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "ImageVersion": {
            "digest": [
                323
            ],
            "registry": [
                323
            ],
            "repository": [
                323
            ],
            "tag": [
                323
            ],
            "version": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "ImportCertificatePayload": {
            "app": [
                8
            ],
            "appCertificate": [
                9
            ],
            "certificate": [
                39
            ],
            "errors": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "ImportDNSZoneInput": {
            "clientMutationId": [
                323
            ],
            "domainId": [
                193
            ],
            "zonefile": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "ImportDNSZonePayload": {
            "changes": [
                119
            ],
            "clientMutationId": [
                323
            ],
            "domain": [
                157
            ],
            "warnings": [
                122
            ],
            "__typename": [
                323
            ]
        },
        "Int": {},
        "IssueCertificateInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "email": [
                323
            ],
            "username": [
                323
            ],
            "validHours": [
                204
            ],
            "principals": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "IssueCertificatePayload": {
            "certificate": [
                323
            ],
            "clientMutationId": [
                323
            ],
            "key": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "JSON": {},
        "KillMachineInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "id": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "KillMachinePayload": {
            "clientMutationId": [
                323
            ],
            "machine": [
                218
            ],
            "__typename": [
                323
            ]
        },
        "LaunchAppInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "name": [
                323
            ],
            "config": [
                207
            ],
            "vmSize": [
                346
            ],
            "regions": [
                323
            ],
            "count": [
                204
            ],
            "volumes": [
                352
            ],
            "secrets": [
                294
            ],
            "scheduling": [
                292
            ],
            "image": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "LaunchAppPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "release": [
                264
            ],
            "__typename": [
                323
            ]
        },
        "LaunchMachineInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "organizationId": [
                193
            ],
            "id": [
                323
            ],
            "name": [
                323
            ],
            "region": [
                323
            ],
            "config": [
                207
            ],
            "__typename": [
                323
            ]
        },
        "LaunchMachinePayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "machine": [
                218
            ],
            "__typename": [
                323
            ]
        },
        "LogEntry": {
            "id": [
                323
            ],
            "instanceId": [
                323
            ],
            "level": [
                323
            ],
            "message": [
                323
            ],
            "region": [
                323
            ],
            "timestamp": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "LoggedCertificate": {
            "cert": [
                323
            ],
            "id": [
                193
            ],
            "root": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "LoggedCertificateConnection": {
            "edges": [
                217
            ],
            "nodes": [
                215
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "LoggedCertificateEdge": {
            "cursor": [
                323
            ],
            "node": [
                215
            ],
            "__typename": [
                323
            ]
        },
        "Machine": {
            "app": [
                8
            ],
            "config": [
                207
            ],
            "createdAt": [
                198
            ],
            "events": [
                222,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ],
                    "kind": [
                        323
                    ]
                }
            ],
            "host": [
                191
            ],
            "id": [
                193
            ],
            "ips": [
                229,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "name": [
                323
            ],
            "region": [
                323
            ],
            "state": [
                323
            ],
            "updatedAt": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "MachineConnection": {
            "edges": [
                220
            ],
            "nodes": [
                218
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "MachineEdge": {
            "cursor": [
                323
            ],
            "node": [
                218
            ],
            "__typename": [
                323
            ]
        },
        "MachineEvent": {
            "id": [
                193
            ],
            "kind": [
                323
            ],
            "timestamp": [
                198
            ],
            "on_MachineEventDestroy": [
                223
            ],
            "on_MachineEventExit": [
                225
            ],
            "on_MachineEventGeneric": [
                226
            ],
            "on_MachineEventStart": [
                227
            ],
            "__typename": [
                323
            ]
        },
        "MachineEventConnection": {
            "edges": [
                224
            ],
            "nodes": [
                221
            ],
            "pageInfo": [
                245
            ],
            "__typename": [
                323
            ]
        },
        "MachineEventDestroy": {
            "id": [
                193
            ],
            "kind": [
                323
            ],
            "timestamp": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "MachineEventEdge": {
            "cursor": [
                323
            ],
            "node": [
                221
            ],
            "__typename": [
                323
            ]
        },
        "MachineEventExit": {
            "exitCode": [
                204
            ],
            "id": [
                193
            ],
            "kind": [
                323
            ],
            "metadata": [
                207
            ],
            "oomKilled": [
                34
            ],
            "requestedStop": [
                34
            ],
            "timestamp": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "MachineEventGeneric": {
            "id": [
                193
            ],
            "kind": [
                323
            ],
            "timestamp": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "MachineEventStart": {
            "id": [
                193
            ],
            "kind": [
                323
            ],
            "timestamp": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "MachineIP": {
            "family": [
                323
            ],
            "id": [
                193
            ],
            "ip": [
                323
            ],
            "kind": [
                323
            ],
            "maskSize": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "MachineIPConnection": {
            "edges": [
                230
            ],
            "nodes": [
                228
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "MachineIPEdge": {
            "cursor": [
                323
            ],
            "node": [
                228
            ],
            "__typename": [
                323
            ]
        },
        "MoveAppInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "organizationId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "MoveAppPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "Node": {
            "id": [
                193
            ],
            "on_AccessToken": [
                0
            ],
            "on_Allocation": [
                6
            ],
            "on_App": [
                8
            ],
            "on_AppCertificate": [
                9
            ],
            "on_AppChange": [
                13
            ],
            "on_Build": [
                35
            ],
            "on_Certificate": [
                39
            ],
            "on_CheckHTTPResponse": [
                47
            ],
            "on_CheckJob": [
                54
            ],
            "on_CheckJobRun": [
                59
            ],
            "on_DNSPortal": [
                110
            ],
            "on_DNSPortalSession": [
                113
            ],
            "on_DNSRecord": [
                114
            ],
            "on_DelegatedWireGuardToken": [
                123
            ],
            "on_Domain": [
                157
            ],
            "on_Host": [
                191
            ],
            "on_IPAddress": [
                194
            ],
            "on_LoggedCertificate": [
                215
            ],
            "on_Machine": [
                218
            ],
            "on_MachineIP": [
                228
            ],
            "on_Organization": [
                234
            ],
            "on_OrganizationInvitation": [
                237
            ],
            "on_PostgresClusterAttachment": [
                250
            ],
            "on_Release": [
                264
            ],
            "on_ReleaseCommand": [
                265
            ],
            "on_Secret": [
                293
            ],
            "on_SourceBuild": [
                312
            ],
            "on_TemplateDeployment": [
                325
            ],
            "on_User": [
                340
            ],
            "on_VM": [
                341
            ],
            "on_Volume": [
                349
            ],
            "on_VolumeSnapshot": [
                353
            ],
            "on_WireGuardPeer": [
                356
            ],
            "__typename": [
                323
            ]
        },
        "Organization": {
            "activeDiscountName": [
                323
            ],
            "apps": [
                18,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "billables": [
                31,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ],
                    "startDate": [
                        198,
                        "ISO8601DateTime!"
                    ],
                    "endDate": [
                        198,
                        "ISO8601DateTime!"
                    ],
                    "appId": [
                        193
                    ]
                }
            ],
            "billingStatus": [
                33
            ],
            "creditBalance": [
                204
            ],
            "creditBalanceFormatted": [
                323
            ],
            "delegatedWireGuardTokens": [
                124,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "dnsPortal": [
                110,
                {
                    "name": [
                        323,
                        "String!"
                    ]
                }
            ],
            "dnsPortals": [
                111,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "domain": [
                157,
                {
                    "name": [
                        323,
                        "String!"
                    ]
                }
            ],
            "domains": [
                158,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "healthCheckHandlers": [
                187,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "healthChecks": [
                184,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "id": [
                193
            ],
            "internalNumericId": [
                29
            ],
            "invitations": [
                238,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "isCreditCardSaved": [
                34
            ],
            "loggedCertificates": [
                216,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "members": [
                241,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "name": [
                323
            ],
            "slug": [
                323
            ],
            "sshCertificate": [
                323
            ],
            "trust": [
                243
            ],
            "type": [
                244
            ],
            "viewerRole": [
                323
            ],
            "wireGuardPeer": [
                356,
                {
                    "name": [
                        323,
                        "String!"
                    ]
                }
            ],
            "wireGuardPeers": [
                357,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "__typename": [
                323
            ]
        },
        "OrganizationConnection": {
            "edges": [
                236
            ],
            "nodes": [
                234
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "OrganizationEdge": {
            "cursor": [
                323
            ],
            "node": [
                234
            ],
            "__typename": [
                323
            ]
        },
        "OrganizationInvitation": {
            "createdAt": [
                198
            ],
            "email": [
                323
            ],
            "id": [
                193
            ],
            "inviter": [
                340
            ],
            "organization": [
                234
            ],
            "redeemed": [
                34
            ],
            "redeemedAt": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "OrganizationInvitationConnection": {
            "edges": [
                239
            ],
            "nodes": [
                237
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "OrganizationInvitationEdge": {
            "cursor": [
                323
            ],
            "node": [
                237
            ],
            "__typename": [
                323
            ]
        },
        "OrganizationMemberRole": {},
        "OrganizationMembershipsConnection": {
            "edges": [
                242
            ],
            "nodes": [
                340
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "OrganizationMembershipsEdge": {
            "cursor": [
                323
            ],
            "joinedAt": [
                198
            ],
            "node": [
                340
            ],
            "role": [
                240
            ],
            "__typename": [
                323
            ]
        },
        "OrganizationTrust": {},
        "OrganizationType": {},
        "PageInfo": {
            "endCursor": [
                323
            ],
            "hasNextPage": [
                34
            ],
            "hasPreviousPage": [
                34
            ],
            "startCursor": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "PauseAppInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "PauseAppPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "PlatformVersionEnum": {},
        "PostgresClusterAppRole": {
            "databases": [
                253
            ],
            "name": [
                323
            ],
            "users": [
                254
            ],
            "__typename": [
                323
            ]
        },
        "PostgresClusterAttachment": {
            "databaseName": [
                323
            ],
            "databaseUser": [
                323
            ],
            "environmentVariableName": [
                323
            ],
            "id": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "PostgresClusterAttachmentConnection": {
            "edges": [
                252
            ],
            "nodes": [
                250
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "PostgresClusterAttachmentEdge": {
            "cursor": [
                323
            ],
            "node": [
                250
            ],
            "__typename": [
                323
            ]
        },
        "PostgresClusterDatabase": {
            "name": [
                323
            ],
            "users": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "PostgresClusterUser": {
            "databases": [
                323
            ],
            "isSuperuser": [
                34
            ],
            "username": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "PriceTier": {
            "unitAmount": [
                323
            ],
            "upTo": [
                29
            ],
            "__typename": [
                323
            ]
        },
        "ProcessGroup": {
            "maxPerRegion": [
                204
            ],
            "name": [
                323
            ],
            "regions": [
                323
            ],
            "vmSize": [
                345
            ],
            "__typename": [
                323
            ]
        },
        "Product": {
            "name": [
                323
            ],
            "tiers": [
                255
            ],
            "type": [
                323
            ],
            "unitLabel": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "PropertyInput": {
            "name": [
                323
            ],
            "value": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "Region": {
            "code": [
                323
            ],
            "gatewayAvailable": [
                34
            ],
            "latitude": [
                172
            ],
            "longitude": [
                172
            ],
            "name": [
                323
            ],
            "processGroup": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "RegionEnum": {},
        "RegionPlacement": {
            "count": [
                204
            ],
            "region": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "RegisterDomainInput": {
            "clientMutationId": [
                323
            ],
            "domainId": [
                193
            ],
            "whoisPrivacy": [
                34
            ],
            "autoRenew": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "RegisterDomainPayload": {
            "clientMutationId": [
                323
            ],
            "domain": [
                157
            ],
            "__typename": [
                323
            ]
        },
        "Release": {
            "config": [
                17
            ],
            "createdAt": [
                198
            ],
            "deploymentStrategy": [
                154
            ],
            "description": [
                323
            ],
            "evaluationId": [
                323
            ],
            "id": [
                193
            ],
            "image": [
                199
            ],
            "imageRef": [
                323
            ],
            "inProgress": [
                34
            ],
            "reason": [
                323
            ],
            "revertedTo": [
                204
            ],
            "stable": [
                34
            ],
            "status": [
                323
            ],
            "updatedAt": [
                198
            ],
            "user": [
                340
            ],
            "version": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "ReleaseCommand": {
            "app": [
                8
            ],
            "command": [
                323
            ],
            "evaluationId": [
                323
            ],
            "exitCode": [
                204
            ],
            "failed": [
                34
            ],
            "id": [
                193
            ],
            "inProgress": [
                34
            ],
            "instanceId": [
                323
            ],
            "status": [
                323
            ],
            "succeeded": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "ReleaseConnection": {
            "edges": [
                267
            ],
            "nodes": [
                264
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "ReleaseEdge": {
            "cursor": [
                323
            ],
            "node": [
                264
            ],
            "__typename": [
                323
            ]
        },
        "ReleaseIPAddressInput": {
            "clientMutationId": [
                323
            ],
            "ipAddressId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "ReleaseIPAddressPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "RemoteDockerBuilderAppRole": {
            "name": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "RemoveMachineInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "id": [
                323
            ],
            "kill": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "RemoveMachinePayload": {
            "clientMutationId": [
                323
            ],
            "machine": [
                218
            ],
            "__typename": [
                323
            ]
        },
        "RemoveWireGuardPeerInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "name": [
                323
            ],
            "nats": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "RemoveWireGuardPeerPayload": {
            "clientMutationId": [
                323
            ],
            "organization": [
                234
            ],
            "__typename": [
                323
            ]
        },
        "RestartAllocationInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "allocId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "RestartAllocationPayload": {
            "allocation": [
                6
            ],
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "RestartAppInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "RestartAppPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "RestoreVolumeSnapshotInput": {
            "clientMutationId": [
                323
            ],
            "volumeId": [
                193
            ],
            "snapshotId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "RestoreVolumeSnapshotPayload": {
            "clientMutationId": [
                323
            ],
            "snapshot": [
                353
            ],
            "volume": [
                349
            ],
            "__typename": [
                323
            ]
        },
        "ResumeAppInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "ResumeAppPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "RevokePostgresClusterUserAccessInput": {
            "clientMutationId": [
                323
            ],
            "appName": [
                323
            ],
            "username": [
                323
            ],
            "databaseName": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "RevokePostgresClusterUserAccessPayload": {
            "clientMutationId": [
                323
            ],
            "database": [
                253
            ],
            "postgresClusterRole": [
                249
            ],
            "user": [
                254
            ],
            "__typename": [
                323
            ]
        },
        "RuntimeType": {},
        "SaveDeploymentSourceInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                323
            ],
            "provider": [
                323
            ],
            "repositoryId": [
                323
            ],
            "ref": [
                323
            ],
            "baseDir": [
                323
            ],
            "skipBuild": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "SaveDeploymentSourcePayload": {
            "app": [
                8
            ],
            "build": [
                35
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "ScaleAppInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "regions": [
                291
            ],
            "__typename": [
                323
            ]
        },
        "ScaleAppPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "delta": [
                290
            ],
            "placement": [
                261
            ],
            "__typename": [
                323
            ]
        },
        "ScaleRegionChange": {
            "fromCount": [
                204
            ],
            "region": [
                323
            ],
            "toCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "ScaleRegionInput": {
            "region": [
                323
            ],
            "count": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "SchedulingEnum": {},
        "Secret": {
            "createdAt": [
                198
            ],
            "digest": [
                323
            ],
            "id": [
                193
            ],
            "name": [
                323
            ],
            "user": [
                340
            ],
            "__typename": [
                323
            ]
        },
        "SecretInput": {
            "key": [
                323
            ],
            "value": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "Service": {
            "checks": [
                42
            ],
            "description": [
                323
            ],
            "hardConcurrency": [
                204
            ],
            "internalPort": [
                204
            ],
            "ports": [
                299
            ],
            "protocol": [
                301
            ],
            "softConcurrency": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "ServiceHandlerType": {},
        "ServiceInput": {
            "protocol": [
                301
            ],
            "ports": [
                298
            ],
            "internalPort": [
                204
            ],
            "checks": [
                53
            ],
            "softConcurrency": [
                204
            ],
            "hardConcurrency": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "ServiceInputPort": {
            "port": [
                204
            ],
            "handlers": [
                296
            ],
            "tlsOptions": [
                300
            ],
            "__typename": [
                323
            ]
        },
        "ServicePort": {
            "handlers": [
                296
            ],
            "port": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "ServicePortTlsOptionsInput": {
            "defaultSelfSigned": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "ServiceProtocolType": {},
        "SetPagerdutyHandlerInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "name": [
                323
            ],
            "pagerdutyToken": [
                323
            ],
            "pagerdutyStatusMap": [
                207
            ],
            "__typename": [
                323
            ]
        },
        "SetPagerdutyHandlerPayload": {
            "clientMutationId": [
                323
            ],
            "handler": [
                186
            ],
            "__typename": [
                323
            ]
        },
        "SetSecretsInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "secrets": [
                294
            ],
            "replaceAll": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "SetSecretsPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "release": [
                264
            ],
            "__typename": [
                323
            ]
        },
        "SetSlackHandlerInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "name": [
                323
            ],
            "slackWebhookUrl": [
                323
            ],
            "slackChannel": [
                323
            ],
            "slackUsername": [
                323
            ],
            "slackIconUrl": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "SetSlackHandlerPayload": {
            "clientMutationId": [
                323
            ],
            "handler": [
                186
            ],
            "__typename": [
                323
            ]
        },
        "SetVMCountInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "groupCounts": [
                343
            ],
            "__typename": [
                323
            ]
        },
        "SetVMCountPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "release": [
                264
            ],
            "taskGroupCounts": [
                324
            ],
            "warnings": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "SetVMSizeInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "sizeName": [
                323
            ],
            "memoryMb": [
                204
            ],
            "group": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "SetVMSizePayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "processGroup": [
                256
            ],
            "vmSize": [
                345
            ],
            "__typename": [
                323
            ]
        },
        "SourceBuild": {
            "app": [
                8
            ],
            "createdAt": [
                198
            ],
            "createdBy": [
                340
            ],
            "id": [
                193
            ],
            "image": [
                323
            ],
            "logs": [
                323
            ],
            "status": [
                323
            ],
            "updatedAt": [
                198
            ],
            "__typename": [
                323
            ]
        },
        "SourceBuildConnection": {
            "edges": [
                314
            ],
            "nodes": [
                312
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "SourceBuildEdge": {
            "cursor": [
                323
            ],
            "node": [
                312
            ],
            "__typename": [
                323
            ]
        },
        "StartBuildInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "StartBuildPayload": {
            "clientMutationId": [
                323
            ],
            "sourceBuild": [
                312
            ],
            "__typename": [
                323
            ]
        },
        "StartMachineInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "id": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "StartMachinePayload": {
            "clientMutationId": [
                323
            ],
            "machine": [
                218
            ],
            "__typename": [
                323
            ]
        },
        "StopAllocationInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "allocId": [
                193
            ],
            "__typename": [
                323
            ]
        },
        "StopAllocationPayload": {
            "allocation": [
                6
            ],
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "StopMachineInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "id": [
                323
            ],
            "signal": [
                323
            ],
            "killTimeoutSecs": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "StopMachinePayload": {
            "clientMutationId": [
                323
            ],
            "machine": [
                218
            ],
            "__typename": [
                323
            ]
        },
        "String": {},
        "TaskGroupCount": {
            "count": [
                204
            ],
            "name": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "TemplateDeployment": {
            "apps": [
                18,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "id": [
                193
            ],
            "organization": [
                234
            ],
            "status": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "UnsetSecretsInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "keys": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "UnsetSecretsPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "release": [
                264
            ],
            "__typename": [
                323
            ]
        },
        "UpdateAutoscaleConfigInput": {
            "clientMutationId": [
                323
            ],
            "appId": [
                193
            ],
            "enabled": [
                34
            ],
            "minCount": [
                204
            ],
            "maxCount": [
                204
            ],
            "balanceRegions": [
                34
            ],
            "regions": [
                26
            ],
            "resetRegions": [
                34
            ],
            "__typename": [
                323
            ]
        },
        "UpdateAutoscaleConfigPayload": {
            "app": [
                8
            ],
            "clientMutationId": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "UpdateBuildInput": {
            "clientMutationId": [
                323
            ],
            "recordId": [
                193
            ],
            "logs": [
                323
            ],
            "status": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "UpdateBuildPayload": {
            "clientMutationId": [
                323
            ],
            "sourceBuild": [
                312
            ],
            "__typename": [
                323
            ]
        },
        "UpdateDNSPortalInput": {
            "clientMutationId": [
                323
            ],
            "dnsPortalId": [
                193
            ],
            "name": [
                323
            ],
            "title": [
                323
            ],
            "returnUrl": [
                323
            ],
            "returnUrlText": [
                323
            ],
            "supportUrl": [
                323
            ],
            "supportUrlText": [
                323
            ],
            "primaryColor": [
                323
            ],
            "accentColor": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "UpdateDNSPortalPayload": {
            "clientMutationId": [
                323
            ],
            "dnsPortal": [
                110
            ],
            "__typename": [
                323
            ]
        },
        "UpdateDNSRecordInput": {
            "clientMutationId": [
                323
            ],
            "recordId": [
                193
            ],
            "name": [
                323
            ],
            "ttl": [
                204
            ],
            "rdata": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "UpdateDNSRecordPayload": {
            "clientMutationId": [
                323
            ],
            "record": [
                114
            ],
            "__typename": [
                323
            ]
        },
        "UpdateDNSRecordsInput": {
            "clientMutationId": [
                323
            ],
            "domainId": [
                193
            ],
            "changes": [
                117
            ],
            "__typename": [
                323
            ]
        },
        "UpdateDNSRecordsPayload": {
            "changes": [
                119
            ],
            "clientMutationId": [
                323
            ],
            "domain": [
                157
            ],
            "warnings": [
                122
            ],
            "__typename": [
                323
            ]
        },
        "UpdateOrganizationMembershipInput": {
            "clientMutationId": [
                323
            ],
            "organizationId": [
                193
            ],
            "userId": [
                193
            ],
            "role": [
                240
            ],
            "__typename": [
                323
            ]
        },
        "UpdateOrganizationMembershipPayload": {
            "clientMutationId": [
                323
            ],
            "organization": [
                234
            ],
            "user": [
                340
            ],
            "__typename": [
                323
            ]
        },
        "User": {
            "avatarUrl": [
                323
            ],
            "createdAt": [
                198
            ],
            "email": [
                323
            ],
            "featureFlags": [
                323
            ],
            "hasNodeproxyApps": [
                34
            ],
            "id": [
                193
            ],
            "lastRegion": [
                323
            ],
            "name": [
                323
            ],
            "organizations": [
                235,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "personalOrganization": [
                234
            ],
            "trust": [
                243
            ],
            "twoFactorProtection": [
                34
            ],
            "username": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "VM": {
            "attachedVolumes": [
                350,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "canary": [
                34
            ],
            "checks": [
                65,
                {
                    "name": [
                        323
                    ]
                }
            ],
            "createdAt": [
                198
            ],
            "criticalCheckCount": [
                204
            ],
            "desiredStatus": [
                323
            ],
            "events": [
                7
            ],
            "failed": [
                34
            ],
            "healthy": [
                34
            ],
            "id": [
                193
            ],
            "idShort": [
                193
            ],
            "latestVersion": [
                34
            ],
            "passingCheckCount": [
                204
            ],
            "privateIP": [
                323
            ],
            "recentLogs": [
                214,
                {
                    "limit": [
                        204
                    ],
                    "range": [
                        204
                    ]
                }
            ],
            "region": [
                323
            ],
            "restarts": [
                204
            ],
            "status": [
                323
            ],
            "taskName": [
                323
            ],
            "totalCheckCount": [
                204
            ],
            "transitioning": [
                34
            ],
            "updatedAt": [
                198
            ],
            "version": [
                204
            ],
            "warningCheckCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "VMConnection": {
            "activeCount": [
                204
            ],
            "completeCount": [
                204
            ],
            "edges": [
                344
            ],
            "failedCount": [
                204
            ],
            "inactiveCount": [
                204
            ],
            "lostCount": [
                204
            ],
            "nodes": [
                341
            ],
            "pageInfo": [
                245
            ],
            "pendingCount": [
                204
            ],
            "runningCount": [
                204
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "VMCountInput": {
            "group": [
                323
            ],
            "count": [
                204
            ],
            "maxPerRegion": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "VMEdge": {
            "cursor": [
                323
            ],
            "node": [
                341
            ],
            "__typename": [
                323
            ]
        },
        "VMSize": {
            "cpuCores": [
                172
            ],
            "maxMemoryMb": [
                204
            ],
            "memoryGb": [
                172
            ],
            "memoryIncrementsMb": [
                204
            ],
            "memoryMb": [
                204
            ],
            "name": [
                323
            ],
            "priceMonth": [
                172
            ],
            "priceSecond": [
                172
            ],
            "__typename": [
                323
            ]
        },
        "VMSizeEnum": {},
        "ValidateWireGuardPeersInput": {
            "clientMutationId": [
                323
            ],
            "peerIps": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "ValidateWireGuardPeersPayload": {
            "clientMutationId": [
                323
            ],
            "invalidPeerIps": [
                323
            ],
            "validPeerIps": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "Volume": {
            "app": [
                8
            ],
            "attachedAllocation": [
                6
            ],
            "createdAt": [
                198
            ],
            "encrypted": [
                34
            ],
            "host": [
                191
            ],
            "id": [
                193
            ],
            "internalId": [
                323
            ],
            "name": [
                323
            ],
            "region": [
                323
            ],
            "sizeGb": [
                204
            ],
            "snapshots": [
                354,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "state": [
                323
            ],
            "status": [
                323
            ],
            "usedBytes": [
                29
            ],
            "__typename": [
                323
            ]
        },
        "VolumeConnection": {
            "edges": [
                351
            ],
            "nodes": [
                349
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "VolumeEdge": {
            "cursor": [
                323
            ],
            "node": [
                349
            ],
            "__typename": [
                323
            ]
        },
        "VolumeInput": {
            "name": [
                323
            ],
            "region": [
                260
            ],
            "sizeGb": [
                204
            ],
            "encrypted": [
                34
            ],
            "count": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "VolumeSnapshot": {
            "createdAt": [
                198
            ],
            "digest": [
                323
            ],
            "id": [
                193
            ],
            "size": [
                29
            ],
            "volume": [
                349
            ],
            "__typename": [
                323
            ]
        },
        "VolumeSnapshotConnection": {
            "edges": [
                355
            ],
            "nodes": [
                353
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "VolumeSnapshotEdge": {
            "cursor": [
                323
            ],
            "node": [
                353
            ],
            "__typename": [
                323
            ]
        },
        "WireGuardPeer": {
            "gatewayStatus": [
                207
            ],
            "id": [
                193
            ],
            "name": [
                323
            ],
            "network": [
                323
            ],
            "peerip": [
                323
            ],
            "pubkey": [
                323
            ],
            "region": [
                323
            ],
            "__typename": [
                323
            ]
        },
        "WireGuardPeerConnection": {
            "edges": [
                358
            ],
            "nodes": [
                356
            ],
            "pageInfo": [
                245
            ],
            "totalCount": [
                204
            ],
            "__typename": [
                323
            ]
        },
        "WireGuardPeerEdge": {
            "cursor": [
                323
            ],
            "node": [
                356
            ],
            "__typename": [
                323
            ]
        },
        "Query": {
            "app": [
                8,
                {
                    "name": [
                        323
                    ],
                    "internalId": [
                        323
                    ]
                }
            ],
            "apps": [
                18,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ],
                    "active": [
                        34
                    ],
                    "role": [
                        323
                    ]
                }
            ],
            "checkJobs": [
                55,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ]
                }
            ],
            "checkLocations": [
                62
            ],
            "currentUser": [
                340
            ],
            "domain": [
                157,
                {
                    "name": [
                        323,
                        "String!"
                    ]
                }
            ],
            "githubIntegration": [
                177
            ],
            "herokuIntegration": [
                190
            ],
            "latestImageTag": [
                323,
                {
                    "repository": [
                        323,
                        "String!"
                    ]
                }
            ],
            "machines": [
                219,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ],
                    "appId": [
                        323
                    ],
                    "state": [
                        323
                    ]
                }
            ],
            "nearestRegion": [
                259,
                {
                    "wireguardGateway": [
                        34
                    ]
                }
            ],
            "node": [
                233,
                {
                    "id": [
                        193,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                233,
                {
                    "ids": [
                        193,
                        "[ID!]!"
                    ]
                }
            ],
            "organization": [
                234,
                {
                    "id": [
                        193
                    ],
                    "name": [
                        323
                    ],
                    "slug": [
                        323
                    ]
                }
            ],
            "organizations": [
                235,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ],
                    "withBillingIssuesOnly": [
                        34
                    ],
                    "admin": [
                        34
                    ],
                    "type": [
                        244
                    ]
                }
            ],
            "personalOrganization": [
                234
            ],
            "platform": [
                173
            ],
            "postgresAttachments": [
                251,
                {
                    "after": [
                        323
                    ],
                    "before": [
                        323
                    ],
                    "first": [
                        204
                    ],
                    "last": [
                        204
                    ],
                    "appName": [
                        323,
                        "String!"
                    ],
                    "postgresAppName": [
                        323,
                        "String!"
                    ]
                }
            ],
            "products": [
                257
            ],
            "viewer": [
                340
            ],
            "__typename": [
                323
            ]
        },
        "Mutation": {
            "addCertificate": [
                1,
                {
                    "appId": [
                        193,
                        "ID!"
                    ],
                    "hostname": [
                        323,
                        "String!"
                    ]
                }
            ],
            "addWireGuardPeer": [
                3,
                {
                    "input": [
                        2,
                        "AddWireGuardPeerInput!"
                    ]
                }
            ],
            "allocateIpAddress": [
                5,
                {
                    "input": [
                        4,
                        "AllocateIPAddressInput!"
                    ]
                }
            ],
            "attachPostgresCluster": [
                24,
                {
                    "input": [
                        23,
                        "AttachPostgresClusterInput!"
                    ]
                }
            ],
            "cancelBuild": [
                38,
                {
                    "buildId": [
                        193,
                        "ID!"
                    ]
                }
            ],
            "checkCertificate": [
                44,
                {
                    "input": [
                        43,
                        "CheckCertificateInput!"
                    ]
                }
            ],
            "checkDomain": [
                46,
                {
                    "input": [
                        45,
                        "CheckDomainInput!"
                    ]
                }
            ],
            "configureRegions": [
                70,
                {
                    "input": [
                        69,
                        "ConfigureRegionsInput!"
                    ]
                }
            ],
            "createAndRegisterDomain": [
                72,
                {
                    "input": [
                        71,
                        "CreateAndRegisterDomainInput!"
                    ]
                }
            ],
            "createAndTransferDomain": [
                74,
                {
                    "input": [
                        73,
                        "CreateAndTransferDomainInput!"
                    ]
                }
            ],
            "createApp": [
                76,
                {
                    "input": [
                        75,
                        "CreateAppInput!"
                    ]
                }
            ],
            "createCheckJob": [
                78,
                {
                    "input": [
                        77,
                        "CreateCheckJobInput!"
                    ]
                }
            ],
            "createCheckJobRun": [
                80,
                {
                    "input": [
                        79,
                        "CreateCheckJobRunInput!"
                    ]
                }
            ],
            "createDelegatedWireGuardToken": [
                88,
                {
                    "input": [
                        87,
                        "CreateDelegatedWireGuardTokenInput!"
                    ]
                }
            ],
            "createDnsPortal": [
                82,
                {
                    "input": [
                        81,
                        "CreateDNSPortalInput!"
                    ]
                }
            ],
            "createDnsPortalSession": [
                84,
                {
                    "input": [
                        83,
                        "CreateDNSPortalSessionInput!"
                    ]
                }
            ],
            "createDnsRecord": [
                86,
                {
                    "input": [
                        85,
                        "CreateDNSRecordInput!"
                    ]
                }
            ],
            "createDoctorReport": [
                90,
                {
                    "input": [
                        89,
                        "CreateDoctorReportInput!"
                    ]
                }
            ],
            "createDoctorUrl": [
                91
            ],
            "createDomain": [
                93,
                {
                    "input": [
                        92,
                        "CreateDomainInput!"
                    ]
                }
            ],
            "createOrganization": [
                97,
                {
                    "input": [
                        94,
                        "CreateOrganizationInput!"
                    ]
                }
            ],
            "createOrganizationInvitation": [
                96,
                {
                    "input": [
                        95,
                        "CreateOrganizationInvitationInput!"
                    ]
                }
            ],
            "createPostgresCluster": [
                101,
                {
                    "input": [
                        100,
                        "CreatePostgresClusterInput!"
                    ]
                }
            ],
            "createPostgresClusterDatabase": [
                99,
                {
                    "input": [
                        98,
                        "CreatePostgresClusterDatabaseInput!"
                    ]
                }
            ],
            "createPostgresClusterUser": [
                103,
                {
                    "input": [
                        102,
                        "CreatePostgresClusterUserInput!"
                    ]
                }
            ],
            "createTemplateDeployment": [
                105,
                {
                    "input": [
                        104,
                        "CreateTemplateDeploymentInput!"
                    ]
                }
            ],
            "createVolume": [
                107,
                {
                    "input": [
                        106,
                        "CreateVolumeInput!"
                    ]
                }
            ],
            "createVolumeSnapshot": [
                109,
                {
                    "input": [
                        108,
                        "CreateVolumeSnapshotInput!"
                    ]
                }
            ],
            "deleteApp": [
                126,
                {
                    "appId": [
                        193,
                        "ID!"
                    ]
                }
            ],
            "deleteCertificate": [
                127,
                {
                    "appId": [
                        193,
                        "ID!"
                    ],
                    "hostname": [
                        323,
                        "String!"
                    ]
                }
            ],
            "deleteDelegatedWireGuardToken": [
                135,
                {
                    "input": [
                        134,
                        "DeleteDelegatedWireGuardTokenInput!"
                    ]
                }
            ],
            "deleteDeploymentSource": [
                137,
                {
                    "input": [
                        136,
                        "DeleteDeploymentSourceInput!"
                    ]
                }
            ],
            "deleteDnsPortal": [
                129,
                {
                    "input": [
                        128,
                        "DeleteDNSPortalInput!"
                    ]
                }
            ],
            "deleteDnsPortalSession": [
                131,
                {
                    "input": [
                        130,
                        "DeleteDNSPortalSessionInput!"
                    ]
                }
            ],
            "deleteDnsRecord": [
                133,
                {
                    "input": [
                        132,
                        "DeleteDNSRecordInput!"
                    ]
                }
            ],
            "deleteDomain": [
                139,
                {
                    "input": [
                        138,
                        "DeleteDomainInput!"
                    ]
                }
            ],
            "deleteHealthCheckHandler": [
                141,
                {
                    "input": [
                        140,
                        "DeleteHealthCheckHandlerInput!"
                    ]
                }
            ],
            "deleteOrganization": [
                147,
                {
                    "input": [
                        142,
                        "DeleteOrganizationInput!"
                    ]
                }
            ],
            "deleteOrganizationInvitation": [
                144,
                {
                    "input": [
                        143,
                        "DeleteOrganizationInvitationInput!"
                    ]
                }
            ],
            "deleteOrganizationMembership": [
                146,
                {
                    "input": [
                        145,
                        "DeleteOrganizationMembershipInput!"
                    ]
                }
            ],
            "deleteVolume": [
                149,
                {
                    "input": [
                        148,
                        "DeleteVolumeInput!"
                    ]
                }
            ],
            "deployImage": [
                151,
                {
                    "input": [
                        150,
                        "DeployImageInput!"
                    ]
                }
            ],
            "detachPostgresCluster": [
                156,
                {
                    "input": [
                        155,
                        "DetachPostgresClusterInput!"
                    ]
                }
            ],
            "dummyWireGuardPeer": [
                163,
                {
                    "input": [
                        162,
                        "DummyWireGuardPeerInput!"
                    ]
                }
            ],
            "enablePostgresConsul": [
                165,
                {
                    "input": [
                        164,
                        "EnablePostgresConsulInput!"
                    ]
                }
            ],
            "ensureMachineRemoteBuilder": [
                167,
                {
                    "input": [
                        166,
                        "EnsureMachineRemoteBuilderInput!"
                    ]
                }
            ],
            "establishSshKey": [
                169,
                {
                    "input": [
                        168,
                        "EstablishSSHKeyInput!"
                    ]
                }
            ],
            "exportDnsZone": [
                171,
                {
                    "input": [
                        170,
                        "ExportDNSZoneInput!"
                    ]
                }
            ],
            "grantPostgresClusterUserAccess": [
                180,
                {
                    "input": [
                        179,
                        "GrantPostgresClusterUserAccessInput!"
                    ]
                }
            ],
            "importCertificate": [
                201,
                {
                    "appId": [
                        193,
                        "ID!"
                    ],
                    "fullchain": [
                        323,
                        "String!"
                    ],
                    "privateKey": [
                        323,
                        "String!"
                    ],
                    "hostname": [
                        323
                    ]
                }
            ],
            "importDnsZone": [
                203,
                {
                    "input": [
                        202,
                        "ImportDNSZoneInput!"
                    ]
                }
            ],
            "issueCertificate": [
                206,
                {
                    "input": [
                        205,
                        "IssueCertificateInput!"
                    ]
                }
            ],
            "killMachine": [
                209,
                {
                    "input": [
                        208,
                        "KillMachineInput!"
                    ]
                }
            ],
            "launchApp": [
                211,
                {
                    "input": [
                        210,
                        "LaunchAppInput!"
                    ]
                }
            ],
            "launchMachine": [
                213,
                {
                    "input": [
                        212,
                        "LaunchMachineInput!"
                    ]
                }
            ],
            "moveApp": [
                232,
                {
                    "input": [
                        231,
                        "MoveAppInput!"
                    ]
                }
            ],
            "pauseApp": [
                247,
                {
                    "input": [
                        246,
                        "PauseAppInput!"
                    ]
                }
            ],
            "registerDomain": [
                263,
                {
                    "input": [
                        262,
                        "RegisterDomainInput!"
                    ]
                }
            ],
            "releaseIpAddress": [
                269,
                {
                    "input": [
                        268,
                        "ReleaseIPAddressInput!"
                    ]
                }
            ],
            "removeMachine": [
                272,
                {
                    "input": [
                        271,
                        "RemoveMachineInput!"
                    ]
                }
            ],
            "removeWireGuardPeer": [
                274,
                {
                    "input": [
                        273,
                        "RemoveWireGuardPeerInput!"
                    ]
                }
            ],
            "restartAllocation": [
                276,
                {
                    "input": [
                        275,
                        "RestartAllocationInput!"
                    ]
                }
            ],
            "restartApp": [
                278,
                {
                    "input": [
                        277,
                        "RestartAppInput!"
                    ]
                }
            ],
            "restoreVolumeSnapshot": [
                280,
                {
                    "input": [
                        279,
                        "RestoreVolumeSnapshotInput!"
                    ]
                }
            ],
            "resumeApp": [
                282,
                {
                    "input": [
                        281,
                        "ResumeAppInput!"
                    ]
                }
            ],
            "revokePostgresClusterUserAccess": [
                284,
                {
                    "input": [
                        283,
                        "RevokePostgresClusterUserAccessInput!"
                    ]
                }
            ],
            "saveDeploymentSource": [
                287,
                {
                    "input": [
                        286,
                        "SaveDeploymentSourceInput!"
                    ]
                }
            ],
            "scaleApp": [
                289,
                {
                    "input": [
                        288,
                        "ScaleAppInput!"
                    ]
                }
            ],
            "setPagerdutyHandler": [
                303,
                {
                    "input": [
                        302,
                        "SetPagerdutyHandlerInput!"
                    ]
                }
            ],
            "setSecrets": [
                305,
                {
                    "input": [
                        304,
                        "SetSecretsInput!"
                    ]
                }
            ],
            "setSlackHandler": [
                307,
                {
                    "input": [
                        306,
                        "SetSlackHandlerInput!"
                    ]
                }
            ],
            "setVmCount": [
                309,
                {
                    "input": [
                        308,
                        "SetVMCountInput!"
                    ]
                }
            ],
            "setVmSize": [
                311,
                {
                    "input": [
                        310,
                        "SetVMSizeInput!"
                    ]
                }
            ],
            "startBuild": [
                316,
                {
                    "input": [
                        315,
                        "StartBuildInput!"
                    ]
                }
            ],
            "startMachine": [
                318,
                {
                    "input": [
                        317,
                        "StartMachineInput!"
                    ]
                }
            ],
            "stopAllocation": [
                320,
                {
                    "input": [
                        319,
                        "StopAllocationInput!"
                    ]
                }
            ],
            "stopMachine": [
                322,
                {
                    "input": [
                        321,
                        "StopMachineInput!"
                    ]
                }
            ],
            "unsetSecrets": [
                327,
                {
                    "input": [
                        326,
                        "UnsetSecretsInput!"
                    ]
                }
            ],
            "updateAutoscaleConfig": [
                329,
                {
                    "input": [
                        328,
                        "UpdateAutoscaleConfigInput!"
                    ]
                }
            ],
            "updateBuild": [
                331,
                {
                    "input": [
                        330,
                        "UpdateBuildInput!"
                    ]
                }
            ],
            "updateDnsPortal": [
                333,
                {
                    "input": [
                        332,
                        "UpdateDNSPortalInput!"
                    ]
                }
            ],
            "updateDnsRecord": [
                335,
                {
                    "input": [
                        334,
                        "UpdateDNSRecordInput!"
                    ]
                }
            ],
            "updateDnsRecords": [
                337,
                {
                    "input": [
                        336,
                        "UpdateDNSRecordsInput!"
                    ]
                }
            ],
            "updateOrganizationMembership": [
                339,
                {
                    "input": [
                        338,
                        "UpdateOrganizationMembershipInput!"
                    ]
                }
            ],
            "validateWireGuardPeers": [
                348,
                {
                    "input": [
                        347,
                        "ValidateWireGuardPeersInput!"
                    ]
                }
            ],
            "__typename": [
                323
            ]
        }
    }
}