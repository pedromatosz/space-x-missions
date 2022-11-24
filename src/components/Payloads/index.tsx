import React from 'react'
import { PayloadsProps } from './types'
import { Box, Heading, Stack, StackDivider, Stat, StatGroup, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import { Card, CardBody, CardHeader } from '@chakra-ui/card'

export const Payloads: React.FC<PayloadsProps> = ({ payloads }) => {
  return (
    <Box>
      {(payloads || []).map((payload) => {
        if (!payload) {
          return
        }

        return (
          <Card key={`_${payload?.id}`} marginBottom={4}>
            <CardHeader>
              <Heading size="md">{payload?.id}</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Customers
                  </Heading>
                  {payload?.customers?.map((customer) => (
                    <Text pt="2" fontSize="sm" key={`_${customer}`}>
                      {customer}
                    </Text>
                  ))}
                </Box>
                {(payload?.payload_mass_lbs || payload?.payload_mass_kg) && (
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Payload Physical Overview
                    </Heading>

                    <StatGroup
                      flexDirection={['column', 'column', 'column', 'row']}
                      padding={[0, 0, 0, 4]}
                      marginTop={[4, 4, 4, 0]}
                    >
                      {payload?.payload_mass_kg && (
                        <Stat>
                          <StatLabel>Payload Mass in KG</StatLabel>
                          <StatNumber>{payload?.payload_mass_kg} kg</StatNumber>
                        </Stat>
                      )}
                      {payload?.payload_mass_lbs && (
                        <Stat>
                          <StatLabel>Payload Mass in LBS</StatLabel>
                          <StatNumber>{payload?.payload_mass_lbs} lbs</StatNumber>
                        </Stat>
                      )}
                    </StatGroup>
                  </Box>
                )}
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Payload Infos
                  </Heading>
                  <Stack
                    direction={['column', 'column', 'column', 'row']}
                    spacing={[8, 8, 8, 24]}
                    padding={[0, 0, 0, 4]}
                    marginTop={[4, 4, 4, 0]}
                  >
                    <Box>
                      <Heading size="sm"> Nationality </Heading>
                      <Text pt="2" fontSize="sm">
                        {payload?.nationality}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="sm"> Orbit </Heading>
                      <Text pt="2" fontSize="sm">
                        {payload?.orbit}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="sm"> Payload Type </Heading>
                      <Text pt="2" fontSize="sm">
                        {payload?.payload_type}
                      </Text>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        )
      })}
    </Box>
  )
}
