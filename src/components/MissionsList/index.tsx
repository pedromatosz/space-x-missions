import React from 'react'
import { Mission } from '../../graphql/__generated__/graphql'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { MissionCard } from '../MissionCard'

export const MissionsList: React.FC<{ missions: Mission[] }> = ({ missions }) => {
  return (
    <Box w="100%" p={8} color="white">
      <SimpleGrid spacing={[2, 4]} columns={[1, 2, 2, 4]}>
        {missions.map((mission) => {
          return <MissionCard key={`_${mission.id}`} mission={mission} />
        })}
      </SimpleGrid>
    </Box>
  )
}
