/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query GetMissionById($id: ID!) {\n    mission(id: $id) {\n      id\n      description\n      manufacturers\n      name\n      payloads {\n        customers\n        nationality\n        orbit\n        payload_mass_kg\n        payload_mass_lbs\n        payload_type\n        id\n      }\n      twitter\n      website\n      wikipedia\n    }\n  }\n": types.GetMissionByIdDocument,
    "\n  query GetMissionsIds {\n     missions {\n      id\n    }\n  }\n": types.GetMissionsIdsDocument,
    "\n  query GetMissionsOverview {\n    missions {\n      id\n      name\n      description\n    }\n  }\n": types.GetMissionsOverviewDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMissionById($id: ID!) {\n    mission(id: $id) {\n      id\n      description\n      manufacturers\n      name\n      payloads {\n        customers\n        nationality\n        orbit\n        payload_mass_kg\n        payload_mass_lbs\n        payload_type\n        id\n      }\n      twitter\n      website\n      wikipedia\n    }\n  }\n"): (typeof documents)["\n  query GetMissionById($id: ID!) {\n    mission(id: $id) {\n      id\n      description\n      manufacturers\n      name\n      payloads {\n        customers\n        nationality\n        orbit\n        payload_mass_kg\n        payload_mass_lbs\n        payload_type\n        id\n      }\n      twitter\n      website\n      wikipedia\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMissionsIds {\n     missions {\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetMissionsIds {\n     missions {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMissionsOverview {\n    missions {\n      id\n      name\n      description\n    }\n  }\n"): (typeof documents)["\n  query GetMissionsOverview {\n    missions {\n      id\n      name\n      description\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;