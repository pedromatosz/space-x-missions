import React from 'react'
import { MissionDetailsProps } from './types'
import { Card, CardBody, CardHeader } from '@chakra-ui/card'
import { Box, Button, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FaGlobe, FaTwitter, FaWikipediaW } from 'react-icons/fa'

export const MissionDetails: React.FC<MissionDetailsProps> = ({ mission }) => {
  return (
    <Box>
      <Card>
        <CardHeader>
          <Heading size="md">{mission.name}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Manufacturers
              </Heading>
              {mission.manufacturers?.map((manufacturer) => {
                return (
                  <Text key={`_${manufacturer}`} pt="2" fontSize="sm">
                    {manufacturer}
                  </Text>
                )
              })}
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Mission Description
              </Heading>
              <Text pt="2" fontSize="sm">
                {mission.description}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Social
              </Heading>
              <Stack direction={['column', 'column', 'column', 'row']} padding={4}>
                <Link target="_blank" href={mission.wikipedia || '#'}>
                  <Button colorScheme="gray" leftIcon={<FaWikipediaW />}>
                    Wikipedia
                  </Button>
                </Link>
                <Link target="_blank" href={mission.twitter || '#'}>
                  <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                    Twitter
                  </Button>
                </Link>
                <Link target="_blank" href={mission.website || '#'}>
                  <Button colorScheme="blue" leftIcon={<FaGlobe />}>
                    Website
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  )
}
