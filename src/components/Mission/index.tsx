import React from 'react'
import { MissionProps } from './types'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { MissionDetails } from '../MissionDetails'
import { Payloads } from '../Payloads'

export const Mission: React.FC<MissionProps> = ({ mission }) => {
  return (
    <Box w="100%" p={[2, 2, 4, 8]}>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        <MissionDetails mission={mission} />
        <Payloads payloads={mission?.payloads || []} />
      </SimpleGrid>
    </Box>
  )
}
