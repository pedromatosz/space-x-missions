import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { GET_MISSIONS_IDS } from '../../graphql/queries/getMissionsIds'
import { client } from '../../graphql/client'
import { GET_MISSION_BY_ID } from '../../graphql/queries/getMissionsByid'
import { Mission } from '../../components/Mission'
import { MissionPageProps } from '../../components/Mission/types'

const MissionPage: NextPage<MissionPageProps> = ({ mission }) => {
  return <Mission mission={mission} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const missionId = params?.id as string
  const { data } = await client.query({
    query: GET_MISSION_BY_ID,
    variables: { id: missionId }
  })

  const TEN_MINUTES_IN_SECONDS = 600

  return {
    props: {
      mission: data.mission
    },
    revalidate: TEN_MINUTES_IN_SECONDS
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_MISSIONS_IDS
  })

  const missionsParams =
    data.missions?.map((mission) => {
      return { params: { id: mission?.id as string } }
    }) || []

  return {
    paths: missionsParams,
    fallback: true
  }
}

export default MissionPage
