import { gql } from '../__generated__'

export const GET_MISSIONS_IDS = gql(`
  query GetMissionsIds {
     missions {
      id
    }
  }
`)
