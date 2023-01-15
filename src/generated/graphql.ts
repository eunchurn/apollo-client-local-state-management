/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Data = {
  __typename?: 'Data';
  category?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  fundedDate?: Maybe<Scalars['String']>;
  numEmps?: Maybe<Scalars['String']>;
  permalink?: Maybe<Scalars['String']>;
  raisedAmt?: Maybe<Scalars['String']>;
  raisedCurrency?: Maybe<Scalars['String']>;
  round?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export enum Field {
  Category = 'category',
  City = 'city',
  Company = 'company',
  FundedDate = 'fundedDate',
  NumEmps = 'numEmps',
  Permalink = 'permalink',
  RaisedAmt = 'raisedAmt',
  RaisedCurrency = 'raisedCurrency',
  Round = 'round',
  State = 'state'
}

export type Query = {
  __typename?: 'Query';
  getAllData?: Maybe<Array<Maybe<Data>>>;
  getDataByField?: Maybe<Array<Maybe<Data>>>;
};


export type QueryGetDataByFieldArgs = {
  field?: InputMaybe<Field>;
  value?: InputMaybe<Scalars['String']>;
};

export type GetAllDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllDataQuery = { __typename?: 'Query', getAllData?: Array<{ __typename?: 'Data', permalink?: string | null, company?: string | null, numEmps?: string | null, category?: string | null, city?: string | null, state?: string | null, fundedDate?: string | null, raisedAmt?: string | null, raisedCurrency?: string | null, round?: string | null } | null> | null };

export type GetDataByFieldQueryVariables = Exact<{
  field?: InputMaybe<Field>;
  value?: InputMaybe<Scalars['String']>;
}>;


export type GetDataByFieldQuery = { __typename?: 'Query', getDataByField?: Array<{ __typename?: 'Data', permalink?: string | null, company?: string | null, numEmps?: string | null, category?: string | null, city?: string | null, state?: string | null, fundedDate?: string | null, raisedAmt?: string | null, raisedCurrency?: string | null, round?: string | null } | null> | null };


export const GetAllDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllData"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permalink"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"numEmps"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"fundedDate"}},{"kind":"Field","name":{"kind":"Name","value":"raisedAmt"}},{"kind":"Field","name":{"kind":"Name","value":"raisedCurrency"}},{"kind":"Field","name":{"kind":"Name","value":"round"}}]}}]}}]} as unknown as DocumentNode<GetAllDataQuery, GetAllDataQueryVariables>;
export const GetDataByFieldDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDataByField"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"field"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Field"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDataByField"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"field"},"value":{"kind":"Variable","name":{"kind":"Name","value":"field"}}},{"kind":"Argument","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permalink"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"numEmps"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"fundedDate"}},{"kind":"Field","name":{"kind":"Name","value":"raisedAmt"}},{"kind":"Field","name":{"kind":"Name","value":"raisedCurrency"}},{"kind":"Field","name":{"kind":"Name","value":"round"}}]}}]}}]} as unknown as DocumentNode<GetDataByFieldQuery, GetDataByFieldQueryVariables>;