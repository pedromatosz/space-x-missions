import React, { ChangeEventHandler, useState } from 'react'
import { Mission } from '../../graphql/__generated__/graphql'
import { MissionsList } from '../MissionsList'
import { Input } from '@chakra-ui/input'
import { Box, Center } from '@chakra-ui/react'

export const Home: React.FC<{ missions: Mission[] }> = ({ missions }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredMissions = missions.filter((mission) => {
    if (!searchQuery) {
      return true
    }
    const lowercaseMissionName = mission.name?.toLowerCase() || ''
    const lowercaseSearchQuery = searchQuery.toLowerCase()

    return lowercaseMissionName.includes(lowercaseSearchQuery)
  })

  const handleSearchInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <Center>
        <Box w={['90%', '80%', '90%', '90%', '52%']} p={[4, 8]}>
          <Input placeholder="Search for an specific mission" onChange={handleSearchInputChange} />
        </Box>
      </Center>
      <MissionsList missions={filteredMissions} />
    </div>
  )
}
