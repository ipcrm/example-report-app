import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};




/** Ordering Enum for Application */
export enum _ApplicationOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for state */
  StateAsc = 'state_asc',
  /** Descending sort for state */
  StateDesc = 'state_desc',
  /** Ascending sort for host */
  HostAsc = 'host_asc',
  /** Descending sort for host */
  HostDesc = 'host_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc',
  /** Ascending sort for domain */
  DomainAsc = 'domain_asc',
  /** Descending sort for domain */
  DomainDesc = 'domain_desc',
  /** Ascending sort for data */
  DataAsc = 'data_asc',
  /** Descending sort for data */
  DataDesc = 'data_desc'
}

/** Ordering Enum for Branch */
export enum _BranchOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc',
  /** Ascending sort for isRemote */
  IsRemoteAsc = 'isRemote_asc',
  /** Descending sort for isRemote */
  IsRemoteDesc = 'isRemote_desc',
  /** Ascending sort for remoteRepoHtmlUrl */
  RemoteRepoHtmlUrlAsc = 'remoteRepoHtmlUrl_asc',
  /** Descending sort for remoteRepoHtmlUrl */
  RemoteRepoHtmlUrlDesc = 'remoteRepoHtmlUrl_desc'
}

/** Ordering Enum for Build */
export enum _BuildOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for buildId */
  BuildIdAsc = 'buildId_asc',
  /** Descending sort for buildId */
  BuildIdDesc = 'buildId_desc',
  /** Ascending sort for number */
  NumberAsc = 'number_asc',
  /** Descending sort for number */
  NumberDesc = 'number_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for status */
  StatusAsc = 'status_asc',
  /** Descending sort for status */
  StatusDesc = 'status_desc',
  /** Ascending sort for buildUrl */
  BuildUrlAsc = 'buildUrl_asc',
  /** Descending sort for buildUrl */
  BuildUrlDesc = 'buildUrl_desc',
  /** Ascending sort for compareUrl */
  CompareUrlAsc = 'compareUrl_asc',
  /** Descending sort for compareUrl */
  CompareUrlDesc = 'compareUrl_desc',
  /** Ascending sort for trigger */
  TriggerAsc = 'trigger_asc',
  /** Descending sort for trigger */
  TriggerDesc = 'trigger_desc',
  /** Ascending sort for provider */
  ProviderAsc = 'provider_asc',
  /** Descending sort for provider */
  ProviderDesc = 'provider_desc',
  /** Ascending sort for pullRequestNumber */
  PullRequestNumberAsc = 'pullRequestNumber_asc',
  /** Descending sort for pullRequestNumber */
  PullRequestNumberDesc = 'pullRequestNumber_desc',
  /** Ascending sort for startedAt */
  StartedAtAsc = 'startedAt_asc',
  /** Descending sort for startedAt */
  StartedAtDesc = 'startedAt_desc',
  /** Ascending sort for finishedAt */
  FinishedAtAsc = 'finishedAt_asc',
  /** Descending sort for finishedAt */
  FinishedAtDesc = 'finishedAt_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc',
  /** Ascending sort for workflowId */
  WorkflowIdAsc = 'workflowId_asc',
  /** Descending sort for workflowId */
  WorkflowIdDesc = 'workflowId_desc',
  /** Ascending sort for jobName */
  JobNameAsc = 'jobName_asc',
  /** Descending sort for jobName */
  JobNameDesc = 'jobName_desc',
  /** Ascending sort for jobId */
  JobIdAsc = 'jobId_asc',
  /** Descending sort for jobId */
  JobIdDesc = 'jobId_desc',
  /** Ascending sort for data */
  DataAsc = 'data_asc',
  /** Descending sort for data */
  DataDesc = 'data_desc'
}

/** Ordering Enum for ChannelLink */
export enum _ChannelLinkOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc'
}

/** Ordering Enum for ChatChannel */
export enum _ChatChannelOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for provider */
  ProviderAsc = 'provider_asc',
  /** Descending sort for provider */
  ProviderDesc = 'provider_desc',
  /** Ascending sort for normalizedName */
  NormalizedNameAsc = 'normalizedName_asc',
  /** Descending sort for normalizedName */
  NormalizedNameDesc = 'normalizedName_desc',
  /** Ascending sort for channelId */
  ChannelIdAsc = 'channelId_asc',
  /** Descending sort for channelId */
  ChannelIdDesc = 'channelId_desc',
  /** Ascending sort for isDefault */
  IsDefaultAsc = 'isDefault_asc',
  /** Descending sort for isDefault */
  IsDefaultDesc = 'isDefault_desc',
  /** Ascending sort for botInvitedSelf */
  BotInvitedSelfAsc = 'botInvitedSelf_asc',
  /** Descending sort for botInvitedSelf */
  BotInvitedSelfDesc = 'botInvitedSelf_desc',
  /** Ascending sort for archived */
  ArchivedAsc = 'archived_asc',
  /** Descending sort for archived */
  ArchivedDesc = 'archived_desc'
}

/** Ordering Enum for ChatId */
export enum _ChatIdOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for screenName */
  ScreenNameAsc = 'screenName_asc',
  /** Descending sort for screenName */
  ScreenNameDesc = 'screenName_desc',
  /** Ascending sort for userId */
  UserIdAsc = 'userId_asc',
  /** Descending sort for userId */
  UserIdDesc = 'userId_desc',
  /** Ascending sort for provider */
  ProviderAsc = 'provider_asc',
  /** Descending sort for provider */
  ProviderDesc = 'provider_desc',
  /** Ascending sort for isAtomistBot */
  IsAtomistBotAsc = 'isAtomistBot_asc',
  /** Descending sort for isAtomistBot */
  IsAtomistBotDesc = 'isAtomistBot_desc',
  /** Ascending sort for isOwner */
  IsOwnerAsc = 'isOwner_asc',
  /** Descending sort for isOwner */
  IsOwnerDesc = 'isOwner_desc',
  /** Ascending sort for isPrimaryOwner */
  IsPrimaryOwnerAsc = 'isPrimaryOwner_asc',
  /** Descending sort for isPrimaryOwner */
  IsPrimaryOwnerDesc = 'isPrimaryOwner_desc',
  /** Ascending sort for isAdmin */
  IsAdminAsc = 'isAdmin_asc',
  /** Descending sort for isAdmin */
  IsAdminDesc = 'isAdmin_desc',
  /** Ascending sort for isBot */
  IsBotAsc = 'isBot_asc',
  /** Descending sort for isBot */
  IsBotDesc = 'isBot_desc',
  /** Ascending sort for timezoneLabel */
  TimezoneLabelAsc = 'timezoneLabel_asc',
  /** Descending sort for timezoneLabel */
  TimezoneLabelDesc = 'timezoneLabel_desc'
}

/** Ordering Enum for ChatTeam */
export enum _ChatTeamOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for provider */
  ProviderAsc = 'provider_asc',
  /** Descending sort for provider */
  ProviderDesc = 'provider_desc',
  /** Ascending sort for domain */
  DomainAsc = 'domain_asc',
  /** Descending sort for domain */
  DomainDesc = 'domain_desc',
  /** Ascending sort for messageCount */
  MessageCountAsc = 'messageCount_asc',
  /** Descending sort for messageCount */
  MessageCountDesc = 'messageCount_desc',
  /** Ascending sort for emailDomain */
  EmailDomainAsc = 'emailDomain_asc',
  /** Descending sort for emailDomain */
  EmailDomainDesc = 'emailDomain_desc'
}

/** Ordering Enum for Comment */
export enum _CommentOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for body */
  BodyAsc = 'body_asc',
  /** Descending sort for body */
  BodyDesc = 'body_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc',
  /** Ascending sort for createdAt */
  CreatedAtAsc = 'createdAt_asc',
  /** Descending sort for createdAt */
  CreatedAtDesc = 'createdAt_desc',
  /** Ascending sort for updatedAt */
  UpdatedAtAsc = 'updatedAt_asc',
  /** Descending sort for updatedAt */
  UpdatedAtDesc = 'updatedAt_desc',
  /** Ascending sort for commentId */
  CommentIdAsc = 'commentId_asc',
  /** Descending sort for commentId */
  CommentIdDesc = 'commentId_desc',
  /** Ascending sort for gitHubId */
  GitHubIdAsc = 'gitHubId_asc',
  /** Descending sort for gitHubId */
  GitHubIdDesc = 'gitHubId_desc',
  /** Ascending sort for path */
  PathAsc = 'path_asc',
  /** Descending sort for path */
  PathDesc = 'path_desc',
  /** Ascending sort for position */
  PositionAsc = 'position_asc',
  /** Descending sort for position */
  PositionDesc = 'position_desc',
  /** Ascending sort for htmlUrl */
  HtmlUrlAsc = 'htmlUrl_asc',
  /** Descending sort for htmlUrl */
  HtmlUrlDesc = 'htmlUrl_desc',
  /** Ascending sort for commentType */
  CommentTypeAsc = 'commentType_asc',
  /** Descending sort for commentType */
  CommentTypeDesc = 'commentType_desc'
}

/** Ordering Enum for Commit */
export enum _CommitOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for sha */
  ShaAsc = 'sha_asc',
  /** Descending sort for sha */
  ShaDesc = 'sha_desc',
  /** Ascending sort for message */
  MessageAsc = 'message_asc',
  /** Descending sort for message */
  MessageDesc = 'message_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc'
}

/** Ordering Enum for DeletedBranch */
export enum _DeletedBranchOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc'
}

/** Ordering Enum for DockerImage */
export enum _DockerImageOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for image */
  ImageAsc = 'image_asc',
  /** Descending sort for image */
  ImageDesc = 'image_desc',
  /** Ascending sort for imageName */
  ImageNameAsc = 'imageName_asc',
  /** Descending sort for imageName */
  ImageNameDesc = 'imageName_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc'
}

/** Ordering Enum for Email */
export enum _EmailOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for address */
  AddressAsc = 'address_asc',
  /** Descending sort for address */
  AddressDesc = 'address_desc'
}

/** Ordering Enum for Fingerprint */
export enum _FingerprintOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for sha */
  ShaAsc = 'sha_asc',
  /** Descending sort for sha */
  ShaDesc = 'sha_desc',
  /** Ascending sort for data */
  DataAsc = 'data_asc',
  /** Descending sort for data */
  DataDesc = 'data_desc'
}

/** Ordering Enum for GitHubId */
export enum _GitHubIdOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for login */
  LoginAsc = 'login_asc',
  /** Descending sort for login */
  LoginDesc = 'login_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc'
}

/** Ordering Enum for GitHubProvider */
export enum _GitHubProviderOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for url */
  UrlAsc = 'url_asc',
  /** Descending sort for url */
  UrlDesc = 'url_desc',
  /** Ascending sort for providerId */
  ProviderIdAsc = 'providerId_asc',
  /** Descending sort for providerId */
  ProviderIdDesc = 'providerId_desc',
  /** Ascending sort for apiUrl */
  ApiUrlAsc = 'apiUrl_asc',
  /** Descending sort for apiUrl */
  ApiUrlDesc = 'apiUrl_desc',
  /** Ascending sort for gitUrl */
  GitUrlAsc = 'gitUrl_asc',
  /** Descending sort for gitUrl */
  GitUrlDesc = 'gitUrl_desc',
  /** Ascending sort for providerType */
  ProviderTypeAsc = 'providerType_asc',
  /** Descending sort for providerType */
  ProviderTypeDesc = 'providerType_desc'
}

/** Ordering Enum for HerokuApp */
export enum _HerokuAppOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for app */
  AppAsc = 'app_asc',
  /** Descending sort for app */
  AppDesc = 'app_desc',
  /** Ascending sort for url */
  UrlAsc = 'url_asc',
  /** Descending sort for url */
  UrlDesc = 'url_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc',
  /** Ascending sort for user */
  UserAsc = 'user_asc',
  /** Descending sort for user */
  UserDesc = 'user_desc',
  /** Ascending sort for appId */
  AppIdAsc = 'appId_asc',
  /** Descending sort for appId */
  AppIdDesc = 'appId_desc',
  /** Ascending sort for release */
  ReleaseAsc = 'release_asc',
  /** Descending sort for release */
  ReleaseDesc = 'release_desc'
}

/** Ordering Enum for ImageLinked */
export enum _ImageLinkedOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc'
}

/** Ordering Enum for Issue */
export enum _IssueOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for number */
  NumberAsc = 'number_asc',
  /** Descending sort for number */
  NumberDesc = 'number_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for title */
  TitleAsc = 'title_asc',
  /** Descending sort for title */
  TitleDesc = 'title_desc',
  /** Ascending sort for body */
  BodyAsc = 'body_asc',
  /** Descending sort for body */
  BodyDesc = 'body_desc',
  /** Ascending sort for state */
  StateAsc = 'state_asc',
  /** Descending sort for state */
  StateDesc = 'state_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc',
  /** Ascending sort for action */
  ActionAsc = 'action_asc',
  /** Descending sort for action */
  ActionDesc = 'action_desc',
  /** Ascending sort for createdAt */
  CreatedAtAsc = 'createdAt_asc',
  /** Descending sort for createdAt */
  CreatedAtDesc = 'createdAt_desc',
  /** Ascending sort for updatedAt */
  UpdatedAtAsc = 'updatedAt_asc',
  /** Descending sort for updatedAt */
  UpdatedAtDesc = 'updatedAt_desc',
  /** Ascending sort for closedAt */
  ClosedAtAsc = 'closedAt_asc',
  /** Descending sort for closedAt */
  ClosedAtDesc = 'closedAt_desc'
}

/** Ordering Enum for K8Container */
export enum _K8ContainerOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for imageName */
  ImageNameAsc = 'imageName_asc',
  /** Descending sort for imageName */
  ImageNameDesc = 'imageName_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc',
  /** Ascending sort for environment */
  EnvironmentAsc = 'environment_asc',
  /** Descending sort for environment */
  EnvironmentDesc = 'environment_desc',
  /** Ascending sort for containerJSON */
  ContainerJsonAsc = 'containerJSON_asc',
  /** Descending sort for containerJSON */
  ContainerJsonDesc = 'containerJSON_desc',
  /** Ascending sort for state */
  StateAsc = 'state_asc',
  /** Descending sort for state */
  StateDesc = 'state_desc',
  /** Ascending sort for stateReason */
  StateReasonAsc = 'stateReason_asc',
  /** Descending sort for stateReason */
  StateReasonDesc = 'stateReason_desc',
  /** Ascending sort for ready */
  ReadyAsc = 'ready_asc',
  /** Descending sort for ready */
  ReadyDesc = 'ready_desc',
  /** Ascending sort for restartCount */
  RestartCountAsc = 'restartCount_asc',
  /** Descending sort for restartCount */
  RestartCountDesc = 'restartCount_desc',
  /** Ascending sort for statusJSON */
  StatusJsonAsc = 'statusJSON_asc',
  /** Descending sort for statusJSON */
  StatusJsonDesc = 'statusJSON_desc',
  /** Ascending sort for resourceVersion */
  ResourceVersionAsc = 'resourceVersion_asc',
  /** Descending sort for resourceVersion */
  ResourceVersionDesc = 'resourceVersion_desc',
  /** Ascending sort for containerID */
  ContainerIdAsc = 'containerID_asc',
  /** Descending sort for containerID */
  ContainerIdDesc = 'containerID_desc'
}

/** Ordering Enum for K8Pod */
export enum _K8PodOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for phase */
  PhaseAsc = 'phase_asc',
  /** Descending sort for phase */
  PhaseDesc = 'phase_desc',
  /** Ascending sort for environment */
  EnvironmentAsc = 'environment_asc',
  /** Descending sort for environment */
  EnvironmentDesc = 'environment_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc',
  /** Ascending sort for baseName */
  BaseNameAsc = 'baseName_asc',
  /** Descending sort for baseName */
  BaseNameDesc = 'baseName_desc',
  /** Ascending sort for namespace */
  NamespaceAsc = 'namespace_asc',
  /** Descending sort for namespace */
  NamespaceDesc = 'namespace_desc',
  /** Ascending sort for statusJSON */
  StatusJsonAsc = 'statusJSON_asc',
  /** Descending sort for statusJSON */
  StatusJsonDesc = 'statusJSON_desc',
  /** Ascending sort for host */
  HostAsc = 'host_asc',
  /** Descending sort for host */
  HostDesc = 'host_desc',
  /** Ascending sort for state */
  StateAsc = 'state_asc',
  /** Descending sort for state */
  StateDesc = 'state_desc',
  /** Ascending sort for specsJSON */
  SpecsJsonAsc = 'specsJSON_asc',
  /** Descending sort for specsJSON */
  SpecsJsonDesc = 'specsJSON_desc',
  /** Ascending sort for envJSON */
  EnvJsonAsc = 'envJSON_asc',
  /** Descending sort for envJSON */
  EnvJsonDesc = 'envJSON_desc',
  /** Ascending sort for metadataJSON */
  MetadataJsonAsc = 'metadataJSON_asc',
  /** Descending sort for metadataJSON */
  MetadataJsonDesc = 'metadataJSON_desc',
  /** Ascending sort for containersCrashLoopBackOff */
  ContainersCrashLoopBackOffAsc = 'containersCrashLoopBackOff_asc',
  /** Descending sort for containersCrashLoopBackOff */
  ContainersCrashLoopBackOffDesc = 'containersCrashLoopBackOff_desc',
  /** Ascending sort for resourceVersion */
  ResourceVersionAsc = 'resourceVersion_asc',
  /** Descending sort for resourceVersion */
  ResourceVersionDesc = 'resourceVersion_desc'
}

/** Ordering Enum for Label */
export enum _LabelOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for default */
  DefaultAsc = 'default_asc',
  /** Descending sort for default */
  DefaultDesc = 'default_desc',
  /** Ascending sort for color */
  ColorAsc = 'color_asc',
  /** Descending sort for color */
  ColorDesc = 'color_desc'
}

/** asc or desc ordering. Must be used with orderBy */
export enum _Ordering {
  /** Descending order */
  Desc = 'desc',
  /** Ascending order */
  Asc = 'asc'
}

/** Ordering Enum for Org */
export enum _OrgOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for owner */
  OwnerAsc = 'owner_asc',
  /** Descending sort for owner */
  OwnerDesc = 'owner_desc',
  /** Ascending sort for ownerType */
  OwnerTypeAsc = 'ownerType_asc',
  /** Descending sort for ownerType */
  OwnerTypeDesc = 'ownerType_desc'
}

/** Ordering Enum for Person */
export enum _PersonOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for forename */
  ForenameAsc = 'forename_asc',
  /** Descending sort for forename */
  ForenameDesc = 'forename_desc',
  /** Ascending sort for surname */
  SurnameAsc = 'surname_asc',
  /** Descending sort for surname */
  SurnameDesc = 'surname_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc'
}

/** Ordering Enum for PullRequestImpact */
export enum _PullRequestImpactOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for url */
  UrlAsc = 'url_asc',
  /** Descending sort for url */
  UrlDesc = 'url_desc',
  /** Ascending sort for data */
  DataAsc = 'data_asc',
  /** Descending sort for data */
  DataDesc = 'data_desc'
}

/** Ordering Enum for PullRequest */
export enum _PullRequestOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for number */
  NumberAsc = 'number_asc',
  /** Descending sort for number */
  NumberDesc = 'number_desc',
  /** Ascending sort for prId */
  PrIdAsc = 'prId_asc',
  /** Descending sort for prId */
  PrIdDesc = 'prId_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for body */
  BodyAsc = 'body_asc',
  /** Descending sort for body */
  BodyDesc = 'body_desc',
  /** Ascending sort for state */
  StateAsc = 'state_asc',
  /** Descending sort for state */
  StateDesc = 'state_desc',
  /** Ascending sort for merged */
  MergedAsc = 'merged_asc',
  /** Descending sort for merged */
  MergedDesc = 'merged_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc',
  /** Ascending sort for baseBranchName */
  BaseBranchNameAsc = 'baseBranchName_asc',
  /** Descending sort for baseBranchName */
  BaseBranchNameDesc = 'baseBranchName_desc',
  /** Ascending sort for branchName */
  BranchNameAsc = 'branchName_asc',
  /** Descending sort for branchName */
  BranchNameDesc = 'branchName_desc',
  /** Ascending sort for title */
  TitleAsc = 'title_asc',
  /** Descending sort for title */
  TitleDesc = 'title_desc',
  /** Ascending sort for createdAt */
  CreatedAtAsc = 'createdAt_asc',
  /** Descending sort for createdAt */
  CreatedAtDesc = 'createdAt_desc',
  /** Ascending sort for updatedAt */
  UpdatedAtAsc = 'updatedAt_asc',
  /** Descending sort for updatedAt */
  UpdatedAtDesc = 'updatedAt_desc',
  /** Ascending sort for closedAt */
  ClosedAtAsc = 'closedAt_asc',
  /** Descending sort for closedAt */
  ClosedAtDesc = 'closedAt_desc',
  /** Ascending sort for mergedAt */
  MergedAtAsc = 'mergedAt_asc',
  /** Descending sort for mergedAt */
  MergedAtDesc = 'mergedAt_desc',
  /** Ascending sort for mergeStatus */
  MergeStatusAsc = 'mergeStatus_asc',
  /** Descending sort for mergeStatus */
  MergeStatusDesc = 'mergeStatus_desc'
}

/** Ordering Enum for PushImpact */
export enum _PushImpactOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for url */
  UrlAsc = 'url_asc',
  /** Descending sort for url */
  UrlDesc = 'url_desc',
  /** Ascending sort for data */
  DataAsc = 'data_asc',
  /** Descending sort for data */
  DataDesc = 'data_desc'
}

/** Ordering Enum for Push */
export enum _PushOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc',
  /** Ascending sort for branch */
  BranchAsc = 'branch_asc',
  /** Descending sort for branch */
  BranchDesc = 'branch_desc'
}

/** Ordering Enum for Release */
export enum _ReleaseOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc'
}

/** Ordering Enum for Repo */
export enum _RepoOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for owner */
  OwnerAsc = 'owner_asc',
  /** Descending sort for owner */
  OwnerDesc = 'owner_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for allowRebaseMerge */
  AllowRebaseMergeAsc = 'allowRebaseMerge_asc',
  /** Descending sort for allowRebaseMerge */
  AllowRebaseMergeDesc = 'allowRebaseMerge_desc',
  /** Ascending sort for allowSquashMerge */
  AllowSquashMergeAsc = 'allowSquashMerge_asc',
  /** Descending sort for allowSquashMerge */
  AllowSquashMergeDesc = 'allowSquashMerge_desc',
  /** Ascending sort for allowMergeCommit */
  AllowMergeCommitAsc = 'allowMergeCommit_asc',
  /** Descending sort for allowMergeCommit */
  AllowMergeCommitDesc = 'allowMergeCommit_desc',
  /** Ascending sort for repoId */
  RepoIdAsc = 'repoId_asc',
  /** Descending sort for repoId */
  RepoIdDesc = 'repoId_desc',
  /** Ascending sort for gitHubId */
  GitHubIdAsc = 'gitHubId_asc',
  /** Descending sort for gitHubId */
  GitHubIdDesc = 'gitHubId_desc',
  /** Ascending sort for defaultBranch */
  DefaultBranchAsc = 'defaultBranch_asc',
  /** Descending sort for defaultBranch */
  DefaultBranchDesc = 'defaultBranch_desc'
}

/** Ordering Enum for ResourceProvider */
export enum _ResourceProviderOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc'
}

/** Ordering Enum for Review */
export enum _ReviewOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for gitHubId */
  GitHubIdAsc = 'gitHubId_asc',
  /** Descending sort for gitHubId */
  GitHubIdDesc = 'gitHubId_desc',
  /** Ascending sort for reviewId */
  ReviewIdAsc = 'reviewId_asc',
  /** Descending sort for reviewId */
  ReviewIdDesc = 'reviewId_desc',
  /** Ascending sort for body */
  BodyAsc = 'body_asc',
  /** Descending sort for body */
  BodyDesc = 'body_desc',
  /** Ascending sort for state */
  StateAsc = 'state_asc',
  /** Descending sort for state */
  StateDesc = 'state_desc',
  /** Ascending sort for submittedAt */
  SubmittedAtAsc = 'submittedAt_asc',
  /** Descending sort for submittedAt */
  SubmittedAtDesc = 'submittedAt_desc',
  /** Ascending sort for htmlUrl */
  HtmlUrlAsc = 'htmlUrl_asc',
  /** Descending sort for htmlUrl */
  HtmlUrlDesc = 'htmlUrl_desc'
}

/** Ordering Enum for SCMId */
export enum _ScmIdOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for login */
  LoginAsc = 'login_asc',
  /** Descending sort for login */
  LoginDesc = 'login_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for avatar */
  AvatarAsc = 'avatar_asc',
  /** Descending sort for avatar */
  AvatarDesc = 'avatar_desc'
}

/** Ordering Enum for SCMProvider */
export enum _ScmProviderOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for url */
  UrlAsc = 'url_asc',
  /** Descending sort for url */
  UrlDesc = 'url_desc',
  /** Ascending sort for providerId */
  ProviderIdAsc = 'providerId_asc',
  /** Descending sort for providerId */
  ProviderIdDesc = 'providerId_desc',
  /** Ascending sort for apiUrl */
  ApiUrlAsc = 'apiUrl_asc',
  /** Descending sort for apiUrl */
  ApiUrlDesc = 'apiUrl_desc',
  /** Ascending sort for gitUrl */
  GitUrlAsc = 'gitUrl_asc',
  /** Descending sort for gitUrl */
  GitUrlDesc = 'gitUrl_desc',
  /** Ascending sort for providerType */
  ProviderTypeAsc = 'providerType_asc',
  /** Descending sort for providerType */
  ProviderTypeDesc = 'providerType_desc'
}

/** Ordering Enum for Status */
export enum _StatusOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for state */
  StateAsc = 'state_asc',
  /** Descending sort for state */
  StateDesc = 'state_desc',
  /** Ascending sort for description */
  DescriptionAsc = 'description_asc',
  /** Descending sort for description */
  DescriptionDesc = 'description_desc',
  /** Ascending sort for targetUrl */
  TargetUrlAsc = 'targetUrl_asc',
  /** Descending sort for targetUrl */
  TargetUrlDesc = 'targetUrl_desc',
  /** Ascending sort for context */
  ContextAsc = 'context_asc',
  /** Descending sort for context */
  ContextDesc = 'context_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc'
}

/** Ordering Enum for Tag */
export enum _TagOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for description */
  DescriptionAsc = 'description_asc',
  /** Descending sort for description */
  DescriptionDesc = 'description_desc',
  /** Ascending sort for ref */
  RefAsc = 'ref_asc',
  /** Descending sort for ref */
  RefDesc = 'ref_desc',
  /** Ascending sort for timestamp */
  TimestampAsc = 'timestamp_asc',
  /** Descending sort for timestamp */
  TimestampDesc = 'timestamp_desc'
}

/** Ordering Enum for Team */
export enum _TeamOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for description */
  DescriptionAsc = 'description_asc',
  /** Descending sort for description */
  DescriptionDesc = 'description_desc',
  /** Ascending sort for iconUrl */
  IconUrlAsc = 'iconUrl_asc',
  /** Descending sort for iconUrl */
  IconUrlDesc = 'iconUrl_desc',
  /** Ascending sort for createdAt */
  CreatedAtAsc = 'createdAt_asc',
  /** Descending sort for createdAt */
  CreatedAtDesc = 'createdAt_desc'
}

/** Ordering Enum for UserJoinedChannel */
export enum _UserJoinedChannelOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc'
}

/** Ordering Enum for Workflow */
export enum _WorkflowOrdering {
  /** Ascending sort for atmTeamId */
  AtmTeamIdAsc = 'atmTeamId_asc',
  /** Descending sort for atmTeamId */
  AtmTeamIdDesc = 'atmTeamId_desc',
  /** Ascending sort for id */
  IdAsc = 'id_asc',
  /** Descending sort for id */
  IdDesc = 'id_desc',
  /** Ascending sort for name */
  NameAsc = 'name_asc',
  /** Descending sort for name */
  NameDesc = 'name_desc',
  /** Ascending sort for workflowId */
  WorkflowIdAsc = 'workflowId_asc',
  /** Descending sort for workflowId */
  WorkflowIdDesc = 'workflowId_desc',
  /** Ascending sort for provider */
  ProviderAsc = 'provider_asc',
  /** Descending sort for provider */
  ProviderDesc = 'provider_desc',
  /** Ascending sort for config */
  ConfigAsc = 'config_asc',
  /** Descending sort for config */
  ConfigDesc = 'config_desc'
}

/** Application-Node */
export type Application = {
   __typename?: 'Application',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  Application */
  id?: Maybe<Scalars['ID']>,
  /** state of  Application */
  state?: Maybe<Scalars['String']>,
  /** host of  Application */
  host?: Maybe<Scalars['String']>,
  /** timestamp of  Application */
  timestamp?: Maybe<Scalars['String']>,
  /** domain of  Application */
  domain?: Maybe<Scalars['String']>,
  /** data of  Application */
  data?: Maybe<Scalars['String']>,
  /** Application commits Commit */
  commits?: Maybe<Array<Maybe<Commit>>>,
};


/** Application-Node */
export type ApplicationCommitsArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_CommitOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['String']>
};

export type AtomistKeyValuePair = {
   __typename?: 'AtomistKeyValuePair',
  name: Scalars['String'],
  value: Scalars['String'],
};

/** Atomist log messages */
export type AtomistLog = {
   __typename?: 'AtomistLog',
  /** Status timestamp */
  timestamp?: Maybe<Scalars['Int']>,
  /** Team ID for which log message is produced */
  team_id?: Maybe<Scalars['String']>,
  /** Log message level: debug, info, warn, error, fatal */
  level?: Maybe<Scalars['String']>,
  /** Log message */
  message?: Maybe<Scalars['String']>,
  /** Grouping, namespace etc. */
  category?: Maybe<Scalars['String']>,
  /** Atomist log correlation context */
  correlation_context?: Maybe<AtomistLogCorrelationContext>,
  /** The ID of this AtomistLog */
  id?: Maybe<Scalars['ID']>,
};


/** Atomist log messages */
export type AtomistLogCorrelation_ContextArgs = {
  correlation_id?: Maybe<Scalars['String']>
};

/** Automation for which log message is produced */
export type AtomistLogAutomation = {
   __typename?: 'AtomistLogAutomation',
  /** Automation name */
  name?: Maybe<Scalars['String']>,
  /** Automation description */
  version?: Maybe<Scalars['String']>,
};

/** Atomist log correlation context */
export type AtomistLogCorrelationContext = {
   __typename?: 'AtomistLogCorrelationContext',
  /** Correlation ID */
  correlation_id?: Maybe<Scalars['String']>,
  /** Automation for which log message is produced */
  automation?: Maybe<AtomistLogAutomation>,
};


/** Atomist log correlation context */
export type AtomistLogCorrelationContextAutomationArgs = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>
};

export type AtomistRegistration = {
   __typename?: 'AtomistRegistration',
  name: Scalars['String'],
};

export type BinaryRepositoryProvider = ResourceProvider & {
   __typename?: 'BinaryRepositoryProvider',
  _id: Scalars['Int'],
  id: Scalars['ID'],
  name: Scalars['String'],
  type: BinaryRepositoryType,
  providerId: Scalars['String'],
  state?: Maybe<ResourceProviderState>,
  team: Team,
  authProviderId?: Maybe<Scalars['String']>,
  credential?: Maybe<Credential>,
  url?: Maybe<Scalars['String']>,
  webhooks?: Maybe<Array<Maybe<Webhook>>>,
};


export type BinaryRepositoryProviderTeamArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};


export type BinaryRepositoryProviderWebhooksArgs = {
  id?: Maybe<Scalars['ID']>
};

export enum BinaryRepositoryType {
  Maven2 = 'maven2',
  Npm = 'npm'
}

/** Branch-Node */
export type Branch = {
   __typename?: 'Branch',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** the URL of the Branch */
  url?: Maybe<Scalars['String']>,
  /** id of  Branch */
  id?: Maybe<Scalars['ID']>,
  /** name of  Branch */
  name?: Maybe<Scalars['String']>,
  /** timestamp of  Branch */
  timestamp?: Maybe<Scalars['String']>,
  /** isRemote of  Branch */
  isRemote?: Maybe<Scalars['Boolean']>,
  /** remoteRepoHtmlUrl of  Branch */
  remoteRepoHtmlUrl?: Maybe<Scalars['String']>,
  /** Branch repo Repo */
  repo?: Maybe<Repo>,
  /** Branch commit Commit */
  commit?: Maybe<Commit>,
  /** Branch pullRequests PullRequest */
  pullRequests?: Maybe<Array<Maybe<PullRequest>>>,
};


/** Branch-Node */
export type BranchRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  defaultBranch?: Maybe<Scalars['String']>
};


/** Branch-Node */
export type BranchCommitArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Branch-Node */
export type BranchPullRequestsArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  prId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  merged?: Maybe<Scalars['Boolean']>,
  timestamp?: Maybe<Scalars['String']>,
  baseBranchName?: Maybe<Scalars['String']>,
  branchName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  mergedAt?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_PullRequestOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  mergeStatus?: Maybe<MergeStatus>
};

/** Build-Node */
export type Build = {
   __typename?: 'Build',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  Build */
  id?: Maybe<Scalars['ID']>,
  /** buildId of  Build */
  buildId?: Maybe<Scalars['String']>,
  /** number of  Build */
  number?: Maybe<Scalars['Int']>,
  /** name of  Build */
  name?: Maybe<Scalars['String']>,
  /** status of  Build */
  status?: Maybe<BuildStatus>,
  /** buildUrl of  Build */
  buildUrl?: Maybe<Scalars['String']>,
  /** compareUrl of  Build */
  compareUrl?: Maybe<Scalars['String']>,
  /** trigger of  Build */
  trigger?: Maybe<BuildTrigger>,
  /** provider of  Build */
  provider?: Maybe<Scalars['String']>,
  /** pullRequestNumber of  Build */
  pullRequestNumber?: Maybe<Scalars['Float']>,
  /** startedAt of  Build */
  startedAt?: Maybe<Scalars['String']>,
  /** finishedAt of  Build */
  finishedAt?: Maybe<Scalars['String']>,
  /** timestamp of  Build */
  timestamp?: Maybe<Scalars['String']>,
  /** workflowId of  Build */
  workflowId?: Maybe<Scalars['String']>,
  /** jobName of  Build */
  jobName?: Maybe<Scalars['String']>,
  /** jobId of  Build */
  jobId?: Maybe<Scalars['String']>,
  /** data of  Build */
  data?: Maybe<Scalars['String']>,
  /** Build repo Repo */
  repo?: Maybe<Repo>,
  /** Build push Push */
  push?: Maybe<Push>,
  /** Build pullRequest PullRequest */
  pullRequest?: Maybe<PullRequest>,
  /** Build tag Tag */
  tag?: Maybe<Tag>,
  /** Build commit Commit */
  commit?: Maybe<Commit>,
  /** Build workflow Workflow */
  workflow?: Maybe<Workflow>,
};


/** Build-Node */
export type BuildRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  defaultBranch?: Maybe<Scalars['String']>
};


/** Build-Node */
export type BuildPushArgs = {
  id?: Maybe<Scalars['ID']>,
  timestamp?: Maybe<Scalars['String']>,
  branch?: Maybe<Scalars['String']>
};


/** Build-Node */
export type BuildPullRequestArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  prId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  merged?: Maybe<Scalars['Boolean']>,
  timestamp?: Maybe<Scalars['String']>,
  baseBranchName?: Maybe<Scalars['String']>,
  branchName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  mergedAt?: Maybe<Scalars['String']>,
  mergeStatus?: Maybe<MergeStatus>
};


/** Build-Node */
export type BuildTagArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  ref?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Build-Node */
export type BuildCommitArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Build-Node */
export type BuildWorkflowArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  workflowId?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  config?: Maybe<Scalars['String']>
};

/** Enum for BuildStatus */
export enum BuildStatus {
  Passed = 'passed',
  Broken = 'broken',
  Failed = 'failed',
  Started = 'started',
  Canceled = 'canceled',
  Pending = 'pending',
  Error = 'error',
  Queued = 'queued'
}

/** Enum for BuildTrigger */
export enum BuildTrigger {
  /** Value for pull_request */
  PullRequest = 'pull_request',
  /** Value for push */
  Push = 'push',
  /** Value for tag */
  Tag = 'tag',
  /** Value for cron */
  Cron = 'cron'
}

export type Card = {
   __typename?: 'Card',
  actionGroups?: Maybe<Array<Maybe<CardActionGroup>>>,
  actions?: Maybe<Array<Maybe<CardAction>>>,
  body?: Maybe<CardBody>,
  collaborators?: Maybe<Array<Maybe<CardCollaborator>>>,
  comments?: Maybe<Array<Maybe<CardBody>>>,
  correlations?: Maybe<Array<Maybe<CardCorrelation>>>,
  events?: Maybe<Array<Maybe<CardEvent>>>,
  goalSets?: Maybe<Array<Maybe<CardSdmGoalSet>>>,
  key?: Maybe<Scalars['String']>,
  post?: Maybe<Scalars['String']>,
  provenance?: Maybe<Array<Maybe<CardProvenance>>>,
  reactions?: Maybe<Array<Maybe<CardReaction>>>,
  repository?: Maybe<CardRepository>,
  shortTitle?: Maybe<Scalars['String']>,
  title?: Maybe<CardTitle>,
  ts?: Maybe<Scalars['Int']>,
  ttl?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
  /** The ID of this Card */
  id?: Maybe<Scalars['ID']>,
};


export type CardCollaboratorsArgs = {
  login?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type CardGoalSetsArgs = {
  goalSetId?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type CardProvenanceArgs = {
  name?: Maybe<Scalars['String']>
};


export type CardRepositoryArgs = {
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type CardAction = {
   __typename?: 'CardAction',
  command?: Maybe<Scalars['String']>,
  parameterName?: Maybe<Scalars['String']>,
  parameterOptionGroups?: Maybe<Array<Maybe<CardActionParameterOptionGroup>>>,
  parameterOptions?: Maybe<Array<Maybe<CardActionParameterOption>>>,
  parameters?: Maybe<Array<Maybe<CardActionParameter>>>,
  registration?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type CardActionGroup = {
   __typename?: 'CardActionGroup',
  actions?: Maybe<Array<Maybe<CardAction>>>,
  text?: Maybe<Scalars['String']>,
};

export type CardActionParameter = {
   __typename?: 'CardActionParameter',
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type CardActionParameterOption = {
   __typename?: 'CardActionParameterOption',
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type CardActionParameterOptionGroup = {
   __typename?: 'CardActionParameterOptionGroup',
  name?: Maybe<Scalars['String']>,
  options?: Maybe<Array<Maybe<CardActionParameterOption>>>,
};

export type CardBody = {
   __typename?: 'CardBody',
  avatar?: Maybe<Scalars['String']>,
  hint?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  ts?: Maybe<Scalars['Int']>,
};

export type CardCollaborator = {
   __typename?: 'CardCollaborator',
  avatar?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
};

export type CardCorrelation = {
   __typename?: 'CardCorrelation',
  body?: Maybe<Array<Maybe<CorrelationBody>>>,
  icon?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  shortTitle?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  ts?: Maybe<Scalars['Int']>,
  type?: Maybe<Scalars['String']>,
};

export type CardEvent = {
   __typename?: 'CardEvent',
  actionGroups?: Maybe<Array<Maybe<CardActionGroup>>>,
  actions?: Maybe<Array<Maybe<CardAction>>>,
  icon?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  ts?: Maybe<Scalars['Int']>,
};

export type CardProvenance = {
   __typename?: 'CardProvenance',
  name?: Maybe<Scalars['String']>,
};

export type CardReaction = {
   __typename?: 'CardReaction',
  avatar?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
  reaction?: Maybe<Scalars['String']>,
};

export type CardRepository = {
   __typename?: 'CardRepository',
  name?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type CardSdmGoal = {
   __typename?: 'CardSdmGoal',
  actions?: Maybe<Array<Maybe<CardAction>>>,
  description?: Maybe<Scalars['String']>,
  environment?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  logLink?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  ts?: Maybe<Scalars['Int']>,
};

export type CardSdmGoalSet = {
   __typename?: 'CardSdmGoalSet',
  actions?: Maybe<Array<Maybe<CardAction>>>,
  duration?: Maybe<Scalars['Int']>,
  goalSet?: Maybe<Scalars['String']>,
  goalSetId?: Maybe<Scalars['String']>,
  goals?: Maybe<Array<Maybe<CardSdmGoal>>>,
  registration?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  ts?: Maybe<Scalars['Int']>,
};

export type CardTitle = {
   __typename?: 'CardTitle',
  icon?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
};

/** ChannelLink-Node */
export type ChannelLink = {
   __typename?: 'ChannelLink',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  ChannelLink */
  id?: Maybe<Scalars['ID']>,
  /** ChannelLink channel ChatChannel */
  channel?: Maybe<ChatChannel>,
  /** ChannelLink repo Repo */
  repo?: Maybe<Repo>,
};


/** ChannelLink-Node */
export type ChannelLinkChannelArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  normalizedName?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  isDefault?: Maybe<Scalars['Boolean']>,
  botInvitedSelf?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>
};


/** ChannelLink-Node */
export type ChannelLinkRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  defaultBranch?: Maybe<Scalars['String']>
};

/** ChatChannel-Node */
export type ChatChannel = {
   __typename?: 'ChatChannel',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  ChatChannel */
  id?: Maybe<Scalars['ID']>,
  /** name of  ChatChannel */
  name?: Maybe<Scalars['String']>,
  /** provider of  ChatChannel */
  provider?: Maybe<Scalars['String']>,
  /** normalizedName of  ChatChannel */
  normalizedName?: Maybe<Scalars['String']>,
  /** channelId of  ChatChannel */
  channelId?: Maybe<Scalars['String']>,
  /** isDefault of  ChatChannel */
  isDefault?: Maybe<Scalars['Boolean']>,
  /** botInvitedSelf of  ChatChannel */
  botInvitedSelf?: Maybe<Scalars['Boolean']>,
  /** archived of  ChatChannel */
  archived?: Maybe<Scalars['Boolean']>,
  /** ChatChannel createdBy ChatId */
  createdBy?: Maybe<ChatId>,
  /** ChatChannel repos Repo */
  repos?: Maybe<Array<Maybe<Repo>>>,
  /** ChatChannel links ChannelLink */
  links?: Maybe<Array<Maybe<ChannelLink>>>,
  /** ChatChannel members ChatId */
  members?: Maybe<Array<Maybe<ChatId>>>,
  /** ChatChannel team ChatTeam */
  team?: Maybe<ChatTeam>,
};


/** ChatChannel-Node */
export type ChatChannelCreatedByArgs = {
  id?: Maybe<Scalars['ID']>,
  screenName?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  isAtomistBot?: Maybe<Scalars['String']>,
  isOwner?: Maybe<Scalars['String']>,
  isPrimaryOwner?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['String']>,
  isBot?: Maybe<Scalars['String']>,
  timezoneLabel?: Maybe<Scalars['String']>
};


/** ChatChannel-Node */
export type ChatChannelReposArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_RepoOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  defaultBranch?: Maybe<Scalars['String']>
};


/** ChatChannel-Node */
export type ChatChannelLinksArgs = {
  orderBy?: Maybe<Array<Maybe<_ChannelLinkOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>
};


/** ChatChannel-Node */
export type ChatChannelMembersArgs = {
  id?: Maybe<Scalars['ID']>,
  screenName?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  isAtomistBot?: Maybe<Scalars['String']>,
  isOwner?: Maybe<Scalars['String']>,
  isPrimaryOwner?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['String']>,
  isBot?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_ChatIdOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timezoneLabel?: Maybe<Scalars['String']>
};


/** ChatChannel-Node */
export type ChatChannelTeamArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  tenantId?: Maybe<Scalars['String']>,
  domain?: Maybe<Scalars['String']>,
  messageCount?: Maybe<Scalars['Float']>,
  emailDomain?: Maybe<Scalars['String']>
};

/** ChatId-Node */
export type ChatId = {
   __typename?: 'ChatId',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  ChatId */
  id?: Maybe<Scalars['ID']>,
  /** screenName of  ChatId */
  screenName?: Maybe<Scalars['String']>,
  /** userId of  ChatId */
  userId?: Maybe<Scalars['String']>,
  /** provider of  ChatId */
  provider?: Maybe<Scalars['String']>,
  /** isAtomistBot of  ChatId */
  isAtomistBot?: Maybe<Scalars['String']>,
  /** isOwner of  ChatId */
  isOwner?: Maybe<Scalars['String']>,
  /** isPrimaryOwner of  ChatId */
  isPrimaryOwner?: Maybe<Scalars['String']>,
  /** isAdmin of  ChatId */
  isAdmin?: Maybe<Scalars['String']>,
  /** isBot of  ChatId */
  isBot?: Maybe<Scalars['String']>,
  /** timezoneLabel of  ChatId */
  timezoneLabel?: Maybe<Scalars['String']>,
  /** ChatId channels ChatChannel */
  channels?: Maybe<Array<Maybe<ChatChannel>>>,
  /** ChatId emails Email */
  emails?: Maybe<Array<Maybe<Email>>>,
  /** ChatId chatTeam ChatTeam */
  chatTeam?: Maybe<ChatTeam>,
  /** ChatId channelsCreated ChatChannel */
  channelsCreated?: Maybe<Array<Maybe<ChatChannel>>>,
  /** ChatId person Person */
  person?: Maybe<Person>,
  /** Return a user's preferences */
  preferences?: Maybe<Array<Maybe<UserPreference>>>,
};


/** ChatId-Node */
export type ChatIdChannelsArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  normalizedName?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  isDefault?: Maybe<Scalars['Boolean']>,
  botInvitedSelf?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<Array<Maybe<_ChatChannelOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Boolean']>
};


/** ChatId-Node */
export type ChatIdEmailsArgs = {
  address?: Maybe<Scalars['String']>
};


/** ChatId-Node */
export type ChatIdChatTeamArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  tenantId?: Maybe<Scalars['String']>,
  domain?: Maybe<Scalars['String']>,
  messageCount?: Maybe<Scalars['Float']>,
  emailDomain?: Maybe<Scalars['String']>
};


/** ChatId-Node */
export type ChatIdChannelsCreatedArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  normalizedName?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  isDefault?: Maybe<Scalars['Boolean']>,
  botInvitedSelf?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>
};


/** ChatId-Node */
export type ChatIdPersonArgs = {
  id?: Maybe<Scalars['ID']>,
  forename?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};

/** ChatTeam-Node */
export type ChatTeam = {
   __typename?: 'ChatTeam',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  ChatTeam */
  id?: Maybe<Scalars['ID']>,
  /** name of  ChatTeam */
  name?: Maybe<Scalars['String']>,
  /** provider of  ChatTeam */
  provider?: Maybe<Scalars['String']>,
  /** This ChatTeams tenantId if available for this provider */
  tenantId?: Maybe<Scalars['String']>,
  /** This is the url for accessing the API on this ChatTeam */
  serviceUrl?: Maybe<Scalars['String']>,
  /** domain of  ChatTeam */
  domain?: Maybe<Scalars['String']>,
  /** messageCount of  ChatTeam */
  messageCount?: Maybe<Scalars['Float']>,
  /** emailDomain of  ChatTeam */
  emailDomain?: Maybe<Scalars['String']>,
  /** ChatTeam orgs Org */
  orgs?: Maybe<Array<Maybe<Org>>>,
  /** ChatTeam channels ChatChannel */
  channels?: Maybe<Array<Maybe<ChatChannel>>>,
  /** ChatTeam members ChatId */
  members?: Maybe<Array<Maybe<ChatId>>>,
  /** ChatTeam team Team */
  team?: Maybe<Team>,
  /** Return a chat team's preferences */
  preferences?: Maybe<Array<Maybe<TeamPreference>>>,
};


/** ChatTeam-Node */
export type ChatTeamOrgsArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_OrgOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  ownerType?: Maybe<OwnerType>
};


/** ChatTeam-Node */
export type ChatTeamChannelsArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  normalizedName?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  isDefault?: Maybe<Scalars['Boolean']>,
  botInvitedSelf?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<Array<Maybe<_ChatChannelOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Boolean']>
};


/** ChatTeam-Node */
export type ChatTeamMembersArgs = {
  id?: Maybe<Scalars['ID']>,
  screenName?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  isAtomistBot?: Maybe<Scalars['String']>,
  isOwner?: Maybe<Scalars['String']>,
  isPrimaryOwner?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['String']>,
  isBot?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_ChatIdOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timezoneLabel?: Maybe<Scalars['String']>
};


/** ChatTeam-Node */
export type ChatTeamTeamArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  iconUrl?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>
};

/** Comment-Node */
export type Comment = {
   __typename?: 'Comment',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** the url of the Comment */
  url?: Maybe<Scalars['String']>,
  /** id of  Comment */
  id?: Maybe<Scalars['ID']>,
  /** body of  Comment */
  body?: Maybe<Scalars['String']>,
  /** timestamp of  Comment */
  timestamp?: Maybe<Scalars['String']>,
  /** createdAt of  Comment */
  createdAt?: Maybe<Scalars['String']>,
  /** updatedAt of  Comment */
  updatedAt?: Maybe<Scalars['String']>,
  /** commentId of  Comment */
  commentId?: Maybe<Scalars['String']>,
  /** gitHubId of  Comment */
  gitHubId?: Maybe<Scalars['String']>,
  /** path of  Comment */
  path?: Maybe<Scalars['String']>,
  /** position of  Comment */
  position?: Maybe<Scalars['String']>,
  /** htmlUrl of  Comment */
  htmlUrl?: Maybe<Scalars['String']>,
  /** commentType of  Comment */
  commentType?: Maybe<CommentCommentType>,
  /** Comment issue Issue */
  issue?: Maybe<Issue>,
  /** Comment review Review */
  review?: Maybe<Review>,
  /** Comment pullRequest PullRequest */
  pullRequest?: Maybe<PullRequest>,
  /** Comment by SCMId */
  by?: Maybe<ScmId>,
};


/** Comment-Node */
export type CommentIssueArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<IssueState>,
  timestamp?: Maybe<Scalars['String']>,
  action?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>
};


/** Comment-Node */
export type CommentReviewArgs = {
  id?: Maybe<Scalars['ID']>,
  gitHubId?: Maybe<Scalars['String']>,
  reviewId?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<ReviewState>,
  submittedAt?: Maybe<Scalars['String']>,
  htmlUrl?: Maybe<Scalars['String']>
};


/** Comment-Node */
export type CommentPullRequestArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  prId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  merged?: Maybe<Scalars['Boolean']>,
  timestamp?: Maybe<Scalars['String']>,
  baseBranchName?: Maybe<Scalars['String']>,
  branchName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  mergedAt?: Maybe<Scalars['String']>,
  mergeStatus?: Maybe<MergeStatus>
};


/** Comment-Node */
export type CommentByArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>
};

/** Enum for CommentCommentType */
export enum CommentCommentType {
  /** Value for review */
  Review = 'review',
  /** Value for pullRequest */
  PullRequest = 'pullRequest',
  /** Value for issue */
  Issue = 'issue'
}

/** Commit-Node */
export type Commit = {
   __typename?: 'Commit',
  id?: Maybe<Scalars['ID']>,
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** the URL of the Commit */
  url?: Maybe<Scalars['String']>,
  /** sha of  Commit */
  sha?: Maybe<Scalars['String']>,
  /** message of  Commit */
  message?: Maybe<Scalars['String']>,
  /** timestamp of  Commit */
  timestamp?: Maybe<Scalars['String']>,
  /** Commit email Email */
  email?: Maybe<Email>,
  /** Commit builds Build */
  builds?: Maybe<Array<Maybe<Build>>>,
  /** Pipelines associated with this commit if applicable */
  pipelines?: Maybe<Array<Maybe<Pipeline>>>,
  /** Commit repo Repo */
  repo?: Maybe<Repo>,
  /** Commit author SCMId */
  author?: Maybe<ScmId>,
  /** Commit committer SCMId */
  committer?: Maybe<ScmId>,
  /** Commit tags Tag */
  tags?: Maybe<Array<Maybe<Tag>>>,
  /** Commit resolves Issue */
  resolves?: Maybe<Array<Maybe<Issue>>>,
  /** Commit statuses Status */
  statuses?: Maybe<Array<Maybe<Status>>>,
  /** Commit pushes Push */
  pushes?: Maybe<Array<Maybe<Push>>>,
  /** Commit pullRequests PullRequest */
  pullRequests?: Maybe<Array<Maybe<PullRequest>>>,
  /** Commit herokuApps HerokuApp */
  herokuApps?: Maybe<Array<Maybe<HerokuApp>>>,
  /** Commit apps Application */
  apps?: Maybe<Array<Maybe<Application>>>,
  /** Commit fingerprints Fingerprint */
  fingerprints?: Maybe<Array<Maybe<Fingerprint>>>,
  /** Commit image DockerImage */
  image?: Maybe<DockerImage>,
  /** Commit images DockerImage */
  images?: Maybe<Array<Maybe<DockerImage>>>,
};


/** Commit-Node */
export type CommitEmailArgs = {
  address?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitBuildsArgs = {
  id?: Maybe<Scalars['ID']>,
  buildId?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<BuildStatus>,
  buildUrl?: Maybe<Scalars['String']>,
  compareUrl?: Maybe<Scalars['String']>,
  trigger?: Maybe<BuildTrigger>,
  provider?: Maybe<Scalars['String']>,
  pullRequestNumber?: Maybe<Scalars['Float']>,
  startedAt?: Maybe<Scalars['String']>,
  finishedAt?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  workflowId?: Maybe<Scalars['String']>,
  jobName?: Maybe<Scalars['String']>,
  jobId?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_BuildOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  data?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitPipelinesArgs = {
  pipelineId?: Maybe<Scalars['ID']>
};


/** Commit-Node */
export type CommitRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  defaultBranch?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitAuthorArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitCommitterArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitTagsArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  ref?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_TagOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitResolvesArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<IssueState>,
  timestamp?: Maybe<Scalars['String']>,
  action?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_IssueOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  closedAt?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitStatusesArgs = {
  id?: Maybe<Scalars['ID']>,
  state?: Maybe<StatusState>,
  description?: Maybe<Scalars['String']>,
  targetUrl?: Maybe<Scalars['String']>,
  context?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_StatusOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitPushesArgs = {
  id?: Maybe<Scalars['ID']>,
  timestamp?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_PushOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  branch?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitPullRequestsArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  prId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  merged?: Maybe<Scalars['Boolean']>,
  timestamp?: Maybe<Scalars['String']>,
  baseBranchName?: Maybe<Scalars['String']>,
  branchName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  mergedAt?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_PullRequestOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  mergeStatus?: Maybe<MergeStatus>
};


/** Commit-Node */
export type CommitHerokuAppsArgs = {
  app?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
  appId?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_HerokuAppOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  release?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitAppsArgs = {
  id?: Maybe<Scalars['ID']>,
  state?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  domain?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_ApplicationOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  data?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitFingerprintsArgs = {
  name?: Maybe<Scalars['String']>,
  sha?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_FingerprintOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  data?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitImageArgs = {
  image?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Commit-Node */
export type CommitImagesArgs = {
  image?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_DockerImageOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['String']>
};

export type CommitIssueRelationship = {
   __typename?: 'CommitIssueRelationship',
  commit?: Maybe<CommitIssueRelationshipCommit>,
  issue?: Maybe<CommitIssueRelationshipIssue>,
  type?: Maybe<CommitIssueRelationshipType>,
  /** The ID of this CommitIssueRelationship */
  id?: Maybe<Scalars['ID']>,
};


export type CommitIssueRelationshipCommitArgs = {
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  repo?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type CommitIssueRelationshipIssueArgs = {
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  repo?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type CommitIssueRelationshipCommit = {
   __typename?: 'CommitIssueRelationshipCommit',
  owner?: Maybe<Scalars['String']>,
  repo?: Maybe<Scalars['String']>,
  sha?: Maybe<Scalars['String']>,
};

export type CommitIssueRelationshipIssue = {
   __typename?: 'CommitIssueRelationshipIssue',
  name?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  repo?: Maybe<Scalars['String']>,
};

export enum CommitIssueRelationshipType {
  References = 'references',
  Fixes = 'fixes'
}

export type CorrelationBody = {
   __typename?: 'CorrelationBody',
  icon?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
};

export type Credential = {
  _id: Scalars['Int'],
  id: Scalars['ID'],
  owner: ResourceUser,
};

export type CredentialInput = {
  type: CredentialType,
  oauth?: Maybe<OAuthInput>,
  password?: Maybe<PasswordInput>,
};

export enum CredentialType {
  OAuthToken = 'OAuthToken',
  Password = 'Password'
}

/** DeletedBranch-Node */
export type DeletedBranch = {
   __typename?: 'DeletedBranch',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  DeletedBranch */
  id?: Maybe<Scalars['ID']>,
  /** name of  DeletedBranch */
  name?: Maybe<Scalars['String']>,
  /** timestamp of  DeletedBranch */
  timestamp?: Maybe<Scalars['String']>,
  /** DeletedBranch repo Repo */
  repo?: Maybe<Repo>,
  /** DeletedBranch commit Commit */
  commit?: Maybe<Commit>,
  /** DeletedBranch pullRequests PullRequest */
  pullRequests?: Maybe<Array<Maybe<PullRequest>>>,
};


/** DeletedBranch-Node */
export type DeletedBranchRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  defaultBranch?: Maybe<Scalars['String']>
};


/** DeletedBranch-Node */
export type DeletedBranchCommitArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** DeletedBranch-Node */
export type DeletedBranchPullRequestsArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  prId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  merged?: Maybe<Scalars['Boolean']>,
  timestamp?: Maybe<Scalars['String']>,
  baseBranchName?: Maybe<Scalars['String']>,
  branchName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  mergedAt?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_PullRequestOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  mergeStatus?: Maybe<MergeStatus>
};

export type Deployment = {
   __typename?: 'Deployment',
  commit?: Maybe<DeploymentCommit>,
  environment?: Maybe<Scalars['String']>,
  ts?: Maybe<Scalars['Int']>,
  /** The ID of this Deployment */
  id?: Maybe<Scalars['ID']>,
};


export type DeploymentCommitArgs = {
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  repo?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type DeploymentCommit = {
   __typename?: 'DeploymentCommit',
  owner?: Maybe<Scalars['String']>,
  repo?: Maybe<Scalars['String']>,
  sha?: Maybe<Scalars['String']>,
};

/** DockerImage-Node */
export type DockerImage = {
   __typename?: 'DockerImage',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** image of  DockerImage */
  image?: Maybe<Scalars['String']>,
  /** imageName of  DockerImage */
  imageName?: Maybe<Scalars['String']>,
  /** timestamp of  DockerImage */
  timestamp?: Maybe<Scalars['String']>,
  /** DockerImage pods K8Pod */
  pods?: Maybe<Array<Maybe<K8Pod>>>,
  /** DockerImage commits Commit */
  commits?: Maybe<Array<Maybe<Commit>>>,
  /** DockerImage containers K8Container */
  containers?: Maybe<Array<Maybe<K8Container>>>,
};


/** DockerImage-Node */
export type DockerImagePodsArgs = {
  name?: Maybe<Scalars['String']>,
  phase?: Maybe<Scalars['String']>,
  environment?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  baseName?: Maybe<Scalars['String']>,
  namespace?: Maybe<Scalars['String']>,
  statusJSON?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  specsJSON?: Maybe<Scalars['String']>,
  envJSON?: Maybe<Scalars['String']>,
  metadataJSON?: Maybe<Scalars['String']>,
  containersCrashLoopBackOff?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<Array<Maybe<_K8PodOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  resourceVersion?: Maybe<Scalars['Int']>
};


/** DockerImage-Node */
export type DockerImageCommitsArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_CommitOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['String']>
};


/** DockerImage-Node */
export type DockerImageContainersArgs = {
  name?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  environment?: Maybe<Scalars['String']>,
  containerJSON?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  stateReason?: Maybe<Scalars['String']>,
  ready?: Maybe<Scalars['Boolean']>,
  restartCount?: Maybe<Scalars['Int']>,
  statusJSON?: Maybe<Scalars['String']>,
  resourceVersion?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<Maybe<_K8ContainerOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  containerID?: Maybe<Scalars['String']>
};

export type DockerRegistryProvider = ResourceProvider & {
   __typename?: 'DockerRegistryProvider',
  _id: Scalars['Int'],
  id: Scalars['ID'],
  name: Scalars['String'],
  type: DockerRegistryType,
  providerId?: Maybe<Scalars['String']>,
  state?: Maybe<ResourceProviderState>,
  team: Team,
  authProviderId?: Maybe<Scalars['String']>,
  credential?: Maybe<Credential>,
  url?: Maybe<Scalars['String']>,
  webhooks?: Maybe<Array<Maybe<Webhook>>>,
};


export type DockerRegistryProviderTeamArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>
};


export type DockerRegistryProviderWebhooksArgs = {
  id?: Maybe<Scalars['ID']>
};

export enum DockerRegistryType {
  JFrog = 'JFrog',
  DockerHub = 'DockerHub'
}

/** Email-Node */
export type Email = {
   __typename?: 'Email',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** address of  Email */
  address?: Maybe<Scalars['String']>,
  /** Email scmId SCMId */
  scmId?: Maybe<ScmId>,
  /** Email gitHubId GitHubId */
  gitHubId?: Maybe<GitHubId>,
  /** Email chatId ChatId */
  chatId?: Maybe<ChatId>,
  /** Email person Person */
  person?: Maybe<Person>,
};


/** Email-Node */
export type EmailScmIdArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>
};


/** Email-Node */
export type EmailGitHubIdArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};


/** Email-Node */
export type EmailChatIdArgs = {
  id?: Maybe<Scalars['ID']>,
  screenName?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  isAtomistBot?: Maybe<Scalars['String']>,
  isOwner?: Maybe<Scalars['String']>,
  isPrimaryOwner?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['String']>,
  isBot?: Maybe<Scalars['String']>,
  timezoneLabel?: Maybe<Scalars['String']>
};


/** Email-Node */
export type EmailPersonArgs = {
  id?: Maybe<Scalars['ID']>,
  forename?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};

export type EmailInput = {
  address: Scalars['String'],
};

/** Fingerprint-Node */
export type Fingerprint = {
   __typename?: 'Fingerprint',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** name of  Fingerprint */
  name?: Maybe<Scalars['String']>,
  /** sha of  Fingerprint */
  sha?: Maybe<Scalars['String']>,
  /** data of  Fingerprint */
  data?: Maybe<Scalars['String']>,
  /** Fingerprint commit Commit */
  commit?: Maybe<Commit>,
};


/** Fingerprint-Node */
export type FingerprintCommitArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};

/** A commit */
export type FingerprintedCommit = {
   __typename?: 'FingerprintedCommit',
  analysis: Array<SourceFingerprint>,
  isDefaultBranch: Scalars['Boolean'],
  branch?: Maybe<Branch>,
  commit?: Maybe<Commit>,
  repo?: Maybe<Repo>,
};

/** For submitting new RepoFingerprints */
export type FingerprintInput = {
  /** Optional data, such as dependency version */
  data?: Maybe<Scalars['String']>,
  /** The unique name for this fingerprint, such as the name of a dependency */
  name: Scalars['String'],
  /** The hash of this fingerprint - forms ID of a SourceFingerprint */
  sha: Scalars['String'],
};

export type GenericResourceUser = ResourceUser & {
   __typename?: 'GenericResourceUser',
  id: Scalars['ID'],
  _id?: Maybe<Scalars['Int']>,
  credential?: Maybe<Credential>,
  person?: Maybe<Person>,
  provider: ResourceProvider,
  login: Scalars['String'],
};

/** GitHubId-Node */
export type GitHubId = ResourceUser & {
   __typename?: 'GitHubId',
  id: Scalars['ID'],
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** login of  GitHubId */
  login: Scalars['String'],
  /** name of  GitHubId */
  name?: Maybe<Scalars['String']>,
  credential?: Maybe<OAuthToken>,
  provider: ScmProvider,
  /** GitHubId emails Email */
  emails?: Maybe<Array<Maybe<Email>>>,
  /** GitHubId person Person */
  person?: Maybe<Person>,
};


/** GitHubId-Node */
export type GitHubIdEmailsArgs = {
  orderBy?: Maybe<Array<Maybe<_EmailOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  address?: Maybe<Scalars['String']>
};


/** GitHubId-Node */
export type GitHubIdPersonArgs = {
  id?: Maybe<Scalars['ID']>,
  forename?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};

/** GitHubProvider-Node */
export type GitHubProvider = {
   __typename?: 'GitHubProvider',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  GitHubProvider */
  id?: Maybe<Scalars['ID']>,
  /** url of  GitHubProvider */
  url?: Maybe<Scalars['String']>,
  /** providerId of  GitHubProvider */
  providerId?: Maybe<Scalars['String']>,
  /** private is this provider reachable on the public internet */
  private?: Maybe<Scalars['Boolean']>,
  /** apiUrl of  GitHubProvider */
  apiUrl?: Maybe<Scalars['String']>,
  /** gitUrl of  GitHubProvider */
  gitUrl?: Maybe<Scalars['String']>,
  /** providerType of  GitHubProvider */
  providerType?: Maybe<ProviderType>,
  /** GitHubProvider team Team */
  team?: Maybe<Team>,
};


/** GitHubProvider-Node */
export type GitHubProviderTeamArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  iconUrl?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>
};

/** HerokuApp-Node */
export type HerokuApp = {
   __typename?: 'HerokuApp',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** app of  HerokuApp */
  app?: Maybe<Scalars['String']>,
  /** url of  HerokuApp */
  url?: Maybe<Scalars['String']>,
  /** timestamp of  HerokuApp */
  timestamp?: Maybe<Scalars['String']>,
  /** user of  HerokuApp */
  user?: Maybe<Scalars['String']>,
  /** appId of  HerokuApp */
  appId?: Maybe<Scalars['String']>,
  /** release of  HerokuApp */
  release?: Maybe<Scalars['String']>,
  /** HerokuApp commits Commit */
  commits?: Maybe<Array<Maybe<Commit>>>,
};


/** HerokuApp-Node */
export type HerokuAppCommitsArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_CommitOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['String']>
};

export type HmacSha1AuthInput = {
  /** shared secret */
  secret: Scalars['String'],
  /** http header in which to find the hash */
  header?: Maybe<Scalars['String']>,
};

/** ImageLinked-Node */
export type ImageLinked = {
   __typename?: 'ImageLinked',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** timestamp of  ImageLinked */
  timestamp?: Maybe<Scalars['String']>,
  /** ImageLinked image DockerImage */
  image?: Maybe<DockerImage>,
  /** ImageLinked commit Commit */
  commit?: Maybe<Commit>,
};


/** ImageLinked-Node */
export type ImageLinkedImageArgs = {
  image?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** ImageLinked-Node */
export type ImageLinkedCommitArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};

/** Issue-Node */
export type Issue = {
   __typename?: 'Issue',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** the url of the Issue */
  url?: Maybe<Scalars['String']>,
  /** id of  Issue */
  id?: Maybe<Scalars['ID']>,
  /** number of  Issue */
  number?: Maybe<Scalars['Float']>,
  /** name of  Issue */
  name?: Maybe<Scalars['String']>,
  /** title of  Issue */
  title?: Maybe<Scalars['String']>,
  /** body of  Issue */
  body?: Maybe<Scalars['String']>,
  /** state of  Issue */
  state?: Maybe<IssueState>,
  /** timestamp of  Issue */
  timestamp?: Maybe<Scalars['String']>,
  /** action of  Issue */
  action?: Maybe<Scalars['String']>,
  /** createdAt of  Issue */
  createdAt?: Maybe<Scalars['String']>,
  /** updatedAt of  Issue */
  updatedAt?: Maybe<Scalars['String']>,
  /** closedAt of  Issue */
  closedAt?: Maybe<Scalars['String']>,
  /** Issue repo Repo */
  repo: Repo,
  /** Issue resolvingCommits Commit */
  resolvingCommits?: Maybe<Array<Maybe<Commit>>>,
  /** Issue openedBy SCMId */
  openedBy?: Maybe<ScmId>,
  /** Issue closedBy SCMId */
  closedBy?: Maybe<ScmId>,
  /** Issue labels Label */
  labels?: Maybe<Array<Maybe<Label>>>,
  /** Issue assignees SCMId */
  assignees?: Maybe<Array<Maybe<ScmId>>>,
  /** Issue lastAssignedBy SCMId */
  lastAssignedBy?: Maybe<ScmId>,
  /** Issue comments Comment */
  comments?: Maybe<Array<Maybe<Comment>>>,
};


/** Issue-Node */
export type IssueRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  defaultBranch?: Maybe<Scalars['String']>
};


/** Issue-Node */
export type IssueResolvingCommitsArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_CommitOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


/** Issue-Node */
export type IssueOpenedByArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>
};


/** Issue-Node */
export type IssueClosedByArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>
};


/** Issue-Node */
export type IssueLabelsArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_LabelOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


/** Issue-Node */
export type IssueAssigneesArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_ScmIdOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  avatar?: Maybe<Scalars['String']>
};


/** Issue-Node */
export type IssueLastAssignedByArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>
};


/** Issue-Node */
export type IssueCommentsArgs = {
  id?: Maybe<Scalars['ID']>,
  body?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  commentId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  htmlUrl?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  commentType?: Maybe<CommentCommentType>
};

export type IssueRelationship = {
   __typename?: 'IssueRelationship',
  relationshipId?: Maybe<Scalars['String']>,
  source?: Maybe<IssueRelationshipIssue>,
  state?: Maybe<Scalars['String']>,
  target?: Maybe<IssueRelationshipIssue>,
  type?: Maybe<Scalars['String']>,
  /** The ID of this IssueRelationship */
  id?: Maybe<Scalars['ID']>,
};


export type IssueRelationshipSourceArgs = {
  issue?: Maybe<Array<Maybe<Scalars['String']>>>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  repo?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type IssueRelationshipTargetArgs = {
  issue?: Maybe<Array<Maybe<Scalars['String']>>>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  repo?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type IssueRelationshipIssue = {
   __typename?: 'IssueRelationshipIssue',
  issue?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  repo?: Maybe<Scalars['String']>,
};

/** Enum for IssueState */
export enum IssueState {
  /** Value for open */
  Open = 'open',
  /** Value for closed */
  Closed = 'closed'
}

export type JiraIssue = {
   __typename?: 'JiraIssue',
  changelog?: Maybe<JiraIssueChangelog>,
  comment?: Maybe<JiraIssueComment>,
  issue: JiraIssueDetail,
  issue_event_type_name: Scalars['String'],
  timestamp: Scalars['String'],
  user?: Maybe<JiraIssueUser>,
  webhookEvent: Scalars['String'],
  /** The ID of this JiraIssue */
  id?: Maybe<Scalars['ID']>,
};


export type JiraIssueIssueArgs = {
  key?: Maybe<Scalars['String']>
};

export type JiraIssueChangelog = {
   __typename?: 'JiraIssueChangelog',
  id: Scalars['String'],
  items: Array<Maybe<JiraIssueChangelogItem>>,
};

export type JiraIssueChangelogItem = {
   __typename?: 'JiraIssueChangelogItem',
  field: Scalars['String'],
  fieldtype: Scalars['String'],
  from: Scalars['String'],
  fromString: Scalars['String'],
  to: Scalars['String'],
  toString: Scalars['String'],
};

export type JiraIssueComment = {
   __typename?: 'JiraIssueComment',
  created: Scalars['String'],
  id: Scalars['String'],
  self: Scalars['String'],
  updated?: Maybe<Scalars['String']>,
};

export type JiraIssueDetail = {
   __typename?: 'JiraIssueDetail',
  id: Scalars['String'],
  key: Scalars['String'],
  self: Scalars['String'],
};

export type JiraIssueUser = {
   __typename?: 'JiraIssueUser',
  key: Scalars['String'],
  self: Scalars['String'],
};

/** Job-Node */
export type Job = {
   __typename?: 'Job',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** When this job gets triggered */
  when?: Maybe<Scalars['String']>,
  /** Is this job triggered manually? */
  manual?: Maybe<Scalars['Boolean']>,
  /** The name of this job */
  name?: Maybe<Scalars['String']>,
  /** The source id of this job. The ID assigned to it by its provider */
  jobId?: Maybe<Scalars['ID']>,
  /** When this job started as an ISO8601 string. Blank until started. */
  startedAt?: Maybe<Scalars['String']>,
  /** When this job finished as an ISO8601 string. Blank until finished. */
  finishedAt?: Maybe<Scalars['String']>,
  /** The status of this job. Blank until started. */
  status?: Maybe<JobStatus>,
  /** The runner for this job. Blank until started. */
  runner?: Maybe<Scalars['String']>,
  /** The stage this job is associated with */
  stage?: Maybe<Stage>,
};

/** Enum for JobStatus */
export enum JobStatus {
  Created = 'created',
  Pending = 'pending',
  Running = 'running',
  Failed = 'failed',
  Success = 'success',
  Canceled = 'canceled',
  Skipped = 'skipped',
  Manual = 'manual'
}

/** K8Container-Node */
export type K8Container = {
   __typename?: 'K8Container',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** name of  K8Container */
  name?: Maybe<Scalars['String']>,
  /** imageName of  K8Container */
  imageName?: Maybe<Scalars['String']>,
  /** timestamp of  K8Container */
  timestamp?: Maybe<Scalars['String']>,
  /** environment of  K8Container */
  environment?: Maybe<Scalars['String']>,
  /** containerJSON of  K8Container */
  containerJSON?: Maybe<Scalars['String']>,
  /** state of  K8Container */
  state?: Maybe<Scalars['String']>,
  /** stateReason of  K8Container */
  stateReason?: Maybe<Scalars['String']>,
  /** ready of  K8Container */
  ready?: Maybe<Scalars['Boolean']>,
  /** restartCount of  K8Container */
  restartCount?: Maybe<Scalars['Int']>,
  /** statusJSON of  K8Container */
  statusJSON?: Maybe<Scalars['String']>,
  /** resourceVersion of  K8Container */
  resourceVersion?: Maybe<Scalars['Int']>,
  /** containerID of  K8Container */
  containerID?: Maybe<Scalars['String']>,
  /** K8Container image DockerImage */
  image?: Maybe<DockerImage>,
  /** K8Container pod K8Pod */
  pod?: Maybe<K8Pod>,
};


/** K8Container-Node */
export type K8ContainerImageArgs = {
  image?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** K8Container-Node */
export type K8ContainerPodArgs = {
  name?: Maybe<Scalars['String']>,
  phase?: Maybe<Scalars['String']>,
  environment?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  baseName?: Maybe<Scalars['String']>,
  namespace?: Maybe<Scalars['String']>,
  statusJSON?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  specsJSON?: Maybe<Scalars['String']>,
  envJSON?: Maybe<Scalars['String']>,
  metadataJSON?: Maybe<Scalars['String']>,
  containersCrashLoopBackOff?: Maybe<Scalars['Boolean']>,
  resourceVersion?: Maybe<Scalars['Int']>
};

/** K8Pod-Node */
export type K8Pod = {
   __typename?: 'K8Pod',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** name of  K8Pod */
  name?: Maybe<Scalars['String']>,
  /** phase of  K8Pod */
  phase?: Maybe<Scalars['String']>,
  /** environment of  K8Pod */
  environment?: Maybe<Scalars['String']>,
  /** timestamp of  K8Pod */
  timestamp?: Maybe<Scalars['String']>,
  /** baseName of  K8Pod */
  baseName?: Maybe<Scalars['String']>,
  /** namespace of  K8Pod */
  namespace?: Maybe<Scalars['String']>,
  /** statusJSON of  K8Pod */
  statusJSON?: Maybe<Scalars['String']>,
  /** host of  K8Pod */
  host?: Maybe<Scalars['String']>,
  /** state of  K8Pod */
  state?: Maybe<Scalars['String']>,
  /** specsJSON of  K8Pod */
  specsJSON?: Maybe<Scalars['String']>,
  /** envJSON of  K8Pod */
  envJSON?: Maybe<Scalars['String']>,
  /** metadataJSON of  K8Pod */
  metadataJSON?: Maybe<Scalars['String']>,
  /** containersCrashLoopBackOff of  K8Pod */
  containersCrashLoopBackOff?: Maybe<Scalars['Boolean']>,
  /** resourceVersion of  K8Pod */
  resourceVersion?: Maybe<Scalars['Int']>,
  /** K8Pod images DockerImage */
  images?: Maybe<Array<Maybe<DockerImage>>>,
  /** K8Pod containers K8Container */
  containers?: Maybe<Array<Maybe<K8Container>>>,
};


/** K8Pod-Node */
export type K8PodImagesArgs = {
  image?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_DockerImageOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['String']>
};


/** K8Pod-Node */
export type K8PodContainersArgs = {
  name?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  environment?: Maybe<Scalars['String']>,
  containerJSON?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  stateReason?: Maybe<Scalars['String']>,
  ready?: Maybe<Scalars['Boolean']>,
  restartCount?: Maybe<Scalars['Int']>,
  statusJSON?: Maybe<Scalars['String']>,
  resourceVersion?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<Maybe<_K8ContainerOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  containerID?: Maybe<Scalars['String']>
};

export type KubernetesCluster = {
   __typename?: 'KubernetesCluster',
  name: Scalars['String'],
};

export type KubernetesClusterProvider = ResourceProvider & {
   __typename?: 'KubernetesClusterProvider',
  _id: Scalars['Int'],
  id: Scalars['ID'],
  name: Scalars['String'],
  clusters?: Maybe<Array<KubernetesCluster>>,
  providerId?: Maybe<Scalars['String']>,
  state?: Maybe<ResourceProviderState>,
  team: Team,
  authProviderId?: Maybe<Scalars['String']>,
  credential?: Maybe<Credential>,
  webhooks?: Maybe<Array<Maybe<Webhook>>>,
  url?: Maybe<Scalars['String']>,
};


export type KubernetesClusterProviderTeamArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>
};


export type KubernetesClusterProviderWebhooksArgs = {
  id?: Maybe<Scalars['ID']>
};

/** Label-Node */
export type Label = {
   __typename?: 'Label',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** the url of the Label */
  url?: Maybe<Scalars['String']>,
  /** id of  Label */
  id?: Maybe<Scalars['ID']>,
  /** name of  Label */
  name?: Maybe<Scalars['String']>,
  /** default of  Label */
  default?: Maybe<Scalars['String']>,
  /** color of  Label */
  color?: Maybe<Scalars['String']>,
  /** Label repo Repo */
  repo?: Maybe<Repo>,
};


/** Label-Node */
export type LabelRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  defaultBranch?: Maybe<Scalars['String']>
};

/** Enum for MergeStatus */
export enum MergeStatus {
  /** Value for can_be_merged */
  CanBeMerged = 'can_be_merged',
  /** Value for unchecked */
  Unchecked = 'unchecked',
  /** Value for cannot_be_merged */
  CannotBeMerged = 'cannot_be_merged'
}

export type Mutation = {
   __typename?: 'Mutation',
  /** # Team/Workspace configuration ## */
  setTeamConfiguration: TeamConfiguration,
  deleteTeamConfiguration?: Maybe<TeamConfiguration>,
  disableRegistration?: Maybe<AtomistRegistration>,
  enableRegistration?: Maybe<AtomistRegistration>,
  /** Creates a new docker registry provider */
  createDockerRegistryProvider: DockerRegistryProvider,
  createKubernetesClusterProvider?: Maybe<KubernetesClusterProvider>,
  createBinaryRepositoryProvider?: Maybe<BinaryRepositoryProvider>,
  /** Creates SCMProvider for github.com with a bunch of defaults */
  createGitHubResourceProvider: ScmProvider,
  /** configure repos/orgs - raise system event for SCMProvider */
  configureGitHubResourceProvider: ScmProvider,
  setResourceProviderState: ResourceProvider,
  setSCMProviderState: ScmProvider,
  deleteResourceProvider: Scalars['String'],
  setCredential: Credential,
  linkCredentialToResourceProvider: Credential,
  /** create and expose a webhook over the public internet */
  createWebhook: Webhook,
  /** delete a webhook from public internet */
  deleteWebhook: Scalars['String'],
  /** associate some state with a webhook to help convergence etc */
  updateWebhook: Webhook,
  /** add (or overwrite) a tag on a webhook */
  addWebhookTag: Webhook,
  setWebhookTags: Webhook,
  /** Removes a ChatTeam and associated nodes from the graph */
  removeChatTeam: Scalars['String'],
  /** ### Users #### */
  createResourceUser?: Maybe<ResourceUser>,
  linkResourceUser?: Maybe<ResourceUser>,
  /** ### RCCA SCM Ingestion Mutations #### */
  ingestSCMOrgs: Array<Maybe<Org>>,
  ingestSCMRepos: Array<Maybe<Repo>>,
  ingestSCMCommit: Commit,
  /** Set the fingerprints of a commit */
  setCommitFingerprints?: Maybe<Scalars['String']>,
  /** Set the value of a user preference. */
  setChatUserPreference?: Maybe<Array<Maybe<UserPreference>>>,
  /** Set the value of a person preference. Returns what was set */
  setPersonPreference?: Maybe<Array<Maybe<PersonPreference>>>,
  /** Set the value of a chat team preference. Returns what was set */
  setChatTeamPreference?: Maybe<Array<Maybe<TeamPreference>>>,
  /** Create a slack channel in the current team */
  createSlackChannel?: Maybe<SlackChannel>,
  /** Ask the bot to join a chat channel */
  addBotToSlackChannel?: Maybe<SlackChannel>,
  /** Link a channel to a repo */
  linkSlackChannelToRepo?: Maybe<SlackChannel>,
  /** Ask the bot to invite a user to join a chat channel */
  inviteUserToSlackChannel?: Maybe<SlackChannel>,
  /** Ask the bot to kick a user from a chat channel */
  kickUserFromSlackChannel?: Maybe<SlackChannel>,
  /** Unlink a channel from a repo */
  unlinkSlackChannelFromRepo?: Maybe<SlackChannel>,
  /** set a GitHub login to be used for resources owned by an Org */
  setOwnerLogin?: Maybe<OwnerLogin>,
  /** set a GitHub login to be used for this Repository */
  setRepoLogin?: Maybe<RepoLogin>,
  /** Set a team's properties */
  setTeamProperties?: Maybe<Team>,
};


export type MutationSetTeamConfigurationArgs = {
  namespace?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  value: Scalars['String'],
  ttlSecs?: Maybe<Scalars['Int']>
};


export type MutationDeleteTeamConfigurationArgs = {
  namespace: Scalars['String'],
  name: Scalars['String']
};


export type MutationDisableRegistrationArgs = {
  name: Scalars['String']
};


export type MutationEnableRegistrationArgs = {
  name: Scalars['String']
};


export type MutationCreateDockerRegistryProviderArgs = {
  type: DockerRegistryType,
  name: Scalars['String'],
  url?: Maybe<Scalars['String']>
};


export type MutationCreateKubernetesClusterProviderArgs = {
  name: Scalars['String'],
  url?: Maybe<Scalars['String']>
};


export type MutationCreateBinaryRepositoryProviderArgs = {
  name: Scalars['String'],
  type: BinaryRepositoryType,
  url?: Maybe<Scalars['String']>
};


export type MutationConfigureGitHubResourceProviderArgs = {
  id: Scalars['ID'],
  config: ScmResourceProviderInput
};


export type MutationSetResourceProviderStateArgs = {
  id: Scalars['ID'],
  providerState?: Maybe<ResourceProviderStateInput>
};


export type MutationSetScmProviderStateArgs = {
  id: Scalars['ID'],
  providerState?: Maybe<ScmProviderStateInput>
};


export type MutationDeleteResourceProviderArgs = {
  id: Scalars['ID']
};


export type MutationSetCredentialArgs = {
  providerId: Scalars['ID'],
  resourceUserId: Scalars['ID'],
  credential: CredentialInput
};


export type MutationLinkCredentialToResourceProviderArgs = {
  resourceProviderId: Scalars['ID'],
  credentialId: Scalars['ID']
};


export type MutationCreateWebhookArgs = {
  webhook: WebhookInput
};


export type MutationDeleteWebhookArgs = {
  id: Scalars['ID']
};


export type MutationUpdateWebhookArgs = {
  id: Scalars['ID'],
  webhook: WebhookInput
};


export type MutationAddWebhookTagArgs = {
  id: Scalars['ID'],
  name: Scalars['String'],
  value: Scalars['String']
};


export type MutationSetWebhookTagsArgs = {
  id: Scalars['ID'],
  name: Scalars['String'],
  value: Scalars['String']
};


export type MutationRemoveChatTeamArgs = {
  chatTeamId: Scalars['String']
};


export type MutationCreateResourceUserArgs = {
  login: Scalars['String'],
  resourceProviderId: Scalars['ID'],
  resourceUserType: ResourceUserType
};


export type MutationLinkResourceUserArgs = {
  resourceUserId: Scalars['ID'],
  personId: Scalars['ID']
};


export type MutationIngestScmOrgsArgs = {
  scmProviderId: Scalars['String'],
  scmOrgsInput: ScmOrgsInput
};


export type MutationIngestScmReposArgs = {
  scmProviderId: Scalars['String'],
  scmReposInput: ScmReposInput
};


export type MutationIngestScmCommitArgs = {
  scmProviderId: Scalars['String'],
  scmCommitInput: ScmCommitInput
};


export type MutationSetCommitFingerprintsArgs = {
  add?: Maybe<Array<FingerprintInput>>,
  branchId: Scalars['String'],
  commitSha: Scalars['String'],
  isDefaultBranch: Scalars['Boolean'],
  isHeadCommit: Scalars['Boolean'],
  link?: Maybe<Array<Scalars['String']>>,
  repoId: Scalars['String'],
  type: Scalars['String']
};


export type MutationSetChatUserPreferenceArgs = {
  chatTeamId?: Maybe<Scalars['String']>,
  chatUserId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>
};


export type MutationSetPersonPreferenceArgs = {
  personId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>
};


export type MutationSetChatTeamPreferenceArgs = {
  chatTeamId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>
};


export type MutationCreateSlackChannelArgs = {
  chatTeamId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};


export type MutationAddBotToSlackChannelArgs = {
  chatTeamId?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>
};


export type MutationLinkSlackChannelToRepoArgs = {
  chatTeamId?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  channelName?: Maybe<Scalars['String']>,
  repo?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>
};


export type MutationInviteUserToSlackChannelArgs = {
  chatTeamId?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>
};


export type MutationKickUserFromSlackChannelArgs = {
  chatTeamId?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>
};


export type MutationUnlinkSlackChannelFromRepoArgs = {
  chatTeamId?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  repo?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>
};


export type MutationSetOwnerLoginArgs = {
  owner?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>
};


export type MutationSetRepoLoginArgs = {
  repo?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>
};


export type MutationSetTeamPropertiesArgs = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  iconUrl?: Maybe<Scalars['String']>
};

export type Notification = {
   __typename?: 'Notification',
  actions?: Maybe<Array<Maybe<NotificationAction>>>,
  body: Scalars['String'],
  contentType: Scalars['String'],
  key: Scalars['String'],
  post?: Maybe<Scalars['String']>,
  recipient?: Maybe<NotificationRecipient>,
  ts: Scalars['Int'],
  ttl?: Maybe<Scalars['Int']>,
  /** The ID of this Notification */
  id?: Maybe<Scalars['ID']>,
};


export type NotificationRecipientArgs = {
  address?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type NotificationAction = {
   __typename?: 'NotificationAction',
  command?: Maybe<Scalars['String']>,
  parameterName?: Maybe<Scalars['String']>,
  parameterOptionGroups?: Maybe<Array<Maybe<NotificationActionParameterOptionGroup>>>,
  parameterOptions?: Maybe<Array<Maybe<NotificationActionParameterOption>>>,
  parameters?: Maybe<Array<Maybe<NotificationActionParameter>>>,
  registration?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type NotificationActionGroup = {
   __typename?: 'NotificationActionGroup',
  actions?: Maybe<Array<Maybe<CardAction>>>,
  text?: Maybe<Scalars['String']>,
};

export type NotificationActionParameter = {
   __typename?: 'NotificationActionParameter',
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type NotificationActionParameterOption = {
   __typename?: 'NotificationActionParameterOption',
  name?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type NotificationActionParameterOptionGroup = {
   __typename?: 'NotificationActionParameterOptionGroup',
  name?: Maybe<Scalars['String']>,
  options?: Maybe<Array<Maybe<NotificationActionParameterOption>>>,
};

export type NotificationRecipient = {
   __typename?: 'NotificationRecipient',
  address: Scalars['String'],
};

export type OAuthInput = {
  secret: Scalars['String'],
  scopes: Array<Scalars['String']>,
};

export type OAuthToken = Credential & {
   __typename?: 'OAuthToken',
  _id: Scalars['Int'],
  id: Scalars['ID'],
  owner: ScmId,
  scopes: Array<Scalars['String']>,
  secret: Scalars['String'],
};

/** Org-Node */
export type Org = {
   __typename?: 'Org',
  _id?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  ownerType?: Maybe<OwnerType>,
  provider?: Maybe<GitHubProvider>,
  scmProvider?: Maybe<ScmProvider>,
  repo?: Maybe<Array<Maybe<Repo>>>,
  repos?: Maybe<Array<Maybe<Repo>>>,
  chatTeam?: Maybe<ChatTeam>,
  team?: Maybe<Team>,
};


/** Org-Node */
export type OrgProviderArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
  apiUrl?: Maybe<Scalars['String']>,
  gitUrl?: Maybe<Scalars['String']>,
  providerType?: Maybe<ProviderType>
};


/** Org-Node */
export type OrgScmProviderArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
  apiUrl?: Maybe<Scalars['String']>,
  gitUrl?: Maybe<Scalars['String']>,
  providerType?: Maybe<ProviderType>
};


/** Org-Node */
export type OrgRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_RepoOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  defaultBranch?: Maybe<Scalars['String']>
};


/** Org-Node */
export type OrgReposArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_RepoOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  defaultBranch?: Maybe<Scalars['String']>
};


/** Org-Node */
export type OrgChatTeamArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  tenantId?: Maybe<Scalars['String']>,
  domain?: Maybe<Scalars['String']>,
  messageCount?: Maybe<Scalars['Float']>,
  emailDomain?: Maybe<Scalars['String']>
};


/** Org-Node */
export type OrgTeamArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  iconUrl?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>
};

/** a GitHub Owner (like an Org) can set a login to be used for background tasks */
export type OwnerLogin = {
   __typename?: 'OwnerLogin',
  /** The owner name for the Organization/Team */
  owner?: Maybe<Scalars['String']>,
  /** The id of the git provider for this Owner */
  providerId?: Maybe<Scalars['String']>,
  /** The login that should be used */
  login?: Maybe<Scalars['String']>,
};

export enum OwnerType {
  User = 'user',
  Organization = 'organization'
}

export type Password = Credential & {
   __typename?: 'Password',
  _id: Scalars['Int'],
  id: Scalars['ID'],
  owner: ResourceUser,
  secret: Scalars['String'],
};

export type PasswordInput = {
  secret: Scalars['String'],
};

/** Person-Node */
export type Person = {
   __typename?: 'Person',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  Person */
  id?: Maybe<Scalars['ID']>,
  /** forename of  Person */
  forename?: Maybe<Scalars['String']>,
  /** surname of  Person */
  surname?: Maybe<Scalars['String']>,
  /** name of  Person */
  name?: Maybe<Scalars['String']>,
  resourceUsers?: Maybe<Array<Maybe<ResourceUser>>>,
  /** Person scmId SCMId */
  scmId?: Maybe<ScmId>,
  /** Person gitHubId GitHubId */
  gitHubId?: Maybe<GitHubId>,
  /** Person chatId ChatId */
  chatId?: Maybe<ChatId>,
  /** Person emails Email */
  emails?: Maybe<Array<Maybe<Email>>>,
  /** Person team Team */
  team?: Maybe<Team>,
  /** Return a person's preferences */
  preferences?: Maybe<Array<Maybe<PersonPreference>>>,
};


/** Person-Node */
export type PersonResourceUsersArgs = {
  login?: Maybe<Scalars['String']>
};


/** Person-Node */
export type PersonScmIdArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>
};


/** Person-Node */
export type PersonGitHubIdArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};


/** Person-Node */
export type PersonChatIdArgs = {
  id?: Maybe<Scalars['ID']>,
  screenName?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  isAtomistBot?: Maybe<Scalars['String']>,
  isOwner?: Maybe<Scalars['String']>,
  isPrimaryOwner?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['String']>,
  isBot?: Maybe<Scalars['String']>,
  timezoneLabel?: Maybe<Scalars['String']>
};


/** Person-Node */
export type PersonEmailsArgs = {
  orderBy?: Maybe<Array<Maybe<_EmailOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  address?: Maybe<Scalars['String']>
};


/** Person-Node */
export type PersonTeamArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  iconUrl?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>
};

/** A person's preferences as key/value pairs */
export type PersonPreference = {
   __typename?: 'PersonPreference',
  /** The name of the preference */
  name?: Maybe<Scalars['String']>,
  /** The value of the preference */
  value?: Maybe<Scalars['String']>,
};

/** Pipeline-Node */
export type Pipeline = {
   __typename?: 'Pipeline',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** Pipeline status */
  status?: Maybe<PipelineStatus>,
  /** Pipieline provider */
  provider?: Maybe<PipelineProvider>,
  /** Source id of the pipeline from the provider */
  pipelineId?: Maybe<Scalars['ID']>,
  /** The time this Pipeline was created */
  createdAt?: Maybe<Scalars['String']>,
  /** The time this Pipeline finished. Empty if not finished. */
  finishedAt?: Maybe<Scalars['String']>,
  /** The repo this pipeline ran against */
  repo?: Maybe<Repo>,
  /** The push that triggered this pipeline if applicable */
  push?: Maybe<Push>,
  /** The commit associated with this pipeline if applicable */
  commit?: Maybe<Commit>,
  /** The set of stages associated with this pipeline */
  stages?: Maybe<Array<Maybe<Stage>>>,
};

/** Enum for the PipelineProviders */
export enum PipelineProvider {
  /** Gitlab CI Pipeline */
  GitlabCi = 'gitlab_ci'
}

/** Enum for PipelineStatus */
export enum PipelineStatus {
  Running = 'running',
  Pending = 'pending',
  Success = 'success',
  Failed = 'failed',
  Canceled = 'canceled',
  Skipped = 'skipped',
  Manual = 'manual'
}

/** Enum for ProviderType */
export enum ProviderType {
  /** Value for bitbucket_cloud */
  BitbucketCloud = 'bitbucket_cloud',
  /** Value for github_com */
  GithubCom = 'github_com',
  /** Value for ghe */
  Ghe = 'ghe',
  /** Value for bitbucket */
  Bitbucket = 'bitbucket',
  /** Value for gitlab */
  Gitlab = 'gitlab'
}

/** PullRequest-Node */
export type PullRequest = {
   __typename?: 'PullRequest',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** the URL of the PullRequest */
  url?: Maybe<Scalars['String']>,
  /** id of  PullRequest */
  id?: Maybe<Scalars['ID']>,
  /** number of  PullRequest */
  number?: Maybe<Scalars['Float']>,
  /** prId of  PullRequest */
  prId?: Maybe<Scalars['String']>,
  /** name of  PullRequest */
  name?: Maybe<Scalars['String']>,
  /** body of  PullRequest */
  body?: Maybe<Scalars['String']>,
  /** state of  PullRequest */
  state?: Maybe<Scalars['String']>,
  /** merged of  PullRequest */
  merged?: Maybe<Scalars['Boolean']>,
  /** timestamp of  PullRequest */
  timestamp?: Maybe<Scalars['String']>,
  /** baseBranchName of  PullRequest */
  baseBranchName?: Maybe<Scalars['String']>,
  /** branchName of  PullRequest */
  branchName?: Maybe<Scalars['String']>,
  /** title of  PullRequest */
  title?: Maybe<Scalars['String']>,
  /** createdAt of  PullRequest */
  createdAt?: Maybe<Scalars['String']>,
  /** updatedAt of  PullRequest */
  updatedAt?: Maybe<Scalars['String']>,
  /** closedAt of  PullRequest */
  closedAt?: Maybe<Scalars['String']>,
  /** mergedAt of  PullRequest */
  mergedAt?: Maybe<Scalars['String']>,
  /** mergeStatus of  PullRequest */
  mergeStatus?: Maybe<MergeStatus>,
  /** action of  PullRequest */
  action?: Maybe<PullRequestAction>,
  /** PullRequest repo Repo */
  repo?: Maybe<Repo>,
  /** PullRequest head Commit */
  head?: Maybe<Commit>,
  /** PullRequest base Commit */
  base?: Maybe<Commit>,
  /** PullRequest mergeCommit Commit */
  mergeCommit?: Maybe<Commit>,
  /** PullRequest author SCMId */
  author?: Maybe<ScmId>,
  /** PullRequest merger SCMId */
  merger?: Maybe<ScmId>,
  /** PullRequest assignees SCMId */
  assignees?: Maybe<Array<Maybe<ScmId>>>,
  /** PullRequest commits Commit */
  commits?: Maybe<Array<Maybe<Commit>>>,
  /** PullRequest branch Branch */
  branch?: Maybe<Branch>,
  /** PullRequest sourceBranch Branch */
  sourceBranch?: Maybe<Branch>,
  /** PullRequest destinationBranch Branch */
  destinationBranch?: Maybe<Branch>,
  /** PullRequest labels Label */
  labels?: Maybe<Array<Maybe<Label>>>,
  /** PullRequest reviews Review */
  reviews?: Maybe<Array<Maybe<Review>>>,
  /** PullRequest reviewers SCMId */
  reviewers?: Maybe<Array<Maybe<ScmId>>>,
  /** PullRequest lastAssignedBy SCMId */
  lastAssignedBy?: Maybe<ScmId>,
  /** PullRequest comments Comment */
  comments?: Maybe<Array<Maybe<Comment>>>,
  /** PullRequest builds Build */
  builds?: Maybe<Array<Maybe<Build>>>,
};


/** PullRequest-Node */
export type PullRequestRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  defaultBranch?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestHeadArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestBaseArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestMergeCommitArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestAuthorArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestMergerArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestAssigneesArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_ScmIdOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  avatar?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestCommitsArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_CommitOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestBranchArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  isRemote?: Maybe<Scalars['Boolean']>,
  remoteRepoHtmlUrl?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestSourceBranchArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  isRemote?: Maybe<Scalars['Boolean']>,
  remoteRepoHtmlUrl?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestDestinationBranchArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  isRemote?: Maybe<Scalars['Boolean']>,
  remoteRepoHtmlUrl?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestLabelsArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_LabelOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  color?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestReviewsArgs = {
  id?: Maybe<Scalars['ID']>,
  gitHubId?: Maybe<Scalars['String']>,
  reviewId?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<ReviewState>,
  submittedAt?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  htmlUrl?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestReviewersArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_ScmIdOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  avatar?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestLastAssignedByArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>
};


/** PullRequest-Node */
export type PullRequestCommentsArgs = {
  id?: Maybe<Scalars['ID']>,
  body?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  commentId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  htmlUrl?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  commentType?: Maybe<CommentCommentType>
};


/** PullRequest-Node */
export type PullRequestBuildsArgs = {
  id?: Maybe<Scalars['ID']>,
  buildId?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<BuildStatus>,
  buildUrl?: Maybe<Scalars['String']>,
  compareUrl?: Maybe<Scalars['String']>,
  trigger?: Maybe<BuildTrigger>,
  provider?: Maybe<Scalars['String']>,
  pullRequestNumber?: Maybe<Scalars['Float']>,
  startedAt?: Maybe<Scalars['String']>,
  finishedAt?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  workflowId?: Maybe<Scalars['String']>,
  jobName?: Maybe<Scalars['String']>,
  jobId?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_BuildOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  data?: Maybe<Scalars['String']>
};

export enum PullRequestAction {
  Assigned = 'assigned',
  Created = 'created',
  Unassigned = 'unassigned',
  ReviewRequested = 'review_requested',
  ReviewRequestRemoved = 'review_request_removed',
  Labeled = 'labeled',
  Unlabeled = 'unlabeled',
  Opened = 'opened',
  Edited = 'edited',
  Closed = 'closed',
  Reopened = 'reopened',
  Synchronize = 'synchronize',
  Submitted = 'submitted',
  ReadyForReview = 'ready_for_review'
}

/** PullRequestImpact-Node */
export type PullRequestImpact = {
   __typename?: 'PullRequestImpact',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  PullRequestImpact */
  id?: Maybe<Scalars['ID']>,
  /** url of  PullRequestImpact */
  url?: Maybe<Scalars['String']>,
  /** data of  PullRequestImpact */
  data?: Maybe<Scalars['String']>,
  /** PullRequestImpact pullRequest PullRequest */
  pullRequest?: Maybe<PullRequest>,
};


/** PullRequestImpact-Node */
export type PullRequestImpactPullRequestArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  prId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  merged?: Maybe<Scalars['Boolean']>,
  timestamp?: Maybe<Scalars['String']>,
  baseBranchName?: Maybe<Scalars['String']>,
  branchName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  mergedAt?: Maybe<Scalars['String']>,
  mergeStatus?: Maybe<MergeStatus>
};

/** Push-Node */
export type Push = {
   __typename?: 'Push',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  Push */
  id?: Maybe<Scalars['ID']>,
  /** timestamp of  Push */
  timestamp?: Maybe<Scalars['String']>,
  /** branch of  Push */
  branch?: Maybe<Scalars['String']>,
  /** Push after Commit */
  after?: Maybe<Commit>,
  /** Push before Commit */
  before?: Maybe<Commit>,
  /** Push commits Commit */
  commits?: Maybe<Array<Maybe<Commit>>>,
  /** Push repo Repo */
  repo?: Maybe<Repo>,
  /** Push builds Build */
  builds?: Maybe<Array<Maybe<Build>>>,
  /** Pipelines associated with this Push */
  pipelines?: Maybe<Array<Maybe<Pipeline>>>,
  goals?: Maybe<Array<Maybe<SdmGoal>>>,
  goalSets?: Maybe<Array<Maybe<SdmGoalSet>>>,
  goalsDisplayState?: Maybe<Array<Maybe<SdmGoalDisplay>>>,
};


/** Push-Node */
export type PushAfterArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Push-Node */
export type PushBeforeArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Push-Node */
export type PushCommitsArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_CommitOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Push-Node */
export type PushRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  defaultBranch?: Maybe<Scalars['String']>
};


/** Push-Node */
export type PushBuildsArgs = {
  id?: Maybe<Scalars['ID']>,
  buildId?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<BuildStatus>,
  buildUrl?: Maybe<Scalars['String']>,
  compareUrl?: Maybe<Scalars['String']>,
  trigger?: Maybe<BuildTrigger>,
  provider?: Maybe<Scalars['String']>,
  pullRequestNumber?: Maybe<Scalars['Float']>,
  startedAt?: Maybe<Scalars['String']>,
  finishedAt?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  workflowId?: Maybe<Scalars['String']>,
  jobName?: Maybe<Scalars['String']>,
  jobId?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_BuildOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  data?: Maybe<Scalars['String']>
};


/** Push-Node */
export type PushPipelinesArgs = {
  pipelineId?: Maybe<Scalars['ID']>
};


/** Push-Node */
export type PushGoalsArgs = {
  approvalRequired?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  branch?: Maybe<Array<Maybe<Scalars['String']>>>,
  data?: Maybe<Array<Maybe<Scalars['String']>>>,
  description?: Maybe<Array<Maybe<Scalars['String']>>>,
  environment?: Maybe<Array<Maybe<Scalars['String']>>>,
  error?: Maybe<Array<Maybe<Scalars['String']>>>,
  externalKey?: Maybe<Array<Maybe<Scalars['String']>>>,
  externalUrl?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSet?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSetId?: Maybe<Array<Maybe<Scalars['String']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  phase?: Maybe<Array<Maybe<Scalars['String']>>>,
  preApprovalRequired?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  retryFeasible?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  signature?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<SdmGoalState>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>,
  uniqueName?: Maybe<Array<Maybe<Scalars['String']>>>,
  url?: Maybe<Array<Maybe<Scalars['String']>>>,
  version?: Maybe<Array<Maybe<Scalars['Int']>>>
};


/** Push-Node */
export type PushGoalSetsArgs = {
  branch?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSet?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSetId?: Maybe<Array<Maybe<Scalars['String']>>>,
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<SdmGoalState>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>
};


/** Push-Node */
export type PushGoalsDisplayStateArgs = {
  branch?: Maybe<Array<Maybe<Scalars['String']>>>,
  format?: Maybe<Array<Maybe<SdmGoalDisplayFormat>>>,
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<SdmGoalDisplayState>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>
};

/** PushImpact-Node */
export type PushImpact = {
   __typename?: 'PushImpact',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  PushImpact */
  id?: Maybe<Scalars['ID']>,
  /** url of  PushImpact */
  url?: Maybe<Scalars['String']>,
  /** data of  PushImpact */
  data?: Maybe<Scalars['String']>,
  /** PushImpact push Push */
  push?: Maybe<Push>,
};


/** PushImpact-Node */
export type PushImpactPushArgs = {
  id?: Maybe<Scalars['ID']>,
  timestamp?: Maybe<Scalars['String']>,
  branch?: Maybe<Scalars['String']>
};

export type Query = {
   __typename?: 'Query',
  TeamConfiguration?: Maybe<Array<Maybe<TeamConfiguration>>>,
  listDisabledRegistrations?: Maybe<Array<Maybe<AtomistRegistration>>>,
  Issue?: Maybe<Array<Maybe<Issue>>>,
  Comment?: Maybe<Array<Maybe<Comment>>>,
  Label?: Maybe<Array<Maybe<Label>>>,
  Repo?: Maybe<Array<Maybe<Repo>>>,
  Commit?: Maybe<Array<Maybe<Commit>>>,
  Push?: Maybe<Array<Maybe<Push>>>,
  Build?: Maybe<Array<Maybe<Build>>>,
  Pipeline?: Maybe<Array<Maybe<Pipeline>>>,
  Stage?: Maybe<Array<Maybe<Stage>>>,
  Job?: Maybe<Array<Maybe<Job>>>,
  Workflow?: Maybe<Array<Maybe<Workflow>>>,
  Branch?: Maybe<Array<Maybe<Branch>>>,
  DeletedBranch?: Maybe<Array<Maybe<DeletedBranch>>>,
  ChatId?: Maybe<Array<Maybe<ChatId>>>,
  ChatChannel?: Maybe<Array<Maybe<ChatChannel>>>,
  PullRequest?: Maybe<Array<Maybe<PullRequest>>>,
  Org?: Maybe<Array<Maybe<Org>>>,
  SCMId?: Maybe<Array<Maybe<ScmId>>>,
  GitHubId?: Maybe<Array<Maybe<GitHubId>>>,
  Tag?: Maybe<Array<Maybe<Tag>>>,
  K8Pod?: Maybe<Array<Maybe<K8Pod>>>,
  K8Container?: Maybe<Array<Maybe<K8Container>>>,
  DockerImage?: Maybe<Array<Maybe<DockerImage>>>,
  ImageLinked?: Maybe<Array<Maybe<ImageLinked>>>,
  Release?: Maybe<Array<Maybe<Release>>>,
  HerokuApp?: Maybe<Array<Maybe<HerokuApp>>>,
  Application?: Maybe<Array<Maybe<Application>>>,
  Team?: Maybe<Array<Maybe<Team>>>,
  ChatTeam?: Maybe<Array<Maybe<ChatTeam>>>,
  Person?: Maybe<Array<Maybe<Person>>>,
  Status?: Maybe<Array<Maybe<Status>>>,
  Email?: Maybe<Array<Maybe<Email>>>,
  Fingerprint?: Maybe<Array<Maybe<Fingerprint>>>,
  PushImpact?: Maybe<Array<Maybe<PushImpact>>>,
  PullRequestImpact?: Maybe<Array<Maybe<PullRequestImpact>>>,
  ResourceProvider?: Maybe<Array<Maybe<ResourceProvider>>>,
  GitHubProvider?: Maybe<Array<Maybe<GitHubProvider>>>,
  SCMProvider?: Maybe<Array<Maybe<ScmProvider>>>,
  DockerRegistryProvider?: Maybe<Array<Maybe<DockerRegistryProvider>>>,
  BinaryRepositoryProvider?: Maybe<Array<Maybe<BinaryRepositoryProvider>>>,
  UserJoinedChannel?: Maybe<Array<Maybe<UserJoinedChannel>>>,
  Webhook?: Maybe<Array<Maybe<Webhook>>>,
  ChannelLink?: Maybe<Array<Maybe<ChannelLink>>>,
  Review?: Maybe<Array<Maybe<Review>>>,
  GenericResourceUser?: Maybe<Array<Maybe<GenericResourceUser>>>,
  ResourceUser?: Maybe<Array<Maybe<ResourceUser>>>,
  SystemAccount?: Maybe<Array<Maybe<SystemAccount>>>,
  KubernetesClusterProvider?: Maybe<Array<Maybe<KubernetesClusterProvider>>>,
  Credential?: Maybe<Array<Maybe<Credential>>>,
  OAuthToken?: Maybe<Array<Maybe<OAuthToken>>>,
  Password?: Maybe<Array<Maybe<Password>>>,
  /** Find all repos that contain named fingerprint in the HEAD commit */
  headCommitsWithFingerprint: Array<FingerprintedCommit>,
  /** Auto-generated query for CommitIssueRelationship */
  CommitIssueRelationship?: Maybe<Array<Maybe<CommitIssueRelationship>>>,
  /** Auto-generated query for Deployment */
  Deployment?: Maybe<Array<Maybe<Deployment>>>,
  /** Auto-generated query for IssueRelationship */
  IssueRelationship?: Maybe<Array<Maybe<IssueRelationship>>>,
  /** Auto-generated query for SdmGoal */
  SdmGoal?: Maybe<Array<Maybe<SdmGoal>>>,
  /** Auto-generated query for SdmGoalSet */
  SdmGoalSet?: Maybe<Array<Maybe<SdmGoalSet>>>,
  /** Auto-generated query for SdmGoalDisplay */
  SdmGoalDisplay?: Maybe<Array<Maybe<SdmGoalDisplay>>>,
  /** Auto-generated query for SdmBuildIdentifier */
  SdmBuildIdentifier?: Maybe<Array<Maybe<SdmBuildIdentifier>>>,
  /** Auto-generated query for SdmDeployEnablement */
  SdmDeployEnablement?: Maybe<Array<Maybe<SdmDeployEnablement>>>,
  /** Auto-generated query for SdmVersion */
  SdmVersion?: Maybe<Array<Maybe<SdmVersion>>>,
  /** Auto-generated query for SdmGoalSetBadge */
  SdmGoalSetBadge?: Maybe<Array<Maybe<SdmGoalSetBadge>>>,
  /** Auto-generated query for SdmPreference */
  SdmPreference?: Maybe<Array<Maybe<SdmPreference>>>,
  /** Auto-generated query for SdmRepoProvenance */
  SdmRepoProvenance?: Maybe<Array<Maybe<SdmRepoProvenance>>>,
  /** Auto-generated query for Card */
  Card?: Maybe<Array<Maybe<Card>>>,
  /** Auto-generated query for Notification */
  Notification?: Maybe<Array<Maybe<Notification>>>,
  /** Auto-generated query for AtomistLog */
  AtomistLog?: Maybe<Array<Maybe<AtomistLog>>>,
  /** Auto-generated query for JiraIssue */
  JiraIssue?: Maybe<Array<Maybe<JiraIssue>>>,
  /** Find a commit by sha */
  commitBySha?: Maybe<Commit>,
  /** Find a Push using after-sha and branch */
  pushBySha?: Maybe<Push>,
  /** Find repo by name, owner and provider id */
  linkedRepo?: Maybe<Repo>,
};


export type QueryTeamConfigurationArgs = {
  namespace?: Maybe<Scalars['String']>
};


export type QueryIssueArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<IssueState>,
  timestamp?: Maybe<Scalars['String']>,
  action?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  numbers?: Maybe<Array<Maybe<Scalars['Float']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  titles?: Maybe<Array<Maybe<Scalars['String']>>>,
  bodys?: Maybe<Array<Maybe<Scalars['String']>>>,
  states?: Maybe<Array<Maybe<IssueState>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  actions?: Maybe<Array<Maybe<Scalars['String']>>>,
  createdAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  updatedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  closedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_IssueOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryCommentArgs = {
  id?: Maybe<Scalars['ID']>,
  body?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  commentId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  htmlUrl?: Maybe<Scalars['String']>,
  commentType?: Maybe<CommentCommentType>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  bodys?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  createdAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  updatedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  commentIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  gitHubIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  paths?: Maybe<Array<Maybe<Scalars['String']>>>,
  positions?: Maybe<Array<Maybe<Scalars['String']>>>,
  htmlUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  commentTypes?: Maybe<Array<Maybe<CommentCommentType>>>,
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryLabelArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  defaults?: Maybe<Array<Maybe<Scalars['String']>>>,
  colors?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_LabelOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  defaultBranch?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  owners?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  repoIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  gitHubIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  defaultBranchs?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_RepoOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryCommitArgs = {
  id?: Maybe<Scalars['ID']>,
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  shas?: Maybe<Array<Maybe<Scalars['String']>>>,
  messages?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_CommitOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryPushArgs = {
  id?: Maybe<Scalars['ID']>,
  timestamp?: Maybe<Scalars['String']>,
  branch?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  branchs?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_PushOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryBuildArgs = {
  id?: Maybe<Scalars['ID']>,
  buildId?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<BuildStatus>,
  buildUrl?: Maybe<Scalars['String']>,
  compareUrl?: Maybe<Scalars['String']>,
  trigger?: Maybe<BuildTrigger>,
  provider?: Maybe<Scalars['String']>,
  pullRequestNumber?: Maybe<Scalars['Float']>,
  startedAt?: Maybe<Scalars['String']>,
  finishedAt?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  workflowId?: Maybe<Scalars['String']>,
  jobName?: Maybe<Scalars['String']>,
  jobId?: Maybe<Scalars['String']>,
  data?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  buildIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  numbers?: Maybe<Array<Maybe<Scalars['Int']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  statuss?: Maybe<Array<Maybe<BuildStatus>>>,
  buildUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  compareUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  triggers?: Maybe<Array<Maybe<BuildTrigger>>>,
  providers?: Maybe<Array<Maybe<Scalars['String']>>>,
  pullRequestNumbers?: Maybe<Array<Maybe<Scalars['Float']>>>,
  startedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  finishedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  workflowIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  jobNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  jobIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  datas?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_BuildOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryPipelineArgs = {
  _id?: Maybe<Scalars['Int']>,
  pipelineId?: Maybe<Scalars['ID']>,
  provider?: Maybe<Scalars['String']>,
  Status?: Maybe<PipelineStatus>
};


export type QueryStageArgs = {
  _id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>
};


export type QueryJobArgs = {
  _id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  jobId?: Maybe<Scalars['ID']>
};


export type QueryWorkflowArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  workflowId?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  config?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  workflowIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  providers?: Maybe<Array<Maybe<Scalars['String']>>>,
  configs?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_WorkflowOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryBranchArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  isRemote?: Maybe<Scalars['Boolean']>,
  remoteRepoHtmlUrl?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  remoteRepoHtmlUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_BranchOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryDeletedBranchArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_DeletedBranchOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryChatIdArgs = {
  id?: Maybe<Scalars['ID']>,
  screenName?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  isAtomistBot?: Maybe<Scalars['String']>,
  isOwner?: Maybe<Scalars['String']>,
  isPrimaryOwner?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['String']>,
  isBot?: Maybe<Scalars['String']>,
  timezoneLabel?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  screenNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  userIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  providers?: Maybe<Array<Maybe<Scalars['String']>>>,
  timezoneLabels?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ChatIdOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryChatChannelArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  normalizedName?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  isDefault?: Maybe<Scalars['Boolean']>,
  botInvitedSelf?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  providers?: Maybe<Array<Maybe<Scalars['String']>>>,
  normalizedNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  channelIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ChatChannelOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryPullRequestArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  prId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  merged?: Maybe<Scalars['Boolean']>,
  timestamp?: Maybe<Scalars['String']>,
  baseBranchName?: Maybe<Scalars['String']>,
  branchName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  mergedAt?: Maybe<Scalars['String']>,
  mergeStatus?: Maybe<MergeStatus>,
  action?: Maybe<PullRequestAction>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  numbers?: Maybe<Array<Maybe<Scalars['Float']>>>,
  prIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  bodys?: Maybe<Array<Maybe<Scalars['String']>>>,
  states?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  baseBranchNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  branchNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  titles?: Maybe<Array<Maybe<Scalars['String']>>>,
  createdAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  updatedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  closedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  mergedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  mergeStatuss?: Maybe<Array<Maybe<MergeStatus>>>,
  actions?: Maybe<Array<Maybe<PullRequestAction>>>,
  orderBy?: Maybe<Array<Maybe<_PullRequestOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryOrgArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  ownerType?: Maybe<OwnerType>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  owners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ownerTypes?: Maybe<Array<Maybe<OwnerType>>>,
  orderBy?: Maybe<Array<Maybe<_OrgOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryScmIdArgs = {
  id?: Maybe<Scalars['ID']>,
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  logins?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  avatars?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ScmIdOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryGitHubIdArgs = {
  id?: Maybe<Scalars['ID']>,
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  logins?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_GitHubIdOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryTagArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  ref?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>,
  refs?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_TagOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryK8PodArgs = {
  name?: Maybe<Scalars['String']>,
  phase?: Maybe<Scalars['String']>,
  environment?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  baseName?: Maybe<Scalars['String']>,
  namespace?: Maybe<Scalars['String']>,
  statusJSON?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  specsJSON?: Maybe<Scalars['String']>,
  envJSON?: Maybe<Scalars['String']>,
  metadataJSON?: Maybe<Scalars['String']>,
  containersCrashLoopBackOff?: Maybe<Scalars['Boolean']>,
  resourceVersion?: Maybe<Scalars['Int']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  phases?: Maybe<Array<Maybe<Scalars['String']>>>,
  environments?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  baseNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  namespaces?: Maybe<Array<Maybe<Scalars['String']>>>,
  statusJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  hosts?: Maybe<Array<Maybe<Scalars['String']>>>,
  states?: Maybe<Array<Maybe<Scalars['String']>>>,
  specsJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  envJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  metadataJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  resourceVersions?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderBy?: Maybe<Array<Maybe<_K8PodOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryK8ContainerArgs = {
  name?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  environment?: Maybe<Scalars['String']>,
  containerJSON?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  stateReason?: Maybe<Scalars['String']>,
  ready?: Maybe<Scalars['Boolean']>,
  restartCount?: Maybe<Scalars['Int']>,
  statusJSON?: Maybe<Scalars['String']>,
  resourceVersion?: Maybe<Scalars['Int']>,
  containerID?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  imageNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  environments?: Maybe<Array<Maybe<Scalars['String']>>>,
  containerJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  states?: Maybe<Array<Maybe<Scalars['String']>>>,
  stateReasons?: Maybe<Array<Maybe<Scalars['String']>>>,
  restartCounts?: Maybe<Array<Maybe<Scalars['Int']>>>,
  statusJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  resourceVersions?: Maybe<Array<Maybe<Scalars['Int']>>>,
  containerIDs?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_K8ContainerOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryDockerImageArgs = {
  image?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Maybe<Scalars['String']>>>,
  imageNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_DockerImageOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryImageLinkedArgs = {
  timestamp?: Maybe<Scalars['String']>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ImageLinkedOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryReleaseArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ReleaseOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryHerokuAppArgs = {
  app?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
  appId?: Maybe<Scalars['String']>,
  release?: Maybe<Scalars['String']>,
  apps?: Maybe<Array<Maybe<Scalars['String']>>>,
  urls?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  users?: Maybe<Array<Maybe<Scalars['String']>>>,
  appIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  releases?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_HerokuAppOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryApplicationArgs = {
  id?: Maybe<Scalars['ID']>,
  state?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  domain?: Maybe<Scalars['String']>,
  data?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  states?: Maybe<Array<Maybe<Scalars['String']>>>,
  hosts?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  domains?: Maybe<Array<Maybe<Scalars['String']>>>,
  datas?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ApplicationOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryTeamArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  iconUrl?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>,
  iconUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  createdAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_TeamOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryChatTeamArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  tenantId?: Maybe<Scalars['String']>,
  domain?: Maybe<Scalars['String']>,
  messageCount?: Maybe<Scalars['Float']>,
  emailDomain?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  providers?: Maybe<Array<Maybe<Scalars['String']>>>,
  domains?: Maybe<Array<Maybe<Scalars['String']>>>,
  messageCounts?: Maybe<Array<Maybe<Scalars['Float']>>>,
  emailDomains?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ChatTeamOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryPersonArgs = {
  id?: Maybe<Scalars['ID']>,
  forename?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  forenames?: Maybe<Array<Maybe<Scalars['String']>>>,
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_PersonOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryStatusArgs = {
  id?: Maybe<Scalars['ID']>,
  state?: Maybe<StatusState>,
  description?: Maybe<Scalars['String']>,
  targetUrl?: Maybe<Scalars['String']>,
  context?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  states?: Maybe<Array<Maybe<StatusState>>>,
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>,
  targetUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  contexts?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_StatusOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryEmailArgs = {
  address?: Maybe<Scalars['String']>,
  addresss?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_EmailOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryFingerprintArgs = {
  name?: Maybe<Scalars['String']>,
  sha?: Maybe<Scalars['String']>,
  data?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  shas?: Maybe<Array<Maybe<Scalars['String']>>>,
  datas?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_FingerprintOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryPushImpactArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  data?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  urls?: Maybe<Array<Maybe<Scalars['String']>>>,
  datas?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_PushImpactOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryPullRequestImpactArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  data?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  urls?: Maybe<Array<Maybe<Scalars['String']>>>,
  datas?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_PullRequestImpactOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryResourceProviderArgs = {
  authProviderId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  orderBy?: Maybe<Array<Maybe<_ResourceProviderOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryGitHubProviderArgs = {
  id?: Maybe<Scalars['ID']>,
  private?: Maybe<Scalars['Boolean']>,
  url?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
  apiUrl?: Maybe<Scalars['String']>,
  gitUrl?: Maybe<Scalars['String']>,
  providerType?: Maybe<ProviderType>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  urls?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  apiUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  gitUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerTypes?: Maybe<Array<Maybe<ProviderType>>>,
  orderBy?: Maybe<Array<Maybe<_GitHubProviderOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryScmProviderArgs = {
  authProviderId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  private?: Maybe<Scalars['Boolean']>,
  url?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
  apiUrl?: Maybe<Scalars['String']>,
  gitUrl?: Maybe<Scalars['String']>,
  providerType?: Maybe<ProviderType>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  urls?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  apiUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  gitUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerTypes?: Maybe<Array<Maybe<ProviderType>>>,
  orderBy?: Maybe<Array<Maybe<_ScmProviderOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryDockerRegistryProviderArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryBinaryRepositoryProviderArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  type?: Maybe<BinaryRepositoryType>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryUserJoinedChannelArgs = {
  id?: Maybe<Scalars['ID']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderBy?: Maybe<Array<Maybe<_UserJoinedChannelOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryWebhookArgs = {
  id?: Maybe<Scalars['ID']>,
  resourceProviderId?: Maybe<Scalars['String']>
};


export type QueryChannelLinkArgs = {
  id?: Maybe<Scalars['ID']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderBy?: Maybe<Array<Maybe<_ChannelLinkOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryReviewArgs = {
  id?: Maybe<Scalars['ID']>,
  gitHubId?: Maybe<Scalars['String']>,
  reviewId?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<ReviewState>,
  submittedAt?: Maybe<Scalars['String']>,
  htmlUrl?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  gitHubIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  reviewIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  bodys?: Maybe<Array<Maybe<Scalars['String']>>>,
  states?: Maybe<Array<Maybe<ReviewState>>>,
  submittedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  htmlUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryGenericResourceUserArgs = {
  login?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type QueryResourceUserArgs = {
  login?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type QuerySystemAccountArgs = {
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type QueryKubernetesClusterProviderArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type QueryCredentialArgs = {
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type QueryOAuthTokenArgs = {
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type QueryPasswordArgs = {
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type QueryHeadCommitsWithFingerprintArgs = {
  name?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>
};


export type QueryCommitIssueRelationshipArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  type?: Maybe<Array<Maybe<CommitIssueRelationshipType>>>
};


export type QueryDeploymentArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  environment?: Maybe<Array<Maybe<Scalars['String']>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type QueryIssueRelationshipArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  relationshipId?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<Scalars['String']>>>,
  type?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QuerySdmGoalArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  _showHistory?: Maybe<Scalars['Boolean']>,
  approvalRequired?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  branch?: Maybe<Array<Maybe<Scalars['String']>>>,
  data?: Maybe<Array<Maybe<Scalars['String']>>>,
  description?: Maybe<Array<Maybe<Scalars['String']>>>,
  environment?: Maybe<Array<Maybe<Scalars['String']>>>,
  error?: Maybe<Array<Maybe<Scalars['String']>>>,
  externalKey?: Maybe<Array<Maybe<Scalars['String']>>>,
  externalUrl?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSet?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSetId?: Maybe<Array<Maybe<Scalars['String']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  phase?: Maybe<Array<Maybe<Scalars['String']>>>,
  preApprovalRequired?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  retryFeasible?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  signature?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<SdmGoalState>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>,
  uniqueName?: Maybe<Array<Maybe<Scalars['String']>>>,
  url?: Maybe<Array<Maybe<Scalars['String']>>>,
  version?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type QuerySdmGoalSetArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  branch?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSet?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSetId?: Maybe<Array<Maybe<Scalars['String']>>>,
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<SdmGoalState>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type QuerySdmGoalDisplayArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  branch?: Maybe<Array<Maybe<Scalars['String']>>>,
  format?: Maybe<Array<Maybe<SdmGoalDisplayFormat>>>,
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<SdmGoalDisplayState>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type QuerySdmBuildIdentifierArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  identifier?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QuerySdmDeployEnablementArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerId?: Maybe<Array<Maybe<Scalars['String']>>>,
  repo?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<SdmDeployState>>>
};


export type QuerySdmVersionArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  branch?: Maybe<Array<Maybe<Scalars['String']>>>,
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  version?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QuerySdmGoalSetBadgeArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  sdm?: Maybe<Array<Maybe<Scalars['String']>>>,
  token?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QuerySdmPreferenceArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  key?: Maybe<Array<Maybe<Scalars['String']>>>,
  ttl?: Maybe<Array<Maybe<Scalars['Int']>>>,
  value?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QuerySdmRepoProvenanceArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>
};


export type QueryCardArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  key?: Maybe<Array<Maybe<Scalars['String']>>>,
  post?: Maybe<Array<Maybe<Scalars['String']>>>,
  shortTitle?: Maybe<Array<Maybe<Scalars['String']>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>,
  ttl?: Maybe<Array<Maybe<Scalars['Int']>>>,
  type?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QueryNotificationArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  contentType?: Maybe<Scalars['String']>,
  key?: Maybe<Scalars['String']>,
  post?: Maybe<Array<Maybe<Scalars['String']>>>,
  ts?: Maybe<Scalars['Int']>,
  ttl?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type QueryAtomistLogArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Array<Maybe<Scalars['Int']>>>,
  team_id?: Maybe<Array<Maybe<Scalars['String']>>>,
  level?: Maybe<Array<Maybe<Scalars['String']>>>,
  message?: Maybe<Array<Maybe<Scalars['String']>>>,
  category?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QueryJiraIssueArgs = {
  id?: Maybe<Scalars['ID']>,
  _offset?: Maybe<Scalars['Int']>,
  _first?: Maybe<Scalars['Int']>,
  _orderBy?: Maybe<Scalars['String']>,
  _after?: Maybe<Scalars['Int']>,
  _before?: Maybe<Scalars['Int']>,
  _ordering?: Maybe<_Ordering>,
  _search?: Maybe<Scalars['String']>,
  issue_event_type_name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  webhookEvent?: Maybe<Scalars['String']>
};


export type QueryCommitByShaArgs = {
  sha: Scalars['String']
};


export type QueryPushByShaArgs = {
  branchName: Scalars['String'],
  afterSha: Scalars['String']
};


export type QueryLinkedRepoArgs = {
  name: Scalars['String'],
  owner: Scalars['String'],
  provider: Scalars['String']
};

/** Release-Node */
export type Release = {
   __typename?: 'Release',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** the URL of the Release */
  url?: Maybe<Scalars['String']>,
  /** id of  Release */
  id?: Maybe<Scalars['ID']>,
  /** name of  Release */
  name?: Maybe<Scalars['String']>,
  /** timestamp of  Release */
  timestamp?: Maybe<Scalars['String']>,
  /** Release tag Tag */
  tag?: Maybe<Tag>,
};


/** Release-Node */
export type ReleaseTagArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  ref?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};

/** Repo-Node */
export type Repo = {
   __typename?: 'Repo',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** the URL of the Repo */
  url?: Maybe<Scalars['String']>,
  /** id of  Repo */
  id?: Maybe<Scalars['ID']>,
  /** owner of  Repo */
  owner?: Maybe<Scalars['String']>,
  /** name of  Repo */
  name?: Maybe<Scalars['String']>,
  /** allowRebaseMerge of  Repo */
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  /** allowSquashMerge of  Repo */
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  /** allowMergeCommit of  Repo */
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  /** repoId of  Repo */
  repoId?: Maybe<Scalars['String']>,
  /** gitHubId of  Repo */
  gitHubId?: Maybe<Scalars['String']>,
  /** defaultBranch of  Repo */
  defaultBranch?: Maybe<Scalars['String']>,
  /** Repo labels Label */
  labels?: Maybe<Array<Maybe<Label>>>,
  /** Repo channels ChatChannel */
  channels?: Maybe<Array<Maybe<ChatChannel>>>,
  /** Repo org Org */
  org?: Maybe<Org>,
  /** Repo issue Issue */
  issue?: Maybe<Array<Maybe<Issue>>>,
  /** Repo issues Issue */
  issues?: Maybe<Array<Maybe<Issue>>>,
  /** Repo pullRequest PullRequest */
  pullRequest?: Maybe<Array<Maybe<PullRequest>>>,
  /** Repo pullRequests PullRequest */
  pullRequests?: Maybe<Array<Maybe<PullRequest>>>,
  /** Repo branches Branch */
  branches?: Maybe<Array<Maybe<Branch>>>,
  /** Repo links ChannelLink */
  links?: Maybe<Array<Maybe<ChannelLink>>>,
};


/** Repo-Node */
export type RepoLabelsArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_LabelOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  color?: Maybe<Scalars['String']>
};


/** Repo-Node */
export type RepoChannelsArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  normalizedName?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  isDefault?: Maybe<Scalars['Boolean']>,
  botInvitedSelf?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<Array<Maybe<_ChatChannelOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Boolean']>
};


/** Repo-Node */
export type RepoOrgArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  ownerType?: Maybe<OwnerType>
};


/** Repo-Node */
export type RepoIssueArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<IssueState>,
  timestamp?: Maybe<Scalars['String']>,
  action?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_IssueOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  closedAt?: Maybe<Scalars['String']>
};


/** Repo-Node */
export type RepoIssuesArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<IssueState>,
  timestamp?: Maybe<Scalars['String']>,
  action?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_IssueOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  closedAt?: Maybe<Scalars['String']>
};


/** Repo-Node */
export type RepoPullRequestArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  prId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  merged?: Maybe<Scalars['Boolean']>,
  timestamp?: Maybe<Scalars['String']>,
  baseBranchName?: Maybe<Scalars['String']>,
  branchName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  mergedAt?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_PullRequestOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  mergeStatus?: Maybe<MergeStatus>
};


/** Repo-Node */
export type RepoPullRequestsArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  prId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  merged?: Maybe<Scalars['Boolean']>,
  timestamp?: Maybe<Scalars['String']>,
  baseBranchName?: Maybe<Scalars['String']>,
  branchName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  mergedAt?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_PullRequestOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  mergeStatus?: Maybe<MergeStatus>
};


/** Repo-Node */
export type RepoBranchesArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  isRemote?: Maybe<Scalars['Boolean']>,
  orderBy?: Maybe<Array<Maybe<_BranchOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  remoteRepoHtmlUrl?: Maybe<Scalars['String']>
};


/** Repo-Node */
export type RepoLinksArgs = {
  orderBy?: Maybe<Array<Maybe<_ChannelLinkOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['ID']>
};

/** a GitHub Owner (like an Org) can set a login to be used for background tasks */
export type RepoLogin = {
   __typename?: 'RepoLogin',
  /** The repository name */
  repo?: Maybe<Scalars['String']>,
  /** The owner name for the Organization/Team */
  owner?: Maybe<Scalars['String']>,
  /** The id of the git provider for this Owner */
  providerId?: Maybe<Scalars['String']>,
  /** The login that should be used */
  login?: Maybe<Scalars['String']>,
};

/** The data for an existing Repo has been loaded and is ready for querying */
export type RepoOnboarded = {
   __typename?: 'RepoOnboarded',
  /** GitHub Repository */
  repo: Repo,
};

export type ResourceProvider = {
  _id: Scalars['Int'],
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  team: Team,
  authProviderId?: Maybe<Scalars['String']>,
  state?: Maybe<ResourceProviderState>,
  credential?: Maybe<Credential>,
  webhooks?: Maybe<Array<Maybe<Webhook>>>,
};


export type ResourceProviderWebhooksArgs = {
  id?: Maybe<Scalars['ID']>
};

export type ResourceProviderState = {
   __typename?: 'ResourceProviderState',
  error?: Maybe<Scalars['String']>,
  name?: Maybe<ResourceProviderStateName>,
};

export type ResourceProviderStateInput = {
  state: ResourceProviderStateName,
  error?: Maybe<Scalars['String']>,
};

export enum ResourceProviderStateName {
  Converged = 'converged',
  Unconverged = 'unconverged',
  Misconfigured = 'misconfigured',
  Unauthorized = 'unauthorized'
}

export type ResourceUser = {
  id: Scalars['ID'],
  _id?: Maybe<Scalars['Int']>,
  credential?: Maybe<Credential>,
  provider: ResourceProvider,
  login: Scalars['String'],
};

export enum ResourceUserType {
  ScmId = 'SCMId',
  GenericResourceUser = 'GenericResourceUser',
  SystemAccount = 'SystemAccount'
}

/** Review-Node */
export type Review = {
   __typename?: 'Review',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** the URL of the Review */
  url?: Maybe<Scalars['String']>,
  /** id of  Review */
  id?: Maybe<Scalars['ID']>,
  /** gitHubId of  Review */
  gitHubId?: Maybe<Scalars['String']>,
  /** reviewId of  Review */
  reviewId?: Maybe<Scalars['String']>,
  /** body of  Review */
  body?: Maybe<Scalars['String']>,
  /** state of  Review */
  state?: Maybe<ReviewState>,
  /** submittedAt of  Review */
  submittedAt?: Maybe<Scalars['String']>,
  /** htmlUrl of  Review */
  htmlUrl?: Maybe<Scalars['String']>,
  /** Review by SCMId */
  by?: Maybe<Array<Maybe<ScmId>>>,
  /** Review commit Commit */
  commit?: Maybe<Commit>,
  /** Review comments Comment */
  comments?: Maybe<Array<Maybe<Comment>>>,
  /** Review pullRequest PullRequest */
  pullRequest?: Maybe<PullRequest>,
};


/** Review-Node */
export type ReviewByArgs = {
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_ScmIdOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  avatar?: Maybe<Scalars['String']>
};


/** Review-Node */
export type ReviewCommitArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Review-Node */
export type ReviewCommentsArgs = {
  id?: Maybe<Scalars['ID']>,
  body?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  commentId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  htmlUrl?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  commentType?: Maybe<CommentCommentType>
};


/** Review-Node */
export type ReviewPullRequestArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  prId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  merged?: Maybe<Scalars['Boolean']>,
  timestamp?: Maybe<Scalars['String']>,
  baseBranchName?: Maybe<Scalars['String']>,
  branchName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  mergedAt?: Maybe<Scalars['String']>,
  mergeStatus?: Maybe<MergeStatus>
};

/** Enum for ReviewState */
export enum ReviewState {
  /** Value for requested */
  Requested = 'requested',
  /** Value for pending */
  Pending = 'pending',
  /** Value for approved */
  Approved = 'approved',
  /** Value for commented */
  Commented = 'commented',
  /** Value for unapproved */
  Unapproved = 'unapproved',
  /** Value for changes_requested */
  ChangesRequested = 'changes_requested'
}

export type ScmAuthorInput = {
  /** The login of the commit author in the SCM provider */
  login: Scalars['String'],
  /** The authors email address */
  email?: Maybe<EmailInput>,
  /** The name of the author */
  name?: Maybe<Scalars['String']>,
};

export type ScmCommitInput = {
  /** The id of the repo as it appears in the graph */
  repoId: Scalars['String'],
  /** The sha of the commit */
  sha: Scalars['String'],
  /** The email address of the commit */
  email?: Maybe<EmailInput>,
  /** The commit message */
  message: Scalars['String'],
  /** The http url of the commit in the SCM provider */
  url?: Maybe<Scalars['String']>,
  /** The commit timestamp */
  timestamp: Scalars['String'],
  /** The name of the branch this commit is being ingested on */
  branchName: Scalars['String'],
  /** The author of the commit - optional but helpful if available */
  author?: Maybe<ScmAuthorInput>,
};

/** SCMId-Node */
export type ScmId = ResourceUser & {
   __typename?: 'SCMId',
  id: Scalars['ID'],
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** login of  SCMId */
  login: Scalars['String'],
  /** name of  SCMId */
  name?: Maybe<Scalars['String']>,
  /** avatar of  SCMId */
  avatar?: Maybe<Scalars['String']>,
  credential?: Maybe<OAuthToken>,
  provider: ScmProvider,
  /** SCMId emails Email */
  emails?: Maybe<Array<Maybe<Email>>>,
  /** SCMId person Person */
  person?: Maybe<Person>,
};


/** SCMId-Node */
export type ScmIdEmailsArgs = {
  orderBy?: Maybe<Array<Maybe<_EmailOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  address?: Maybe<Scalars['String']>
};


/** SCMId-Node */
export type ScmIdPersonArgs = {
  id?: Maybe<Scalars['ID']>,
  forename?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>
};

export type ScmOrgInput = {
  name: Scalars['String'],
  id?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  ownerType: OwnerType,
};

export type ScmOrgsInput = {
  orgs: Array<ScmOrgInput>,
};

/** SCMProvider-Node */
export type ScmProvider = ResourceProvider & {
   __typename?: 'SCMProvider',
  /** internal node id */
  _id: Scalars['Int'],
  /** id of  SCMProvider */
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  /** url of  SCMProvider */
  url?: Maybe<Scalars['String']>,
  /** providerId of  SCMProvider */
  providerId?: Maybe<Scalars['String']>,
  /** private is this provider reachable on the public internet */
  private?: Maybe<Scalars['Boolean']>,
  /** apiUrl of  SCMProvider */
  apiUrl?: Maybe<Scalars['String']>,
  /** gitUrl of  SCMProvider */
  gitUrl?: Maybe<Scalars['String']>,
  /** providerType of  SCMProvider */
  providerType?: Maybe<ProviderType>,
  targetConfiguration?: Maybe<ScmProviderSpec>,
  state?: Maybe<ResourceProviderState>,
  team: Team,
  orgs?: Maybe<Array<Maybe<Org>>>,
  /** ID of the auth provider protecting this resource (same as providerId for github.com) */
  authProviderId?: Maybe<Scalars['String']>,
  credential?: Maybe<OAuthToken>,
  /** any webooks associated with this provider */
  webhooks?: Maybe<Array<Maybe<Webhook>>>,
};


/** SCMProvider-Node */
export type ScmProviderTeamArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  iconUrl?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>
};


/** SCMProvider-Node */
export type ScmProviderOrgsArgs = {
  owner?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_OrgOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  ownerType?: Maybe<OwnerType>
};


/** SCMProvider-Node */
export type ScmProviderWebhooksArgs = {
  id?: Maybe<Scalars['ID']>
};

export type ScmProviderRepoSpec = {
   __typename?: 'SCMProviderRepoSpec',
  ownerSpec: Scalars['String'],
  nameSpec: Scalars['String'],
};

export type ScmProviderSpec = {
   __typename?: 'SCMProviderSpec',
  orgSpecs: Array<Scalars['String']>,
  repoSpecs: Array<ScmProviderRepoSpec>,
};

export type ScmProviderStateInput = {
  state: ScmProviderStateName,
  error?: Maybe<Scalars['String']>,
};

export enum ScmProviderStateName {
  Converged = 'converged',
  Unconverged = 'unconverged',
  Misconfigured = 'misconfigured',
  Unauthorized = 'unauthorized'
}

export type ScmRepoInput = {
  /** The the id of the repo as provided by the SCM provider not the Atomist graph */
  repoId: Scalars['String'],
  /** The http url of the repo in the SCM provider */
  url?: Maybe<Scalars['String']>,
  /** The name of the repo */
  name: Scalars['String'],
  /** The default branch of the repo (master if unknown) */
  defaultBranch?: Maybe<Scalars['String']>,
};

export type ScmReposInput = {
  /** The id of the org as represented in the Atomist graph */
  orgId: Scalars['String'],
  owner: Scalars['String'],
  /** The list of repos to ingest */
  repos: Array<ScmRepoInput>,
};

export type ScmResourceProviderInput = {
  orgs: Array<Scalars['String']>,
  repos: Array<ScmResourceProviderRepoInput>,
};

export type ScmResourceProviderRepoInput = {
  owner: Scalars['String'],
  repo: Scalars['String'],
};

export type SdmBuildIdentifier = {
   __typename?: 'SdmBuildIdentifier',
  identifier?: Maybe<Scalars['String']>,
  repo?: Maybe<SdmBuildIdentifierRepository>,
  /** The ID of this SdmBuildIdentifier */
  id?: Maybe<Scalars['ID']>,
};


export type SdmBuildIdentifierRepoArgs = {
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerId?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type SdmBuildIdentifierRepository = {
   __typename?: 'SdmBuildIdentifierRepository',
  name?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
};

export type SdmCondition = {
   __typename?: 'SdmCondition',
  environment?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  uniqueName?: Maybe<Scalars['String']>,
};

export type SdmDeployEnablement = {
   __typename?: 'SdmDeployEnablement',
  owner?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
  repo?: Maybe<Scalars['String']>,
  state?: Maybe<SdmDeployState>,
  /** The ID of this SdmDeployEnablement */
  id?: Maybe<Scalars['ID']>,
};

export enum SdmDeployState {
  Requested = 'requested',
  Disabled = 'disabled'
}

export type SdmExternalUrl = {
   __typename?: 'SdmExternalUrl',
  label?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type SdmGoal = {
   __typename?: 'SdmGoal',
  approval?: Maybe<SdmProvenance>,
  approvalRequired?: Maybe<Scalars['Boolean']>,
  branch?: Maybe<Scalars['String']>,
  data?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  environment?: Maybe<Scalars['String']>,
  error?: Maybe<Scalars['String']>,
  externalKey?: Maybe<Scalars['String']>,
  externalUrl?: Maybe<Scalars['String']>,
  externalUrls?: Maybe<Array<Maybe<SdmExternalUrl>>>,
  fulfillment?: Maybe<SdmGoalFulfillment>,
  goalSet?: Maybe<Scalars['String']>,
  goalSetId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  phase?: Maybe<Scalars['String']>,
  preApproval?: Maybe<SdmProvenance>,
  preApprovalRequired?: Maybe<Scalars['Boolean']>,
  preConditions?: Maybe<Array<Maybe<SdmCondition>>>,
  provenance?: Maybe<Array<Maybe<SdmProvenance>>>,
  push?: Maybe<Push>,
  repo?: Maybe<SdmRepository>,
  retryFeasible?: Maybe<Scalars['Boolean']>,
  sha?: Maybe<Scalars['String']>,
  signature?: Maybe<Scalars['String']>,
  state?: Maybe<SdmGoalState>,
  ts?: Maybe<Scalars['Int']>,
  uniqueName?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['Int']>,
  /** The ID of this SdmGoal */
  id?: Maybe<Scalars['ID']>,
};


export type SdmGoalFulfillmentArgs = {
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  method?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type SdmGoalRepoArgs = {
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerId?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type SdmGoalDisplay = {
   __typename?: 'SdmGoalDisplay',
  branch?: Maybe<Scalars['String']>,
  format?: Maybe<SdmGoalDisplayFormat>,
  push?: Maybe<Push>,
  repo?: Maybe<SdmRepository>,
  sha?: Maybe<Scalars['String']>,
  state?: Maybe<SdmGoalDisplayState>,
  ts?: Maybe<Scalars['Int']>,
  /** The ID of this SdmGoalDisplay */
  id?: Maybe<Scalars['ID']>,
};

export enum SdmGoalDisplayFormat {
  Compact = 'compact',
  Full = 'full'
}

export enum SdmGoalDisplayState {
  ShowCurrent = 'show_current',
  ShowAll = 'show_all'
}

export type SdmGoalFulfillment = {
   __typename?: 'SdmGoalFulfillment',
  method?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type SdmGoalName = {
   __typename?: 'SdmGoalName',
  name?: Maybe<Scalars['String']>,
  uniqueName?: Maybe<Scalars['String']>,
};

export type SdmGoalSet = {
   __typename?: 'SdmGoalSet',
  branch?: Maybe<Scalars['String']>,
  goalSet?: Maybe<Scalars['String']>,
  goalSetId?: Maybe<Scalars['String']>,
  goals?: Maybe<Array<Maybe<SdmGoalName>>>,
  provenance?: Maybe<SdmProvenance>,
  push?: Maybe<Push>,
  repo?: Maybe<SdmRepository>,
  sha?: Maybe<Scalars['String']>,
  state?: Maybe<SdmGoalState>,
  ts?: Maybe<Scalars['Int']>,
  /** The ID of this SdmGoalSet */
  id?: Maybe<Scalars['ID']>,
};


export type SdmGoalSetProvenanceArgs = {
  registration?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type SdmGoalSetRepoArgs = {
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerId?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type SdmGoalSetBadge = {
   __typename?: 'SdmGoalSetBadge',
  repo?: Maybe<SdmGoalSetBadgeRepository>,
  sdm?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  /** The ID of this SdmGoalSetBadge */
  id?: Maybe<Scalars['ID']>,
};


export type SdmGoalSetBadgeRepoArgs = {
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerId?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type SdmGoalSetBadgeRepository = {
   __typename?: 'SdmGoalSetBadgeRepository',
  name?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
};

export enum SdmGoalState {
  Success = 'success',
  PreApproved = 'pre_approved',
  Requested = 'requested',
  WaitingForPreApproval = 'waiting_for_pre_approval',
  Approved = 'approved',
  WaitingForApproval = 'waiting_for_approval',
  Failure = 'failure',
  Stopped = 'stopped',
  Planned = 'planned',
  InProcess = 'in_process',
  Skipped = 'skipped',
  Canceled = 'canceled'
}

export type SdmPreference = {
   __typename?: 'SdmPreference',
  key?: Maybe<Scalars['String']>,
  ttl?: Maybe<Scalars['Int']>,
  value?: Maybe<Scalars['String']>,
  /** The ID of this SdmPreference */
  id?: Maybe<Scalars['ID']>,
};

export type SdmProvenance = {
   __typename?: 'SdmProvenance',
  channelId?: Maybe<Scalars['String']>,
  correlationId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  registration?: Maybe<Scalars['String']>,
  ts?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SdmRepoProvenance = {
   __typename?: 'SdmRepoProvenance',
  provenance?: Maybe<SdmProvenance>,
  repo?: Maybe<SdmRepository>,
  /** The ID of this SdmRepoProvenance */
  id?: Maybe<Scalars['ID']>,
};


export type SdmRepoProvenanceRepoArgs = {
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerId?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type SdmRepository = {
   __typename?: 'SdmRepository',
  name?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
};

export type SdmVersion = {
   __typename?: 'SdmVersion',
  branch?: Maybe<Scalars['String']>,
  repo?: Maybe<SdmVersionRepository>,
  sha?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  /** The ID of this SdmVersion */
  id?: Maybe<Scalars['ID']>,
};


export type SdmVersionRepoArgs = {
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerId?: Maybe<Array<Maybe<Scalars['String']>>>
};

export type SdmVersionRepository = {
   __typename?: 'SdmVersionRepository',
  name?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
};

/** A slack channel */
export type SlackChannel = {
   __typename?: 'SlackChannel',
  /** The id of the chat team */
  chatTeamId?: Maybe<Scalars['String']>,
  /** The name of the channel */
  name?: Maybe<Scalars['String']>,
  /** The id of the channel */
  id?: Maybe<Scalars['String']>,
};

/** Fingerprint of some artifact in an SCM repository */
export type SourceFingerprint = {
   __typename?: 'SourceFingerprint',
  data?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  sha: Scalars['ID'],
  type: Scalars['String'],
};

/** Stage-Node */
export type Stage = {
   __typename?: 'Stage',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** The name of this stage */
  name?: Maybe<Scalars['String']>,
  /** The pipeline that this stage belongs to */
  pipeline?: Maybe<Pipeline>,
  /** The list of jobs associated with this stage */
  jobs?: Maybe<Array<Maybe<Job>>>,
};

/** Status-Node */
export type Status = {
   __typename?: 'Status',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  Status */
  id?: Maybe<Scalars['ID']>,
  /** state of  Status */
  state?: Maybe<StatusState>,
  /** description of  Status */
  description?: Maybe<Scalars['String']>,
  /** targetUrl of  Status */
  targetUrl?: Maybe<Scalars['String']>,
  /** context of  Status */
  context?: Maybe<Scalars['String']>,
  /** timestamp of  Status */
  timestamp?: Maybe<Scalars['String']>,
  /** Status commit Commit */
  commit?: Maybe<Commit>,
};


/** Status-Node */
export type StatusCommitArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};

/** Enum for StatusState */
export enum StatusState {
  /** Value for pending */
  Pending = 'pending',
  /** Value for success */
  Success = 'success',
  /** Value for error */
  Error = 'error',
  /** Value for failure */
  Failure = 'failure'
}

export type Subscription = {
   __typename?: 'Subscription',
  TeamConfiguration?: Maybe<Array<Maybe<TeamConfiguration>>>,
  listDisabledRegistrations?: Maybe<Array<Maybe<AtomistRegistration>>>,
  Issue?: Maybe<Array<Maybe<Issue>>>,
  Comment?: Maybe<Array<Maybe<Comment>>>,
  Label?: Maybe<Array<Maybe<Label>>>,
  Repo?: Maybe<Array<Maybe<Repo>>>,
  Commit?: Maybe<Array<Maybe<Commit>>>,
  Push?: Maybe<Array<Maybe<Push>>>,
  Build?: Maybe<Array<Maybe<Build>>>,
  Pipeline?: Maybe<Array<Maybe<Pipeline>>>,
  Stage?: Maybe<Array<Maybe<Stage>>>,
  Job?: Maybe<Array<Maybe<Job>>>,
  Workflow?: Maybe<Array<Maybe<Workflow>>>,
  Branch?: Maybe<Array<Maybe<Branch>>>,
  DeletedBranch?: Maybe<Array<Maybe<DeletedBranch>>>,
  ChatId?: Maybe<Array<Maybe<ChatId>>>,
  ChatChannel?: Maybe<Array<Maybe<ChatChannel>>>,
  PullRequest?: Maybe<Array<Maybe<PullRequest>>>,
  Org?: Maybe<Array<Maybe<Org>>>,
  SCMId?: Maybe<Array<Maybe<ScmId>>>,
  GitHubId?: Maybe<Array<Maybe<GitHubId>>>,
  Tag?: Maybe<Array<Maybe<Tag>>>,
  K8Pod?: Maybe<Array<Maybe<K8Pod>>>,
  K8Container?: Maybe<Array<Maybe<K8Container>>>,
  DockerImage?: Maybe<Array<Maybe<DockerImage>>>,
  ImageLinked?: Maybe<Array<Maybe<ImageLinked>>>,
  Release?: Maybe<Array<Maybe<Release>>>,
  HerokuApp?: Maybe<Array<Maybe<HerokuApp>>>,
  Application?: Maybe<Array<Maybe<Application>>>,
  Team?: Maybe<Array<Maybe<Team>>>,
  ChatTeam?: Maybe<Array<Maybe<ChatTeam>>>,
  Person?: Maybe<Array<Maybe<Person>>>,
  Status?: Maybe<Array<Maybe<Status>>>,
  Email?: Maybe<Array<Maybe<Email>>>,
  Fingerprint?: Maybe<Array<Maybe<Fingerprint>>>,
  PushImpact?: Maybe<Array<Maybe<PushImpact>>>,
  PullRequestImpact?: Maybe<Array<Maybe<PullRequestImpact>>>,
  ResourceProvider?: Maybe<Array<Maybe<ResourceProvider>>>,
  GitHubProvider?: Maybe<Array<Maybe<GitHubProvider>>>,
  SCMProvider?: Maybe<Array<Maybe<ScmProvider>>>,
  DockerRegistryProvider?: Maybe<Array<Maybe<DockerRegistryProvider>>>,
  BinaryRepositoryProvider?: Maybe<Array<Maybe<BinaryRepositoryProvider>>>,
  UserJoinedChannel?: Maybe<Array<Maybe<UserJoinedChannel>>>,
  Webhook?: Maybe<Array<Maybe<Webhook>>>,
  ChannelLink?: Maybe<Array<Maybe<ChannelLink>>>,
  Review?: Maybe<Array<Maybe<Review>>>,
  GenericResourceUser?: Maybe<Array<Maybe<GenericResourceUser>>>,
  ResourceUser?: Maybe<Array<Maybe<ResourceUser>>>,
  SystemAccount?: Maybe<Array<Maybe<SystemAccount>>>,
  KubernetesClusterProvider?: Maybe<Array<Maybe<KubernetesClusterProvider>>>,
  Credential?: Maybe<Array<Maybe<Credential>>>,
  OAuthToken?: Maybe<Array<Maybe<OAuthToken>>>,
  Password?: Maybe<Array<Maybe<Password>>>,
  /** Find all repos that contain named fingerprint in the HEAD commit */
  headCommitsWithFingerprint: Array<FingerprintedCommit>,
  /** Auto-generated subscription for CommitIssueRelationship */
  CommitIssueRelationship?: Maybe<Array<Maybe<CommitIssueRelationship>>>,
  /** Auto-generated subscription for Deployment */
  Deployment?: Maybe<Array<Maybe<Deployment>>>,
  /** Auto-generated subscription for IssueRelationship */
  IssueRelationship?: Maybe<Array<Maybe<IssueRelationship>>>,
  /** Auto-generated subscription for SdmGoal */
  SdmGoal?: Maybe<Array<Maybe<SdmGoal>>>,
  /** Auto-generated subscription for SdmGoalSet */
  SdmGoalSet?: Maybe<Array<Maybe<SdmGoalSet>>>,
  /** Auto-generated subscription for SdmGoalDisplay */
  SdmGoalDisplay?: Maybe<Array<Maybe<SdmGoalDisplay>>>,
  /** Auto-generated subscription for SdmBuildIdentifier */
  SdmBuildIdentifier?: Maybe<Array<Maybe<SdmBuildIdentifier>>>,
  /** Auto-generated subscription for SdmDeployEnablement */
  SdmDeployEnablement?: Maybe<Array<Maybe<SdmDeployEnablement>>>,
  /** Auto-generated subscription for SdmVersion */
  SdmVersion?: Maybe<Array<Maybe<SdmVersion>>>,
  /** Auto-generated subscription for SdmGoalSetBadge */
  SdmGoalSetBadge?: Maybe<Array<Maybe<SdmGoalSetBadge>>>,
  /** Auto-generated subscription for SdmPreference */
  SdmPreference?: Maybe<Array<Maybe<SdmPreference>>>,
  /** Auto-generated subscription for SdmRepoProvenance */
  SdmRepoProvenance?: Maybe<Array<Maybe<SdmRepoProvenance>>>,
  /** Auto-generated subscription for Card */
  Card?: Maybe<Array<Maybe<Card>>>,
  /** Auto-generated subscription for Notification */
  Notification?: Maybe<Array<Maybe<Notification>>>,
  /** Auto-generated subscription for AtomistLog */
  AtomistLog?: Maybe<Array<Maybe<AtomistLog>>>,
  /** Auto-generated subscription for JiraIssue */
  JiraIssue?: Maybe<Array<Maybe<JiraIssue>>>,
  RepoOnboarded?: Maybe<Array<Maybe<RepoOnboarded>>>,
};


export type SubscriptionTeamConfigurationArgs = {
  namespace?: Maybe<Scalars['String']>
};


export type SubscriptionIssueArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  name?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<IssueState>,
  timestamp?: Maybe<Scalars['String']>,
  action?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  numbers?: Maybe<Array<Maybe<Scalars['Float']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  titles?: Maybe<Array<Maybe<Scalars['String']>>>,
  bodys?: Maybe<Array<Maybe<Scalars['String']>>>,
  states?: Maybe<Array<Maybe<IssueState>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  actions?: Maybe<Array<Maybe<Scalars['String']>>>,
  createdAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  updatedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  closedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_IssueOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionCommentArgs = {
  id?: Maybe<Scalars['ID']>,
  body?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  commentId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['String']>,
  htmlUrl?: Maybe<Scalars['String']>,
  commentType?: Maybe<CommentCommentType>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  bodys?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  createdAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  updatedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  commentIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  gitHubIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  paths?: Maybe<Array<Maybe<Scalars['String']>>>,
  positions?: Maybe<Array<Maybe<Scalars['String']>>>,
  htmlUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  commentTypes?: Maybe<Array<Maybe<CommentCommentType>>>,
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionLabelArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  default?: Maybe<Scalars['String']>,
  color?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  defaults?: Maybe<Array<Maybe<Scalars['String']>>>,
  colors?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_LabelOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionRepoArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  allowRebaseMerge?: Maybe<Scalars['Boolean']>,
  allowSquashMerge?: Maybe<Scalars['Boolean']>,
  allowMergeCommit?: Maybe<Scalars['Boolean']>,
  repoId?: Maybe<Scalars['String']>,
  gitHubId?: Maybe<Scalars['String']>,
  defaultBranch?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  owners?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  repoIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  gitHubIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  defaultBranchs?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_RepoOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionCommitArgs = {
  id?: Maybe<Scalars['ID']>,
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  shas?: Maybe<Array<Maybe<Scalars['String']>>>,
  messages?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_CommitOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionPushArgs = {
  id?: Maybe<Scalars['ID']>,
  timestamp?: Maybe<Scalars['String']>,
  branch?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  branchs?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_PushOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionBuildArgs = {
  id?: Maybe<Scalars['ID']>,
  buildId?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<BuildStatus>,
  buildUrl?: Maybe<Scalars['String']>,
  compareUrl?: Maybe<Scalars['String']>,
  trigger?: Maybe<BuildTrigger>,
  provider?: Maybe<Scalars['String']>,
  pullRequestNumber?: Maybe<Scalars['Float']>,
  startedAt?: Maybe<Scalars['String']>,
  finishedAt?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  workflowId?: Maybe<Scalars['String']>,
  jobName?: Maybe<Scalars['String']>,
  jobId?: Maybe<Scalars['String']>,
  data?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  buildIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  numbers?: Maybe<Array<Maybe<Scalars['Int']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  statuss?: Maybe<Array<Maybe<BuildStatus>>>,
  buildUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  compareUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  triggers?: Maybe<Array<Maybe<BuildTrigger>>>,
  providers?: Maybe<Array<Maybe<Scalars['String']>>>,
  pullRequestNumbers?: Maybe<Array<Maybe<Scalars['Float']>>>,
  startedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  finishedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  workflowIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  jobNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  jobIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  datas?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_BuildOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionPipelineArgs = {
  _id?: Maybe<Scalars['Int']>,
  pipelineId?: Maybe<Scalars['ID']>,
  provider?: Maybe<Scalars['String']>,
  Status?: Maybe<PipelineStatus>
};


export type SubscriptionStageArgs = {
  _id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>
};


export type SubscriptionJobArgs = {
  _id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  jobId?: Maybe<Scalars['ID']>
};


export type SubscriptionWorkflowArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  workflowId?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  config?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  workflowIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  providers?: Maybe<Array<Maybe<Scalars['String']>>>,
  configs?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_WorkflowOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionBranchArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  isRemote?: Maybe<Scalars['Boolean']>,
  remoteRepoHtmlUrl?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  remoteRepoHtmlUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_BranchOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionDeletedBranchArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_DeletedBranchOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionChatIdArgs = {
  id?: Maybe<Scalars['ID']>,
  screenName?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  isAtomistBot?: Maybe<Scalars['String']>,
  isOwner?: Maybe<Scalars['String']>,
  isPrimaryOwner?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['String']>,
  isBot?: Maybe<Scalars['String']>,
  timezoneLabel?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  screenNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  userIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  providers?: Maybe<Array<Maybe<Scalars['String']>>>,
  timezoneLabels?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ChatIdOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionChatChannelArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  normalizedName?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  isDefault?: Maybe<Scalars['Boolean']>,
  botInvitedSelf?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  providers?: Maybe<Array<Maybe<Scalars['String']>>>,
  normalizedNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  channelIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ChatChannelOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionPullRequestArgs = {
  id?: Maybe<Scalars['ID']>,
  number?: Maybe<Scalars['Float']>,
  prId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  merged?: Maybe<Scalars['Boolean']>,
  timestamp?: Maybe<Scalars['String']>,
  baseBranchName?: Maybe<Scalars['String']>,
  branchName?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  closedAt?: Maybe<Scalars['String']>,
  mergedAt?: Maybe<Scalars['String']>,
  mergeStatus?: Maybe<MergeStatus>,
  action?: Maybe<PullRequestAction>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  numbers?: Maybe<Array<Maybe<Scalars['Float']>>>,
  prIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  bodys?: Maybe<Array<Maybe<Scalars['String']>>>,
  states?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  baseBranchNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  branchNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  titles?: Maybe<Array<Maybe<Scalars['String']>>>,
  createdAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  updatedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  closedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  mergedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  mergeStatuss?: Maybe<Array<Maybe<MergeStatus>>>,
  actions?: Maybe<Array<Maybe<PullRequestAction>>>,
  orderBy?: Maybe<Array<Maybe<_PullRequestOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionOrgArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  ownerType?: Maybe<OwnerType>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  owners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ownerTypes?: Maybe<Array<Maybe<OwnerType>>>,
  orderBy?: Maybe<Array<Maybe<_OrgOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionScmIdArgs = {
  id?: Maybe<Scalars['ID']>,
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  avatar?: Maybe<Scalars['String']>,
  logins?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  avatars?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ScmIdOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionGitHubIdArgs = {
  id?: Maybe<Scalars['ID']>,
  login?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  logins?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_GitHubIdOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionTagArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  ref?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>,
  refs?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_TagOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionK8PodArgs = {
  name?: Maybe<Scalars['String']>,
  phase?: Maybe<Scalars['String']>,
  environment?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  baseName?: Maybe<Scalars['String']>,
  namespace?: Maybe<Scalars['String']>,
  statusJSON?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  specsJSON?: Maybe<Scalars['String']>,
  envJSON?: Maybe<Scalars['String']>,
  metadataJSON?: Maybe<Scalars['String']>,
  containersCrashLoopBackOff?: Maybe<Scalars['Boolean']>,
  resourceVersion?: Maybe<Scalars['Int']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  phases?: Maybe<Array<Maybe<Scalars['String']>>>,
  environments?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  baseNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  namespaces?: Maybe<Array<Maybe<Scalars['String']>>>,
  statusJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  hosts?: Maybe<Array<Maybe<Scalars['String']>>>,
  states?: Maybe<Array<Maybe<Scalars['String']>>>,
  specsJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  envJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  metadataJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  resourceVersions?: Maybe<Array<Maybe<Scalars['Int']>>>,
  orderBy?: Maybe<Array<Maybe<_K8PodOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionK8ContainerArgs = {
  name?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  environment?: Maybe<Scalars['String']>,
  containerJSON?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  stateReason?: Maybe<Scalars['String']>,
  ready?: Maybe<Scalars['Boolean']>,
  restartCount?: Maybe<Scalars['Int']>,
  statusJSON?: Maybe<Scalars['String']>,
  resourceVersion?: Maybe<Scalars['Int']>,
  containerID?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  imageNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  environments?: Maybe<Array<Maybe<Scalars['String']>>>,
  containerJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  states?: Maybe<Array<Maybe<Scalars['String']>>>,
  stateReasons?: Maybe<Array<Maybe<Scalars['String']>>>,
  restartCounts?: Maybe<Array<Maybe<Scalars['Int']>>>,
  statusJSONs?: Maybe<Array<Maybe<Scalars['String']>>>,
  resourceVersions?: Maybe<Array<Maybe<Scalars['Int']>>>,
  containerIDs?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_K8ContainerOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionDockerImageArgs = {
  image?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Maybe<Scalars['String']>>>,
  imageNames?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_DockerImageOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionImageLinkedArgs = {
  timestamp?: Maybe<Scalars['String']>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ImageLinkedOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionReleaseArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ReleaseOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionHerokuAppArgs = {
  app?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  user?: Maybe<Scalars['String']>,
  appId?: Maybe<Scalars['String']>,
  release?: Maybe<Scalars['String']>,
  apps?: Maybe<Array<Maybe<Scalars['String']>>>,
  urls?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  users?: Maybe<Array<Maybe<Scalars['String']>>>,
  appIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  releases?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_HerokuAppOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionApplicationArgs = {
  id?: Maybe<Scalars['ID']>,
  state?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  domain?: Maybe<Scalars['String']>,
  data?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  states?: Maybe<Array<Maybe<Scalars['String']>>>,
  hosts?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  domains?: Maybe<Array<Maybe<Scalars['String']>>>,
  datas?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ApplicationOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionTeamArgs = {
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  iconUrl?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>,
  iconUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  createdAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_TeamOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionChatTeamArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  tenantId?: Maybe<Scalars['String']>,
  domain?: Maybe<Scalars['String']>,
  messageCount?: Maybe<Scalars['Float']>,
  emailDomain?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  providers?: Maybe<Array<Maybe<Scalars['String']>>>,
  domains?: Maybe<Array<Maybe<Scalars['String']>>>,
  messageCounts?: Maybe<Array<Maybe<Scalars['Float']>>>,
  emailDomains?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ChatTeamOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionPersonArgs = {
  id?: Maybe<Scalars['ID']>,
  forename?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  forenames?: Maybe<Array<Maybe<Scalars['String']>>>,
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_PersonOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionStatusArgs = {
  id?: Maybe<Scalars['ID']>,
  state?: Maybe<StatusState>,
  description?: Maybe<Scalars['String']>,
  targetUrl?: Maybe<Scalars['String']>,
  context?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  states?: Maybe<Array<Maybe<StatusState>>>,
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>,
  targetUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  contexts?: Maybe<Array<Maybe<Scalars['String']>>>,
  timestamps?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_StatusOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionEmailArgs = {
  address?: Maybe<Scalars['String']>,
  addresss?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_EmailOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionFingerprintArgs = {
  name?: Maybe<Scalars['String']>,
  sha?: Maybe<Scalars['String']>,
  data?: Maybe<Scalars['String']>,
  names?: Maybe<Array<Maybe<Scalars['String']>>>,
  shas?: Maybe<Array<Maybe<Scalars['String']>>>,
  datas?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_FingerprintOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionPushImpactArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  data?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  urls?: Maybe<Array<Maybe<Scalars['String']>>>,
  datas?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_PushImpactOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionPullRequestImpactArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  data?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  urls?: Maybe<Array<Maybe<Scalars['String']>>>,
  datas?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_PullRequestImpactOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionResourceProviderArgs = {
  authProviderId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  orderBy?: Maybe<Array<Maybe<_ResourceProviderOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionGitHubProviderArgs = {
  id?: Maybe<Scalars['ID']>,
  private?: Maybe<Scalars['Boolean']>,
  url?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
  apiUrl?: Maybe<Scalars['String']>,
  gitUrl?: Maybe<Scalars['String']>,
  providerType?: Maybe<ProviderType>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  urls?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  apiUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  gitUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerTypes?: Maybe<Array<Maybe<ProviderType>>>,
  orderBy?: Maybe<Array<Maybe<_GitHubProviderOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionScmProviderArgs = {
  authProviderId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  private?: Maybe<Scalars['Boolean']>,
  url?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
  apiUrl?: Maybe<Scalars['String']>,
  gitUrl?: Maybe<Scalars['String']>,
  providerType?: Maybe<ProviderType>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  urls?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  apiUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  gitUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerTypes?: Maybe<Array<Maybe<ProviderType>>>,
  orderBy?: Maybe<Array<Maybe<_ScmProviderOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionDockerRegistryProviderArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionBinaryRepositoryProviderArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  type?: Maybe<BinaryRepositoryType>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionUserJoinedChannelArgs = {
  id?: Maybe<Scalars['ID']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderBy?: Maybe<Array<Maybe<_UserJoinedChannelOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionWebhookArgs = {
  id?: Maybe<Scalars['ID']>,
  resourceProviderId?: Maybe<Scalars['String']>
};


export type SubscriptionChannelLinkArgs = {
  id?: Maybe<Scalars['ID']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  orderBy?: Maybe<Array<Maybe<_ChannelLinkOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionReviewArgs = {
  id?: Maybe<Scalars['ID']>,
  gitHubId?: Maybe<Scalars['String']>,
  reviewId?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  state?: Maybe<ReviewState>,
  submittedAt?: Maybe<Scalars['String']>,
  htmlUrl?: Maybe<Scalars['String']>,
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>,
  gitHubIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  reviewIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  bodys?: Maybe<Array<Maybe<Scalars['String']>>>,
  states?: Maybe<Array<Maybe<ReviewState>>>,
  submittedAts?: Maybe<Array<Maybe<Scalars['String']>>>,
  htmlUrls?: Maybe<Array<Maybe<Scalars['String']>>>,
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionGenericResourceUserArgs = {
  login?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type SubscriptionResourceUserArgs = {
  login?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type SubscriptionSystemAccountArgs = {
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type SubscriptionKubernetesClusterProviderArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  _id?: Maybe<Scalars['Int']>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type SubscriptionCredentialArgs = {
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type SubscriptionOAuthTokenArgs = {
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type SubscriptionPasswordArgs = {
  id?: Maybe<Scalars['ID']>,
  _id?: Maybe<Scalars['Int']>
};


export type SubscriptionHeadCommitsWithFingerprintArgs = {
  name?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>
};


export type SubscriptionCommitIssueRelationshipArgs = {
  type?: Maybe<Array<Maybe<CommitIssueRelationshipType>>>
};


export type SubscriptionDeploymentArgs = {
  environment?: Maybe<Array<Maybe<Scalars['String']>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type SubscriptionIssueRelationshipArgs = {
  relationshipId?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<Scalars['String']>>>,
  type?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type SubscriptionSdmGoalArgs = {
  approvalRequired?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  branch?: Maybe<Array<Maybe<Scalars['String']>>>,
  data?: Maybe<Array<Maybe<Scalars['String']>>>,
  description?: Maybe<Array<Maybe<Scalars['String']>>>,
  environment?: Maybe<Array<Maybe<Scalars['String']>>>,
  error?: Maybe<Array<Maybe<Scalars['String']>>>,
  externalKey?: Maybe<Array<Maybe<Scalars['String']>>>,
  externalUrl?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSet?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSetId?: Maybe<Array<Maybe<Scalars['String']>>>,
  name?: Maybe<Array<Maybe<Scalars['String']>>>,
  phase?: Maybe<Array<Maybe<Scalars['String']>>>,
  preApprovalRequired?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  retryFeasible?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  signature?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<SdmGoalState>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>,
  uniqueName?: Maybe<Array<Maybe<Scalars['String']>>>,
  url?: Maybe<Array<Maybe<Scalars['String']>>>,
  version?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type SubscriptionSdmGoalSetArgs = {
  branch?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSet?: Maybe<Array<Maybe<Scalars['String']>>>,
  goalSetId?: Maybe<Array<Maybe<Scalars['String']>>>,
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<SdmGoalState>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type SubscriptionSdmGoalDisplayArgs = {
  branch?: Maybe<Array<Maybe<Scalars['String']>>>,
  format?: Maybe<Array<Maybe<SdmGoalDisplayFormat>>>,
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<SdmGoalDisplayState>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type SubscriptionSdmBuildIdentifierArgs = {
  identifier?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type SubscriptionSdmDeployEnablementArgs = {
  owner?: Maybe<Array<Maybe<Scalars['String']>>>,
  providerId?: Maybe<Array<Maybe<Scalars['String']>>>,
  repo?: Maybe<Array<Maybe<Scalars['String']>>>,
  state?: Maybe<Array<Maybe<SdmDeployState>>>
};


export type SubscriptionSdmVersionArgs = {
  branch?: Maybe<Array<Maybe<Scalars['String']>>>,
  sha?: Maybe<Array<Maybe<Scalars['String']>>>,
  version?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type SubscriptionSdmGoalSetBadgeArgs = {
  sdm?: Maybe<Array<Maybe<Scalars['String']>>>,
  token?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type SubscriptionSdmPreferenceArgs = {
  key?: Maybe<Array<Maybe<Scalars['String']>>>,
  ttl?: Maybe<Array<Maybe<Scalars['Int']>>>,
  value?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type SubscriptionCardArgs = {
  key?: Maybe<Array<Maybe<Scalars['String']>>>,
  post?: Maybe<Array<Maybe<Scalars['String']>>>,
  shortTitle?: Maybe<Array<Maybe<Scalars['String']>>>,
  ts?: Maybe<Array<Maybe<Scalars['Int']>>>,
  ttl?: Maybe<Array<Maybe<Scalars['Int']>>>,
  type?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type SubscriptionNotificationArgs = {
  body?: Maybe<Scalars['String']>,
  contentType?: Maybe<Scalars['String']>,
  key?: Maybe<Scalars['String']>,
  post?: Maybe<Array<Maybe<Scalars['String']>>>,
  ts?: Maybe<Scalars['Int']>,
  ttl?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type SubscriptionAtomistLogArgs = {
  timestamp?: Maybe<Array<Maybe<Scalars['Int']>>>,
  team_id?: Maybe<Array<Maybe<Scalars['String']>>>,
  level?: Maybe<Array<Maybe<Scalars['String']>>>,
  message?: Maybe<Array<Maybe<Scalars['String']>>>,
  category?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type SubscriptionJiraIssueArgs = {
  issue_event_type_name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  webhookEvent?: Maybe<Scalars['String']>
};

export type SystemAccount = ResourceUser & {
   __typename?: 'SystemAccount',
  id: Scalars['ID'],
  _id?: Maybe<Scalars['Int']>,
  credential?: Maybe<Credential>,
  provider: ResourceProvider,
  login: Scalars['String'],
  createdBy?: Maybe<Person>,
};

/** Tag-Node */
export type Tag = {
   __typename?: 'Tag',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** the URL of the Tag */
  url?: Maybe<Scalars['String']>,
  /** id of  Tag */
  id?: Maybe<Scalars['ID']>,
  /** name of  Tag */
  name?: Maybe<Scalars['String']>,
  /** description of  Tag */
  description?: Maybe<Scalars['String']>,
  /** ref of  Tag */
  ref?: Maybe<Scalars['String']>,
  /** timestamp of  Tag */
  timestamp?: Maybe<Scalars['String']>,
  /** Tag release Release */
  release?: Maybe<Release>,
  /** Tag commit Commit */
  commit?: Maybe<Commit>,
  /** Tag containers DockerImage */
  containers?: Maybe<Array<Maybe<DockerImage>>>,
  /** Tag builds Build */
  builds?: Maybe<Array<Maybe<Build>>>,
};


/** Tag-Node */
export type TagReleaseArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Tag-Node */
export type TagCommitArgs = {
  sha?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Tag-Node */
export type TagContainersArgs = {
  image?: Maybe<Scalars['String']>,
  imageName?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_DockerImageOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  timestamp?: Maybe<Scalars['String']>
};


/** Tag-Node */
export type TagBuildsArgs = {
  id?: Maybe<Scalars['ID']>,
  buildId?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<BuildStatus>,
  buildUrl?: Maybe<Scalars['String']>,
  compareUrl?: Maybe<Scalars['String']>,
  trigger?: Maybe<BuildTrigger>,
  provider?: Maybe<Scalars['String']>,
  pullRequestNumber?: Maybe<Scalars['Float']>,
  startedAt?: Maybe<Scalars['String']>,
  finishedAt?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  workflowId?: Maybe<Scalars['String']>,
  jobName?: Maybe<Scalars['String']>,
  jobId?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_BuildOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  data?: Maybe<Scalars['String']>
};

export type TagInput = {
  name: Scalars['String'],
  value: Scalars['String'],
};

/** Team-Node */
export type Team = {
   __typename?: 'Team',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** the URL of the Team */
  url?: Maybe<Scalars['String']>,
  /** id of  Team */
  id?: Maybe<Scalars['String']>,
  /** name of  Team */
  name?: Maybe<Scalars['String']>,
  /** description of  Team */
  description?: Maybe<Scalars['String']>,
  /** iconUrl of  Team */
  iconUrl?: Maybe<Scalars['String']>,
  /** createdAt of  Team */
  createdAt?: Maybe<Scalars['String']>,
  /** Team persons Person */
  persons?: Maybe<Array<Maybe<Person>>>,
  /** Team orgs Org */
  orgs?: Maybe<Array<Maybe<Org>>>,
  /** Team providers GitHubProvider */
  providers?: Maybe<Array<Maybe<GitHubProvider>>>,
  /** Team scmProviders SCMProvider */
  scmProviders?: Maybe<Array<Maybe<ScmProvider>>>,
  /** Team chatTeams ChatTeam */
  chatTeams?: Maybe<Array<Maybe<ChatTeam>>>,
  configuration?: Maybe<Array<Maybe<TeamConfiguration>>>,
};


/** Team-Node */
export type TeamPersonsArgs = {
  id?: Maybe<Scalars['ID']>,
  forename?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_PersonOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>
};


/** Team-Node */
export type TeamOrgsArgs = {
  id?: Maybe<Scalars['ID']>,
  owner?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_OrgOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  ownerType?: Maybe<OwnerType>
};


/** Team-Node */
export type TeamProvidersArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
  apiUrl?: Maybe<Scalars['String']>,
  gitUrl?: Maybe<Scalars['String']>,
  providerType?: Maybe<ProviderType>
};


/** Team-Node */
export type TeamScmProvidersArgs = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['String']>,
  apiUrl?: Maybe<Scalars['String']>,
  gitUrl?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_ScmProviderOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  providerType?: Maybe<ProviderType>
};


/** Team-Node */
export type TeamChatTeamsArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  tenantId?: Maybe<Scalars['String']>,
  domain?: Maybe<Scalars['String']>,
  messageCount?: Maybe<Scalars['Float']>,
  orderBy?: Maybe<Array<Maybe<_ChatTeamOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  emailDomain?: Maybe<Scalars['String']>
};


/** Team-Node */
export type TeamConfigurationArgs = {
  namespace?: Maybe<Scalars['String']>
};

export type TeamConfiguration = {
   __typename?: 'TeamConfiguration',
  namespace: Scalars['String'],
  name: Scalars['String'],
  value: Scalars['String'],
  ttlSecs?: Maybe<Scalars['Int']>,
  createdAt: Scalars['String'],
  team: Team,
};

/** A team's preferences as key/value pairs */
export type TeamPreference = {
   __typename?: 'TeamPreference',
  /** The name of the preference */
  name?: Maybe<Scalars['String']>,
  /** The value of the preference */
  value?: Maybe<Scalars['String']>,
};

/** UserJoinedChannel-Node */
export type UserJoinedChannel = {
   __typename?: 'UserJoinedChannel',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  UserJoinedChannel */
  id?: Maybe<Scalars['ID']>,
  /** UserJoinedChannel user ChatId */
  user?: Maybe<ChatId>,
  /** UserJoinedChannel channel ChatChannel */
  channel?: Maybe<ChatChannel>,
};


/** UserJoinedChannel-Node */
export type UserJoinedChannelUserArgs = {
  id?: Maybe<Scalars['ID']>,
  screenName?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  isAtomistBot?: Maybe<Scalars['String']>,
  isOwner?: Maybe<Scalars['String']>,
  isPrimaryOwner?: Maybe<Scalars['String']>,
  isAdmin?: Maybe<Scalars['String']>,
  isBot?: Maybe<Scalars['String']>,
  timezoneLabel?: Maybe<Scalars['String']>
};


/** UserJoinedChannel-Node */
export type UserJoinedChannelChannelArgs = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  normalizedName?: Maybe<Scalars['String']>,
  channelId?: Maybe<Scalars['String']>,
  isDefault?: Maybe<Scalars['Boolean']>,
  botInvitedSelf?: Maybe<Scalars['Boolean']>,
  archived?: Maybe<Scalars['Boolean']>
};

/** A user's preferences as key/value pairs */
export type UserPreference = {
   __typename?: 'UserPreference',
  /** The name of the preference */
  name?: Maybe<Scalars['String']>,
  /** The value of the preference */
  value?: Maybe<Scalars['String']>,
};

/** Webhook-Node */
export type Webhook = {
   __typename?: 'Webhook',
  /** just a name */
  name: Scalars['String'],
  /** id of  Webhook */
  id: Scalars['ID'],
  /** url of  Webhook */
  url: Scalars['String'],
  /** type of validation */
  authType: WebhookAuthType,
  provider: ResourceProvider,
  tags?: Maybe<Array<Maybe<AtomistKeyValuePair>>>,
  state: WebhookState,
};

export enum WebhookAuthType {
  HmacSha1 = 'hmac_sha1',
  None = 'none'
}

export type WebhookInput = {
  name: Scalars['String'],
  resourceProviderId: Scalars['String'],
  authType: WebhookAuthType,
  hmacSha1?: Maybe<HmacSha1AuthInput>,
  tags?: Maybe<Array<Maybe<TagInput>>>,
  state?: Maybe<WebhookState>,
};

export enum WebhookState {
  Enabled = 'enabled',
  Disabled = 'disabled'
}

/** Workflow-Node */
export type Workflow = {
   __typename?: 'Workflow',
  /** internal node id */
  _id?: Maybe<Scalars['Int']>,
  /** id of  Workflow */
  id?: Maybe<Scalars['ID']>,
  /** name of  Workflow */
  name?: Maybe<Scalars['String']>,
  /** workflowId of  Workflow */
  workflowId?: Maybe<Scalars['String']>,
  /** provider of  Workflow */
  provider?: Maybe<Scalars['String']>,
  /** config of  Workflow */
  config?: Maybe<Scalars['String']>,
  /** Workflow builds Build */
  builds?: Maybe<Array<Maybe<Build>>>,
};


/** Workflow-Node */
export type WorkflowBuildsArgs = {
  id?: Maybe<Scalars['ID']>,
  buildId?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  status?: Maybe<BuildStatus>,
  buildUrl?: Maybe<Scalars['String']>,
  compareUrl?: Maybe<Scalars['String']>,
  trigger?: Maybe<BuildTrigger>,
  provider?: Maybe<Scalars['String']>,
  pullRequestNumber?: Maybe<Scalars['Float']>,
  startedAt?: Maybe<Scalars['String']>,
  finishedAt?: Maybe<Scalars['String']>,
  timestamp?: Maybe<Scalars['String']>,
  workflowId?: Maybe<Scalars['String']>,
  jobName?: Maybe<Scalars['String']>,
  jobId?: Maybe<Scalars['String']>,
  orderBy?: Maybe<Array<Maybe<_BuildOrdering>>>,
  first?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  data?: Maybe<Scalars['String']>
};
export type GetBuildDataQueryVariables = {};


export type GetBuildDataQuery = (
  { __typename?: 'Query' }
  & { Build: Maybe<Array<Maybe<(
    { __typename?: 'Build' }
    & Pick<Build, 'id' | 'timestamp' | 'finishedAt' | 'startedAt' | 'status'>
    & { push: Maybe<(
      { __typename?: 'Push' }
      & { after: Maybe<(
        { __typename?: 'Commit' }
        & Pick<Commit, 'sha'>
      )> }
    )>, repo: Maybe<(
      { __typename?: 'Repo' }
      & Pick<Repo, 'name' | 'owner'>
    )> }
  )>>> }
);

export const GetBuildDataDocument = gql`
    query GetBuildData {
  Build(orderBy: [timestamp_desc], first: 1000) {
    id
    timestamp
    finishedAt
    startedAt
    status
    push {
      after {
        sha
      }
    }
    repo {
      name
      owner
    }
  }
}
    `;
export type GetBuildDataComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBuildDataQuery, GetBuildDataQueryVariables>, 'query'>;

    export const GetBuildDataComponent = (props: GetBuildDataComponentProps) => (
      <ApolloReactComponents.Query<GetBuildDataQuery, GetBuildDataQueryVariables> query={GetBuildDataDocument} {...props} />
    );
    
export type GetBuildDataProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetBuildDataQuery, GetBuildDataQueryVariables> & TChildProps;
export function withGetBuildData<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBuildDataQuery,
  GetBuildDataQueryVariables,
  GetBuildDataProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetBuildDataQuery, GetBuildDataQueryVariables, GetBuildDataProps<TChildProps>>(GetBuildDataDocument, {
      alias: 'getBuildData',
      ...operationOptions
    });
};
export type GetBuildDataQueryResult = ApolloReactCommon.QueryResult<GetBuildDataQuery, GetBuildDataQueryVariables>;