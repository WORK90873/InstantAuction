import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Auction = {
  __typename?: 'Auction';
  bids: Array<Bid>;
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  item: Item;
  seller: User;
  status: Scalars['String'];
  title: Scalars['String'];
  winner: User;
};

export type AuctionsResponse = {
  __typename?: 'AuctionsResponse';
  auctions: Array<Auction>;
  count: Scalars['Int'];
};

export type Bid = {
  __typename?: 'Bid';
  auction: Auction;
  bidder: User;
  id: Scalars['Int'];
  item: Item;
  won: Scalars['Boolean'];
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['Int'];
  name: Scalars['String'];
  owner: User;
  picture: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  closeAuction: Auction;
  createAuction: Auction;
  createBid: Bid;
  createItem: Item;
  createItemWithPictureUrl: Item;
  deleteAccount: Scalars['Boolean'];
  deleteAuction: Scalars['Boolean'];
  deleteItem: Scalars['Boolean'];
  discordOAuth: OAuthResponse;
  endAuction: Auction;
  googleOAuth: OAuthResponse;
  logout: Scalars['Boolean'];
  modifyItem: Item;
  updateCredentials: User;
};


export type MutationCloseAuctionArgs = {
  auctionId: Scalars['Int'];
};


export type MutationCreateAuctionArgs = {
  description: Scalars['String'];
  itemId: Scalars['Int'];
  title: Scalars['String'];
};


export type MutationCreateBidArgs = {
  auctionId: Scalars['Int'];
  itemId: Scalars['Int'];
};


export type MutationCreateItemArgs = {
  name: Scalars['String'];
  picture: Scalars['Upload'];
};


export type MutationCreateItemWithPictureUrlArgs = {
  name: Scalars['String'];
  pictureUrl: Scalars['String'];
};


export type MutationDeleteAccountArgs = {
  email: Scalars['String'];
};


export type MutationDeleteAuctionArgs = {
  auctionId: Scalars['Int'];
};


export type MutationDeleteItemArgs = {
  itemId: Scalars['Int'];
};


export type MutationDiscordOAuthArgs = {
  code: Scalars['String'];
};


export type MutationEndAuctionArgs = {
  auctionId: Scalars['Int'];
  winningBidId: Scalars['Int'];
};


export type MutationGoogleOAuthArgs = {
  code: Scalars['String'];
};


export type MutationModifyItemArgs = {
  itemId: Scalars['Int'];
  newName?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['Upload']>;
};


export type MutationUpdateCredentialsArgs = {
  username?: Maybe<Scalars['String']>;
};

export type OAuthResponse = {
  __typename?: 'OAuthResponse';
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  allAuctions: AuctionsResponse;
  getUserItems: UserItemsResponse;
  hello: Scalars['String'];
  me?: Maybe<User>;
  testUpload: Scalars['Boolean'];
  users: Array<User>;
};


export type QueryGetUserItemsArgs = {
  excludeAuctionedOff: Scalars['Boolean'];
};


export type QueryTestUploadArgs = {
  file: Scalars['Upload'];
};

export type User = {
  __typename?: 'User';
  auctionsOwned: Array<Auction>;
  auctionsWon: Array<Auction>;
  avatarUrl: Scalars['String'];
  bids: Array<Bid>;
  email: Scalars['String'];
  id: Scalars['Int'];
  itemsOwned: Array<Item>;
  provider?: Maybe<Scalars['String']>;
  reputation: Scalars['Int'];
  username: Scalars['String'];
};

export type UserItemsResponse = {
  __typename?: 'UserItemsResponse';
  count: Scalars['Int'];
  items: Array<Item>;
};

export type AllAuctionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAuctionsQuery = { __typename?: 'Query', allAuctions: { __typename?: 'AuctionsResponse', count: number, auctions: Array<{ __typename?: 'Auction', id: number, title: string, description: string, status: string, dateCreated: any, dateUpdated: any, seller: { __typename?: 'User', username: string }, item: { __typename?: 'Item', id: number, picture: string, name: string } }> } };

export type CloseAuctionMutationVariables = Exact<{
  auctionId: Scalars['Int'];
}>;


export type CloseAuctionMutation = { __typename?: 'Mutation', closeAuction: { __typename?: 'Auction', id: number, title: string, description: string, status: string, dateCreated: any, dateUpdated: any, seller: { __typename?: 'User', username: string }, item: { __typename?: 'Item', id: number, picture: string, name: string } } };

export type CreateAuctionMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  itemId: Scalars['Int'];
}>;


export type CreateAuctionMutation = { __typename?: 'Mutation', createAuction: { __typename?: 'Auction', id: number, title: string, description: string, status: string, dateCreated: any, dateUpdated: any, seller: { __typename?: 'User', username: string }, item: { __typename?: 'Item', id: number, picture: string, name: string } } };

export type DeleteAuctionMutationVariables = Exact<{
  auctionId: Scalars['Int'];
}>;


export type DeleteAuctionMutation = { __typename?: 'Mutation', deleteAuction: boolean };

export type EndAuctionMutationVariables = Exact<{
  auctionId: Scalars['Int'];
  winningBidId: Scalars['Int'];
}>;


export type EndAuctionMutation = { __typename?: 'Mutation', endAuction: { __typename?: 'Auction', id: number, title: string, description: string, status: string, dateCreated: any, dateUpdated: any, seller: { __typename?: 'User', username: string }, item: { __typename?: 'Item', id: number, picture: string, name: string } } };

export type CreateBidMutationVariables = Exact<{
  itemId: Scalars['Int'];
  auctionId: Scalars['Int'];
}>;


export type CreateBidMutation = { __typename?: 'Mutation', createBid: { __typename?: 'Bid', id: number, won: boolean, bidder: { __typename?: 'User', username: string }, item: { __typename?: 'Item', id: number, picture: string, name: string } } };

export type CreateItemMutationVariables = Exact<{
  name: Scalars['String'];
  picture: Scalars['Upload'];
}>;


export type CreateItemMutation = { __typename?: 'Mutation', createItem: { __typename?: 'Item', id: number, picture: string, name: string } };

export type CreateItemWithPictureUrlMutationVariables = Exact<{
  pictureUrl: Scalars['String'];
  name: Scalars['String'];
}>;


export type CreateItemWithPictureUrlMutation = { __typename?: 'Mutation', createItemWithPictureUrl: { __typename?: 'Item', id: number, picture: string, name: string } };

export type DeleteItemMutationVariables = Exact<{
  itemId: Scalars['Int'];
}>;


export type DeleteItemMutation = { __typename?: 'Mutation', deleteItem: boolean };

export type GetUserItemsQueryVariables = Exact<{
  excludeAuctionedOff: Scalars['Boolean'];
}>;


export type GetUserItemsQuery = { __typename?: 'Query', getUserItems: { __typename?: 'UserItemsResponse', count: number, items: Array<{ __typename?: 'Item', id: number, picture: string, name: string }> } };

export type ModifyItemMutationVariables = Exact<{
  itemId: Scalars['Int'];
  newName?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['Upload']>;
}>;


export type ModifyItemMutation = { __typename?: 'Mutation', modifyItem: { __typename?: 'Item', id: number, picture: string, name: string } };

export type TestUploadQueryVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type TestUploadQuery = { __typename?: 'Query', testUpload: boolean };

export type DiscordOAuthMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type DiscordOAuthMutation = { __typename?: 'Mutation', discordOAuth: { __typename?: 'OAuthResponse', user?: { __typename?: 'User', id: number, email: string, username: string, provider?: string | null | undefined, avatarUrl: string, reputation: number } | null | undefined } };

export type GoogleOAuthMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type GoogleOAuthMutation = { __typename?: 'Mutation', googleOAuth: { __typename?: 'OAuthResponse', user?: { __typename?: 'User', id: number, email: string, username: string, provider?: string | null | undefined, avatarUrl: string, reputation: number } | null | undefined } };

export type DeleteAccountMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type DeleteAccountMutation = { __typename?: 'Mutation', deleteAccount: boolean };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, email: string, username: string, provider?: string | null | undefined, avatarUrl: string, reputation: number } | null | undefined };

export type UpdateCredentialsMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type UpdateCredentialsMutation = { __typename?: 'Mutation', updateCredentials: { __typename?: 'User', id: number, email: string, username: string, provider?: string | null | undefined, avatarUrl: string, reputation: number } };


export const AllAuctionsDocument = gql`
    query AllAuctions {
  allAuctions {
    count
    auctions {
      id
      title
      description
      seller {
        username
      }
      status
      dateCreated
      dateUpdated
      item {
        id
        picture
        name
      }
    }
  }
}
    `;

/**
 * __useAllAuctionsQuery__
 *
 * To run a query within a React component, call `useAllAuctionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAuctionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAuctionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAuctionsQuery(baseOptions?: Apollo.QueryHookOptions<AllAuctionsQuery, AllAuctionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllAuctionsQuery, AllAuctionsQueryVariables>(AllAuctionsDocument, options);
      }
export function useAllAuctionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAuctionsQuery, AllAuctionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllAuctionsQuery, AllAuctionsQueryVariables>(AllAuctionsDocument, options);
        }
export type AllAuctionsQueryHookResult = ReturnType<typeof useAllAuctionsQuery>;
export type AllAuctionsLazyQueryHookResult = ReturnType<typeof useAllAuctionsLazyQuery>;
export type AllAuctionsQueryResult = Apollo.QueryResult<AllAuctionsQuery, AllAuctionsQueryVariables>;
export const CloseAuctionDocument = gql`
    mutation CloseAuction($auctionId: Int!) {
  closeAuction(auctionId: $auctionId) {
    id
    title
    description
    seller {
      username
    }
    status
    dateCreated
    dateUpdated
    item {
      id
      picture
      name
    }
  }
}
    `;
export type CloseAuctionMutationFn = Apollo.MutationFunction<CloseAuctionMutation, CloseAuctionMutationVariables>;

/**
 * __useCloseAuctionMutation__
 *
 * To run a mutation, you first call `useCloseAuctionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCloseAuctionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [closeAuctionMutation, { data, loading, error }] = useCloseAuctionMutation({
 *   variables: {
 *      auctionId: // value for 'auctionId'
 *   },
 * });
 */
export function useCloseAuctionMutation(baseOptions?: Apollo.MutationHookOptions<CloseAuctionMutation, CloseAuctionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CloseAuctionMutation, CloseAuctionMutationVariables>(CloseAuctionDocument, options);
      }
export type CloseAuctionMutationHookResult = ReturnType<typeof useCloseAuctionMutation>;
export type CloseAuctionMutationResult = Apollo.MutationResult<CloseAuctionMutation>;
export type CloseAuctionMutationOptions = Apollo.BaseMutationOptions<CloseAuctionMutation, CloseAuctionMutationVariables>;
export const CreateAuctionDocument = gql`
    mutation CreateAuction($title: String!, $description: String!, $itemId: Int!) {
  createAuction(title: $title, description: $description, itemId: $itemId) {
    id
    title
    description
    seller {
      username
    }
    status
    dateCreated
    dateUpdated
    item {
      id
      picture
      name
    }
  }
}
    `;
export type CreateAuctionMutationFn = Apollo.MutationFunction<CreateAuctionMutation, CreateAuctionMutationVariables>;

/**
 * __useCreateAuctionMutation__
 *
 * To run a mutation, you first call `useCreateAuctionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuctionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuctionMutation, { data, loading, error }] = useCreateAuctionMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useCreateAuctionMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuctionMutation, CreateAuctionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuctionMutation, CreateAuctionMutationVariables>(CreateAuctionDocument, options);
      }
export type CreateAuctionMutationHookResult = ReturnType<typeof useCreateAuctionMutation>;
export type CreateAuctionMutationResult = Apollo.MutationResult<CreateAuctionMutation>;
export type CreateAuctionMutationOptions = Apollo.BaseMutationOptions<CreateAuctionMutation, CreateAuctionMutationVariables>;
export const DeleteAuctionDocument = gql`
    mutation DeleteAuction($auctionId: Int!) {
  deleteAuction(auctionId: $auctionId)
}
    `;
export type DeleteAuctionMutationFn = Apollo.MutationFunction<DeleteAuctionMutation, DeleteAuctionMutationVariables>;

/**
 * __useDeleteAuctionMutation__
 *
 * To run a mutation, you first call `useDeleteAuctionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAuctionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAuctionMutation, { data, loading, error }] = useDeleteAuctionMutation({
 *   variables: {
 *      auctionId: // value for 'auctionId'
 *   },
 * });
 */
export function useDeleteAuctionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAuctionMutation, DeleteAuctionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAuctionMutation, DeleteAuctionMutationVariables>(DeleteAuctionDocument, options);
      }
export type DeleteAuctionMutationHookResult = ReturnType<typeof useDeleteAuctionMutation>;
export type DeleteAuctionMutationResult = Apollo.MutationResult<DeleteAuctionMutation>;
export type DeleteAuctionMutationOptions = Apollo.BaseMutationOptions<DeleteAuctionMutation, DeleteAuctionMutationVariables>;
export const EndAuctionDocument = gql`
    mutation EndAuction($auctionId: Int!, $winningBidId: Int!) {
  endAuction(auctionId: $auctionId, winningBidId: $winningBidId) {
    id
    title
    description
    seller {
      username
    }
    status
    dateCreated
    dateUpdated
    item {
      id
      picture
      name
    }
  }
}
    `;
export type EndAuctionMutationFn = Apollo.MutationFunction<EndAuctionMutation, EndAuctionMutationVariables>;

/**
 * __useEndAuctionMutation__
 *
 * To run a mutation, you first call `useEndAuctionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndAuctionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endAuctionMutation, { data, loading, error }] = useEndAuctionMutation({
 *   variables: {
 *      auctionId: // value for 'auctionId'
 *      winningBidId: // value for 'winningBidId'
 *   },
 * });
 */
export function useEndAuctionMutation(baseOptions?: Apollo.MutationHookOptions<EndAuctionMutation, EndAuctionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EndAuctionMutation, EndAuctionMutationVariables>(EndAuctionDocument, options);
      }
export type EndAuctionMutationHookResult = ReturnType<typeof useEndAuctionMutation>;
export type EndAuctionMutationResult = Apollo.MutationResult<EndAuctionMutation>;
export type EndAuctionMutationOptions = Apollo.BaseMutationOptions<EndAuctionMutation, EndAuctionMutationVariables>;
export const CreateBidDocument = gql`
    mutation CreateBid($itemId: Int!, $auctionId: Int!) {
  createBid(itemId: $itemId, auctionId: $auctionId) {
    id
    bidder {
      username
    }
    item {
      id
      picture
      name
    }
    won
  }
}
    `;
export type CreateBidMutationFn = Apollo.MutationFunction<CreateBidMutation, CreateBidMutationVariables>;

/**
 * __useCreateBidMutation__
 *
 * To run a mutation, you first call `useCreateBidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBidMutation, { data, loading, error }] = useCreateBidMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      auctionId: // value for 'auctionId'
 *   },
 * });
 */
export function useCreateBidMutation(baseOptions?: Apollo.MutationHookOptions<CreateBidMutation, CreateBidMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBidMutation, CreateBidMutationVariables>(CreateBidDocument, options);
      }
export type CreateBidMutationHookResult = ReturnType<typeof useCreateBidMutation>;
export type CreateBidMutationResult = Apollo.MutationResult<CreateBidMutation>;
export type CreateBidMutationOptions = Apollo.BaseMutationOptions<CreateBidMutation, CreateBidMutationVariables>;
export const CreateItemDocument = gql`
    mutation CreateItem($name: String!, $picture: Upload!) {
  createItem(name: $name, picture: $picture) {
    id
    picture
    name
  }
}
    `;
export type CreateItemMutationFn = Apollo.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      name: // value for 'name'
 *      picture: // value for 'picture'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, options);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const CreateItemWithPictureUrlDocument = gql`
    mutation CreateItemWithPictureUrl($pictureUrl: String!, $name: String!) {
  createItemWithPictureUrl(pictureUrl: $pictureUrl, name: $name) {
    id
    picture
    name
  }
}
    `;
export type CreateItemWithPictureUrlMutationFn = Apollo.MutationFunction<CreateItemWithPictureUrlMutation, CreateItemWithPictureUrlMutationVariables>;

/**
 * __useCreateItemWithPictureUrlMutation__
 *
 * To run a mutation, you first call `useCreateItemWithPictureUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemWithPictureUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemWithPictureUrlMutation, { data, loading, error }] = useCreateItemWithPictureUrlMutation({
 *   variables: {
 *      pictureUrl: // value for 'pictureUrl'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateItemWithPictureUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemWithPictureUrlMutation, CreateItemWithPictureUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemWithPictureUrlMutation, CreateItemWithPictureUrlMutationVariables>(CreateItemWithPictureUrlDocument, options);
      }
export type CreateItemWithPictureUrlMutationHookResult = ReturnType<typeof useCreateItemWithPictureUrlMutation>;
export type CreateItemWithPictureUrlMutationResult = Apollo.MutationResult<CreateItemWithPictureUrlMutation>;
export type CreateItemWithPictureUrlMutationOptions = Apollo.BaseMutationOptions<CreateItemWithPictureUrlMutation, CreateItemWithPictureUrlMutationVariables>;
export const DeleteItemDocument = gql`
    mutation DeleteItem($itemId: Int!) {
  deleteItem(itemId: $itemId)
}
    `;
export type DeleteItemMutationFn = Apollo.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>;

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useDeleteItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemMutation, DeleteItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument, options);
      }
export type DeleteItemMutationHookResult = ReturnType<typeof useDeleteItemMutation>;
export type DeleteItemMutationResult = Apollo.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = Apollo.BaseMutationOptions<DeleteItemMutation, DeleteItemMutationVariables>;
export const GetUserItemsDocument = gql`
    query GetUserItems($excludeAuctionedOff: Boolean!) {
  getUserItems(excludeAuctionedOff: $excludeAuctionedOff) {
    items {
      id
      picture
      name
    }
    count
  }
}
    `;

/**
 * __useGetUserItemsQuery__
 *
 * To run a query within a React component, call `useGetUserItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserItemsQuery({
 *   variables: {
 *      excludeAuctionedOff: // value for 'excludeAuctionedOff'
 *   },
 * });
 */
export function useGetUserItemsQuery(baseOptions: Apollo.QueryHookOptions<GetUserItemsQuery, GetUserItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserItemsQuery, GetUserItemsQueryVariables>(GetUserItemsDocument, options);
      }
export function useGetUserItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserItemsQuery, GetUserItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserItemsQuery, GetUserItemsQueryVariables>(GetUserItemsDocument, options);
        }
export type GetUserItemsQueryHookResult = ReturnType<typeof useGetUserItemsQuery>;
export type GetUserItemsLazyQueryHookResult = ReturnType<typeof useGetUserItemsLazyQuery>;
export type GetUserItemsQueryResult = Apollo.QueryResult<GetUserItemsQuery, GetUserItemsQueryVariables>;
export const ModifyItemDocument = gql`
    mutation ModifyItem($itemId: Int!, $newName: String, $picture: Upload) {
  modifyItem(itemId: $itemId, newName: $newName, picture: $picture) {
    id
    picture
    name
  }
}
    `;
export type ModifyItemMutationFn = Apollo.MutationFunction<ModifyItemMutation, ModifyItemMutationVariables>;

/**
 * __useModifyItemMutation__
 *
 * To run a mutation, you first call `useModifyItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useModifyItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [modifyItemMutation, { data, loading, error }] = useModifyItemMutation({
 *   variables: {
 *      itemId: // value for 'itemId'
 *      newName: // value for 'newName'
 *      picture: // value for 'picture'
 *   },
 * });
 */
export function useModifyItemMutation(baseOptions?: Apollo.MutationHookOptions<ModifyItemMutation, ModifyItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ModifyItemMutation, ModifyItemMutationVariables>(ModifyItemDocument, options);
      }
export type ModifyItemMutationHookResult = ReturnType<typeof useModifyItemMutation>;
export type ModifyItemMutationResult = Apollo.MutationResult<ModifyItemMutation>;
export type ModifyItemMutationOptions = Apollo.BaseMutationOptions<ModifyItemMutation, ModifyItemMutationVariables>;
export const TestUploadDocument = gql`
    query TestUpload($file: Upload!) {
  testUpload(file: $file)
}
    `;

/**
 * __useTestUploadQuery__
 *
 * To run a query within a React component, call `useTestUploadQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestUploadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestUploadQuery({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useTestUploadQuery(baseOptions: Apollo.QueryHookOptions<TestUploadQuery, TestUploadQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestUploadQuery, TestUploadQueryVariables>(TestUploadDocument, options);
      }
export function useTestUploadLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestUploadQuery, TestUploadQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestUploadQuery, TestUploadQueryVariables>(TestUploadDocument, options);
        }
export type TestUploadQueryHookResult = ReturnType<typeof useTestUploadQuery>;
export type TestUploadLazyQueryHookResult = ReturnType<typeof useTestUploadLazyQuery>;
export type TestUploadQueryResult = Apollo.QueryResult<TestUploadQuery, TestUploadQueryVariables>;
export const DiscordOAuthDocument = gql`
    mutation DiscordOAuth($code: String!) {
  discordOAuth(code: $code) {
    user {
      id
      email
      username
      provider
      avatarUrl
      reputation
    }
  }
}
    `;
export type DiscordOAuthMutationFn = Apollo.MutationFunction<DiscordOAuthMutation, DiscordOAuthMutationVariables>;

/**
 * __useDiscordOAuthMutation__
 *
 * To run a mutation, you first call `useDiscordOAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDiscordOAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [discordOAuthMutation, { data, loading, error }] = useDiscordOAuthMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useDiscordOAuthMutation(baseOptions?: Apollo.MutationHookOptions<DiscordOAuthMutation, DiscordOAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DiscordOAuthMutation, DiscordOAuthMutationVariables>(DiscordOAuthDocument, options);
      }
export type DiscordOAuthMutationHookResult = ReturnType<typeof useDiscordOAuthMutation>;
export type DiscordOAuthMutationResult = Apollo.MutationResult<DiscordOAuthMutation>;
export type DiscordOAuthMutationOptions = Apollo.BaseMutationOptions<DiscordOAuthMutation, DiscordOAuthMutationVariables>;
export const GoogleOAuthDocument = gql`
    mutation GoogleOAuth($code: String!) {
  googleOAuth(code: $code) {
    user {
      id
      email
      username
      provider
      avatarUrl
      reputation
    }
  }
}
    `;
export type GoogleOAuthMutationFn = Apollo.MutationFunction<GoogleOAuthMutation, GoogleOAuthMutationVariables>;

/**
 * __useGoogleOAuthMutation__
 *
 * To run a mutation, you first call `useGoogleOAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleOAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleOAuthMutation, { data, loading, error }] = useGoogleOAuthMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGoogleOAuthMutation(baseOptions?: Apollo.MutationHookOptions<GoogleOAuthMutation, GoogleOAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GoogleOAuthMutation, GoogleOAuthMutationVariables>(GoogleOAuthDocument, options);
      }
export type GoogleOAuthMutationHookResult = ReturnType<typeof useGoogleOAuthMutation>;
export type GoogleOAuthMutationResult = Apollo.MutationResult<GoogleOAuthMutation>;
export type GoogleOAuthMutationOptions = Apollo.BaseMutationOptions<GoogleOAuthMutation, GoogleOAuthMutationVariables>;
export const DeleteAccountDocument = gql`
    mutation DeleteAccount($email: String!) {
  deleteAccount(email: $email)
}
    `;
export type DeleteAccountMutationFn = Apollo.MutationFunction<DeleteAccountMutation, DeleteAccountMutationVariables>;

/**
 * __useDeleteAccountMutation__
 *
 * To run a mutation, you first call `useDeleteAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountMutation, { data, loading, error }] = useDeleteAccountMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useDeleteAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAccountMutation, DeleteAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAccountMutation, DeleteAccountMutationVariables>(DeleteAccountDocument, options);
      }
export type DeleteAccountMutationHookResult = ReturnType<typeof useDeleteAccountMutation>;
export type DeleteAccountMutationResult = Apollo.MutationResult<DeleteAccountMutation>;
export type DeleteAccountMutationOptions = Apollo.BaseMutationOptions<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    username
    provider
    avatarUrl
    reputation
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UpdateCredentialsDocument = gql`
    mutation UpdateCredentials($username: String!) {
  updateCredentials(username: $username) {
    id
    email
    username
    provider
    avatarUrl
    reputation
  }
}
    `;
export type UpdateCredentialsMutationFn = Apollo.MutationFunction<UpdateCredentialsMutation, UpdateCredentialsMutationVariables>;

/**
 * __useUpdateCredentialsMutation__
 *
 * To run a mutation, you first call `useUpdateCredentialsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCredentialsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCredentialsMutation, { data, loading, error }] = useUpdateCredentialsMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUpdateCredentialsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCredentialsMutation, UpdateCredentialsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCredentialsMutation, UpdateCredentialsMutationVariables>(UpdateCredentialsDocument, options);
      }
export type UpdateCredentialsMutationHookResult = ReturnType<typeof useUpdateCredentialsMutation>;
export type UpdateCredentialsMutationResult = Apollo.MutationResult<UpdateCredentialsMutation>;
export type UpdateCredentialsMutationOptions = Apollo.BaseMutationOptions<UpdateCredentialsMutation, UpdateCredentialsMutationVariables>;