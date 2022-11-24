import { gql } from '../__generated__'

export const GET_MISSION_BY_ID = gql(`
  query GetMissionById($id: ID!) {
    mission(id: $id) {
      id
      description
      manufacturers
      name
      payloads {
        customers
        nationality
        orbit
        payload_mass_kg
        payload_mass_lbs
        payload_type
        id
      }
      twitter
      website
      wikipedia
    }
  }
`)
