
var AccessToken_possibleTypes = ['AccessToken']
export var isAccessToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAccessToken"')
  return AccessToken_possibleTypes.includes(obj.__typename)
}



var AddCertificatePayload_possibleTypes = ['AddCertificatePayload']
export var isAddCertificatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddCertificatePayload"')
  return AddCertificatePayload_possibleTypes.includes(obj.__typename)
}



var AddWireGuardPeerPayload_possibleTypes = ['AddWireGuardPeerPayload']
export var isAddWireGuardPeerPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddWireGuardPeerPayload"')
  return AddWireGuardPeerPayload_possibleTypes.includes(obj.__typename)
}



var AllocateIPAddressPayload_possibleTypes = ['AllocateIPAddressPayload']
export var isAllocateIPAddressPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAllocateIPAddressPayload"')
  return AllocateIPAddressPayload_possibleTypes.includes(obj.__typename)
}



var Allocation_possibleTypes = ['Allocation']
export var isAllocation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAllocation"')
  return Allocation_possibleTypes.includes(obj.__typename)
}



var AllocationEvent_possibleTypes = ['AllocationEvent']
export var isAllocationEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAllocationEvent"')
  return AllocationEvent_possibleTypes.includes(obj.__typename)
}



var App_possibleTypes = ['App']
export var isApp = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isApp"')
  return App_possibleTypes.includes(obj.__typename)
}



var AppCertificate_possibleTypes = ['AppCertificate']
export var isAppCertificate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppCertificate"')
  return AppCertificate_possibleTypes.includes(obj.__typename)
}



var AppCertificateConnection_possibleTypes = ['AppCertificateConnection']
export var isAppCertificateConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppCertificateConnection"')
  return AppCertificateConnection_possibleTypes.includes(obj.__typename)
}



var AppCertificateEdge_possibleTypes = ['AppCertificateEdge']
export var isAppCertificateEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppCertificateEdge"')
  return AppCertificateEdge_possibleTypes.includes(obj.__typename)
}



var AppCertificateValidationError_possibleTypes = ['AppCertificateValidationError']
export var isAppCertificateValidationError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppCertificateValidationError"')
  return AppCertificateValidationError_possibleTypes.includes(obj.__typename)
}



var AppChange_possibleTypes = ['AppChange']
export var isAppChange = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppChange"')
  return AppChange_possibleTypes.includes(obj.__typename)
}



var AppChangeActor_possibleTypes = ['Build','Release','Secret']
export var isAppChangeActor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppChangeActor"')
  return AppChangeActor_possibleTypes.includes(obj.__typename)
}



var AppChangeConnection_possibleTypes = ['AppChangeConnection']
export var isAppChangeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppChangeConnection"')
  return AppChangeConnection_possibleTypes.includes(obj.__typename)
}



var AppChangeEdge_possibleTypes = ['AppChangeEdge']
export var isAppChangeEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppChangeEdge"')
  return AppChangeEdge_possibleTypes.includes(obj.__typename)
}



var AppConfig_possibleTypes = ['AppConfig']
export var isAppConfig = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppConfig"')
  return AppConfig_possibleTypes.includes(obj.__typename)
}



var AppConnection_possibleTypes = ['AppConnection']
export var isAppConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppConnection"')
  return AppConnection_possibleTypes.includes(obj.__typename)
}



var AppEdge_possibleTypes = ['AppEdge']
export var isAppEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppEdge"')
  return AppEdge_possibleTypes.includes(obj.__typename)
}



var AppRole_possibleTypes = ['FlyctlMachineHostAppRole','PostgresClusterAppRole','RemoteDockerBuilderAppRole']
export var isAppRole = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppRole"')
  return AppRole_possibleTypes.includes(obj.__typename)
}



var AppUsage_possibleTypes = ['AppUsage']
export var isAppUsage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAppUsage"')
  return AppUsage_possibleTypes.includes(obj.__typename)
}



var AttachPostgresClusterPayload_possibleTypes = ['AttachPostgresClusterPayload']
export var isAttachPostgresClusterPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAttachPostgresClusterPayload"')
  return AttachPostgresClusterPayload_possibleTypes.includes(obj.__typename)
}



var AutoscaleRegionConfig_possibleTypes = ['AutoscaleRegionConfig']
export var isAutoscaleRegionConfig = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAutoscaleRegionConfig"')
  return AutoscaleRegionConfig_possibleTypes.includes(obj.__typename)
}



var AutoscalingConfig_possibleTypes = ['AutoscalingConfig']
export var isAutoscalingConfig = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAutoscalingConfig"')
  return AutoscalingConfig_possibleTypes.includes(obj.__typename)
}



var Billable_possibleTypes = ['Billable']
export var isBillable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBillable"')
  return Billable_possibleTypes.includes(obj.__typename)
}



var BillableConnection_possibleTypes = ['BillableConnection']
export var isBillableConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBillableConnection"')
  return BillableConnection_possibleTypes.includes(obj.__typename)
}



var BillableEdge_possibleTypes = ['BillableEdge']
export var isBillableEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBillableEdge"')
  return BillableEdge_possibleTypes.includes(obj.__typename)
}



var Build_possibleTypes = ['Build']
export var isBuild = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBuild"')
  return Build_possibleTypes.includes(obj.__typename)
}



var BuildConnection_possibleTypes = ['BuildConnection']
export var isBuildConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBuildConnection"')
  return BuildConnection_possibleTypes.includes(obj.__typename)
}



var BuildEdge_possibleTypes = ['BuildEdge']
export var isBuildEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isBuildEdge"')
  return BuildEdge_possibleTypes.includes(obj.__typename)
}



var CancelBuildPayload_possibleTypes = ['CancelBuildPayload']
export var isCancelBuildPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCancelBuildPayload"')
  return CancelBuildPayload_possibleTypes.includes(obj.__typename)
}



var Certificate_possibleTypes = ['Certificate']
export var isCertificate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCertificate"')
  return Certificate_possibleTypes.includes(obj.__typename)
}



var CertificateConnection_possibleTypes = ['CertificateConnection']
export var isCertificateConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCertificateConnection"')
  return CertificateConnection_possibleTypes.includes(obj.__typename)
}



var CertificateEdge_possibleTypes = ['CertificateEdge']
export var isCertificateEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCertificateEdge"')
  return CertificateEdge_possibleTypes.includes(obj.__typename)
}



var Check_possibleTypes = ['Check']
export var isCheck = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheck"')
  return Check_possibleTypes.includes(obj.__typename)
}



var CheckCertificatePayload_possibleTypes = ['CheckCertificatePayload']
export var isCheckCertificatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckCertificatePayload"')
  return CheckCertificatePayload_possibleTypes.includes(obj.__typename)
}



var CheckDomainPayload_possibleTypes = ['CheckDomainPayload']
export var isCheckDomainPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckDomainPayload"')
  return CheckDomainPayload_possibleTypes.includes(obj.__typename)
}



var CheckHTTPResponse_possibleTypes = ['CheckHTTPResponse']
export var isCheckHTTPResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckHTTPResponse"')
  return CheckHTTPResponse_possibleTypes.includes(obj.__typename)
}



var CheckHTTPResponseConnection_possibleTypes = ['CheckHTTPResponseConnection']
export var isCheckHTTPResponseConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckHTTPResponseConnection"')
  return CheckHTTPResponseConnection_possibleTypes.includes(obj.__typename)
}



var CheckHTTPResponseEdge_possibleTypes = ['CheckHTTPResponseEdge']
export var isCheckHTTPResponseEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckHTTPResponseEdge"')
  return CheckHTTPResponseEdge_possibleTypes.includes(obj.__typename)
}



var CheckHeader_possibleTypes = ['CheckHeader']
export var isCheckHeader = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckHeader"')
  return CheckHeader_possibleTypes.includes(obj.__typename)
}



var CheckJob_possibleTypes = ['CheckJob']
export var isCheckJob = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckJob"')
  return CheckJob_possibleTypes.includes(obj.__typename)
}



var CheckJobConnection_possibleTypes = ['CheckJobConnection']
export var isCheckJobConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckJobConnection"')
  return CheckJobConnection_possibleTypes.includes(obj.__typename)
}



var CheckJobEdge_possibleTypes = ['CheckJobEdge']
export var isCheckJobEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckJobEdge"')
  return CheckJobEdge_possibleTypes.includes(obj.__typename)
}



var CheckJobHTTPOptions_possibleTypes = ['CheckJobHTTPOptions']
export var isCheckJobHTTPOptions = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckJobHTTPOptions"')
  return CheckJobHTTPOptions_possibleTypes.includes(obj.__typename)
}



var CheckJobRun_possibleTypes = ['CheckJobRun']
export var isCheckJobRun = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckJobRun"')
  return CheckJobRun_possibleTypes.includes(obj.__typename)
}



var CheckJobRunConnection_possibleTypes = ['CheckJobRunConnection']
export var isCheckJobRunConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckJobRunConnection"')
  return CheckJobRunConnection_possibleTypes.includes(obj.__typename)
}



var CheckJobRunEdge_possibleTypes = ['CheckJobRunEdge']
export var isCheckJobRunEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckJobRunEdge"')
  return CheckJobRunEdge_possibleTypes.includes(obj.__typename)
}



var CheckLocation_possibleTypes = ['CheckLocation']
export var isCheckLocation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckLocation"')
  return CheckLocation_possibleTypes.includes(obj.__typename)
}



var CheckLocationConnection_possibleTypes = ['CheckLocationConnection']
export var isCheckLocationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckLocationConnection"')
  return CheckLocationConnection_possibleTypes.includes(obj.__typename)
}



var CheckLocationEdge_possibleTypes = ['CheckLocationEdge']
export var isCheckLocationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckLocationEdge"')
  return CheckLocationEdge_possibleTypes.includes(obj.__typename)
}



var CheckState_possibleTypes = ['CheckState']
export var isCheckState = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckState"')
  return CheckState_possibleTypes.includes(obj.__typename)
}



var CheckStateConnection_possibleTypes = ['CheckStateConnection']
export var isCheckStateConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckStateConnection"')
  return CheckStateConnection_possibleTypes.includes(obj.__typename)
}



var CheckStateEdge_possibleTypes = ['CheckStateEdge']
export var isCheckStateEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCheckStateEdge"')
  return CheckStateEdge_possibleTypes.includes(obj.__typename)
}



var ConfigureRegionsPayload_possibleTypes = ['ConfigureRegionsPayload']
export var isConfigureRegionsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isConfigureRegionsPayload"')
  return ConfigureRegionsPayload_possibleTypes.includes(obj.__typename)
}



var CreateAndRegisterDomainPayload_possibleTypes = ['CreateAndRegisterDomainPayload']
export var isCreateAndRegisterDomainPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateAndRegisterDomainPayload"')
  return CreateAndRegisterDomainPayload_possibleTypes.includes(obj.__typename)
}



var CreateAndTransferDomainPayload_possibleTypes = ['CreateAndTransferDomainPayload']
export var isCreateAndTransferDomainPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateAndTransferDomainPayload"')
  return CreateAndTransferDomainPayload_possibleTypes.includes(obj.__typename)
}



var CreateAppPayload_possibleTypes = ['CreateAppPayload']
export var isCreateAppPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateAppPayload"')
  return CreateAppPayload_possibleTypes.includes(obj.__typename)
}



var CreateCheckJobPayload_possibleTypes = ['CreateCheckJobPayload']
export var isCreateCheckJobPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateCheckJobPayload"')
  return CreateCheckJobPayload_possibleTypes.includes(obj.__typename)
}



var CreateCheckJobRunPayload_possibleTypes = ['CreateCheckJobRunPayload']
export var isCreateCheckJobRunPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateCheckJobRunPayload"')
  return CreateCheckJobRunPayload_possibleTypes.includes(obj.__typename)
}



var CreateDNSPortalPayload_possibleTypes = ['CreateDNSPortalPayload']
export var isCreateDNSPortalPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateDNSPortalPayload"')
  return CreateDNSPortalPayload_possibleTypes.includes(obj.__typename)
}



var CreateDNSPortalSessionPayload_possibleTypes = ['CreateDNSPortalSessionPayload']
export var isCreateDNSPortalSessionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateDNSPortalSessionPayload"')
  return CreateDNSPortalSessionPayload_possibleTypes.includes(obj.__typename)
}



var CreateDNSRecordPayload_possibleTypes = ['CreateDNSRecordPayload']
export var isCreateDNSRecordPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateDNSRecordPayload"')
  return CreateDNSRecordPayload_possibleTypes.includes(obj.__typename)
}



var CreateDelegatedWireGuardTokenPayload_possibleTypes = ['CreateDelegatedWireGuardTokenPayload']
export var isCreateDelegatedWireGuardTokenPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateDelegatedWireGuardTokenPayload"')
  return CreateDelegatedWireGuardTokenPayload_possibleTypes.includes(obj.__typename)
}



var CreateDoctorReportPayload_possibleTypes = ['CreateDoctorReportPayload']
export var isCreateDoctorReportPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateDoctorReportPayload"')
  return CreateDoctorReportPayload_possibleTypes.includes(obj.__typename)
}



var CreateDoctorUrlPayload_possibleTypes = ['CreateDoctorUrlPayload']
export var isCreateDoctorUrlPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateDoctorUrlPayload"')
  return CreateDoctorUrlPayload_possibleTypes.includes(obj.__typename)
}



var CreateDomainPayload_possibleTypes = ['CreateDomainPayload']
export var isCreateDomainPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateDomainPayload"')
  return CreateDomainPayload_possibleTypes.includes(obj.__typename)
}



var CreateOrganizationInvitationPayload_possibleTypes = ['CreateOrganizationInvitationPayload']
export var isCreateOrganizationInvitationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateOrganizationInvitationPayload"')
  return CreateOrganizationInvitationPayload_possibleTypes.includes(obj.__typename)
}



var CreateOrganizationPayload_possibleTypes = ['CreateOrganizationPayload']
export var isCreateOrganizationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateOrganizationPayload"')
  return CreateOrganizationPayload_possibleTypes.includes(obj.__typename)
}



var CreatePostgresClusterDatabasePayload_possibleTypes = ['CreatePostgresClusterDatabasePayload']
export var isCreatePostgresClusterDatabasePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatePostgresClusterDatabasePayload"')
  return CreatePostgresClusterDatabasePayload_possibleTypes.includes(obj.__typename)
}



var CreatePostgresClusterPayload_possibleTypes = ['CreatePostgresClusterPayload']
export var isCreatePostgresClusterPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatePostgresClusterPayload"')
  return CreatePostgresClusterPayload_possibleTypes.includes(obj.__typename)
}



var CreatePostgresClusterUserPayload_possibleTypes = ['CreatePostgresClusterUserPayload']
export var isCreatePostgresClusterUserPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreatePostgresClusterUserPayload"')
  return CreatePostgresClusterUserPayload_possibleTypes.includes(obj.__typename)
}



var CreateTemplateDeploymentPayload_possibleTypes = ['CreateTemplateDeploymentPayload']
export var isCreateTemplateDeploymentPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateTemplateDeploymentPayload"')
  return CreateTemplateDeploymentPayload_possibleTypes.includes(obj.__typename)
}



var CreateVolumePayload_possibleTypes = ['CreateVolumePayload']
export var isCreateVolumePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateVolumePayload"')
  return CreateVolumePayload_possibleTypes.includes(obj.__typename)
}



var CreateVolumeSnapshotPayload_possibleTypes = ['CreateVolumeSnapshotPayload']
export var isCreateVolumeSnapshotPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateVolumeSnapshotPayload"')
  return CreateVolumeSnapshotPayload_possibleTypes.includes(obj.__typename)
}



var DNSPortal_possibleTypes = ['DNSPortal']
export var isDNSPortal = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDNSPortal"')
  return DNSPortal_possibleTypes.includes(obj.__typename)
}



var DNSPortalConnection_possibleTypes = ['DNSPortalConnection']
export var isDNSPortalConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDNSPortalConnection"')
  return DNSPortalConnection_possibleTypes.includes(obj.__typename)
}



var DNSPortalEdge_possibleTypes = ['DNSPortalEdge']
export var isDNSPortalEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDNSPortalEdge"')
  return DNSPortalEdge_possibleTypes.includes(obj.__typename)
}



var DNSPortalSession_possibleTypes = ['DNSPortalSession']
export var isDNSPortalSession = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDNSPortalSession"')
  return DNSPortalSession_possibleTypes.includes(obj.__typename)
}



var DNSRecord_possibleTypes = ['DNSRecord']
export var isDNSRecord = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDNSRecord"')
  return DNSRecord_possibleTypes.includes(obj.__typename)
}



var DNSRecordAttributes_possibleTypes = ['DNSRecordAttributes']
export var isDNSRecordAttributes = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDNSRecordAttributes"')
  return DNSRecordAttributes_possibleTypes.includes(obj.__typename)
}



var DNSRecordConnection_possibleTypes = ['DNSRecordConnection']
export var isDNSRecordConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDNSRecordConnection"')
  return DNSRecordConnection_possibleTypes.includes(obj.__typename)
}



var DNSRecordDiff_possibleTypes = ['DNSRecordDiff']
export var isDNSRecordDiff = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDNSRecordDiff"')
  return DNSRecordDiff_possibleTypes.includes(obj.__typename)
}



var DNSRecordEdge_possibleTypes = ['DNSRecordEdge']
export var isDNSRecordEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDNSRecordEdge"')
  return DNSRecordEdge_possibleTypes.includes(obj.__typename)
}



var DNSRecordWarning_possibleTypes = ['DNSRecordWarning']
export var isDNSRecordWarning = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDNSRecordWarning"')
  return DNSRecordWarning_possibleTypes.includes(obj.__typename)
}



var DelegatedWireGuardToken_possibleTypes = ['DelegatedWireGuardToken']
export var isDelegatedWireGuardToken = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDelegatedWireGuardToken"')
  return DelegatedWireGuardToken_possibleTypes.includes(obj.__typename)
}



var DelegatedWireGuardTokenConnection_possibleTypes = ['DelegatedWireGuardTokenConnection']
export var isDelegatedWireGuardTokenConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDelegatedWireGuardTokenConnection"')
  return DelegatedWireGuardTokenConnection_possibleTypes.includes(obj.__typename)
}



var DelegatedWireGuardTokenEdge_possibleTypes = ['DelegatedWireGuardTokenEdge']
export var isDelegatedWireGuardTokenEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDelegatedWireGuardTokenEdge"')
  return DelegatedWireGuardTokenEdge_possibleTypes.includes(obj.__typename)
}



var DeleteAppPayload_possibleTypes = ['DeleteAppPayload']
export var isDeleteAppPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteAppPayload"')
  return DeleteAppPayload_possibleTypes.includes(obj.__typename)
}



var DeleteCertificatePayload_possibleTypes = ['DeleteCertificatePayload']
export var isDeleteCertificatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteCertificatePayload"')
  return DeleteCertificatePayload_possibleTypes.includes(obj.__typename)
}



var DeleteDNSPortalPayload_possibleTypes = ['DeleteDNSPortalPayload']
export var isDeleteDNSPortalPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteDNSPortalPayload"')
  return DeleteDNSPortalPayload_possibleTypes.includes(obj.__typename)
}



var DeleteDNSPortalSessionPayload_possibleTypes = ['DeleteDNSPortalSessionPayload']
export var isDeleteDNSPortalSessionPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteDNSPortalSessionPayload"')
  return DeleteDNSPortalSessionPayload_possibleTypes.includes(obj.__typename)
}



var DeleteDNSRecordPayload_possibleTypes = ['DeleteDNSRecordPayload']
export var isDeleteDNSRecordPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteDNSRecordPayload"')
  return DeleteDNSRecordPayload_possibleTypes.includes(obj.__typename)
}



var DeleteDelegatedWireGuardTokenPayload_possibleTypes = ['DeleteDelegatedWireGuardTokenPayload']
export var isDeleteDelegatedWireGuardTokenPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteDelegatedWireGuardTokenPayload"')
  return DeleteDelegatedWireGuardTokenPayload_possibleTypes.includes(obj.__typename)
}



var DeleteDeploymentSourcePayload_possibleTypes = ['DeleteDeploymentSourcePayload']
export var isDeleteDeploymentSourcePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteDeploymentSourcePayload"')
  return DeleteDeploymentSourcePayload_possibleTypes.includes(obj.__typename)
}



var DeleteDomainPayload_possibleTypes = ['DeleteDomainPayload']
export var isDeleteDomainPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteDomainPayload"')
  return DeleteDomainPayload_possibleTypes.includes(obj.__typename)
}



var DeleteHealthCheckHandlerPayload_possibleTypes = ['DeleteHealthCheckHandlerPayload']
export var isDeleteHealthCheckHandlerPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteHealthCheckHandlerPayload"')
  return DeleteHealthCheckHandlerPayload_possibleTypes.includes(obj.__typename)
}



var DeleteOrganizationInvitationPayload_possibleTypes = ['DeleteOrganizationInvitationPayload']
export var isDeleteOrganizationInvitationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteOrganizationInvitationPayload"')
  return DeleteOrganizationInvitationPayload_possibleTypes.includes(obj.__typename)
}



var DeleteOrganizationMembershipPayload_possibleTypes = ['DeleteOrganizationMembershipPayload']
export var isDeleteOrganizationMembershipPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteOrganizationMembershipPayload"')
  return DeleteOrganizationMembershipPayload_possibleTypes.includes(obj.__typename)
}



var DeleteOrganizationPayload_possibleTypes = ['DeleteOrganizationPayload']
export var isDeleteOrganizationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteOrganizationPayload"')
  return DeleteOrganizationPayload_possibleTypes.includes(obj.__typename)
}



var DeleteVolumePayload_possibleTypes = ['DeleteVolumePayload']
export var isDeleteVolumePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeleteVolumePayload"')
  return DeleteVolumePayload_possibleTypes.includes(obj.__typename)
}



var DeployImagePayload_possibleTypes = ['DeployImagePayload']
export var isDeployImagePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeployImagePayload"')
  return DeployImagePayload_possibleTypes.includes(obj.__typename)
}



var DeploymentSource_possibleTypes = ['DeploymentSource']
export var isDeploymentSource = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentSource"')
  return DeploymentSource_possibleTypes.includes(obj.__typename)
}



var DeploymentStatus_possibleTypes = ['DeploymentStatus']
export var isDeploymentStatus = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeploymentStatus"')
  return DeploymentStatus_possibleTypes.includes(obj.__typename)
}



var DetachPostgresClusterPayload_possibleTypes = ['DetachPostgresClusterPayload']
export var isDetachPostgresClusterPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDetachPostgresClusterPayload"')
  return DetachPostgresClusterPayload_possibleTypes.includes(obj.__typename)
}



var Domain_possibleTypes = ['Domain']
export var isDomain = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDomain"')
  return Domain_possibleTypes.includes(obj.__typename)
}



var DomainConnection_possibleTypes = ['DomainConnection']
export var isDomainConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDomainConnection"')
  return DomainConnection_possibleTypes.includes(obj.__typename)
}



var DomainEdge_possibleTypes = ['DomainEdge']
export var isDomainEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDomainEdge"')
  return DomainEdge_possibleTypes.includes(obj.__typename)
}



var DummyWireGuardPeerPayload_possibleTypes = ['DummyWireGuardPeerPayload']
export var isDummyWireGuardPeerPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDummyWireGuardPeerPayload"')
  return DummyWireGuardPeerPayload_possibleTypes.includes(obj.__typename)
}



var EnablePostgresConsulPayload_possibleTypes = ['EnablePostgresConsulPayload']
export var isEnablePostgresConsulPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnablePostgresConsulPayload"')
  return EnablePostgresConsulPayload_possibleTypes.includes(obj.__typename)
}



var EnsureMachineRemoteBuilderPayload_possibleTypes = ['EnsureMachineRemoteBuilderPayload']
export var isEnsureMachineRemoteBuilderPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEnsureMachineRemoteBuilderPayload"')
  return EnsureMachineRemoteBuilderPayload_possibleTypes.includes(obj.__typename)
}



var EstablishSSHKeyPayload_possibleTypes = ['EstablishSSHKeyPayload']
export var isEstablishSSHKeyPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEstablishSSHKeyPayload"')
  return EstablishSSHKeyPayload_possibleTypes.includes(obj.__typename)
}



var ExportDNSZonePayload_possibleTypes = ['ExportDNSZonePayload']
export var isExportDNSZonePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isExportDNSZonePayload"')
  return ExportDNSZonePayload_possibleTypes.includes(obj.__typename)
}



var FlyPlatform_possibleTypes = ['FlyPlatform']
export var isFlyPlatform = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFlyPlatform"')
  return FlyPlatform_possibleTypes.includes(obj.__typename)
}



var FlyctlMachineHostAppRole_possibleTypes = ['FlyctlMachineHostAppRole']
export var isFlyctlMachineHostAppRole = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFlyctlMachineHostAppRole"')
  return FlyctlMachineHostAppRole_possibleTypes.includes(obj.__typename)
}



var FlyctlRelease_possibleTypes = ['FlyctlRelease']
export var isFlyctlRelease = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFlyctlRelease"')
  return FlyctlRelease_possibleTypes.includes(obj.__typename)
}



var GithubAppInstallation_possibleTypes = ['GithubAppInstallation']
export var isGithubAppInstallation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGithubAppInstallation"')
  return GithubAppInstallation_possibleTypes.includes(obj.__typename)
}



var GithubIntegration_possibleTypes = ['GithubIntegration']
export var isGithubIntegration = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGithubIntegration"')
  return GithubIntegration_possibleTypes.includes(obj.__typename)
}



var GithubRepository_possibleTypes = ['GithubRepository']
export var isGithubRepository = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGithubRepository"')
  return GithubRepository_possibleTypes.includes(obj.__typename)
}



var GrantPostgresClusterUserAccessPayload_possibleTypes = ['GrantPostgresClusterUserAccessPayload']
export var isGrantPostgresClusterUserAccessPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGrantPostgresClusterUserAccessPayload"')
  return GrantPostgresClusterUserAccessPayload_possibleTypes.includes(obj.__typename)
}



var HealthCheck_possibleTypes = ['HealthCheck']
export var isHealthCheck = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHealthCheck"')
  return HealthCheck_possibleTypes.includes(obj.__typename)
}



var HealthCheckConnection_possibleTypes = ['HealthCheckConnection']
export var isHealthCheckConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHealthCheckConnection"')
  return HealthCheckConnection_possibleTypes.includes(obj.__typename)
}



var HealthCheckEdge_possibleTypes = ['HealthCheckEdge']
export var isHealthCheckEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHealthCheckEdge"')
  return HealthCheckEdge_possibleTypes.includes(obj.__typename)
}



var HealthCheckHandler_possibleTypes = ['HealthCheckHandler']
export var isHealthCheckHandler = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHealthCheckHandler"')
  return HealthCheckHandler_possibleTypes.includes(obj.__typename)
}



var HealthCheckHandlerConnection_possibleTypes = ['HealthCheckHandlerConnection']
export var isHealthCheckHandlerConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHealthCheckHandlerConnection"')
  return HealthCheckHandlerConnection_possibleTypes.includes(obj.__typename)
}



var HealthCheckHandlerEdge_possibleTypes = ['HealthCheckHandlerEdge']
export var isHealthCheckHandlerEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHealthCheckHandlerEdge"')
  return HealthCheckHandlerEdge_possibleTypes.includes(obj.__typename)
}



var HerokuApp_possibleTypes = ['HerokuApp']
export var isHerokuApp = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHerokuApp"')
  return HerokuApp_possibleTypes.includes(obj.__typename)
}



var HerokuIntegration_possibleTypes = ['HerokuIntegration']
export var isHerokuIntegration = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHerokuIntegration"')
  return HerokuIntegration_possibleTypes.includes(obj.__typename)
}



var Host_possibleTypes = ['Host']
export var isHost = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHost"')
  return Host_possibleTypes.includes(obj.__typename)
}



var HostnameCheck_possibleTypes = ['HostnameCheck']
export var isHostnameCheck = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isHostnameCheck"')
  return HostnameCheck_possibleTypes.includes(obj.__typename)
}



var IPAddress_possibleTypes = ['IPAddress']
export var isIPAddress = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIPAddress"')
  return IPAddress_possibleTypes.includes(obj.__typename)
}



var IPAddressConnection_possibleTypes = ['IPAddressConnection']
export var isIPAddressConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIPAddressConnection"')
  return IPAddressConnection_possibleTypes.includes(obj.__typename)
}



var IPAddressEdge_possibleTypes = ['IPAddressEdge']
export var isIPAddressEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIPAddressEdge"')
  return IPAddressEdge_possibleTypes.includes(obj.__typename)
}



var Image_possibleTypes = ['Image']
export var isImage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isImage"')
  return Image_possibleTypes.includes(obj.__typename)
}



var ImageVersion_possibleTypes = ['ImageVersion']
export var isImageVersion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isImageVersion"')
  return ImageVersion_possibleTypes.includes(obj.__typename)
}



var ImportCertificatePayload_possibleTypes = ['ImportCertificatePayload']
export var isImportCertificatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isImportCertificatePayload"')
  return ImportCertificatePayload_possibleTypes.includes(obj.__typename)
}



var ImportDNSZonePayload_possibleTypes = ['ImportDNSZonePayload']
export var isImportDNSZonePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isImportDNSZonePayload"')
  return ImportDNSZonePayload_possibleTypes.includes(obj.__typename)
}



var IssueCertificatePayload_possibleTypes = ['IssueCertificatePayload']
export var isIssueCertificatePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isIssueCertificatePayload"')
  return IssueCertificatePayload_possibleTypes.includes(obj.__typename)
}



var KillMachinePayload_possibleTypes = ['KillMachinePayload']
export var isKillMachinePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isKillMachinePayload"')
  return KillMachinePayload_possibleTypes.includes(obj.__typename)
}



var LaunchAppPayload_possibleTypes = ['LaunchAppPayload']
export var isLaunchAppPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLaunchAppPayload"')
  return LaunchAppPayload_possibleTypes.includes(obj.__typename)
}



var LaunchMachinePayload_possibleTypes = ['LaunchMachinePayload']
export var isLaunchMachinePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLaunchMachinePayload"')
  return LaunchMachinePayload_possibleTypes.includes(obj.__typename)
}



var LogEntry_possibleTypes = ['LogEntry']
export var isLogEntry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLogEntry"')
  return LogEntry_possibleTypes.includes(obj.__typename)
}



var LoggedCertificate_possibleTypes = ['LoggedCertificate']
export var isLoggedCertificate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLoggedCertificate"')
  return LoggedCertificate_possibleTypes.includes(obj.__typename)
}



var LoggedCertificateConnection_possibleTypes = ['LoggedCertificateConnection']
export var isLoggedCertificateConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLoggedCertificateConnection"')
  return LoggedCertificateConnection_possibleTypes.includes(obj.__typename)
}



var LoggedCertificateEdge_possibleTypes = ['LoggedCertificateEdge']
export var isLoggedCertificateEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLoggedCertificateEdge"')
  return LoggedCertificateEdge_possibleTypes.includes(obj.__typename)
}



var Machine_possibleTypes = ['Machine']
export var isMachine = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachine"')
  return Machine_possibleTypes.includes(obj.__typename)
}



var MachineConnection_possibleTypes = ['MachineConnection']
export var isMachineConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineConnection"')
  return MachineConnection_possibleTypes.includes(obj.__typename)
}



var MachineEdge_possibleTypes = ['MachineEdge']
export var isMachineEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineEdge"')
  return MachineEdge_possibleTypes.includes(obj.__typename)
}



var MachineEvent_possibleTypes = ['MachineEventDestroy','MachineEventExit','MachineEventGeneric','MachineEventStart']
export var isMachineEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineEvent"')
  return MachineEvent_possibleTypes.includes(obj.__typename)
}



var MachineEventConnection_possibleTypes = ['MachineEventConnection']
export var isMachineEventConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineEventConnection"')
  return MachineEventConnection_possibleTypes.includes(obj.__typename)
}



var MachineEventDestroy_possibleTypes = ['MachineEventDestroy']
export var isMachineEventDestroy = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineEventDestroy"')
  return MachineEventDestroy_possibleTypes.includes(obj.__typename)
}



var MachineEventEdge_possibleTypes = ['MachineEventEdge']
export var isMachineEventEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineEventEdge"')
  return MachineEventEdge_possibleTypes.includes(obj.__typename)
}



var MachineEventExit_possibleTypes = ['MachineEventExit']
export var isMachineEventExit = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineEventExit"')
  return MachineEventExit_possibleTypes.includes(obj.__typename)
}



var MachineEventGeneric_possibleTypes = ['MachineEventGeneric']
export var isMachineEventGeneric = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineEventGeneric"')
  return MachineEventGeneric_possibleTypes.includes(obj.__typename)
}



var MachineEventStart_possibleTypes = ['MachineEventStart']
export var isMachineEventStart = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineEventStart"')
  return MachineEventStart_possibleTypes.includes(obj.__typename)
}



var MachineIP_possibleTypes = ['MachineIP']
export var isMachineIP = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineIP"')
  return MachineIP_possibleTypes.includes(obj.__typename)
}



var MachineIPConnection_possibleTypes = ['MachineIPConnection']
export var isMachineIPConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineIPConnection"')
  return MachineIPConnection_possibleTypes.includes(obj.__typename)
}



var MachineIPEdge_possibleTypes = ['MachineIPEdge']
export var isMachineIPEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMachineIPEdge"')
  return MachineIPEdge_possibleTypes.includes(obj.__typename)
}



var MoveAppPayload_possibleTypes = ['MoveAppPayload']
export var isMoveAppPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMoveAppPayload"')
  return MoveAppPayload_possibleTypes.includes(obj.__typename)
}



var Mutations_possibleTypes = ['Mutations']
export var isMutations = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutations"')
  return Mutations_possibleTypes.includes(obj.__typename)
}



var Node_possibleTypes = ['AccessToken','Allocation','App','AppCertificate','AppChange','Build','Certificate','CheckHTTPResponse','CheckJob','CheckJobRun','DNSPortal','DNSPortalSession','DNSRecord','DelegatedWireGuardToken','Domain','Host','IPAddress','LoggedCertificate','Machine','MachineIP','Organization','OrganizationInvitation','PostgresClusterAttachment','Release','ReleaseCommand','Secret','SourceBuild','TemplateDeployment','User','VM','Volume','VolumeSnapshot','WireGuardPeer']
export var isNode = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isNode"')
  return Node_possibleTypes.includes(obj.__typename)
}



var Organization_possibleTypes = ['Organization']
export var isOrganization = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganization"')
  return Organization_possibleTypes.includes(obj.__typename)
}



var OrganizationConnection_possibleTypes = ['OrganizationConnection']
export var isOrganizationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationConnection"')
  return OrganizationConnection_possibleTypes.includes(obj.__typename)
}



var OrganizationEdge_possibleTypes = ['OrganizationEdge']
export var isOrganizationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationEdge"')
  return OrganizationEdge_possibleTypes.includes(obj.__typename)
}



var OrganizationInvitation_possibleTypes = ['OrganizationInvitation']
export var isOrganizationInvitation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationInvitation"')
  return OrganizationInvitation_possibleTypes.includes(obj.__typename)
}



var OrganizationInvitationConnection_possibleTypes = ['OrganizationInvitationConnection']
export var isOrganizationInvitationConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationInvitationConnection"')
  return OrganizationInvitationConnection_possibleTypes.includes(obj.__typename)
}



var OrganizationInvitationEdge_possibleTypes = ['OrganizationInvitationEdge']
export var isOrganizationInvitationEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationInvitationEdge"')
  return OrganizationInvitationEdge_possibleTypes.includes(obj.__typename)
}



var OrganizationMembershipsConnection_possibleTypes = ['OrganizationMembershipsConnection']
export var isOrganizationMembershipsConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationMembershipsConnection"')
  return OrganizationMembershipsConnection_possibleTypes.includes(obj.__typename)
}



var OrganizationMembershipsEdge_possibleTypes = ['OrganizationMembershipsEdge']
export var isOrganizationMembershipsEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrganizationMembershipsEdge"')
  return OrganizationMembershipsEdge_possibleTypes.includes(obj.__typename)
}



var PageInfo_possibleTypes = ['PageInfo']
export var isPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageInfo"')
  return PageInfo_possibleTypes.includes(obj.__typename)
}



var PauseAppPayload_possibleTypes = ['PauseAppPayload']
export var isPauseAppPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPauseAppPayload"')
  return PauseAppPayload_possibleTypes.includes(obj.__typename)
}



var PostgresClusterAppRole_possibleTypes = ['PostgresClusterAppRole']
export var isPostgresClusterAppRole = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostgresClusterAppRole"')
  return PostgresClusterAppRole_possibleTypes.includes(obj.__typename)
}



var PostgresClusterAttachment_possibleTypes = ['PostgresClusterAttachment']
export var isPostgresClusterAttachment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostgresClusterAttachment"')
  return PostgresClusterAttachment_possibleTypes.includes(obj.__typename)
}



var PostgresClusterAttachmentConnection_possibleTypes = ['PostgresClusterAttachmentConnection']
export var isPostgresClusterAttachmentConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostgresClusterAttachmentConnection"')
  return PostgresClusterAttachmentConnection_possibleTypes.includes(obj.__typename)
}



var PostgresClusterAttachmentEdge_possibleTypes = ['PostgresClusterAttachmentEdge']
export var isPostgresClusterAttachmentEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostgresClusterAttachmentEdge"')
  return PostgresClusterAttachmentEdge_possibleTypes.includes(obj.__typename)
}



var PostgresClusterDatabase_possibleTypes = ['PostgresClusterDatabase']
export var isPostgresClusterDatabase = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostgresClusterDatabase"')
  return PostgresClusterDatabase_possibleTypes.includes(obj.__typename)
}



var PostgresClusterUser_possibleTypes = ['PostgresClusterUser']
export var isPostgresClusterUser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPostgresClusterUser"')
  return PostgresClusterUser_possibleTypes.includes(obj.__typename)
}



var PriceTier_possibleTypes = ['PriceTier']
export var isPriceTier = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPriceTier"')
  return PriceTier_possibleTypes.includes(obj.__typename)
}



var ProcessGroup_possibleTypes = ['ProcessGroup']
export var isProcessGroup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProcessGroup"')
  return ProcessGroup_possibleTypes.includes(obj.__typename)
}



var Product_possibleTypes = ['Product']
export var isProduct = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProduct"')
  return Product_possibleTypes.includes(obj.__typename)
}



var Queries_possibleTypes = ['Queries']
export var isQueries = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQueries"')
  return Queries_possibleTypes.includes(obj.__typename)
}



var Region_possibleTypes = ['Region']
export var isRegion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegion"')
  return Region_possibleTypes.includes(obj.__typename)
}



var RegionPlacement_possibleTypes = ['RegionPlacement']
export var isRegionPlacement = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegionPlacement"')
  return RegionPlacement_possibleTypes.includes(obj.__typename)
}



var RegisterDomainPayload_possibleTypes = ['RegisterDomainPayload']
export var isRegisterDomainPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegisterDomainPayload"')
  return RegisterDomainPayload_possibleTypes.includes(obj.__typename)
}



var Release_possibleTypes = ['Release']
export var isRelease = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRelease"')
  return Release_possibleTypes.includes(obj.__typename)
}



var ReleaseCommand_possibleTypes = ['ReleaseCommand']
export var isReleaseCommand = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseCommand"')
  return ReleaseCommand_possibleTypes.includes(obj.__typename)
}



var ReleaseConnection_possibleTypes = ['ReleaseConnection']
export var isReleaseConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseConnection"')
  return ReleaseConnection_possibleTypes.includes(obj.__typename)
}



var ReleaseEdge_possibleTypes = ['ReleaseEdge']
export var isReleaseEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseEdge"')
  return ReleaseEdge_possibleTypes.includes(obj.__typename)
}



var ReleaseIPAddressPayload_possibleTypes = ['ReleaseIPAddressPayload']
export var isReleaseIPAddressPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isReleaseIPAddressPayload"')
  return ReleaseIPAddressPayload_possibleTypes.includes(obj.__typename)
}



var RemoteDockerBuilderAppRole_possibleTypes = ['RemoteDockerBuilderAppRole']
export var isRemoteDockerBuilderAppRole = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoteDockerBuilderAppRole"')
  return RemoteDockerBuilderAppRole_possibleTypes.includes(obj.__typename)
}



var RemoveMachinePayload_possibleTypes = ['RemoveMachinePayload']
export var isRemoveMachinePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveMachinePayload"')
  return RemoveMachinePayload_possibleTypes.includes(obj.__typename)
}



var RemoveWireGuardPeerPayload_possibleTypes = ['RemoveWireGuardPeerPayload']
export var isRemoveWireGuardPeerPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveWireGuardPeerPayload"')
  return RemoveWireGuardPeerPayload_possibleTypes.includes(obj.__typename)
}



var RestartAllocationPayload_possibleTypes = ['RestartAllocationPayload']
export var isRestartAllocationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRestartAllocationPayload"')
  return RestartAllocationPayload_possibleTypes.includes(obj.__typename)
}



var RestartAppPayload_possibleTypes = ['RestartAppPayload']
export var isRestartAppPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRestartAppPayload"')
  return RestartAppPayload_possibleTypes.includes(obj.__typename)
}



var RestoreVolumeSnapshotPayload_possibleTypes = ['RestoreVolumeSnapshotPayload']
export var isRestoreVolumeSnapshotPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRestoreVolumeSnapshotPayload"')
  return RestoreVolumeSnapshotPayload_possibleTypes.includes(obj.__typename)
}



var ResumeAppPayload_possibleTypes = ['ResumeAppPayload']
export var isResumeAppPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isResumeAppPayload"')
  return ResumeAppPayload_possibleTypes.includes(obj.__typename)
}



var RevokePostgresClusterUserAccessPayload_possibleTypes = ['RevokePostgresClusterUserAccessPayload']
export var isRevokePostgresClusterUserAccessPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRevokePostgresClusterUserAccessPayload"')
  return RevokePostgresClusterUserAccessPayload_possibleTypes.includes(obj.__typename)
}



var SaveDeploymentSourcePayload_possibleTypes = ['SaveDeploymentSourcePayload']
export var isSaveDeploymentSourcePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSaveDeploymentSourcePayload"')
  return SaveDeploymentSourcePayload_possibleTypes.includes(obj.__typename)
}



var ScaleAppPayload_possibleTypes = ['ScaleAppPayload']
export var isScaleAppPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isScaleAppPayload"')
  return ScaleAppPayload_possibleTypes.includes(obj.__typename)
}



var ScaleRegionChange_possibleTypes = ['ScaleRegionChange']
export var isScaleRegionChange = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isScaleRegionChange"')
  return ScaleRegionChange_possibleTypes.includes(obj.__typename)
}



var Secret_possibleTypes = ['Secret']
export var isSecret = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSecret"')
  return Secret_possibleTypes.includes(obj.__typename)
}



var Service_possibleTypes = ['Service']
export var isService = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isService"')
  return Service_possibleTypes.includes(obj.__typename)
}



var ServicePort_possibleTypes = ['ServicePort']
export var isServicePort = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isServicePort"')
  return ServicePort_possibleTypes.includes(obj.__typename)
}



var SetPagerdutyHandlerPayload_possibleTypes = ['SetPagerdutyHandlerPayload']
export var isSetPagerdutyHandlerPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSetPagerdutyHandlerPayload"')
  return SetPagerdutyHandlerPayload_possibleTypes.includes(obj.__typename)
}



var SetSecretsPayload_possibleTypes = ['SetSecretsPayload']
export var isSetSecretsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSetSecretsPayload"')
  return SetSecretsPayload_possibleTypes.includes(obj.__typename)
}



var SetSlackHandlerPayload_possibleTypes = ['SetSlackHandlerPayload']
export var isSetSlackHandlerPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSetSlackHandlerPayload"')
  return SetSlackHandlerPayload_possibleTypes.includes(obj.__typename)
}



var SetVMCountPayload_possibleTypes = ['SetVMCountPayload']
export var isSetVMCountPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSetVMCountPayload"')
  return SetVMCountPayload_possibleTypes.includes(obj.__typename)
}



var SetVMSizePayload_possibleTypes = ['SetVMSizePayload']
export var isSetVMSizePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSetVMSizePayload"')
  return SetVMSizePayload_possibleTypes.includes(obj.__typename)
}



var SourceBuild_possibleTypes = ['SourceBuild']
export var isSourceBuild = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSourceBuild"')
  return SourceBuild_possibleTypes.includes(obj.__typename)
}



var SourceBuildConnection_possibleTypes = ['SourceBuildConnection']
export var isSourceBuildConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSourceBuildConnection"')
  return SourceBuildConnection_possibleTypes.includes(obj.__typename)
}



var SourceBuildEdge_possibleTypes = ['SourceBuildEdge']
export var isSourceBuildEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSourceBuildEdge"')
  return SourceBuildEdge_possibleTypes.includes(obj.__typename)
}



var StartBuildPayload_possibleTypes = ['StartBuildPayload']
export var isStartBuildPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStartBuildPayload"')
  return StartBuildPayload_possibleTypes.includes(obj.__typename)
}



var StartMachinePayload_possibleTypes = ['StartMachinePayload']
export var isStartMachinePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStartMachinePayload"')
  return StartMachinePayload_possibleTypes.includes(obj.__typename)
}



var StopAllocationPayload_possibleTypes = ['StopAllocationPayload']
export var isStopAllocationPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStopAllocationPayload"')
  return StopAllocationPayload_possibleTypes.includes(obj.__typename)
}



var StopMachinePayload_possibleTypes = ['StopMachinePayload']
export var isStopMachinePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStopMachinePayload"')
  return StopMachinePayload_possibleTypes.includes(obj.__typename)
}



var TaskGroupCount_possibleTypes = ['TaskGroupCount']
export var isTaskGroupCount = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTaskGroupCount"')
  return TaskGroupCount_possibleTypes.includes(obj.__typename)
}



var TemplateDeployment_possibleTypes = ['TemplateDeployment']
export var isTemplateDeployment = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTemplateDeployment"')
  return TemplateDeployment_possibleTypes.includes(obj.__typename)
}



var UnsetSecretsPayload_possibleTypes = ['UnsetSecretsPayload']
export var isUnsetSecretsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUnsetSecretsPayload"')
  return UnsetSecretsPayload_possibleTypes.includes(obj.__typename)
}



var UpdateAutoscaleConfigPayload_possibleTypes = ['UpdateAutoscaleConfigPayload']
export var isUpdateAutoscaleConfigPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateAutoscaleConfigPayload"')
  return UpdateAutoscaleConfigPayload_possibleTypes.includes(obj.__typename)
}



var UpdateBuildPayload_possibleTypes = ['UpdateBuildPayload']
export var isUpdateBuildPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateBuildPayload"')
  return UpdateBuildPayload_possibleTypes.includes(obj.__typename)
}



var UpdateDNSPortalPayload_possibleTypes = ['UpdateDNSPortalPayload']
export var isUpdateDNSPortalPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateDNSPortalPayload"')
  return UpdateDNSPortalPayload_possibleTypes.includes(obj.__typename)
}



var UpdateDNSRecordPayload_possibleTypes = ['UpdateDNSRecordPayload']
export var isUpdateDNSRecordPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateDNSRecordPayload"')
  return UpdateDNSRecordPayload_possibleTypes.includes(obj.__typename)
}



var UpdateDNSRecordsPayload_possibleTypes = ['UpdateDNSRecordsPayload']
export var isUpdateDNSRecordsPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateDNSRecordsPayload"')
  return UpdateDNSRecordsPayload_possibleTypes.includes(obj.__typename)
}



var UpdateOrganizationMembershipPayload_possibleTypes = ['UpdateOrganizationMembershipPayload']
export var isUpdateOrganizationMembershipPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateOrganizationMembershipPayload"')
  return UpdateOrganizationMembershipPayload_possibleTypes.includes(obj.__typename)
}



var User_possibleTypes = ['User']
export var isUser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



var VM_possibleTypes = ['VM']
export var isVM = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVM"')
  return VM_possibleTypes.includes(obj.__typename)
}



var VMConnection_possibleTypes = ['VMConnection']
export var isVMConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVMConnection"')
  return VMConnection_possibleTypes.includes(obj.__typename)
}



var VMEdge_possibleTypes = ['VMEdge']
export var isVMEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVMEdge"')
  return VMEdge_possibleTypes.includes(obj.__typename)
}



var VMSize_possibleTypes = ['VMSize']
export var isVMSize = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVMSize"')
  return VMSize_possibleTypes.includes(obj.__typename)
}



var ValidateWireGuardPeersPayload_possibleTypes = ['ValidateWireGuardPeersPayload']
export var isValidateWireGuardPeersPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isValidateWireGuardPeersPayload"')
  return ValidateWireGuardPeersPayload_possibleTypes.includes(obj.__typename)
}



var Volume_possibleTypes = ['Volume']
export var isVolume = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVolume"')
  return Volume_possibleTypes.includes(obj.__typename)
}



var VolumeConnection_possibleTypes = ['VolumeConnection']
export var isVolumeConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVolumeConnection"')
  return VolumeConnection_possibleTypes.includes(obj.__typename)
}



var VolumeEdge_possibleTypes = ['VolumeEdge']
export var isVolumeEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVolumeEdge"')
  return VolumeEdge_possibleTypes.includes(obj.__typename)
}



var VolumeSnapshot_possibleTypes = ['VolumeSnapshot']
export var isVolumeSnapshot = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVolumeSnapshot"')
  return VolumeSnapshot_possibleTypes.includes(obj.__typename)
}



var VolumeSnapshotConnection_possibleTypes = ['VolumeSnapshotConnection']
export var isVolumeSnapshotConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVolumeSnapshotConnection"')
  return VolumeSnapshotConnection_possibleTypes.includes(obj.__typename)
}



var VolumeSnapshotEdge_possibleTypes = ['VolumeSnapshotEdge']
export var isVolumeSnapshotEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVolumeSnapshotEdge"')
  return VolumeSnapshotEdge_possibleTypes.includes(obj.__typename)
}



var WireGuardPeer_possibleTypes = ['WireGuardPeer']
export var isWireGuardPeer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWireGuardPeer"')
  return WireGuardPeer_possibleTypes.includes(obj.__typename)
}



var WireGuardPeerConnection_possibleTypes = ['WireGuardPeerConnection']
export var isWireGuardPeerConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWireGuardPeerConnection"')
  return WireGuardPeerConnection_possibleTypes.includes(obj.__typename)
}



var WireGuardPeerEdge_possibleTypes = ['WireGuardPeerEdge']
export var isWireGuardPeerEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWireGuardPeerEdge"')
  return WireGuardPeerEdge_possibleTypes.includes(obj.__typename)
}
