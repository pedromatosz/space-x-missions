import React from 'react'
import { Mission } from '../../graphql/__generated__/graphql'
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card'
import { Button, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

export const MissionCard: React.FC<{ mission: Mission }> = ({ mission }) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{mission.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text noOfLines={3}>{mission.description}</Text>
      </CardBody>
      <CardFooter>
        <Link href={`/missions/${mission.id}`}>
          <Button>Know More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
