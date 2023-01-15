import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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


export const GetAllDataDocument = gql`
    query getAllData {
  getAllData @client {
    permalink
    company
    numEmps
    category
    city
    state
    fundedDate
    raisedAmt
    raisedCurrency
    round
  }
}
    `;

/**
 * __useGetAllDataQuery__
 *
 * To run a query within a React component, call `useGetAllDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDataQuery(baseOptions?: Apollo.QueryHookOptions<GetAllDataQuery, GetAllDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDataQuery, GetAllDataQueryVariables>(GetAllDataDocument, options);
      }
export function useGetAllDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDataQuery, GetAllDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDataQuery, GetAllDataQueryVariables>(GetAllDataDocument, options);
        }
export type GetAllDataQueryHookResult = ReturnType<typeof useGetAllDataQuery>;
export type GetAllDataLazyQueryHookResult = ReturnType<typeof useGetAllDataLazyQuery>;
export type GetAllDataQueryResult = Apollo.QueryResult<GetAllDataQuery, GetAllDataQueryVariables>;
export const GetDataByFieldDocument = gql`
    query getDataByField($field: Field, $value: String) {
  getDataByField(field: $field, value: $value) @client {
    permalink
    company
    numEmps
    category
    city
    state
    fundedDate
    raisedAmt
    raisedCurrency
    round
  }
}
    `;

/**
 * __useGetDataByFieldQuery__
 *
 * To run a query within a React component, call `useGetDataByFieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataByFieldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataByFieldQuery({
 *   variables: {
 *      field: // value for 'field'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useGetDataByFieldQuery(baseOptions?: Apollo.QueryHookOptions<GetDataByFieldQuery, GetDataByFieldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDataByFieldQuery, GetDataByFieldQueryVariables>(GetDataByFieldDocument, options);
      }
export function useGetDataByFieldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDataByFieldQuery, GetDataByFieldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDataByFieldQuery, GetDataByFieldQueryVariables>(GetDataByFieldDocument, options);
        }
export type GetDataByFieldQueryHookResult = ReturnType<typeof useGetDataByFieldQuery>;
export type GetDataByFieldLazyQueryHookResult = ReturnType<typeof useGetDataByFieldLazyQuery>;
export type GetDataByFieldQueryResult = Apollo.QueryResult<GetDataByFieldQuery, GetDataByFieldQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Data: ResolverTypeWrapper<Data>;
  Field: Field;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Data: Data;
  Query: {};
  String: Scalars['String'];
};

export type DataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Data'] = ResolversParentTypes['Data']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fundedDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numEmps?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permalink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  raisedAmt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  raisedCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  round?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllData?: Resolver<Maybe<Array<Maybe<ResolversTypes['Data']>>>, ParentType, ContextType>;
  getDataByField?: Resolver<Maybe<Array<Maybe<ResolversTypes['Data']>>>, ParentType, ContextType, Partial<QueryGetDataByFieldArgs>>;
};

export type Resolvers<ContextType = any> = {
  Data?: DataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

