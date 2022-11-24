import { gql } from '../__generated__'

export const GET_MISSIONS_OVERVIEW = gql(`
  query GetMissionsOverview {
    missions {
      id
      name
      description
    }
  }
`)
