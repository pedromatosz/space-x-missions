import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SPACE_X_GRAPHQL_URI,
  cache: new InMemoryCache()
})
